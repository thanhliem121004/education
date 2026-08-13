import { useRef } from "react";
import { motion } from "framer-motion";
import { useApp } from "../App.jsx";
import { TopicCard } from "./Topics.jsx";
import { gGet, gSet } from "../lib/core.js";

export default function MyTopics() {
  const { go, mine, saveMine, showToast } = useApp();
  const fileRef = useRef(null);

  const exportData = () => {
    const data = {
      app: "vuon-y-tuong",
      version: 1,
      exportedAt: new Date().toISOString(),
      myTopics: mine,
      schedule: gGet("schedule", {})
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "vuon-y-tuong-sao-luu.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    showToast("Đã tải tệp sao lưu về máy.");
  };

  const importData = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (data.app !== "vuon-y-tuong") throw new Error("wrong app");
        const list = [...mine];
        (data.myTopics || []).forEach((t) => {
          const i = list.findIndex((x) => x.id === t.id);
          if (i >= 0) list[i] = t; else list.push(t);
        });
        saveMine(list);
        const sch = gGet("schedule", {});
        Object.entries(data.schedule || {}).forEach(([day, entries]) => { sch[day] = entries; });
        gSet("schedule", sch);
        showToast("Đã nhập xong giáo án và lịch dạy!");
      } catch {
        showToast("Tệp không đúng định dạng sao lưu của Vườn Ý Tưởng.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="wrap">
      <div className="topics-head">
        <div>
          <h2>Giáo án của tôi</h2>
          <p>Bài dạy do thầy cô tự soạn — lưu ngay trên máy này, có thể xuất tệp để sao lưu hoặc chia sẻ.</p>
        </div>
        <div className="head-tools no-print">
          <button className="btn solid" onClick={() => go("editor", {})}>＋ Soạn giáo án mới</button>
          <button className="btn green" onClick={exportData}>Xuất tệp sao lưu</button>
          <button className="btn green" onClick={() => fileRef.current?.click()}>Nhập tệp</button>
          <input type="file" ref={fileRef} accept=".json" hidden
            onChange={(e) => { const f = e.target.files[0]; if (f) importData(f); e.target.value = ""; }} />
        </div>
      </div>

      {mine.length === 0 && (
        <div className="my-empty">
          Chưa có giáo án nào.<br />
          Bấm <b>＋ Soạn giáo án mới</b>, hoặc mở một chủ đề mẫu rồi chọn <b>Sửa thành giáo án của tôi</b>.
        </div>
      )}

      {[1, 2, 3, 4, 5].map((g) => {
        const list = mine.filter((t) => t.grade === g);
        if (!list.length) return null;
        return (
          <div className="my-grade-block" key={g}>
            <h3>Lớp {g}</h3>
            <motion.div className="topic-grid" initial="initial" animate="animate"
              variants={{ animate: { transition: { staggerChildren: 0.06 } } }}>
              {list.map((t) => (
                <TopicCard key={t.id} topic={t}
                  onOpen={() => go("activity", { topic: t })}
                  onEdit={() => go("editor", { base: t })}
                  onDelete={() => {
                    if (!confirm(`Xoá giáo án "${t.title}"?`)) return;
                    saveMine(mine.filter((x) => x.id !== t.id));
                    showToast("Đã xoá giáo án.");
                  }} />
              ))}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
