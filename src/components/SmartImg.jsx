import { useState, useEffect } from "react";

/* Ảnh thông minh: thử lần lượt danh sách nguồn, hết nguồn thì hiện ô dự phòng */
export default function SmartImg({ srcs, alt = "", fallback = "🖼", className }) {
  const list = (srcs || []).filter(Boolean);
  const [i, setI] = useState(0);

  useEffect(() => { setI(0); }, [JSON.stringify(list)]);

  if (!list.length || i >= list.length) {
    return <div className={"fallback " + (className || "")}>{fallback}</div>;
  }
  return (
    <img
      className={className}
      src={list[i]}
      alt={alt}
      loading="lazy"
      onError={() => setI(i + 1)}
    />
  );
}
