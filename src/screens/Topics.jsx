import { motion } from "framer-motion";
import TOPICS from "../data/index.js";
import { useApp } from "../App.jsx";
import { SERIES_NAMES, topicSeries, coverSources } from "../lib/core.js";
import SmartImg from "../components/SmartImg.jsx";

const stagger = { animate: { transition: { staggerChildren: 0.06 } } };
const pop = {
  initial: { opacity: 0, y: 26, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 240, damping: 22 } }
};

export function TopicCard({ topic, onOpen, onEdit, onDelete }) {
  return (
    <motion.div
      className="topic-card"
      role="button"
      tabIndex={0}
      variants={pop}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" && e.target === e.currentTarget) { e.preventDefault(); onOpen(); }
      }}
    >
      <span className="tc-cover">
        <SmartImg srcs={coverSources(topic)} alt={topic.title} fallback={topic.emoji || "📖"} />
      </span>
      <span className="tc-body">
        <h3>
          {topic.title}
          {topic.custom && <span className="mine-tag">GA của tôi</span>}
        </h3>
        <p className="intro">{topic.intro || ""}</p>
        <span className="genre">{topic.genre || "Tập làm văn"}</span>
        <span className="books">{topicSeries(topic).map((s) => SERIES_NAMES[s].split(" ")[0]).join(" · ")}</span>
      </span>
      {topic.custom && (
        <span className="card-tools">
          <button onClick={(e) => { e.stopPropagation(); onEdit(); }}>Sửa</button>
          <button onClick={(e) => { e.stopPropagation(); onDelete(); }}>Xoá</button>
        </span>
      )}
    </motion.div>
  );
}

export default function Topics({ grade }) {
  const { go, series, mine, saveMine, showToast } = useApp();

  const match = (t) => t.grade === grade && (series === "all" || topicSeries(t).includes(series));
  const list = [...TOPICS.filter(match), ...mine.filter(match)];

  return (
    <div className="wrap">
      <div className="topics-head">
        <div>
          <h2>Chủ đề Tập làm văn · Lớp {grade}</h2>
          <p>
            {series === "all"
              ? "Chọn một chủ đề để bắt đầu hoạt động cùng cả lớp."
              : `Đang xem theo bộ sách ${SERIES_NAMES[series]} — chọn một chủ đề để bắt đầu.`}
          </p>
        </div>
        <button className="btn solid no-print" onClick={() => go("editor", { presetGrade: grade })}>
          ＋ Soạn giáo án cho lớp này
        </button>
      </div>

      {list.length === 0 && (
        <div className="my-empty">Chưa có chủ đề nào cho lựa chọn này — bấm “Soạn giáo án cho lớp này” để tạo nhé!</div>
      )}

      <motion.div className="topic-grid" variants={stagger} initial="initial" animate="animate">
        {list.map((t) => (
          <TopicCard
            key={t.id}
            topic={t}
            onOpen={() => go("activity", { topic: t })}
            onEdit={() => go("editor", { base: t })}
            onDelete={() => {
              if (!confirm(`Xoá giáo án "${t.title}"?`)) return;
              saveMine(mine.filter((x) => x.id !== t.id));
              showToast("Đã xoá giáo án.");
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
