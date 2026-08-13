# Vườn Ý Tưởng — Hướng dẫn sử dụng cho giáo viên

Website hỗ trợ tổ chức hoạt động **phát triển ý tưởng viết** cho học sinh **lớp 1 đến lớp 5**
môn Tiếng Việt — thay cho việc đọc và học thuộc văn mẫu. Kèm công cụ **soạn giáo án riêng**
và **lịch dạy tuần**. Xây dựng bằng **React + Vite**.

## Chạy trên máy

Cần cài [Node.js](https://nodejs.org). Trong thư mục dự án:

```bash
npm install
```

```bash
npm run dev
```

rồi mở `http://localhost:5173`.

## Kho bài dạy — dùng trên lớp

1. Chọn **bộ sách** (Kết nối tri thức / Chân trời sáng tạo / Cánh diều / cả 3) → chọn **lớp** → chọn **chủ đề**.
2. Hoạt động tự đổi theo khối lớp:
   - **Lớp 1:** Quan sát tranh → Kho từ ngữ → **Nói câu theo mẫu** (chỗ trống `___`) → Tập viết câu.
   - **Lớp 2–3:** Quan sát → Kho từ ngữ → **Trả lời câu hỏi để tìm ý** → Viết đoạn với khung mở/kết.
   - **Lớp 4–5:** Quan sát → Kho từ ngữ → **Sơ đồ tư duy** (chọn nhánh rồi bấm từ ở bước 2 để thêm nhanh) → Khung mở bài/kết bài + viết đoạn.
3. Công cụ kèm theo: dán link **YouTube** để chiếu video, **đồng hồ 5/10 phút**, **in phiếu học tập**, trang viết hiện chữ **màu mực tím**. Mọi thứ tự lưu theo từng chủ đề.

## Ảnh minh hoạ

- Ảnh đặt trong `public/images/` theo đúng cấu trúc tên có sẵn (mỗi chủ đề một thư mục,
  `1.jpg` là ảnh bìa). Xem **PROMPT-ANH-AI.md** để lấy bộ prompt tạo ảnh bằng AI (Gemini)
  và tên tệp chính xác cho từng ảnh.
- Chưa có ảnh, web tự dùng ảnh dự phòng trên mạng; không có mạng thì hiện ô biểu tượng.

## Giáo án của tôi

- **＋ Soạn giáo án mới**: chọn khối lớp — biểu mẫu tự đổi theo khối (mẫu câu / câu hỏi tìm ý / nhánh sơ đồ). Thêm ảnh bằng địa chỉ trên mạng hoặc **chọn ảnh từ máy**. Có mục ghi chú giáo án (yêu cầu cần đạt, chuẩn bị, tiến trình — ghi "tuần mấy, bộ sách nào" của lớp mình tại đây).
- Cách nhanh nhất: mở một chủ đề mẫu → bấm **Sửa thành giáo án của tôi** → chỉnh lại theo lớp mình.
- **Xuất tệp sao lưu / Nhập tệp**: chuyển giáo án + lịch dạy giữa các máy, chia sẻ cho đồng nghiệp.

## Lịch dạy

- Xem theo tuần (Thứ Hai → Thứ Bảy), bấm **＋ Thêm tiết dạy**: tiết, lớp (4A, 5B...), chọn bài (chủ đề mẫu hoặc giáo án của bạn), ghi chú.
- Từ ô lịch bấm **Mở bài dạy** để chiếu ngay; đánh dấu **✓ Đã dạy**; **In lịch báo giảng**.

## Đưa lên mạng bằng Vercel

1. Đưa thư mục dự án lên GitHub (hoặc chạy `npx vercel` ngay trong thư mục).
2. Vào [vercel.com](https://vercel.com) → **Add New Project** → chọn kho → Vercel tự nhận
   framework **Vite** (build `npm run build`, output `dist`) → bấm **Deploy**.
3. Nhận đường dẫn `https://ten-du-an.vercel.app`.

> Bản hiện tại lưu giáo án/lịch **trên từng máy** (kèm xuất/nhập tệp).
> Muốn đăng nhập và đồng bộ mọi nơi cần thêm cơ sở dữ liệu (Vercel Postgres/Supabase) — giai đoạn sau.

## Cấu trúc mã nguồn

- `src/data/topics45.js`, `src/data/topics123.js` — nội dung 26 chủ đề mẫu (sửa/thêm tại đây).
- `src/screens/` — các màn hình: Home, Topics, Activity, MyTopics, Editor, Schedule.
- `src/components/` — Topbar, Mindmap (sơ đồ tư duy), SmartImg (ảnh có dự phòng).
- `src/style.css` — giao diện "vở ô ly + mực tím"; hiệu ứng chuyển động dùng framer-motion.
