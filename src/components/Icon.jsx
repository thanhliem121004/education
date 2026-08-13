import { useState } from "react";

/* ============================================================
   Icon "vẽ tay" của Vườn Ý Tưởng — nét mực nguệch ngoạc học trò.
   Ưu tiên icon riêng của thầy cô đặt tại public/icons/<name>.png
   (nền trong suốt); chưa có thì dùng bản vẽ tay SVG bên dưới.
   ============================================================ */

/* Ghi nhớ icon nào không có file đè để khỏi gọi lại 404 nhiều lần */
const overrideCache = {};

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/* Bộ nét vẽ tay: cố ý hơi lệch, cong nhẹ như vẽ bằng bút mực */
const DRAWINGS = {
  /* máy ảnh – quản lý ảnh */
  camera: (
    <g {...S}>
      <path d="M3.5 8.2c0-1 .8-1.9 1.9-1.9h2.2l1.5-2.1c.2-.3.6-.5 1-.5h3.9c.4 0 .8.2 1 .5l1.4 2h2.3c1 0 1.8.9 1.8 1.9l-.2 8.4c0 1-.8 1.8-1.8 1.8H5.4c-1 0-1.9-.8-1.9-1.8l0-8.3Z" />
      <path d="M12.1 9.1c1.9.1 3.2 1.5 3.1 3.3-.1 1.8-1.6 3.1-3.4 3-1.7-.1-3-1.6-2.9-3.3.1-1.7 1.5-3 3.2-3Z" />
      <path d="M17.6 9.3h.7" />
    </g>
  ),
  /* khung tranh – ảnh */
  picture: (
    <g {...S}>
      <path d="M4 5.3C4 4.6 4.6 4 5.3 4h13.3c.8 0 1.4.6 1.3 1.4l-.1 13.2c0 .8-.6 1.4-1.4 1.4H5.3c-.7 0-1.3-.6-1.3-1.3L4 5.3Z" />
      <path d="M4.4 16.2l4.2-4.6c.4-.4 1-.4 1.4 0l3.3 3.5 2.3-2.3c.4-.4 1-.4 1.4 0l2.8 2.9" />
      <path d="M15.1 7.6c.8 0 1.4.6 1.4 1.3 0 .8-.7 1.4-1.5 1.3-.7 0-1.3-.7-1.2-1.4 0-.7.6-1.2 1.3-1.2Z" />
    </g>
  ),
  /* mũi tên tải lên đám mây nhỏ */
  upload: (
    <g {...S}>
      <path d="M12.1 15.8L12 6.4" />
      <path d="M8.3 9.6c1.2-1.1 2.4-2.3 3.7-3.4 1.3 1.1 2.5 2.4 3.6 3.6" />
      <path d="M4.6 15.9c0 1.6 0 2.8.1 3.3.6.5 13.9.6 14.6 0 .2-.5.2-1.8.1-3.4" />
    </g>
  ),
  /* mắt xích liên kết */
  link: (
    <g {...S}>
      <path d="M9.8 14.2l4.5-4.6" />
      <path d="M12.6 6.9l1.8-1.8c1.4-1.4 3.6-1.4 4.9 0 1.4 1.4 1.3 3.5-.1 4.9l-1.9 1.9" />
      <path d="M11.5 17l-1.9 1.9c-1.4 1.4-3.5 1.5-4.9.1-1.3-1.4-1.3-3.5.1-4.9l1.8-1.9" />
    </g>
  ),
  /* tia chớp – kết nối */
  spark: (
    <g {...S}>
      <path d="M13.4 3.2L6.2 13.1l4.6.4-1.5 7.2 7.7-10.2-4.8-.3 1.2-7Z" />
    </g>
  ),
  /* bóng đèn – gợi ý */
  bulb: (
    <g {...S}>
      <path d="M12 3.4c3.4 0 5.8 2.4 5.9 5.4 0 2.1-1.1 3.4-2.1 4.6-.5.7-.9 1.6-1 2.4-1 .4-4.5.4-5.4 0-.1-.9-.5-1.8-1.1-2.5-1-1.2-2.1-2.4-2-4.5C6.4 5.7 8.7 3.4 12 3.4Z" />
      <path d="M9.8 19.2c1.4.3 3 .3 4.4 0" />
      <path d="M10.6 21c.9.2 1.9.2 2.7 0" />
    </g>
  ),
  /* dấu tick trong vòng phấn */
  check: (
    <g {...S}>
      <path d="M12.2 3.6c4.7.1 8.2 3.7 8.1 8.4-.1 4.6-3.8 8.3-8.4 8.2-4.6-.1-8.2-3.8-8.1-8.5.1-4.5 3.8-8.2 8.4-8.1Z" />
      <path d="M8.3 12.3c.9 1 1.8 1.9 2.7 2.8 1.6-1.9 3.2-3.8 4.7-5.8" />
    </g>
  ),
  /* tam giác chú ý */
  warn: (
    <g {...S}>
      <path d="M11.9 4.2c.4-.7 1-.6 1.4 0 2.2 3.9 4.4 7.8 6.5 11.8.4.7 0 1.5-.8 1.5-4.7.1-9.5.1-14.2 0-.8 0-1.2-.8-.8-1.5 2.5-4 4.3-7.9 6.5-11.8Z" />
      <path d="M12.2 9.2c0 1.4 0 2.7-.1 4.1" />
      <path d="M12.1 16.1l0 .1" />
    </g>
  ),
  /* dấu nhân trong vòng */
  error: (
    <g {...S}>
      <path d="M12 3.5c4.6 0 8.4 3.8 8.4 8.5s-3.9 8.5-8.5 8.4c-4.6 0-8.3-3.9-8.3-8.5C3.6 7.3 7.4 3.4 12 3.5Z" />
      <path d="M9.1 9.2c1.9 2 3.8 3.9 5.8 5.8M14.9 9.1c-2 2-3.9 3.9-5.8 5.9" />
    </g>
  ),
  /* dấu nhân nhỏ – đóng/xoá */
  close: (
    <g {...S}>
      <path d="M6.4 6.6c3.7 3.6 7.3 7.3 10.9 11M17.4 6.4c-3.6 3.7-7.2 7.4-10.8 11.1" />
    </g>
  ),
  /* mũi tên quay vòng – đặt lại */
  refresh: (
    <g {...S}>
      <path d="M18.9 8.6c-1.3-2.9-4.4-4.6-7.6-4-3.7.7-6.1 4.2-5.5 7.9.6 3.6 4 6.1 7.7 5.6 2.9-.4 5.1-2.6 5.6-5.3" />
      <path d="M19.3 4.4l-.3 4.4-4.3-.5" />
    </g>
  ),
  /* cây bút – soạn/sửa */
  pen: (
    <g {...S}>
      <path d="M14.9 5.2l3.8 3.7c-3 3.2-6.1 6.3-9.2 9.4-1.4.4-2.8.7-4.3 1 .3-1.5.5-3 .9-4.4 2.9-3.2 5.8-6.5 8.8-9.7Z" />
      <path d="M13.3 7l3.6 3.6" />
    </g>
  ),
  /* thùng rác nhỏ */
  trash: (
    <g {...S}>
      <path d="M5.6 6.8c4.3-.2 8.5-.2 12.8 0M9.8 6.5c0-.9.5-1.9 1.1-2.1.7-.2 1.8-.2 2.4 0 .6.2 1 1.2 1 2.1" />
      <path d="M6.9 6.9c.2 4 .4 8.1.8 12.1.1.7.6 1.2 1.3 1.2h6c.7 0 1.2-.5 1.3-1.2.4-4 .6-8 .8-12" />
      <path d="M10.2 10.1l.2 6.4M13.8 10l-.2 6.5" />
    </g>
  )
};

export default function Icon({ name, size = 20, className = "", label }) {
  const [override, setOverride] = useState(() => overrideCache[name] !== false);
  const drawing = DRAWINGS[name];

  if (override) {
    return (
      <img
        src={`/icons/${name}.png`}
        alt={label || ""}
        width={size}
        height={size}
        className={"vi-icon " + className}
        style={{ display: overrideCache[name] === true ? undefined : undefined }}
        onLoad={() => { overrideCache[name] = true; }}
        onError={() => { overrideCache[name] = false; setOverride(false); }}
      />
    );
  }

  if (!drawing) return null;
  return (
    <svg
      className={"vi-icon " + className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role={label ? "img" : "presentation"}
      aria-label={label}
    >
      {drawing}
    </svg>
  );
}
