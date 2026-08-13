import { motion } from "framer-motion";
import { useApp } from "../App.jsx";
import Icon from "../components/Icon.jsx";

/* Tờ hướng dẫn sử dụng — xem trên màn hình hoặc in ra giấy phát cho tổ chuyên môn */

const rise = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: "easeOut" }
};

export default function Guide() {
  const { go } = useApp();

  return (
    <div className="wrap guide-page">
      <div className="topics-head">
        <div>
          <h2>Tờ hướng dẫn sử dụng Vườn Ý Tưởng</h2>
          <p>Dành cho thầy cô — đọc 3 phút là dùng được. Có thể in ra giấy phát cho tổ chuyên môn.</p>
        </div>
        <div className="head-tools no-print">
          <button className="btn solid" onClick={() => window.print()}>In tờ hướng dẫn</button>
        </div>
      </div>

      {/* 1. Dạy trên lớp */}
      <motion.section className="sheet guide-sheet" {...rise}>
        <h3><span className="badge">1</span> Dạy trên lớp với chủ đề có sẵn</h3>
        <ol className="guide-steps">
          <li>Ở trang chủ, chọn <b>bộ sách</b> lớp mình dạy (Kết nối tri thức / Chân trời sáng tạo / Cánh diều / cả 3).</li>
          <li>Chọn <b>khối lớp</b> → chọn <b>chủ đề</b> Tập làm văn.</li>
          <li>Dẫn dắt lớp theo <b>4 bước</b> hiện trên màn hình — mỗi khối lớp có hoạt động tìm ý khác nhau:</li>
        </ol>
        <table className="guide-table">
          <thead>
            <tr><th>Khối</th><th>Bước 3 — Tìm ý</th><th>Bước 4 — Viết</th></tr>
          </thead>
          <tbody>
            <tr><td><b>Lớp 1</b></td><td>Nói câu theo mẫu (chỗ trống <span className="blank">___</span> để mỗi em điền một kiểu)</td><td>Tập viết 1–2 câu</td></tr>
            <tr><td><b>Lớp 2–3</b></td><td>Trả lời chuỗi câu hỏi — gõ ý các em phát biểu, ý tự hiện lại thành dàn ý ở bước viết</td><td>Viết đoạn 4–9 câu với khung mở / kết</td></tr>
            <tr><td><b>Lớp 4–5</b></td><td>Sơ đồ tư duy — bấm chọn nhánh (viền vàng) rồi bấm từ ở bước 2 để thêm nhanh</td><td>Chọn khung mở bài / kết bài rồi viết đoạn, bài văn</td></tr>
          </tbody>
        </table>
        <p className="guide-tip"><Icon name="bulb" size={16} /> Mẹo lớp học: dán link <b>YouTube</b> ở bước 1 để chiếu video; dùng nút <b>Hẹn 5 / 10 phút</b> khi cho học sinh viết; bấm <b>In phiếu học tập</b> để phát phiếu có sơ đồ ý + dòng kẻ trống.</p>
      </motion.section>

      {/* 2. Soạn giáo án */}
      <motion.section className="sheet guide-sheet" {...rise}>
        <h3><span className="badge">2</span> Soạn giáo án của riêng mình</h3>
        <ol className="guide-steps">
          <li><b>Cách nhanh nhất:</b> mở một chủ đề mẫu gần giống bài định dạy → bấm <b>Sửa thành giáo án của tôi</b> → mọi nội dung được chép sẵn, chỉ việc sửa lại.</li>
          <li><b>Soạn từ đầu:</b> menu <b>Giáo án của tôi</b> → <b>＋ Soạn giáo án mới</b> → chọn khối lớp (biểu mẫu tự đổi theo khối: mẫu câu / câu hỏi tìm ý / nhánh sơ đồ).</li>
          <li>Các ô nhập nhiều mục thì <b>mỗi dòng một mục</b>; nhánh sơ đồ và câu hỏi tìm ý có thể thêm gợi ý sau dấu <code>|</code> (ví dụ: <i>Gốc – thân – cành | To nhỏ, màu sắc?</i>).</li>
          <li>Mục <b>Ghi chú giáo án</b> (yêu cầu cần đạt, chuẩn bị, tiến trình): ghi cả "tuần mấy, bộ sách nào" của lớp mình — sẽ hiện cho thầy cô khi mở bài và khi in.</li>
          <li>Giáo án lưu ngay trên máy. Dùng <b>Xuất tệp sao lưu / Nhập tệp</b> để chuyển máy hoặc chia sẻ cho đồng nghiệp (qua Zalo, USB...).</li>
        </ol>
      </motion.section>

      {/* 3. Lịch dạy */}
      <motion.section className="sheet guide-sheet" {...rise}>
        <h3><span className="badge">3</span> Xếp lịch dạy tuần</h3>
        <ol className="guide-steps">
          <li>Menu <b>Lịch dạy</b> → tuần hiện tại (Thứ Hai → Thứ Bảy), ô hôm nay viền vàng.</li>
          <li>Bấm <b>＋ Thêm tiết dạy</b> vào ngày muốn dạy: nhập tiết, tên lớp (4A, 5B...), chọn bài (chủ đề mẫu hoặc giáo án của bạn), ghi chú nếu cần.</li>
          <li>Đến giờ dạy: bấm <b>Mở bài dạy</b> ngay trên ô lịch — bài hiện lên màn chiếu. Dạy xong đánh dấu <b>Đã dạy</b>.</li>
          <li>Bấm <b>In lịch báo giảng</b> để nộp tổ chuyên môn.</li>
        </ol>
      </motion.section>

      {/* 4. Quản lý ảnh */}
      <motion.section className="sheet guide-sheet" {...rise}>
        <h3><span className="badge">4</span> Thay ảnh bài dạy theo ý mình</h3>
        <ol className="guide-steps">
          <li>Menu <b>Quản lý ảnh</b> → tìm bài dạy (lọc theo khối hoặc gõ tên).</li>
          <li>Mỗi bài có các ô ảnh (Ảnh 1 là ảnh bìa): bấm <b>Tải tệp lên</b> để chọn ảnh từ máy, hoặc <b>Link URL</b> để dán ảnh trên mạng.</li>
          <li>Đã kết nối <b>Supabase</b> (tab Cấu hình): ảnh tải lên đám mây — mọi máy đều thấy chung. Chưa kết nối: ảnh lưu trên máy đang dùng.</li>
          <li>Muốn quay về ảnh gốc: bấm nút <Icon name="close" size={13} /> ở ô ảnh, hoặc <b>Khôi phục tất cả ảnh mặc định</b> của bài đó.</li>
        </ol>
      </motion.section>

      {/* 5. Tinh thần sử dụng */}
      <motion.section className="sheet guide-sheet" {...rise}>
        <h3><span className="badge">5</span> Tinh thần của công cụ: gợi mở, không áp đặt</h3>
        <ul className="guide-steps">
          <li>Website <b>không cung cấp bài văn mẫu</b> — chỉ có ảnh để quan sát, từ ngữ để lựa, câu hỏi để tìm ý và khung câu có chỗ trống.</li>
          <li>Hãy để học sinh <b>nói trước khi viết</b>: mỗi em điền chỗ trống một kiểu, góp một ý vào sơ đồ — sản phẩm của lớp sẽ không giống bất kì lớp nào khác.</li>
          <li>Khen những cách diễn đạt <b>riêng</b> của học sinh, kể cả khi chưa tròn trịa — đó chính là mục tiêu của tiết học.</li>
        </ul>
        <p className="guide-tip no-print"><Icon name="bulb" size={16} /> Bắt đầu ngay: <button className="linklike" onClick={() => go("home")}>chọn một chủ đề</button> hoặc <button className="linklike" onClick={() => go("editor", {})}>soạn giáo án đầu tiên</button> của bạn.</p>
      </motion.section>
    </div>
  );
}
