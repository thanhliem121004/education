/* ============================================================
   VƯỜN Ý TƯỞNG – Chủ đề lớp 1, 2, 3
   Lớp 1 (chặng A): quan sát tranh → nói câu theo mẫu → viết 1–2 câu
     → dùng trường "frames" (mẫu câu có chỗ trống).
   Lớp 2–3 (chặng B): quan sát → từ ngữ → trả lời câu hỏi tìm ý → viết đoạn
     → dùng trường "outline" (chuỗi câu hỏi dàn ý).
   ============================================================ */

import { TOPICS } from "./topics45.js";

TOPICS.unshift(
  /* ==================== LỚP 1 ==================== */
  {
    id: "l1-giadinh",
    grade: 1,
    emoji: "👨‍👩‍👧",
    title: "Gia đình của em",
    genre: "Nói và viết câu",
    intro: "Nhìn tranh, cùng nói về những người thân yêu rồi tập viết câu về gia đình mình.",
    images: [
      { url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80", cap: "Gia đình vui vẻ bên nhau", emoji: "👨‍👩‍👧" },
      { url: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1200&q=80", cap: "Bàn tay yêu thương", emoji: "🤗" }
    ],
    questions: [
      "Tranh vẽ những ai?",
      "Mọi người trong tranh đang làm gì?",
      "Gia đình em có mấy người? Đó là những ai?",
      "Em thích làm gì cùng gia đình nhất?"
    ],
    wordGroups: [
      { name: "Người thân", icon: "👪", words: ["bố", "mẹ", "ông", "bà", "anh trai", "chị gái", "em bé"] },
      { name: "Việc làm", icon: "🍚", words: ["nấu cơm", "đọc truyện", "tưới cây", "chơi cùng em", "dạy em học"] },
      { name: "Tình cảm", icon: "💗", words: ["yêu thương", "vui vẻ", "đầm ấm", "quý mến"] }
    ],
    frames: [
      "Gia đình em có ___ người.",
      "Nhà em có bố, mẹ và ___.",
      "Mẹ em thường ___ cho em.",
      "Em yêu ___ nhất vì ___."
    ]
  },
  {
    id: "l1-convat",
    grade: 1,
    emoji: "🐶",
    title: "Con vật đáng yêu",
    genre: "Nói và viết câu",
    intro: "Nhìn tranh con vật, tập nói câu rồi viết câu về con vật em thích.",
    images: [
      { url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1200&q=80", cap: "Chú chó đang cười", emoji: "🐶" },
      { url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&q=80", cap: "Chú mèo mắt tròn xoe", emoji: "🐱" }
    ],
    questions: [
      "Tranh vẽ con gì?",
      "Con vật có bộ lông màu gì?",
      "Nó đang làm gì?",
      "Em thích con vật nào nhất? Vì sao?"
    ],
    wordGroups: [
      { name: "Tên con vật", icon: "🐾", words: ["con mèo", "con chó", "con gà", "con thỏ", "con cá vàng"] },
      { name: "Đặc điểm", icon: "🎨", words: ["xinh xắn", "tinh nghịch", "trắng muốt", "vàng óng", "nhỏ xíu"] },
      { name: "Hoạt động", icon: "🏃", words: ["chạy nhảy", "bơi lội", "gáy vang", "bắt chuột", "vẫy đuôi"] }
    ],
    frames: [
      "Đây là con ___.",
      "Con ___ có bộ lông ___.",
      "Nó đang ___.",
      "Em rất thích con ___."
    ]
  },
  {
    id: "l1-dochoi",
    grade: 1,
    emoji: "🧸",
    title: "Đồ chơi em thích",
    genre: "Nói và viết câu",
    intro: "Kể tên đồ chơi, nói câu về đồ chơi rồi viết câu về món đồ chơi em yêu.",
    images: [
      { url: "https://images.unsplash.com/photo-1562040506-a9b32cb51b94?w=1200&q=80", cap: "Chú gấu bông mềm mại", emoji: "🧸" }
    ],
    questions: [
      "Tranh vẽ đồ chơi gì?",
      "Đồ chơi ấy có màu gì?",
      "Em có đồ chơi nào ở nhà?",
      "Em thường chơi đồ chơi ấy như thế nào?"
    ],
    wordGroups: [
      { name: "Tên đồ chơi", icon: "🎁", words: ["gấu bông", "búp bê", "ô tô", "rô-bốt", "quả bóng", "bộ xếp hình"] },
      { name: "Đặc điểm", icon: "🎨", words: ["mềm mại", "xinh xắn", "tròn vo", "nhiều màu", "to ơi là to"] },
      { name: "Em chơi thế nào", icon: "🎮", words: ["ôm đi ngủ", "lắp ghép", "đá bóng", "giữ gìn cẩn thận"] }
    ],
    frames: [
      "Em có một ___.",
      "___ của em màu ___.",
      "Em thường ___ cùng ___.",
      "Em rất quý ___ của em."
    ]
  },
  {
    id: "l1-truonghoc",
    grade: 1,
    emoji: "🏫",
    title: "Trường của em",
    genre: "Nói và viết câu",
    intro: "Nói về trường, lớp, cô giáo và các bạn — rồi viết câu về nơi em học.",
    images: [
      { url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80", cap: "Lớp học của chúng em", emoji: "🏫" },
      { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80", cap: "Giờ học vui", emoji: "📚" }
    ],
    questions: [
      "Tranh vẽ cảnh gì?",
      "Các bạn trong tranh đang làm gì?",
      "Ở trường, em thích chỗ nào nhất?",
      "Giờ ra chơi em thường chơi trò gì?"
    ],
    wordGroups: [
      { name: "Ở trường có", icon: "🏫", words: ["lớp học", "sân trường", "thư viện", "cô giáo", "bạn bè"] },
      { name: "Hoạt động", icon: "🎈", words: ["học bài", "đọc sách", "nhảy dây", "đá cầu", "ca hát"] },
      { name: "Cảm xúc", icon: "💗", words: ["vui", "thích", "yêu quý", "háo hức"] }
    ],
    frames: [
      "Trường em tên là ___.",
      "Cô giáo em tên là ___.",
      "Giờ ra chơi, em cùng bạn ___.",
      "Em rất yêu ___ của em."
    ]
  },

  /* ==================== LỚP 2 ==================== */
  {
    id: "l2-nguoithan",
    grade: 2,
    emoji: "👨‍👩‍👧",
    title: "Kể về một người thân của em",
    genre: "Viết đoạn văn ngắn (4–5 câu)",
    intro: "Trả lời lần lượt các câu hỏi để tìm ý, rồi nối lại thành đoạn văn về người em yêu quý.",
    images: [
      { url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80", cap: "Khoảnh khắc bên người thân", emoji: "👨‍👩‍👧" }
    ],
    questions: [
      "Bức ảnh gợi cho em nhớ đến ai trong nhà mình?",
      "Người ấy thường làm gì cùng em?",
      "Nét mặt của mọi người trong ảnh thế nào?"
    ],
    wordGroups: [
      { name: "Nghề nghiệp", icon: "💼", words: ["giáo viên", "bác sĩ", "nông dân", "công nhân", "bộ đội", "nội trợ"] },
      { name: "Việc làm cùng em", icon: "🍀", words: ["đưa em đi học", "kể chuyện cho em nghe", "dạy em học bài", "nấu món em thích", "chơi cờ cùng em"] },
      { name: "Tình cảm", icon: "💗", words: ["yêu quý", "kính trọng", "biết ơn", "tự hào", "gần gũi"] }
    ],
    outline: [
      { q: "Người em kể là ai?", hint: "Bố, mẹ, ông, bà, anh, chị...?" },
      { q: "Người ấy bao nhiêu tuổi, làm nghề gì?", hint: "Khoảng bao nhiêu tuổi? Làm việc gì?" },
      { q: "Người ấy thường làm gì cùng em?", hint: "Một việc làm em nhớ nhất" },
      { q: "Tình cảm của em với người ấy thế nào?", hint: "Em yêu quý, biết ơn ra sao?" }
    ],
    openers: ["Trong gia đình, người em yêu quý nhất là ___."],
    closers: ["Em mong ___ luôn mạnh khoẻ, vui vẻ.", "Em rất yêu ___ của em."]
  },
  {
    id: "l2-dochoi",
    grade: 2,
    emoji: "🪁",
    title: "Tả một đồ chơi em thích",
    genre: "Viết đoạn văn ngắn (4–5 câu)",
    intro: "Quan sát đồ chơi bằng mắt, bằng tay rồi trả lời câu hỏi để tả món đồ chơi của em.",
    images: [
      { url: "https://images.unsplash.com/photo-1562040506-a9b32cb51b94?w=1200&q=80", cap: "Gấu bông đáng yêu", emoji: "🧸" }
    ],
    questions: [
      "Đồ chơi trong ảnh trông như thế nào?",
      "Em đoán xem sờ vào nó sẽ thấy thế nào?",
      "Đồ chơi em thích nhất ở nhà là gì?"
    ],
    wordGroups: [
      { name: "Hình dáng – màu sắc", icon: "🎨", words: ["tròn xoe", "nhỏ nhắn", "màu nâu mật ong", "đỏ tươi", "xinh xắn"] },
      { name: "Chất liệu – cảm giác", icon: "🖐️", words: ["mềm mại", "êm ái", "nhẵn bóng", "ấm áp"] },
      { name: "Em và đồ chơi", icon: "💗", words: ["ôm đi ngủ", "cất gọn gàng", "người bạn nhỏ", "món quà của ___"] }
    ],
    outline: [
      { q: "Đồ chơi em tả là gì? Ai mua hay tặng cho em?", hint: "Tên đồ chơi, dịp nào có nó" },
      { q: "Đồ chơi ấy có hình dáng, màu sắc thế nào?", hint: "To hay nhỏ? Màu gì?" },
      { q: "Bộ phận nào của nó em thích nhất?", hint: "Đôi mắt, chiếc nơ, bánh xe...?" },
      { q: "Em chơi và giữ gìn nó ra sao?", hint: "Chơi lúc nào? Cất ở đâu?" }
    ],
    openers: ["Món đồ chơi em thích nhất là ___."],
    closers: ["Em luôn giữ gìn ___ cẩn thận.", "___ là người bạn nhỏ của em."]
  },
  {
    id: "l2-convat",
    grade: 2,
    emoji: "🐈",
    title: "Kể về con vật nuôi mà em thích",
    genre: "Viết đoạn văn ngắn (4–5 câu)",
    intro: "Cùng nói về các con vật nuôi quen thuộc rồi viết đoạn ngắn về con vật em thích.",
    images: [
      { url: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=1200&q=80", cap: "Mèo con tinh nghịch", emoji: "🐱" },
      { url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1200&q=80", cap: "Chú chó thân thiện", emoji: "🐶" }
    ],
    questions: [
      "Con vật trong ảnh đang làm gì?",
      "Nhà em (hoặc nhà ông bà) nuôi con vật gì?",
      "Con vật ấy có gì đáng yêu?"
    ],
    wordGroups: [
      { name: "Bộ lông – hình dáng", icon: "🎨", words: ["mượt mà", "vàng óng", "trắng tinh", "tròn trịa", "bé xíu"] },
      { name: "Hoạt động", icon: "🏃", words: ["chạy lon ton", "bắt chuột", "vẫy đuôi mừng", "kêu meo meo", "quấn quýt bên em"] },
      { name: "Em chăm sóc", icon: "🍚", words: ["cho ăn", "tắm cho nó", "vuốt ve", "chơi cùng"] }
    ],
    outline: [
      { q: "Con vật em kể là con gì? Nuôi từ bao giờ?", hint: "Tên gọi của nó là gì?" },
      { q: "Nó có đặc điểm gì nổi bật?", hint: "Bộ lông, đôi mắt, cái đuôi..." },
      { q: "Nó thường làm gì khiến em thích thú?", hint: "Một thói quen đáng yêu" },
      { q: "Em chăm sóc và yêu quý nó thế nào?", hint: "Cho ăn, chơi cùng, coi như bạn" }
    ],
    openers: ["Nhà em nuôi một ___ rất đáng yêu."],
    closers: ["Em coi ___ như người bạn thân của mình.", "Em sẽ chăm sóc ___ thật tốt."]
  },
  {
    id: "l2-viecnha",
    grade: 2,
    emoji: "🧹",
    title: "Kể về một việc em đã làm giúp bố mẹ",
    genre: "Viết đoạn văn ngắn (4–5 câu)",
    intro: "Nhớ lại một lần em giúp việc nhà, kể theo trình tự: làm gì → làm thế nào → cảm thấy ra sao.",
    images: [
      { url: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1200&q=80", cap: "Cùng nhau làm việc nhà", emoji: "🏠" }
    ],
    questions: [
      "Ở nhà, em thường giúp bố mẹ những việc gì?",
      "Việc nào em tự làm được một mình?",
      "Khi em làm xong, bố mẹ nói gì với em?"
    ],
    wordGroups: [
      { name: "Việc nhà", icon: "🧹", words: ["quét nhà", "gấp quần áo", "tưới cây", "nhặt rau", "rửa cốc chén", "trông em"] },
      { name: "Làm như thế nào", icon: "💪", words: ["cẩn thận", "gọn gàng", "nhanh nhẹn", "sạch bong", "khéo léo"] },
      { name: "Cảm xúc", icon: "💗", words: ["vui lắm", "tự hào", "được mẹ khen", "thấy mình lớn hơn"] }
    ],
    outline: [
      { q: "Em đã làm việc gì? Vào lúc nào?", hint: "Hôm ấy là ngày nào?" },
      { q: "Em làm việc ấy như thế nào?", hint: "Kể từng bước em làm" },
      { q: "Kết quả ra sao? Bố mẹ nói gì?", hint: "Nhà cửa thế nào? Lời khen?" },
      { q: "Em cảm thấy thế nào sau khi làm?", hint: "Vui, tự hào, muốn làm nữa?" }
    ],
    openers: ["Chủ nhật vừa rồi, em đã giúp mẹ ___."],
    closers: ["Được ___ khen, em vui lắm.", "Em sẽ chăm làm việc nhà nhiều hơn nữa."]
  },
  {
    id: "l2-cogiao",
    grade: 2,
    emoji: "👩‍🏫",
    title: "Kể về thầy cô giáo của em",
    genre: "Viết đoạn văn ngắn (4–5 câu)",
    intro: "Nói về thầy cô em yêu quý rồi viết đoạn văn ngắn kể về thầy cô ấy.",
    images: [
      { url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80", cap: "Cô giáo và lớp học", emoji: "👩‍🏫" }
    ],
    questions: [
      "Cô giáo trong ảnh đang làm gì?",
      "Thầy cô của em tên là gì, dạy em lớp mấy?",
      "Điều gì ở thầy cô làm em nhớ nhất?"
    ],
    wordGroups: [
      { name: "Dáng vẻ", icon: "🙂", words: ["hiền hậu", "trẻ trung", "nụ cười tươi", "giọng nói ấm áp", "mái tóc dài"] },
      { name: "Việc làm", icon: "📝", words: ["giảng bài dễ hiểu", "kể chuyện hay", "uốn nắn từng nét chữ", "động viên chúng em", "chăm lo cho lớp"] },
      { name: "Tình cảm", icon: "💗", words: ["yêu quý", "kính trọng", "biết ơn", "như người mẹ hiền"] }
    ],
    outline: [
      { q: "Thầy cô em kể là ai? Dạy em năm lớp mấy?", hint: "Tên thầy cô là gì?" },
      { q: "Thầy cô trông như thế nào?", hint: "Dáng vẻ, nụ cười, giọng nói..." },
      { q: "Thầy cô thường làm gì cho lớp em?", hint: "Một việc làm em nhớ nhất" },
      { q: "Em có tình cảm gì với thầy cô?", hint: "Yêu quý, biết ơn thế nào?" }
    ],
    openers: ["Người dạy dỗ em từng ngày là ___."],
    closers: ["Em rất yêu quý và biết ơn ___.", "Em sẽ chăm ngoan để ___ vui lòng."]
  },

  /* ==================== LỚP 3 ==================== */
  {
    id: "l3-dovat",
    grade: 3,
    emoji: "⏰",
    title: "Tả một đồ vật em yêu thích",
    genre: "Viết đoạn văn (7–9 câu)",
    intro: "Quan sát kĩ một đồ vật quen thuộc — chiếc đồng hồ, cặp sách, hộp bút — rồi tả bằng lời của em.",
    images: [
      { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80", cap: "Góc học tập thân quen", emoji: "🎒" }
    ],
    questions: [
      "Trên bàn học của em có những đồ vật gì?",
      "Đồ vật nào em dùng hằng ngày và quý nhất?",
      "Nhắm mắt lại, em có tả được nó không: màu gì, to nhỏ ra sao?"
    ],
    wordGroups: [
      { name: "Hình dáng – màu sắc", icon: "🎨", words: ["vuông vắn", "tròn trịa", "xanh da trời", "hồng phấn", "in hình ___ ngộ nghĩnh", "còn thơm mùi mới"] },
      { name: "Các bộ phận", icon: "🔩", words: ["chiếc quai xinh xắn", "hàng khuy sáng bóng", "kim giây chạy tích tắc", "ngăn nhỏ đựng bút", "khoá kéo êm ru"] },
      { name: "Công dụng – giữ gìn", icon: "🌟", words: ["gọi em dậy đúng giờ", "đựng sách vở gọn gàng", "cùng em đến lớp", "lau sạch sẽ", "cất cẩn thận"] }
    ],
    outline: [
      { q: "Đồ vật em tả là gì? Em có nó từ khi nào?", hint: "Ai mua/tặng? Dịp nào?" },
      { q: "Nhìn bao quát, nó có hình dáng, màu sắc gì?", hint: "To bằng gì? Màu chủ đạo?" },
      { q: "Từng bộ phận của nó thế nào?", hint: "Tả 2–3 bộ phận nổi bật" },
      { q: "Nó giúp ích gì cho em hằng ngày?", hint: "Công dụng của đồ vật" },
      { q: "Em giữ gìn và quý nó ra sao?", hint: "Tình cảm của em" }
    ],
    openers: [
      "Trên bàn học của em, ___ là đồ vật em quý nhất.",
      "Đầu năm học, ___ mua cho em một ___ mới tinh."
    ],
    closers: [
      "___ đã trở thành người bạn thân thiết của em.",
      "Em sẽ giữ gìn ___ thật cẩn thận để dùng được lâu."
    ]
  },
  {
    id: "l3-hoatdong",
    grade: 3,
    emoji: "🎏",
    title: "Kể lại một hoạt động em tham gia ở trường",
    genre: "Viết đoạn văn (7–9 câu)",
    intro: "Buổi sinh hoạt sao, giờ chào cờ, hội thi của lớp... chọn một hoạt động và kể lại theo trình tự.",
    images: [
      { url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80", cap: "Hoạt động sôi nổi ở lớp", emoji: "🎏" },
      { url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&q=80", cap: "Ngày hội đọc sách", emoji: "📚" }
    ],
    questions: [
      "Tuần qua lớp mình có hoạt động gì vui?",
      "Em đã tham gia phần nào trong hoạt động ấy?",
      "Khoảnh khắc nào làm em nhớ nhất?"
    ],
    wordGroups: [
      { name: "Hoạt động", icon: "🎪", words: ["thi kể chuyện", "văn nghệ chào mừng", "trồng cây", "quyên góp sách", "thi kéo co", "sinh hoạt sao"] },
      { name: "Không khí", icon: "🔊", words: ["rộn ràng", "náo nức", "tiếng vỗ tay giòn giã", "hào hứng", "cổ vũ nhiệt tình"] },
      { name: "Cảm xúc", icon: "💗", words: ["hồi hộp", "vui sướng", "tự hào", "gắn bó với lớp hơn", "mong được tham gia nữa"] }
    ],
    outline: [
      { q: "Hoạt động ấy là gì? Diễn ra khi nào, ở đâu?", hint: "Giới thiệu chung" },
      { q: "Mở đầu, mọi người chuẩn bị và làm gì?", hint: "Không khí lúc bắt đầu" },
      { q: "Em và các bạn đã tham gia như thế nào?", hint: "Kể 2–3 việc theo thứ tự" },
      { q: "Điều gì thú vị nhất trong hoạt động?", hint: "Một chi tiết đáng nhớ" },
      { q: "Kết thúc, em cảm thấy thế nào?", hint: "Cảm xúc và mong muốn" }
    ],
    openers: [
      "Sáng thứ ___ vừa qua, lớp em đã có một buổi ___ thật vui.",
      "Em vẫn nhớ mãi buổi ___ của lớp em hôm ấy."
    ],
    closers: [
      "Buổi ___ kết thúc trong tiếng cười giòn tan.",
      "Em mong lớp sẽ có thêm nhiều hoạt động như thế."
    ]
  },
  {
    id: "l3-canhdep",
    grade: 3,
    emoji: "🏞️",
    title: "Nêu cảm xúc về một cảnh đẹp quê hương",
    genre: "Viết đoạn văn nêu tình cảm, cảm xúc",
    intro: "Ngắm một cảnh đẹp quen thuộc — dòng sông, cánh đồng, con đường làng — và nói lên cảm xúc của em.",
    images: [
      { url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80", cap: "Cánh đồng vàng lúc chiều về", emoji: "🌾" },
      { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80", cap: "Hồ nước trong xanh", emoji: "🏞️" }
    ],
    questions: [
      "Cảnh trong ảnh có gì đẹp?",
      "Quê em (hoặc nơi em ở) có cảnh nào đẹp như vậy?",
      "Đứng trước cảnh ấy, em muốn reo lên điều gì?"
    ],
    wordGroups: [
      { name: "Cảnh vật", icon: "🌄", words: ["cánh đồng lúa", "dòng sông quê", "con đường làng", "hàng tre xanh", "bãi biển", "đồi chè"] },
      { name: "Từ ngữ gợi tả", icon: "🎨", words: ["xanh mướt", "vàng óng", "lấp lánh", "mênh mông", "uốn lượn", "thơ mộng"] },
      { name: "Từ ngữ cảm xúc", icon: "💗", words: ["yêu tha thiết", "bình yên", "xao xuyến", "tự hào", "muốn ngắm mãi", "nhớ da diết"] }
    ],
    outline: [
      { q: "Cảnh đẹp em muốn nói đến là cảnh nào, ở đâu?", hint: "Em thấy cảnh ấy khi nào?" },
      { q: "Cảnh ấy có gì khiến em thích ngắm?", hint: "Màu sắc, âm thanh, không khí" },
      { q: "Ngắm cảnh ấy, em cảm thấy thế nào?", hint: "Dùng từ ngữ chỉ cảm xúc" },
      { q: "Em mong muốn điều gì cho cảnh đẹp ấy?", hint: "Giữ gìn, bảo vệ ra sao?" }
    ],
    openers: [
      "Em yêu biết bao ___ quê em.",
      "Mỗi lần ngắm ___, lòng em lại thấy ___."
    ],
    closers: [
      "Em mong ___ mãi đẹp như thế.",
      "Em sẽ cùng mọi người giữ gìn để ___ luôn sạch đẹp."
    ]
  },
  {
    id: "l3-banthan",
    grade: 3,
    emoji: "🤝",
    title: "Kể về người bạn thân của em",
    genre: "Viết đoạn văn (7–9 câu)",
    intro: "Người bạn cùng học, cùng chơi với em mỗi ngày — hãy kể về bạn ấy bằng tình cảm của em.",
    images: [
      { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80", cap: "Cùng nhau học bài", emoji: "📚" }
    ],
    questions: [
      "Người bạn thân nhất của em là ai?",
      "Em và bạn thường cùng nhau làm gì?",
      "Bạn ấy có điểm gì đáng quý?"
    ],
    wordGroups: [
      { name: "Ngoại hình", icon: "🙂", words: ["dáng nhỏ nhắn", "nước da trắng hồng", "đôi mắt sáng", "nụ cười tươi", "mái tóc đen nhánh"] },
      { name: "Tính nết", icon: "🌟", words: ["hiền lành", "vui tính", "chăm học", "tốt bụng", "hay giúp đỡ bạn"] },
      { name: "Kỉ niệm cùng nhau", icon: "🎈", words: ["cùng làm bài khó", "chơi nhảy dây", "cho em mượn bút", "đợi nhau đi học", "chia nhau chiếc bánh"] }
    ],
    outline: [
      { q: "Bạn thân của em tên gì? Quen nhau từ bao giờ?", hint: "Học cùng lớp hay ở gần nhà?" },
      { q: "Bạn ấy trông như thế nào?", hint: "Vài nét về ngoại hình" },
      { q: "Tính nết bạn ấy ra sao? Kể một việc cho thấy điều đó.", hint: "Một lần bạn giúp em..." },
      { q: "Em và bạn thường cùng nhau làm gì?", hint: "Học, chơi, ước mơ chung" },
      { q: "Em mong điều gì cho tình bạn của hai đứa?", hint: "Thân nhau mãi thế nào?" }
    ],
    openers: [
      "Em có một người bạn rất thân, đó là ___.",
      "Từ hồi lớp ___, em và ___ đã luôn có nhau."
    ],
    closers: [
      "Em mong chúng em mãi là đôi bạn thân.",
      "Có ___ bên cạnh, ngày nào đi học cũng vui."
    ]
  },
  {
    id: "l3-viectot",
    grade: 3,
    emoji: "🌟",
    title: "Kể lại một việc tốt em đã làm",
    genre: "Viết đoạn văn (7–9 câu)",
    intro: "Nhặt được của rơi trả người mất, giúp cụ già qua đường, cho bạn mượn đồ... kể lại việc tốt của em.",
    images: [
      { url: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1200&q=80", cap: "Trao nhau yêu thương", emoji: "🤲" }
    ],
    questions: [
      "Em đã từng làm việc tốt nào?",
      "Việc ấy diễn ra ở đâu, lúc nào?",
      "Sau khi làm việc tốt, em cảm thấy thế nào?"
    ],
    wordGroups: [
      { name: "Việc tốt", icon: "🌟", words: ["nhặt được của rơi", "giúp bạn học bài", "dắt cụ già qua đường", "nhường ghế trên xe buýt", "chăm sóc cây xanh", "quyên góp sách vở"] },
      { name: "Hành động", icon: "💪", words: ["vội chạy đến", "nhẹ nhàng đỡ", "lễ phép thưa", "tìm cách trả lại", "không ngần ngại"] },
      { name: "Cảm xúc", icon: "💗", words: ["vui suốt cả ngày", "lòng nhẹ nhõm", "được khen ngợi", "thấy mình có ích", "muốn làm nhiều việc tốt hơn"] }
    ],
    outline: [
      { q: "Việc tốt em làm là việc gì? Ở đâu, khi nào?", hint: "Hoàn cảnh lúc đó" },
      { q: "Em đã làm việc ấy như thế nào?", hint: "Kể từng hành động theo thứ tự" },
      { q: "Người được giúp nói gì, tỏ thái độ ra sao?", hint: "Lời cảm ơn, nụ cười..." },
      { q: "Em cảm thấy thế nào sau việc làm ấy?", hint: "Niềm vui khi làm việc tốt" }
    ],
    openers: [
      "Tuần trước, em đã làm được một việc tốt khiến em vui mãi.",
      "Trên đường đi học về hôm ấy, em bỗng thấy ___."
    ],
    closers: [
      "Việc tuy nhỏ nhưng làm em vui suốt cả ngày.",
      "Em tự nhủ sẽ làm thêm thật nhiều việc tốt nữa."
    ]
  }
);
