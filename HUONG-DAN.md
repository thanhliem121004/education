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

## Quản lý ảnh & Supabase Storage

Nút **Quản lý ảnh** trên thanh menu cho phép thay ảnh của từng bài dạy (tải tệp lên hoặc dán URL),
khôi phục ảnh mặc định 1 chạm. Ảnh lưu ở đâu:

- **Chưa cấu hình Supabase:** ảnh lưu ngay trên trình duyệt (localStorage) — chạy được cả khi offline,
  nhưng chỉ máy đó thấy.
- **Đã cấu hình Supabase:** ảnh tải lên đám mây, **mọi người dùng website đều thấy chung**.

### Tạo kho ảnh Supabase (làm 1 lần, ~5 phút)

1. Vào [supabase.com](https://supabase.com) → tạo tài khoản miễn phí → **New project**.
2. Menu **Storage** → **New bucket** → đặt tên đúng là `vuon-y-tuong` → bật **Public bucket** → Create.
3. Cho phép tải ảnh lên bucket: menu **SQL Editor** → dán và chạy:

   ```sql
   create policy "Cho phep tai anh len" on storage.objects
     for insert to anon with check (bucket_id = 'vuon-y-tuong');
   create policy "Cho phep ghi de anh" on storage.objects
     for update to anon using (bucket_id = 'vuon-y-tuong');
   ```

   > Lưu ý: chính sách này cho phép **bất kì ai mở website** cũng thay được ảnh (phù hợp công cụ lớp học).
   > Muốn chỉ mình giáo viên thay ảnh thì sau này thêm đăng nhập Supabase Auth.

4. Lấy khoá: **Project Settings → API** → copy **Project URL** và **anon public key**.
5. Đưa khoá vào app theo 1 trong 2 cách:
   - **Cách A (cho cả trường dùng chung):** khai báo trên Vercel → Settings → Environment Variables:
     `VITE_SUPABASE_URL` và `VITE_SUPABASE_ANON_KEY` → Redeploy. Người dùng không cần cấu hình gì.
   - **Cách B (từng máy):** mở website → **Quản lý ảnh** → tab **Cấu hình Supabase** → dán URL + Key → Lưu.

## Đưa lên mạng: GitHub → Vercel

1. Tạo kho trống trên [github.com/new](https://github.com/new) (Public hoặc Private đều được, **không** tick thêm README).
2. Trong thư mục dự án:

   ```bash
   git remote add origin https://github.com/<tai-khoan>/<ten-kho>.git
   ```

   ```bash
   git push -u origin main
   ```

3. Vào [vercel.com](https://vercel.com) → **Add New Project** → Import kho GitHub → Vercel tự nhận
   framework **Vite** → thêm 2 biến môi trường Supabase ở bước cấu hình (nếu dùng Cách A) → **Deploy**.
4. Nhận đường dẫn `https://ten-du-an.vercel.app` — gửi cho đồng nghiệp dùng ngay.

> Giáo án/lịch dạy hiện lưu **trên từng máy** (kèm xuất/nhập tệp); ảnh bài dạy đã đồng bộ chung qua Supabase.
> Muốn đồng bộ cả giáo án/lịch theo tài khoản → giai đoạn sau (Supabase Database + Auth).

## Cấu trúc mã nguồn

- `src/data/topics45.js`, `src/data/topics123.js` — nội dung 26 chủ đề mẫu (sửa/thêm tại đây).
- `src/screens/` — các màn hình: Home, Topics, Activity, MyTopics, Editor, Schedule.
- `src/components/` — Topbar, Mindmap (sơ đồ tư duy), SmartImg (ảnh có dự phòng).
- `src/style.css` — giao diện "vở ô ly + mực tím"; hiệu ứng chuyển động dùng framer-motion.
