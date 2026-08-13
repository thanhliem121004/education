import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useApp } from "../App.jsx";
import SmartImg from "../components/SmartImg.jsx";
import Mindmap from "../components/Mindmap.jsx";
import Icon from "../components/Icon.jsx";
import {
  bandOf, tGet, tSet, localImg, coverSources, topicImageSources, youtubeId, beep, BRANCH_COLORS
} from "../lib/core.js";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const blanksHtml = (s) => esc(s).replace(/___/g, '<span class="blank">___</span>');

const rise = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.45, ease: "easeOut" }
};

export default function Activity({ topic }) {
  const { go, showToast } = useApp();
  const band = bandOf(topic.grade);
  const id = topic.id;

  /* ---- trạng thái lưu theo chủ đề ---- */
  const [basket, setBasket] = useState(() => tGet(id, "basket", []));
  const [ideas, setIdeas] = useState(() => tGet(id, "ideas", {}));
  const [outlineAns, setOutlineAns] = useState(() => tGet(id, "outline", {}));
  const [writing, setWriting] = useState(() => tGet(id, "writing", ""));
  const [video, setVideo] = useState(() => tGet(id, "video", null));
  const [opener, setOpener] = useState(() => tGet(id, "opener", -1));
  const [closer, setCloser] = useState(() => tGet(id, "closer", -1));
  const [activeBranch, setActiveBranch] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [activeStep, setActiveStep] = useState(1);

  const persist = (part, v, setter) => { setter(v); tSet(id, part, v); };

  /* ---- đồng hồ ---- */
  const [timerTotal, setTimerTotal] = useState(0);
  const [timerLeft, setTimerLeft] = useState(0);
  const [running, setRunning] = useState(false);
  const [timeUp, setTimeUp] = useState(false);
  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => {
      setTimerLeft((v) => {
        if (v <= 1) {
          clearInterval(t);
          setRunning(false);
          setTimeUp(true);
          beep();
          showToast("Hết giờ rồi! Các em dừng bút nhé.");
          return 0;
        }
        return v - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [running]);
  const mm = String(Math.floor(timerLeft / 60)).padStart(2, "0");
  const ss = String(timerLeft % 60).padStart(2, "0");

  /* ---- theo dõi bước hiện tại khi cuộn ---- */
  const stepsRef = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) setActiveStep(Number(en.target.dataset.step));
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    document.querySelectorAll(".sheet[data-step]").forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [topic.id]);

  /* ---- hành động ---- */
  const addIdea = (bi, text) => {
    const next = { ...ideas, [bi]: [...(ideas[bi] || [])] };
    if (next[bi].includes(text)) { showToast("Ý này đã có trong nhánh rồi!"); return; }
    next[bi].push(text);
    persist("ideas", next, setIdeas);
  };
  const removeIdea = (bi, j) => {
    const next = { ...ideas, [bi]: [...(ideas[bi] || [])] };
    next[bi].splice(j, 1);
    persist("ideas", next, setIdeas);
  };
  const clickChip = (word) => {
    if (activeBranch !== null && band === "C") {
      addIdea(activeBranch, word);
      showToast(`Đã thêm "${word}" vào nhánh sơ đồ.`);
      return;
    }
    const next = basket.includes(word) ? basket.filter((w) => w !== word) : [...basket, word];
    persist("basket", next, setBasket);
  };

  const stepNames = band === "A"
    ? ["Quan sát", "Kho từ ngữ", "Nói câu", "Viết câu"]
    : band === "B"
      ? ["Quan sát", "Kho từ ngữ", "Tìm ý", "Viết đoạn"]
      : ["Quan sát", "Kho từ ngữ", "Sơ đồ tư duy", "Viết đoạn"];

  const planRows = [
    ["Yêu cầu cần đạt", topic.plan?.muctieu],
    ["Chuẩn bị", topic.plan?.chuanbi],
    ["Tiến trình / lưu ý", topic.plan?.tientrinh]
  ].filter(([, v]) => v && v.trim());

  const wordCount = writing.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="wrap" id="screen-activity">
      {/* ---------- đầu trang ---------- */}
      <div className="activity-head">
        <motion.span className="act-cover" initial={{ scale: 0.6, rotate: -6, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
          <SmartImg srcs={coverSources(topic)} />
        </motion.span>
        <div>
          <h2>{topic.title}</h2>
          <span className="genre">{(topic.genre || "Tập làm văn") + " · Lớp " + topic.grade}</span>
        </div>
        <div className="activity-tools no-print">
          {timerTotal > 0 && (
            <span className={"timer" + (running ? " running" : "") + (timeUp ? " done" : "")}>
              <span className="time">{mm}:{ss}</span>
              <button onClick={() => { if (running) setRunning(false); else { if (timerLeft <= 0) setTimerLeft(timerTotal); setTimeUp(false); setRunning(true); } }}>
                {running ? "Tạm dừng" : "Bắt đầu"}
              </button>
              <button title="Đặt lại" onClick={() => { setRunning(false); setTimeUp(false); setTimerLeft(timerTotal); }}><Icon name="refresh" size={14} /></button>
            </span>
          )}
          <button className="btn green small" onClick={() => { setTimerTotal(300); setTimerLeft(300); setTimeUp(false); setRunning(false); showToast("Đồng hồ 5 phút đã sẵn sàng — bấm Bắt đầu!"); }}>Hẹn 5 phút</button>
          <button className="btn green small" onClick={() => { setTimerTotal(600); setTimerLeft(600); setTimeUp(false); setRunning(false); showToast("Đồng hồ 10 phút đã sẵn sàng — bấm Bắt đầu!"); }}>Hẹn 10 phút</button>
          <button className="btn small" onClick={() => go("editor", { base: topic })}>
            {topic.custom ? "Sửa giáo án này" : "Sửa thành giáo án của tôi"}
          </button>
          <button className="btn small" onClick={() => window.print()}>In phiếu học tập</button>
        </div>
      </div>

      {planRows.length > 0 && (
        <details className="plan-notes">
          <summary>Ghi chú giáo án của thầy cô</summary>
          <div>
            {planRows.map(([label, v]) => (
              <div key={label}><h5>{label}</h5><p>{v}</p></div>
            ))}
          </div>
        </details>
      )}

      <nav className="steps-nav no-print" aria-label="Các bước hoạt động">
        {stepNames.map((name, i) => (
          <a key={i} href={`#step-${i + 1}`} className={activeStep === i + 1 ? "now" : ""}>
            <span className="n">{i + 1}</span>{name}
          </a>
        ))}
      </nav>

      {/* ---------- BƯỚC 1: QUAN SÁT ---------- */}
      <motion.section className="sheet" id="step-1" data-step="1" {...rise}>
        <h3><span className="badge">1</span> Cùng quan sát nào!</h3>
        <p className="aim">Chiếu ảnh (hoặc video) và hỏi — để chính các em nói lên điều mình nhìn thấy, nghe thấy, cảm thấy.</p>

        <div className="gallery">
          {(topic.images || []).map((img, i) => (
            <motion.figure className="shot" key={i}
              initial={{ opacity: 0, y: 24, rotate: i % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 0.7 : -0.6 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{ scale: 1.03, rotate: 0, zIndex: 2 }}
            >
              <SmartImg srcs={topicImageSources(topic, i + 1)} alt={img.cap || ""} />
              <figcaption>{img.cap || ""}</figcaption>
            </motion.figure>
          ))}
        </div>

        {video && (
          <div className="video-box">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video}`}
              title="Video minh hoạ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
        <div className="media-add no-print">
          <span>Thầy cô có video minh hoạ?</span>
          <input type="url" value={videoUrl} placeholder="Dán liên kết YouTube vào đây..."
            aria-label="Liên kết YouTube" onChange={(e) => setVideoUrl(e.target.value)} />
          <button className="btn small solid" onClick={() => {
            const vid = youtubeId(videoUrl);
            if (!vid) { showToast("Liên kết chưa đúng — hãy dán đường dẫn video YouTube nhé."); return; }
            persist("video", vid, setVideo);
            setVideoUrl("");
          }}>Chiếu video</button>
          {video && <button className="btn small" onClick={() => persist("video", null, setVideo)}>Tắt video</button>}
        </div>

        <div className="q-list">
          {(topic.questions || []).map((q, i) => (
            <motion.div className="q-item" key={i}
              initial={{ opacity: 0, x: -22 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <span className="q">?</span><span>{q}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ---------- BƯỚC 2: KHO TỪ NGỮ ---------- */}
      <motion.section className="sheet" id="step-2" data-step="2" {...rise}>
        <h3><span className="badge">2</span> Kho từ ngữ gợi ý</h3>
        <p className="aim">Bấm vào từ mà cả lớp thấy hay để thả vào <b>giỏ từ của lớp</b>. Khuyến khích các em nêu thêm từ của riêng mình!</p>

        <div className="word-groups">
          {(topic.wordGroups || []).map((group, gi) => (
            <div className="word-group" key={gi}>
              <div className="wg-name">
                <span className="gdot" style={{ background: BRANCH_COLORS[gi % BRANCH_COLORS.length] }} />
                {group.name}
              </div>
              <div className="chips">
                {group.words.map((word) => (
                  <motion.button
                    key={word}
                    className={"chip" + (basket.includes(word) ? " picked" : "")}
                    whileHover={{ y: -3, rotate: -1 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => clickChip(word)}
                  >
                    {word}
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="basket">
          <h4>Giỏ từ của lớp em</h4>
          <div className="chips">
            {basket.map((word) => (
              <motion.button key={word} className="chip picked" title="Bấm để bỏ khỏi giỏ"
                initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                onClick={() => persist("basket", basket.filter((w) => w !== word), setBasket)}>
                {word}
              </motion.button>
            ))}
          </div>
          {basket.length === 0 && <p className="empty">Chưa có từ nào — bấm vào các từ phía trên để thêm nhé!</p>}
          <p className="hint no-print">Giỏ từ sẽ hiện lại ở bước Viết để nhắc các em dùng từ hay.</p>
        </div>
      </motion.section>

      {/* ---------- BƯỚC 3: TÌM Ý ---------- */}
      <motion.section className="sheet" id="step-3" data-step="3" {...rise}>
        <h3><span className="badge">3</span> {band === "C" ? "Sơ đồ tư duy của lớp" : band === "B" ? "Trả lời câu hỏi để tìm ý" : "Cùng nói câu theo mẫu"}</h3>
        <p className="aim">
          {band === "C" && "Chọn một nhánh, rồi gõ ý kiến các em phát biểu. Mỗi bạn góp một ý — sơ đồ của lớp mình sẽ chẳng giống bất kì bài văn mẫu nào!"}
          {band === "B" && "Cả lớp trả lời miệng từng câu hỏi; giáo viên gõ lại ý hay của các em. Trả lời đủ các câu là có dàn ý cho đoạn văn."}
          {band === "A" && "Mời nhiều em nói — mỗi em điền chỗ trống một cách khác nhau. Nói được rồi mới viết!"}
        </p>

        {band === "C" && (
          <>
            <Mindmap
              topic={topic}
              ideas={ideas}
              activeBranch={activeBranch}
              onToggleBranch={(i) => {
                const next = activeBranch === i ? null : i;
                setActiveBranch(next);
                if (next !== null) showToast("Đã chọn nhánh — bấm từ ở bước 2 để thêm nhanh, hoặc gõ trực tiếp.");
              }}
              onAddIdea={addIdea}
              onRemoveIdea={removeIdea}
            />
            <p className="mm-note no-print">Mẹo: bấm vào một nhánh để chọn (viền vàng), sau đó có thể quay lại bước 2 bấm từ — từ ấy sẽ được thêm thẳng vào nhánh đang chọn.</p>
          </>
        )}

        {band === "B" && (
          <div className="outline">
            {(topic.outline || []).map((item, i) => (
              <motion.div className="outline-item" key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <div className="oq"><span className="n">{i + 1}</span>{item.q}</div>
                {item.hint && <p className="ohint">{item.hint}</p>}
                <textarea
                  placeholder="Gõ ý của các em..."
                  aria-label={item.q}
                  value={outlineAns[i] || ""}
                  onChange={(e) => persist("outline", { ...outlineAns, [i]: e.target.value }, setOutlineAns)}
                />
              </motion.div>
            ))}
          </div>
        )}

        {band === "A" && (
          <div className="say-frames">
            {(topic.frames || []).map((f, i) => (
              <motion.div className="say-frame" key={i}
                initial={{ opacity: 0, x: -26 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, type: "spring", stiffness: 220, damping: 22 }}
                dangerouslySetInnerHTML={{ __html: blanksHtml(f) }}
              />
            ))}
          </div>
        )}
      </motion.section>

      {/* ---------- BƯỚC 4: VIẾT ---------- */}
      <motion.section className="sheet" id="step-4" data-step="4" {...rise}>
        <h3><span className="badge">4</span> {band === "A" ? "Em tập viết câu" : "Em tự viết đoạn văn"}</h3>
        <p className="aim">
          {band === "A" && "Mỗi em chọn 1–2 mẫu câu mình thích ở bước 3, tự điền chỗ trống rồi nắn nót viết vào vở."}
          {band === "B" && "Nối các ý đã tìm được thành đoạn văn. Chỗ ___ trong khung là để em tự điền theo ý mình."}
          {band === "C" && "Chọn khung câu mở đầu, kết thúc em thích (chỗ ___ để em tự điền), rồi dựa vào sơ đồ ý để viết."}
        </p>

        {band !== "A" && ((topic.openers || []).length + (topic.closers || []).length > 0) && (
          <div className="frames">
            {(topic.openers || []).length > 0 && (
              <FrameBox title="Khung câu mở đầu" options={topic.openers} chosen={opener}
                note={<>Chỗ <b>___</b> để em tự điền — em cũng có thể tự nghĩ câu mở đầu khác!</>}
                onChoose={(i) => persist("opener", opener === i ? -1 : i, setOpener)} />
            )}
            {(topic.closers || []).length > 0 && (
              <FrameBox title="Khung câu kết thúc" options={topic.closers} chosen={closer}
                note="Kết thúc bằng cảm xúc thật của em là hay nhất."
                onChoose={(i) => persist("closer", closer === i ? -1 : i, setCloser)} />
            )}
          </div>
        )}

        {band === "B" && Object.values(outlineAns).some((v) => (v || "").trim()) && (
          <div className="found-ideas">
            <h4>Những ý lớp mình đã tìm được</h4>
            <ul>
              {(topic.outline || []).map((item, i) => {
                const v = (outlineAns[i] || "").trim();
                return v ? <li key={i}>{v} <small>({item.q})</small></li> : null;
              })}
            </ul>
          </div>
        )}

        <div className="write-zone">
          <h4>Trang vở của lớp (viết mẫu cùng nhau)</h4>
          {basket.length > 0 && (
            <p className="reminder no-print">
              Nhớ dùng từ trong giỏ nhé:{" "}
              <span className="chips">
                {basket.slice(0, 10).map((w) => <span className="chip" key={w}>{w}</span>)}
              </span>
            </p>
          )}
          <textarea
            className="oly"
            rows={12}
            spellCheck={false}
            placeholder="Cả lớp cùng viết thử ở đây... (chữ sẽ hiện màu mực tím đấy!)"
            value={writing}
            onChange={(e) => persist("writing", e.target.value, setWriting)}
          />
          <div className="write-meta no-print">
            <span className="count">Số chữ: <b>{wordCount}</b></span>
            <span className="spacer" />
            <button className="btn small" onClick={() => {
              if (writing && !confirm("Xoá toàn bộ nội dung trang viết?")) return;
              persist("writing", "", setWriting);
            }}>Xoá trang viết</button>
          </div>
          <div className="print-only">
            <p><b>Em hãy viết bài của mình:</b></p>
            <div className="print-lines" />
          </div>
        </div>
      </motion.section>
    </div>
  );
}

function FrameBox({ title, options, chosen, onChoose, note }) {
  return (
    <div className="frame">
      <h4>{title}</h4>
      <div>
        {options.map((text, i) => (
          <button
            key={i}
            type="button"
            className={"opt" + (chosen === i ? " chosen" : "")}
            onClick={() => onChoose(i)}
            dangerouslySetInnerHTML={{ __html: blanksHtml(text) }}
          />
        ))}
      </div>
      <p className="note">{note}</p>
    </div>
  );
}
