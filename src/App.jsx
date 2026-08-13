import { useState, useCallback, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Topbar from "./components/Topbar.jsx";
import Home from "./screens/Home.jsx";
import Topics from "./screens/Topics.jsx";
import Activity from "./screens/Activity.jsx";
import MyTopics from "./screens/MyTopics.jsx";
import Editor from "./screens/Editor.jsx";
import Schedule from "./screens/Schedule.jsx";
import MediaAdmin from "./screens/MediaAdmin.jsx";
import { gGet, gSet } from "./lib/core.js";

/* ---------- Context chung: điều hướng + toast + giáo án của tôi ---------- */
const AppCtx = createContext(null);
export const useApp = () => useContext(AppCtx);

export default function App() {
  /* route: {name:'home'|'topics'|'activity'|'mytopics'|'editor'|'schedule'|'mediaAdmin', ...payload} */
  const [route, setRoute] = useState({ name: "home" });
  const [toast, setToastMsg] = useState(null);
  const [series, setSeriesState] = useState(() => gGet("series", "all"));
  const [mine, setMine] = useState(() => gGet("myTopics", []));

  const go = useCallback((name, payload = {}) => {
    setRoute({ name, ...payload });
    window.scrollTo({ top: 0 });
  }, []);

  const showToast = useCallback((msg) => {
    setToastMsg(msg);
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => setToastMsg(null), 2600);
  }, []);

  const setSeries = useCallback((s) => {
    setSeriesState(s);
    gSet("series", s);
  }, []);

  const saveMine = useCallback((list) => {
    setMine(list);
    gSet("myTopics", list);
  }, []);

  const ctx = { route, go, showToast, series, setSeries, mine, saveMine };

  const screens = {
    home: <Home key="home" />,
    topics: <Topics key={"topics" + route.grade} grade={route.grade} />,
    activity: <Activity key={"act" + (route.topic?.id || "")} topic={route.topic} />,
    mytopics: <MyTopics key="mytopics" />,
    editor: <Editor key={"editor" + (route.base?.id || "new") + (route.presetGrade || "")} base={route.base} presetGrade={route.presetGrade} />,
    schedule: <Schedule key="schedule" />,
    mediaAdmin: <MediaAdmin key="mediaAdmin" />
  };

  return (
    <AppCtx.Provider value={ctx}>
      <Topbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={route.name + (route.grade || "") + (route.topic?.id || "")}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          {screens[route.name] || screens.home}
        </motion.main>
      </AnimatePresence>

      <footer className="site">
        Vườn Ý Tưởng — công cụ dạy học Tập làm văn: gợi mở, không áp đặt · Dành cho giáo viên Tiểu học (lớp 1–5)
      </footer>

      <AnimatePresence>
        {toast && (
          <motion.div
            className="toast show"
            role="status"
            initial={{ opacity: 0, y: 30, x: "-50%", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
            exit={{ opacity: 0, y: 16, x: "-50%" }}
            transition={{ type: "spring", stiffness: 400, damping: 26 }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </AppCtx.Provider>
  );
}
