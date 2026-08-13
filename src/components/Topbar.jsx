import { useApp } from "../App.jsx";
import Icon from "./Icon.jsx";

export default function Topbar() {
  const { route, go } = useApp();
  const inLibrary = ["home", "topics", "activity"].includes(route.name);

  return (
    <header className="topbar">
      <button className="brand" onClick={() => go("home")} title="Về trang chủ">
        <span>Vườn Ý Tưởng
          <small>Ươm ý – tự viết văn hay · Tiếng Việt tiểu học</small>
        </span>
      </button>
      <nav className="mainnav no-print" aria-label="Chức năng chính">
        <button className={"navlink" + (inLibrary ? " now" : "")} onClick={() => go("home")}>Kho bài dạy</button>
        <button className={"navlink" + (["mytopics", "editor"].includes(route.name) ? " now" : "")} onClick={() => go("mytopics")}>Giáo án của tôi</button>
        <button className={"navlink" + (route.name === "schedule" ? " now" : "")} onClick={() => go("schedule")}>Lịch dạy</button>
        <button className={"navlink" + (route.name === "mediaAdmin" ? " now" : "")} onClick={() => go("mediaAdmin")}><Icon name="camera" size={17} /> Quản lý ảnh</button>
        <button className={"navlink" + (route.name === "guide" ? " now" : "")} onClick={() => go("guide")}><Icon name="bulb" size={17} /> Hướng dẫn</button>
      </nav>
      <nav className="crumbs" aria-label="Vị trí hiện tại">
        {route.name === "topics" && <span className="crumb now">Lớp {route.grade}</span>}
        {route.name === "activity" && route.topic && (
          <>
            <button className="crumb" onClick={() => go("topics", { grade: route.topic.grade })}>Lớp {route.topic.grade}</button>
            <span className="sep">›</span>
            <span className="crumb now">{route.topic.title}</span>
          </>
        )}
        {route.name === "mediaAdmin" && <span className="crumb now">Quản lý Ảnh & Supabase</span>}
      </nav>
    </header>
  );
}
