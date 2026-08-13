import { useState } from "react";
import { motion } from "framer-motion";
import { useApp } from "../App.jsx";
import { SERIES_NAMES } from "../lib/core.js";

const GRADES = [
  { g: 1, tone: "tone1", desc: "Nhìn tranh – nói câu theo mẫu – tập viết 1–2 câu." },
  { g: 2, tone: "tone2", desc: "Trả lời câu hỏi tìm ý – viết đoạn văn 4–5 câu." },
  { g: 3, tone: "tone3", desc: "Tìm ý theo câu hỏi – viết đoạn văn 7–9 câu." },
  { g: 4, tone: "tone4", desc: "Sơ đồ tư duy – khung mở bài, kết bài – viết đoạn, bài văn." },
  { g: 5, tone: "tone5", desc: "Sơ đồ tư duy mở rộng – tả người, tả cảnh, nêu ý kiến." }
];

const HOW = [
  ["1 · Quan sát", "Chiếu hình ảnh, video; đặt câu hỏi gợi mở để cả lớp cùng nói lên điều mình thấy."],
  ["2 · Gom từ ngữ", "Bấm chọn từ hay để tạo “giỏ từ” của lớp; khuyến khích các em nêu từ của riêng mình."],
  ["3 · Tìm ý", "Nói câu theo mẫu (lớp 1), trả lời câu hỏi (lớp 2–3) hay sơ đồ tư duy (lớp 4–5)."],
  ["4 · Tự viết", "Mỗi em tự viết câu, đoạn văn theo cách của riêng mình — không chép văn mẫu."]
];

const stagger = { animate: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } };
const pop = {
  initial: { opacity: 0, y: 24, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 22 } }
};

export default function Home() {
  const { go, series, setSeries, showToast } = useApp();
  const [heroOk, setHeroOk] = useState(true);

  return (
    <div className="wrap">
      <div className={"hero" + (heroOk ? " two" : "")}>
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -26 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1>Không học thuộc văn mẫu, em <span className="hl">tự ươm ý tưởng</span> của riêng mình</h1>
          <p>Quan sát – gom từ ngữ – tìm ý – rồi để mỗi bạn nhỏ viết bằng chính suy nghĩ và cách diễn đạt của mình. Dành cho giáo viên lớp 1 đến lớp 5.</p>
        </motion.div>
        {heroOk && (
          <motion.figure
            className="hero-art"
            initial={{ opacity: 0, rotate: 4, scale: 0.94 }}
            animate={{ opacity: 1, rotate: 1.2, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <img
              src="/images/hero.jpg"
              alt="Học sinh tiểu học say sưa viết bài"
              onError={() => setHeroOk(false)}
            />
          </motion.figure>
        )}
      </div>

      <div className="series-pick no-print" role="group" aria-label="Chọn bộ sách">
        <span className="sp-label">Bộ sách lớp mình:</span>
        {["kntt", "ctst", "cd", "all"].map((s) => (
          <button
            key={s}
            className={"series-btn" + (series === s ? " now" : "")}
            onClick={() => {
              setSeries(s);
              showToast(s === "all" ? "Hiện chủ đề của cả 3 bộ sách." : `Ưu tiên bộ ${SERIES_NAMES[s]}.`);
            }}
          >
            {s === "all" ? "Cả 3 bộ" : SERIES_NAMES[s]}
          </button>
        ))}
      </div>

      <motion.div className="grade-pick five" variants={stagger} initial="initial" animate="animate">
        {GRADES.map(({ g, tone, desc }) => (
          <motion.button
            key={g}
            className={`grade-card ${tone}`}
            variants={pop}
            whileHover={{ y: -7, rotate: -0.5 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => go("topics", { grade: g })}
          >
            <span className="gc-art">
              <img src={`/images/grades/lop-${g}.jpg`} alt=""
                onError={(e) => { e.currentTarget.closest(".gc-art").style.display = "none"; }} />
            </span>
            <span className="big">Lớp {g}</span>
            <p className="desc">{desc}</p>
            <span className="go">Vào lớp {g} →</span>
          </motion.button>
        ))}
      </motion.div>

      <motion.div className="how" variants={stagger} initial="initial" animate="animate">
        {HOW.map(([title, body]) => (
          <motion.div key={title} className="step-card" variants={pop}>
            <b>{title}</b>{body}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
