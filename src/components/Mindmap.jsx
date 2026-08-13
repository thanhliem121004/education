import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { motion } from "framer-motion";
import { BRANCH_COLORS } from "../lib/core.js";

/* Sơ đồ tư duy lớp 4–5: nhánh 2 bên, đường nối SVG vẽ động */
export default function Mindmap({ topic, ideas, activeBranch, onToggleBranch, onAddIdea, onRemoveIdea }) {
  const boxRef = useRef(null);
  const [paths, setPaths] = useState([]);
  const [size, setSize] = useState({ w: 0, h: 0 });

  const compute = () => {
    const mm = boxRef.current;
    if (!mm) return;
    const mmRect = mm.getBoundingClientRect();
    if (!mmRect.width) return;
    const center = mm.querySelector(".mm-center");
    if (!center) return;
    const c = center.getBoundingClientRect();
    const cx = c.left - mmRect.left + c.width / 2;
    const cy = c.top - mmRect.top + c.height / 2;

    const next = [];
    mm.querySelectorAll(".branch").forEach((card) => {
      const i = Number(card.dataset.i);
      const r = card.getBoundingClientRect();
      const onLeft = r.left < c.left;
      const bx = onLeft ? r.right - mmRect.left : r.left - mmRect.left;
      const by = r.top - mmRect.top + r.height / 2;
      const sx = onLeft ? cx - c.width / 2 : cx + c.width / 2;
      const midX = (sx + bx) / 2;
      next.push({ i, d: `M ${sx} ${cy} C ${midX} ${cy}, ${midX} ${by}, ${bx} ${by}` });
    });
    setSize({ w: mmRect.width, h: mmRect.height });
    setPaths(next);
  };

  useLayoutEffect(compute, [topic.id, ideas]);
  useEffect(() => {
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return (
    <div className="mindmap" ref={boxRef}>
      <svg className="links" viewBox={`0 0 ${size.w || 1} ${size.h || 1}`}>
        {paths.map((p) => (
          <motion.path
            key={p.i + p.d}
            d={p.d}
            fill="none"
            stroke={BRANCH_COLORS[p.i % BRANCH_COLORS.length]}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="1 7"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 + p.i * 0.08 }}
          />
        ))}
      </svg>

      <div className="mm-col left">
        {(topic.branches || []).map((b, i) => i % 2 === 0 && (
          <Branch key={i} branch={b} i={i} ideas={ideas[i] || []}
            active={activeBranch === i} onToggle={() => onToggleBranch(i)}
            onAdd={onAddIdea} onRemove={onRemoveIdea} />
        ))}
      </div>

      <motion.div
        className="mm-center"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        {topic.title}
      </motion.div>

      <div className="mm-col right">
        {(topic.branches || []).map((b, i) => i % 2 === 1 && (
          <Branch key={i} branch={b} i={i} ideas={ideas[i] || []}
            active={activeBranch === i} onToggle={() => onToggleBranch(i)}
            onAdd={onAddIdea} onRemove={onRemoveIdea} />
        ))}
      </div>
    </div>
  );
}

function Branch({ branch, i, ideas, active, onToggle, onAdd, onRemove }) {
  const [val, setVal] = useState("");
  const color = BRANCH_COLORS[i % BRANCH_COLORS.length];

  return (
    <motion.div
      className={"branch" + (active ? " active" : "")}
      data-i={i}
      role="button"
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(e) => { if (e.key === "Enter" && e.target === e.currentTarget) { e.preventDefault(); onToggle(); } }}
      initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 220, damping: 24, delay: 0.08 * i }}
    >
      <h5><span className="dot" style={{ background: color }} />{branch.title}</h5>
      {branch.hint && <p className="hint">{branch.hint}</p>}
      <ul className="ideas">
        {ideas.map((idea, j) => (
          <motion.li key={j + idea} initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}>
            {idea}
            <button title="Xoá ý này" onClick={(e) => { e.stopPropagation(); onRemove(i, j); }}>×</button>
          </motion.li>
        ))}
      </ul>
      <form
        className="idea-form"
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => {
          e.preventDefault();
          const v = val.trim();
          if (!v) return;
          onAdd(i, v);
          setVal("");
        }}
      >
        <input
          type="text"
          value={val}
          placeholder="Gõ ý của các em..."
          aria-label={"Thêm ý cho nhánh " + branch.title}
          onChange={(e) => setVal(e.target.value)}
        />
        <button type="submit">+ Thêm</button>
      </form>
    </motion.div>
  );
}
