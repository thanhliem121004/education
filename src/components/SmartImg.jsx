import { useState, useEffect } from "react";
import Icon from "./Icon.jsx";

/* Ảnh thông minh: thử lần lượt danh sách nguồn, hết nguồn thì hiện ô dự phòng
   (icon khung tranh vẽ tay — không dùng emoji) */
export default function SmartImg({ srcs, alt = "", fallback = null, className }) {
  const list = (srcs || []).filter(Boolean);
  const [i, setI] = useState(0);

  useEffect(() => { setI(0); }, [JSON.stringify(list)]);

  if (!list.length || i >= list.length) {
    return (
      <div className={"fallback " + (className || "")}>
        {fallback || <Icon name="picture" size={38} className="fallback-icon" />}
      </div>
    );
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
