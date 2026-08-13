import { useState, useRef } from "react";
import { useApp } from "../App.jsx";
import { bandOf, topicSeries, splitLines, parsePipe } from "../lib/core.js";

/* Trình soạn giáo án: base = chủ đề gốc (mẫu → nhân bản, của tôi → sửa) */
export default function Editor({ base, presetGrade }) {
  const { go, mine, saveMine, showToast } = useApp();
  const editingId = base && base.custom ? base.id : null;
  const fileRef = useRef(null);

  const [grade, setGrade] = useState(base ? base.grade : (presetGrade || 4));
  const [emoji, setEmoji] = useState(base?.emoji || "");
  const [title, setTitle] = useState(base ? (editingId ? base.title : base.title + " (bản của tôi)") : "");
  const [genre, setGenre] = useState(base?.genre || "");
  const [intro, setIntro] = useState(base?.intro || "");
  const [series, setSeries] = useState(base ? topicSeries(base) : ["kntt", "ctst", "cd"]);
  const [images, setImages] = useState(base ? (base.images || []).map((x) => ({ url: x.url, cap: x.cap || "" })) : []);
  const [questions, setQuestions] = useState((base?.questions || []).join("\n"));
  const [groups, setGroups] = useState(
    (base?.wordGroups?.length ? base.wordGroups : [{ name: "", icon: "", words: [] }])
      .map((g) => ({ icon: g.icon || "", name: g.name || "", words: (g.words || []).join("\n") }))
  );
  const [frames, setFrames] = useState((base?.frames || []).join("\n"));
  const [outline, setOutline] = useState((base?.outline || []).map((o) => o.hint ? `${o.q} | ${o.hint}` : o.q).join("\n"));
  const [branches, setBranches] = useState((base?.branches || []).map((b) => b.hint ? `${b.title} | ${b.hint}` : b.title).join("\n"));
  const [openers, setOpeners] = useState((base?.openers || []).join("\n"));
  const [closers, setClosers] = useState((base?.closers || []).join("\n"));
  const [muctieu, setMuctieu] = useState(base?.plan?.muctieu || "");
  const [chuanbi, setChuanbi] = useState(base?.plan?.chuanbi || "");
  const [tientrinh, setTientrinh] = useState(base?.plan?.tientrinh || "");
  const [imgUrl, setImgUrl] = useState("");

  const band = bandOf(Number(grade));

  const toggleSeries = (s) =>
    setSeries((cur) => cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]);

  const importImageFile = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const MAX = 900;
        const scale = Math.min(1, MAX / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
        setImages((cur) => [...cur, { url: canvas.toDataURL("image/jpeg", 0.78), cap: "" }]);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  };

  const save = (e) => {
    e.preventDefault();
    if (!title.trim()) { showToast("Bạn chưa đặt tên bài dạy!"); return; }

    const topic = {
      id: editingId || ("my-" + Date.now()),
      custom: true,
      grade: Number(grade),
      emoji: emoji.trim() || "📖",
      title: title.trim(),
      genre: genre.trim() || "Tập làm văn",
      intro: intro.trim(),
      series: series.length ? series : ["kntt", "ctst", "cd"],
      images: images.filter((x) => x.url),
      questions: splitLines(questions),
      wordGroups: groups
        .map((g) => ({ icon: g.icon.trim(), name: g.name.trim(), words: splitLines(g.words) }))
        .filter((g) => g.name && g.words.length),
      frames: band === "A" ? splitLines(frames) : [],
      outline: band === "B" ? parsePipe(outline, "q", "hint") : [],
      branches: band === "C" ? parsePipe(branches, "title", "hint") : [],
      openers: band === "A" ? [] : splitLines(openers),
      closers: band === "A" ? [] : splitLines(closers),
      plan: { muctieu: muctieu.trim(), chuanbi: chuanbi.trim(), tientrinh: tientrinh.trim() }
    };

    const list = [...mine];
    const i = list.findIndex((t) => t.id === topic.id);
    if (i >= 0) list[i] = topic; else list.push(topic);
    try {
      saveMine(list);
    } catch {
      showToast("Không lưu được — có thể ảnh tải lên quá nặng. Hãy bớt ảnh từ máy, dùng địa chỉ ảnh trên mạng.");
      return;
    }
    showToast("Đã lưu giáo án!");
    go("mytopics");
  };

  return (
    <div className="wrap">
      <div className="topics-head">
        <div>
          <h2>{editingId ? "Sửa giáo án" : base ? "Soạn lại từ chủ đề mẫu" : "Soạn giáo án mới"}</h2>
          <p>Điền đến đâu dùng được đến đấy — chỉ bắt buộc tên bài và khối lớp. Mỗi ô nhập nhiều mục thì <b>mỗi dòng một mục</b>.</p>
        </div>
      </div>

      <form className="sheet editor" onSubmit={save}>
        <div className="ef-grid">
          <label className="ef-field w-s">Khối lớp *
            <select value={grade} onChange={(e) => setGrade(e.target.value)}>
              {[1, 2, 3, 4, 5].map((g) => <option key={g} value={g}>Lớp {g}</option>)}
            </select>
          </label>
          <label className="ef-field w-s">Biểu tượng dự phòng
            <input type="text" value={emoji} maxLength={4} placeholder="🐱" onChange={(e) => setEmoji(e.target.value)} />
          </label>
          <label className="ef-field w-l">Tên bài dạy *
            <input type="text" value={title} required placeholder="VD: Tả con đường từ nhà đến trường" onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label className="ef-field w-m">Thể loại
            <input type="text" value={genre} placeholder="VD: Miêu tả phong cảnh" onChange={(e) => setGenre(e.target.value)} />
          </label>
          <div className="ef-field w-m">Dùng cho bộ sách
            <span className="ef-checks">
              <label><input type="checkbox" checked={series.includes("kntt")} onChange={() => toggleSeries("kntt")} /> Kết nối</label>
              <label><input type="checkbox" checked={series.includes("ctst")} onChange={() => toggleSeries("ctst")} /> Chân trời</label>
              <label><input type="checkbox" checked={series.includes("cd")} onChange={() => toggleSeries("cd")} /> Cánh diều</label>
            </span>
          </div>
          <label className="ef-field w-l">Giới thiệu ngắn (hiện trên thẻ chủ đề)
            <input type="text" value={intro} placeholder="Một câu gợi hứng thú cho bài dạy..." onChange={(e) => setIntro(e.target.value)} />
          </label>

          <div className="ef-field w-l">
            <span className="ef-label">Ảnh quan sát (ảnh đầu tiên dùng làm ảnh bìa)</span>
            <div className="ef-images">
              {images.map((img, i) => (
                <div className="thumb" key={i}>
                  <img src={img.url} alt="" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                  <input type="text" value={img.cap} placeholder="Chú thích ảnh..."
                    onChange={(e) => setImages(images.map((x, j) => j === i ? { ...x, cap: e.target.value } : x))} />
                  <button type="button" className="del" title="Bỏ ảnh"
                    onClick={() => setImages(images.filter((_, j) => j !== i))}>×</button>
                </div>
              ))}
            </div>
            <div className="ef-img-add">
              <input type="url" value={imgUrl} placeholder="Dán địa chỉ ảnh trên mạng..." onChange={(e) => setImgUrl(e.target.value)} />
              <button type="button" className="btn small" onClick={() => {
                if (!imgUrl.trim()) return;
                setImages([...images, { url: imgUrl.trim(), cap: "" }]);
                setImgUrl("");
              }}>Thêm ảnh</button>
              <span className="or">hoặc</span>
              <button type="button" className="btn small green" onClick={() => fileRef.current?.click()}>Chọn ảnh từ máy</button>
              <input type="file" ref={fileRef} accept="image/*" hidden
                onChange={(e) => { const f = e.target.files[0]; if (f) importImageFile(f); e.target.value = ""; }} />
            </div>
          </div>

          <label className="ef-field w-l">Câu hỏi gợi mở khi quan sát <small>(mỗi dòng một câu)</small>
            <textarea rows={4} value={questions} placeholder={"Bức tranh vẽ cảnh gì?\nEm thấy những màu sắc nào?"} onChange={(e) => setQuestions(e.target.value)} />
          </label>

          <div className="ef-field w-l">
            <span className="ef-label">Nhóm từ ngữ gợi ý</span>
            {groups.map((g, i) => (
              <div className="ef-wordgroup" key={i}>
                <input type="text" className="g-icon" value={g.icon} placeholder="Emoji"
                  onChange={(e) => setGroups(groups.map((x, j) => j === i ? { ...x, icon: e.target.value } : x))} />
                <input type="text" className="g-name" value={g.name} placeholder="Tên nhóm từ (VD: Màu sắc)"
                  onChange={(e) => setGroups(groups.map((x, j) => j === i ? { ...x, name: e.target.value } : x))} />
                <button type="button" className="g-del" onClick={() => setGroups(groups.filter((_, j) => j !== i))}>Bỏ nhóm</button>
                <textarea rows={3} className="g-words" value={g.words} placeholder="Mỗi dòng một từ / cụm từ"
                  onChange={(e) => setGroups(groups.map((x, j) => j === i ? { ...x, words: e.target.value } : x))} />
              </div>
            ))}
            <button type="button" className="btn small" onClick={() => setGroups([...groups, { icon: "", name: "", words: "" }])}>＋ Thêm nhóm từ</button>
          </div>

          {band === "A" && (
            <label className="ef-field w-l">Mẫu câu cho học sinh nói – viết theo <small>(mỗi dòng một mẫu, dùng ___ làm chỗ trống)</small>
              <textarea rows={4} value={frames} placeholder={"Đây là con ___.\nEm rất thích ___."} onChange={(e) => setFrames(e.target.value)} />
            </label>
          )}
          {band === "B" && (
            <label className="ef-field w-l">Câu hỏi tìm ý <small>(mỗi dòng một câu, thêm gợi ý sau dấu | )</small>
              <textarea rows={5} value={outline} placeholder={"Đồ vật em tả là gì? | Ai mua, tặng cho em?\nNó có hình dáng thế nào? | To nhỏ, màu sắc..."} onChange={(e) => setOutline(e.target.value)} />
            </label>
          )}
          {band === "C" && (
            <label className="ef-field w-l">Nhánh sơ đồ tư duy <small>(mỗi dòng một nhánh, thêm gợi ý sau dấu | )</small>
              <textarea rows={5} value={branches} placeholder={"Cảnh đẹp ấy ở đâu? | Em thấy vào lúc nào?\nBao quát từ xa | Màu sắc, đường nét nổi bật"} onChange={(e) => setBranches(e.target.value)} />
            </label>
          )}
          {band !== "A" && (
            <>
              <label className="ef-field w-m">Khung câu mở đầu <small>(mỗi dòng một khung, dùng ___)</small>
                <textarea rows={3} value={openers} placeholder="Quê em có một ___ rất đẹp." onChange={(e) => setOpeners(e.target.value)} />
              </label>
              <label className="ef-field w-m">Khung câu kết thúc <small>(mỗi dòng một khung)</small>
                <textarea rows={3} value={closers} placeholder="Em mong ___ mãi ___." onChange={(e) => setClosers(e.target.value)} />
              </label>
            </>
          )}

          <div className="ef-field w-l ef-plan">
            <span className="ef-label">Ghi chú giáo án (tuỳ chọn — hiện cho thầy cô và khi in)</span>
            <label>Yêu cầu cần đạt
              <textarea rows={2} value={muctieu} placeholder="Học sinh nêu được..., viết được đoạn văn..." onChange={(e) => setMuctieu(e.target.value)} />
            </label>
            <label>Chuẩn bị
              <textarea rows={2} value={chuanbi} placeholder="Máy chiếu, phiếu học tập, tranh ảnh..." onChange={(e) => setChuanbi(e.target.value)} />
            </label>
            <label>Tiến trình / lưu ý
              <textarea rows={3} value={tientrinh} placeholder="Khởi động 5 phút: trò chơi...; Bài dạy theo tuần ... bộ sách ..." onChange={(e) => setTientrinh(e.target.value)} />
            </label>
          </div>
        </div>

        <div className="ef-actions no-print">
          <button type="submit" className="btn solid">Lưu giáo án</button>
          <button type="button" className="btn" onClick={() => go("mytopics")}>Huỷ</button>
        </div>
      </form>
    </div>
  );
}
