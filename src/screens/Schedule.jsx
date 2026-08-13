import { useState } from "react";
import { motion } from "framer-motion";
import TOPICS from "../data/index.js";
import { useApp } from "../App.jsx";
import { gGet, gSet, mondayOf, dkey, dshort, DAY_NAMES } from "../lib/core.js";

export default function Schedule() {
  const { go, mine, showToast } = useApp();
  const [weekStart, setWeekStart] = useState(() => mondayOf(new Date()));
  const [schedule, setScheduleState] = useState(() => gGet("schedule", {}));
  const [formDay, setFormDay] = useState(null);

  const setSchedule = (next) => { setScheduleState(next); gSet("schedule", next); };
  const findTopic = (tid) => TOPICS.find((t) => t.id === tid) || mine.find((t) => t.id === tid) || null;

  const shiftWeek = (days) => {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + days);
    setWeekStart(d);
  };

  const end = new Date(weekStart);
  end.setDate(end.getDate() + 5);
  const todayKey = dkey(new Date());

  return (
    <div className="wrap" id="screen-schedule">
      <div className="topics-head">
        <div>
          <h2>Lịch dạy của tôi</h2>
          <p>Tuần từ {dshort(weekStart)} đến {dshort(end)}/{end.getFullYear()}</p>
        </div>
        <div className="head-tools no-print">
          <button className="btn small" onClick={() => shiftWeek(-7)}>← Tuần trước</button>
          <button className="btn small green" onClick={() => setWeekStart(mondayOf(new Date()))}>Hôm nay</button>
          <button className="btn small" onClick={() => shiftWeek(7)}>Tuần sau →</button>
          <button className="btn small" onClick={() => window.print()}>In lịch báo giảng</button>
        </div>
      </div>

      <div className="week-grid">
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const day = new Date(weekStart);
          day.setDate(day.getDate() + i);
          const key = dkey(day);
          const entries = schedule[key] || [];
          return (
            <motion.div
              key={key}
              className={"day-col" + (key === todayKey ? " today" : "")}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, type: "spring", stiffness: 240, damping: 24 }}
            >
              <h4>{DAY_NAMES[day.getDay()]}</h4>
              <p className="date">{dshort(day)}{key === todayKey ? " · hôm nay" : ""}</p>

              {entries.map((entry, j) => {
                const topic = entry.topicId ? findTopic(entry.topicId) : null;
                return (
                  <div className={"lesson-entry" + (entry.done ? " done" : "")} key={j}>
                    <span className="le-meta">
                      {[entry.tiet && "Tiết " + entry.tiet, entry.lop && "Lớp " + entry.lop].filter(Boolean).join(" · ") || "Tiết dạy"}
                    </span>
                    <span className="le-title">{topic ? topic.title : (entry.title || "Bài dạy")}</span>
                    {entry.note && <span className="le-note">{entry.note}</span>}
                    <span className="le-tools no-print">
                      {topic && <button onClick={() => go("activity", { topic })}>Mở bài dạy</button>}
                      <button onClick={() => {
                        const next = { ...schedule, [key]: entries.map((x, k) => k === j ? { ...x, done: !x.done } : x) };
                        setSchedule(next);
                      }}>{entry.done ? "Chưa dạy" : "✓ Đã dạy"}</button>
                      <button onClick={() => {
                        const rest = entries.filter((_, k) => k !== j);
                        const next = { ...schedule };
                        if (rest.length) next[key] = rest; else delete next[key];
                        setSchedule(next);
                      }}>Xoá</button>
                    </span>
                  </div>
                );
              })}

              {formDay === key
                ? <DayForm
                    mine={mine}
                    onCancel={() => setFormDay(null)}
                    onSave={(entry) => {
                      if (!entry.topicId && !entry.note) { showToast("Chọn bài dạy hoặc ghi chú đã nhé!"); return; }
                      setSchedule({ ...schedule, [key]: [...entries, entry] });
                      setFormDay(null);
                    }}
                  />
                : <button className="day-add no-print" onClick={() => setFormDay(key)}>＋ Thêm tiết dạy</button>}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function DayForm({ mine, onSave, onCancel }) {
  const [tiet, setTiet] = useState("");
  const [lop, setLop] = useState("");
  const [topicId, setTopicId] = useState("");
  const [note, setNote] = useState("");

  return (
    <div className="day-form no-print">
      <div className="df-row">
        <input type="text" value={tiet} placeholder="Tiết (VD: 3)" onChange={(e) => setTiet(e.target.value)} />
        <input type="text" value={lop} placeholder="Lớp (VD: 4A)" onChange={(e) => setLop(e.target.value)} />
      </div>
      <select value={topicId} onChange={(e) => setTopicId(e.target.value)}>
        <option value="">— Chọn bài dạy —</option>
        {[1, 2, 3, 4, 5].map((g) => (
          <optgroup label={"Lớp " + g} key={g}>
            {[...TOPICS, ...mine].filter((t) => t.grade === g).map((t) => (
              <option key={t.id} value={t.id}>{(t.custom ? "[GA của tôi] " : "") + t.title}</option>
            ))}
          </optgroup>
        ))}
      </select>
      <input type="text" value={note} placeholder="Ghi chú (tuỳ chọn)" onChange={(e) => setNote(e.target.value)} />
      <div className="df-actions">
        <button className="df-save" onClick={() => onSave({ tiet: tiet.trim(), lop: lop.trim(), topicId: topicId || null, note: note.trim(), done: false })}>Lưu</button>
        <button className="df-cancel" onClick={onCancel}>Huỷ</button>
      </div>
    </div>
  );
}
