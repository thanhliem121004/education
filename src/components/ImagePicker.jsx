import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Icon from "./Icon.jsx";
import { searchFreeImages } from "../lib/imageSearch.js";

/* Kho ảnh Internet: tìm ảnh tự do bản quyền trên Wikimedia Commons
   và gắn thẳng vào ô ảnh của bài dạy. */
export default function ImagePicker({ initialQuery = "", onPick, onClose }) {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);

  const search = async (q) => {
    const term = (q ?? query).trim();
    if (!term) return;
    setLoading(true);
    setError(null);
    try {
      const list = await searchFreeImages(term);
      setResults(list);
      setSearched(true);
    } catch (err) {
      setError(err.message || "Không tìm được ảnh — kiểm tra kết nối mạng nhé.");
    } finally {
      setLoading(false);
    }
  };

  /* Tự tìm luôn theo tên bài khi mở */
  useEffect(() => { search(initialQuery); }, []);

  /* Render qua Portal ra <body> — tránh position:fixed bị kẹt trong
     phần tử cha đang có transform (hiệu ứng chuyển màn) */
  return createPortal(
    <div className="picker-overlay" onClick={onClose}>
      <motion.div
        className="picker-panel"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 34, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
      >
        <div className="picker-head">
          <h3><Icon name="search" size={19} /> Kho ảnh Internet (miễn phí bản quyền)</h3>
          <button className="picker-close" onClick={onClose} aria-label="Đóng">
            <Icon name="close" size={16} />
          </button>
        </div>
        <p className="picker-note">
          Ảnh từ <b>Wikimedia Commons</b> — kho ảnh tự do, được phép dùng trong dạy học.
          Gõ từ khoá tiếng Việt hoặc tiếng Anh (tiếng Anh thường ra nhiều ảnh hơn).
        </p>

        <form
          className="picker-search"
          onSubmit={(e) => { e.preventDefault(); search(); }}
        >
          <input
            type="text"
            value={query}
            placeholder="VD: cây phượng / flamboyant tree, cánh đồng lúa / rice field..."
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button type="submit" className="btn solid small" disabled={loading}>
            {loading ? "Đang tìm..." : "Tìm ảnh"}
          </button>
        </form>

        {error && <p className="picker-error"><Icon name="warn" size={15} /> {error}</p>}

        <div className="picker-grid">
          {results.map((img) => (
            <button
              key={img.id}
              type="button"
              className="picker-item"
              title={img.title}
              onClick={() => onPick(img)}
            >
              <img src={img.thumb} alt={img.title} loading="lazy" />
              <span className="credit">{[img.license, img.author].filter(Boolean).join(" · ") || "Wikimedia Commons"}</span>
            </button>
          ))}
        </div>

        {searched && !loading && results.length === 0 && !error && (
          <p className="picker-empty">Không thấy ảnh phù hợp — thử từ khoá tiếng Anh ngắn hơn nhé (VD: "buffalo rice field vietnam").</p>
        )}
      </motion.div>
    </div>,
    document.body
  );
}
