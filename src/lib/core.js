/* Tiện ích dùng chung: lưu trữ, chặng lớp, bộ sách, ảnh */
import { getCustomTopicSlotImage } from "./mediaStorage.js";

export const SERIES_NAMES = { kntt: "Kết nối tri thức", ctst: "Chân trời sáng tạo", cd: "Cánh diều" };
export const BRANCH_COLORS = ["#e4573d", "#f5b93f", "#1f5a47", "#6c3bb4", "#2a7fb8", "#c2477f"];
export const DAY_NAMES = ["Chủ nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];

/* Chặng hoạt động theo khối: A = lớp 1, B = lớp 2–3, C = lớp 4–5 */
export const bandOf = (grade) => (grade <= 1 ? "A" : grade <= 3 ? "B" : "C");

export const topicSeries = (t) => t.series || ["kntt", "ctst", "cd"];

/* ---- localStorage: theo chủ đề & toàn cục ---- */
export function tGet(topicId, part, fallback) {
  try {
    const raw = localStorage.getItem(`vuonYtuong:${topicId}:${part}`);
    return raw === null ? fallback : JSON.parse(raw);
  } catch { return fallback; }
}
export function tSet(topicId, part, value) {
  try { localStorage.setItem(`vuonYtuong:${topicId}:${part}`, JSON.stringify(value)); } catch { /* bỏ qua */ }
}
export function gGet(part, fallback) {
  try {
    const raw = localStorage.getItem(`vuonYtuong:global:${part}`);
    return raw === null ? fallback : JSON.parse(raw);
  } catch { return fallback; }
}
export function gSet(part, value) {
  try { localStorage.setItem(`vuonYtuong:global:${part}`, JSON.stringify(value)); } catch { /* bỏ qua */ }
}

/* ---- Ảnh: Ưu tiên ảnh giáo viên tải lên trong Admin -> local /images/ -> web fallback ---- */
export const localImg = (topic, n) => (topic.custom ? null : `/images/topics/${topic.id}/${n}.jpg`);

export const topicImageSources = (topic, n = 1) => {
  if (!topic) return [];
  const customUrl = getCustomTopicSlotImage(topic.id, n);
  const localUrl = localImg(topic, n);
  const fallbackUrl = (topic.images || [])[n - 1]?.url;
  return [customUrl, localUrl, fallbackUrl].filter(Boolean);
};

export const coverSources = (topic) => topicImageSources(topic, 1);

export function youtubeId(url) {
  const m = String(url).match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/);
  return m ? m[1] : null;
}

export const splitLines = (v) => v.split("\n").map((s) => s.trim()).filter(Boolean);
export const parsePipe = (v, k1, k2) => splitLines(v).map((line) => {
  const [a, b] = line.split("|").map((s) => s.trim());
  const o = {}; o[k1] = a; if (b) o[k2] = b; return o;
});

/* ---- Ngày tháng cho lịch dạy ---- */
export function mondayOf(d) {
  const date = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const shift = (date.getDay() + 6) % 7;
  date.setDate(date.getDate() - shift);
  return date;
}
export const dkey = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
export const dshort = (d) => `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}`;

export function beep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.frequency.value = 830;
    g.gain.setValueAtTime(.25, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .9);
    o.start(); o.stop(ctx.currentTime + .9);
  } catch { /* không sao */ }
}
