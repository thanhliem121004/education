import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TOPICS from "../data/index.js";
import { useApp } from "../App.jsx";
import SmartImg from "../components/SmartImg.jsx";
import { topicImageSources, coverSources } from "../lib/core.js";
import { 
  getSupabaseConfig, 
  saveSupabaseConfig, 
  testSupabaseConnection 
} from "../lib/supabase.js";
import { 
  getCustomTopicImages, 
  uploadTopicImage, 
  removeCustomTopicSlotImage, 
  clearAllCustomTopicImagesForTopic,
  saveCustomTopicSlotImage
} from "../lib/mediaStorage.js";

export default function MediaAdmin() {
  const { showToast, mine } = useApp();
  const [activeTab, setActiveTab] = useState("topics"); // "topics" | "supabase"
  const [selectedGrade, setSelectedGrade] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  /* Supabase Config State */
  const [cfg, setCfg] = useState(getSupabaseConfig());
  const [testing, setTesting] = useState(false);
  const [connStatus, setConnStatus] = useState(null);

  /* Listener để tự động cập nhật lại UI khi có thay đổi ảnh */
  const [, setTick] = useState(0);
  useEffect(() => {
    const handleUpdate = () => setTick(t => t + 1);
    window.addEventListener("custom-images-updated", handleUpdate);
    return () => window.removeEventListener("custom-images-updated", handleUpdate);
  }, []);

  const allTopics = [...TOPICS, ...mine];
  const filteredTopics = allTopics.filter(t => {
    const matchGrade = selectedGrade === "all" || t.grade === Number(selectedGrade);
    const matchSearch = !searchQuery || t.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchGrade && matchSearch;
  });

  const handleTestConnection = async (e) => {
    e.preventDefault();
    setTesting(true);
    setConnStatus(null);
    saveSupabaseConfig(cfg);

    const res = await testSupabaseConnection(cfg.url, cfg.key, cfg.bucket);
    setTesting(false);
    setConnStatus(res);
    if (res.ok) {
      showToast(res.message || "Đã lưu và kết nối Supabase thành công!");
    } else {
      showToast("Không thể kết nối: " + res.error);
    }
  };

  const handleFileUpload = async (topicId, slotIndex, e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      showToast("Vui lòng chọn tệp hình ảnh (JPG, PNG, WEBP, GIF).");
      return;
    }

    showToast("Đang tải ảnh lên...");
    try {
      const res = await uploadTopicImage(topicId, slotIndex, file);
      if (res.ok) {
        showToast(res.source === "supabase" 
          ? `Đã tải ảnh slot ${slotIndex} lên Supabase Storage!` 
          : `Đã lưu ảnh slot ${slotIndex} vào bộ nhớ máy cục bộ.`
        );
      }
    } catch (err) {
      showToast("Lỗi khi tải ảnh: " + (err.message || err));
    }
  };

  const handleUrlInput = (topicId, slotIndex) => {
    const url = prompt(`Nhập liên kết (URL) ảnh cho slot ${slotIndex}:`);
    if (!url || !url.trim()) return;
    saveCustomTopicSlotImage(topicId, slotIndex, url.trim());
    showToast(`Đã cập nhật ảnh slot ${slotIndex} từ URL.`);
  };

  const handleResetSlot = (topicId, slotIndex) => {
    if (!confirm(`Khôi phục ảnh mặc định cho ô ${slotIndex}?`)) return;
    removeCustomTopicSlotImage(topicId, slotIndex);
    showToast(`Đã khôi phục ảnh mặc định cho slot ${slotIndex}.`);
  };

  return (
    <div className="wrap" id="screen-media-admin">
      <div className="admin-head">
        <div>
          <h2>Quản lý Hình ảnh & Cấu hình Supabase</h2>
          <p>
            Thầy cô có thể chủ động tải ảnh mới cho các bài dạy, hoặc kết nối tới Supabase Storage của trường.
          </p>
        </div>

        <div className="admin-tabs no-print">
          <button 
            className={"tab-btn" + (activeTab === "topics" ? " active" : "")} 
            onClick={() => setActiveTab("topics")}
          >
            🖼 Quản lý ảnh bài dạy
          </button>
          <button 
            className={"tab-btn" + (activeTab === "supabase" ? " active" : "")} 
            onClick={() => setActiveTab("supabase")}
          >
            ⚡ Cấu hình Supabase
          </button>
        </div>
      </div>

      {/* ---------- TAB 1: QUẢN LÝ ẢNH BÀI DẠY ---------- */}
      {activeTab === "topics" && (
        <div className="media-section">
          <div className="media-filter-bar">
            <div className="grade-pills">
              <span className="lbl">Khối lớp:</span>
              <button 
                className={"pill" + (selectedGrade === "all" ? " active" : "")} 
                onClick={() => setSelectedGrade("all")}
              >
                Tất cả lớp
              </button>
              {[1, 2, 3, 4, 5].map(g => (
                <button 
                  key={g} 
                  className={"pill" + (selectedGrade === String(g) ? " active" : "")} 
                  onClick={() => setSelectedGrade(String(g))}
                >
                  Lớp {g}
                </button>
              ))}
            </div>

            <div className="search-box">
              <input 
                type="text" 
                placeholder="Tìm bài học theo tên..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="admin-topic-list">
            {filteredTopics.map(topic => {
              const customImages = getCustomTopicImages(topic.id);
              const totalSlots = Math.max(3, (topic.images || []).length);
              const slots = Array.from({ length: totalSlots }, (_, idx) => idx + 1);

              return (
                <div key={topic.id} className="admin-topic-card">
                  <div className="atc-header">
                    <div className="atc-title">
                      <h3>{topic.title}</h3>
                      <span className="badge">Lớp {topic.grade}</span>
                      {topic.custom && <span className="mine-tag">Giáo án của tôi</span>}
                    </div>
                    {Object.keys(customImages).length > 0 && (
                      <button 
                        className="btn small danger-link"
                        onClick={() => {
                          if (confirm(`Khôi phục tất cả ảnh mặc định cho "${topic.title}"?`)) {
                            clearAllCustomTopicImagesForTopic(topic.id);
                            showToast("Đã khôi phục toàn bộ ảnh mặc định cho bài dạy.");
                          }
                        }}
                      >
                        Khôi phục tất cả ảnh mặc định
                      </button>
                    )}
                  </div>

                  <div className="slots-grid">
                    {slots.map(slotIdx => {
                      const srcs = topicImageSources(topic, slotIdx);
                      const isCustom = Boolean(customImages[slotIdx]);

                      return (
                        <div key={slotIdx} className={"slot-card" + (isCustom ? " custom-active" : "")}>
                          <div className="slot-head">
                            <span className="slot-name">
                              {slotIdx === 1 ? "Ảnh 1 (Bìa)" : `Ảnh minh hoạ ${slotIdx}`}
                            </span>
                            {isCustom ? (
                              <span className="tag-custom">Đã tải lên</span>
                            ) : (
                              <span className="tag-default">Mặc định</span>
                            )}
                          </div>

                          <div className="slot-preview">
                            <SmartImg 
                              srcs={srcs} 
                              alt={`${topic.title} slot ${slotIdx}`} 
                              fallback={topic.emoji || "🖼"} 
                            />
                          </div>

                          <div className="slot-actions">
                            <label className="btn-upload" title="Chọn ảnh từ máy tính">
                              📁 Tải tệp lên
                              <input 
                                type="file" 
                                accept="image/*" 
                                onChange={e => handleFileUpload(topic.id, slotIdx, e)} 
                                style={{ display: "none" }}
                              />
                            </label>
                            <button 
                              className="btn-url" 
                              title="Nhập link ảnh online"
                              onClick={() => handleUrlInput(topic.id, slotIdx)}
                            >
                              🔗 Link URL
                            </button>
                            {isCustom && (
                              <button 
                                className="btn-reset" 
                                title="Xoá ảnh tùy chỉnh"
                                onClick={() => handleResetSlot(topic.id, slotIdx)}
                              >
                                ✕
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ---------- TAB 2: CẤU HÌNH SUPABASE ---------- */}
      {activeTab === "supabase" && (
        <div className="supabase-config-section">
          <form className="config-card" onSubmit={handleTestConnection}>
            <h3>⚡ Kết nối cơ sở dữ liệu & Storage Supabase</h3>
            <p className="desc">
              Tích hợp Supabase giúp lưu trữ hình ảnh tải lên đám mây, chia sẻ ảnh đồng bộ giữa các máy tính trong trường học. Nếu không cấu hình, ứng dụng vẫn tự động lưu ảnh vào bộ nhớ máy cục bộ (LocalStorage).
            </p>

            <div className="form-group">
              <label>Supabase Project URL</label>
              <input 
                type="url" 
                placeholder="https://xxxx.supabase.co" 
                value={cfg.url}
                onChange={e => setCfg({ ...cfg, url: e.target.value })}
              />
              <small>Lấy tại: Supabase Dashboard → Project Settings → API → Project URL</small>
            </div>

            <div className="form-group">
              <label>Supabase Anon / Public Key</label>
              <input 
                type="password" 
                placeholder="eyJh..." 
                value={cfg.key}
                onChange={e => setCfg({ ...cfg, key: e.target.value })}
              />
              <small>Lấy tại: Supabase Dashboard → Project Settings → API → anon public key</small>
            </div>

            <div className="form-group">
              <label>Storage Bucket Name</label>
              <input 
                type="text" 
                placeholder="vuon-y-tuong" 
                value={cfg.bucket}
                onChange={e => setCfg({ ...cfg, bucket: e.target.value })}
              />
              <small>Tên Public Storage Bucket để chứa ảnh (mặc định: <code>vuon-y-tuong</code>)</small>
            </div>

            <div className="form-actions">
              <button className="btn solid" type="submit" disabled={testing}>
                {testing ? "Đang kiểm tra kết nối..." : "Lưu & Kiểm tra kết nối"}
              </button>
            </div>

            {connStatus && (
              <div className={"status-box " + (connStatus.ok ? "success" : "error")}>
                {connStatus.ok ? (
                  <>
                    <p><b>✅ {connStatus.message || "Kết nối Supabase thành công!"}</b></p>
                    {connStatus.warning && <p className="warn">⚠️ {connStatus.warning}</p>}
                  </>
                ) : (
                  <p><b>❌ Kết nối thất bại:</b> {connStatus.error}</p>
                )}
              </div>
            )}
          </form>

          <div className="guide-card">
            <h4>💡 Hướng dẫn 3 bước tạo Bucket Supabase miễn phí:</h4>
            <ol>
              <li>Đăng nhập <a href="https://supabase.com" target="_blank" rel="noreferrer">supabase.com</a> và tạo một Dự án (Project) mới.</li>
              <li>Vào mục <b>Storage</b> → Bấm <b>Create a new bucket</b> → Đặt tên là <code>vuon-y-tuong</code> → Bật tùy chọn <b>Public Bucket</b> (bắt buộc để hiển thị ảnh trên web).</li>
              <li>Sao chép <b>Project URL</b> và <b>Anon Key</b> dán vào biểu mẫu bên trái rồi bấm <b>Lưu & Kiểm tra kết nối</b>.</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
