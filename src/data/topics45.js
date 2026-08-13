/* ============================================================
   VƯỜN Ý TƯỞNG – Dữ liệu chủ đề Tập làm văn lớp 4 & lớp 5
   Mỗi chủ đề gồm: ảnh quan sát, câu hỏi gợi mở, kho từ ngữ,
   nhánh sơ đồ tư duy, khung mở bài / kết bài.
   ============================================================ */

export const TOPICS = [
  /* ==================== LỚP 4 ==================== */
  {
    id: "l4-convat",
    grade: 4,
    emoji: "🐱",
    title: "Tả con vật em yêu thích",
    genre: "Miêu tả con vật",
    intro: "Chú mèo, chú chó hay chú gà con... người bạn nhỏ nào đáng yêu nhất với em?",
    images: [
      { url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&q=80", cap: "Chú mèo với đôi mắt tròn xoe", emoji: "🐱" },
      { url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1200&q=80", cap: "Chú chó đang cười thật tươi", emoji: "🐶" },
      { url: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=1200&q=80", cap: "Mèo con tinh nghịch", emoji: "😺" }
    ],
    questions: [
      "Con vật trong ảnh là con gì? Nó đang làm gì?",
      "Bộ lông, đôi mắt, cái đuôi... của nó trông như thế nào?",
      "Em thử bắt chước tiếng kêu của nó xem nào!",
      "Nhà em nuôi con vật nào? Nó có gì đáng yêu nhất?"
    ],
    wordGroups: [
      { name: "Hình dáng", icon: "🔍", words: ["tròn xoay như cuộn len", "nhỏ nhắn", "mập mạp", "thon dài", "oai vệ", "lũn cũn", "bé xíu"] },
      { name: "Bộ lông – màu sắc", icon: "🎨", words: ["mượt như nhung", "vàng óng", "đen tuyền", "tam thể", "xù bông", "trắng muốt", "vằn vện"] },
      { name: "Hoạt động", icon: "🏃", words: ["rình chuột", "vẫy đuôi rối rít", "cuộn tròn sưởi nắng", "chạy lon ton", "dụi đầu vào chân em", "vờn cuộn len", "đánh hơi khắp nhà"] },
      { name: "Tiếng kêu", icon: "🔊", words: ["meo meo nũng nịu", "gâu gâu vang xóm", "gừ gừ khe khẽ", "chiêm chiếp", "ò ó o vang trời"] },
      { name: "Tình cảm", icon: "💗", words: ["quấn quýt", "trung thành", "tinh nghịch", "như một người bạn nhỏ", "đáng yêu vô cùng"] }
    ],
    branches: [
      { title: "Con vật ấy là ai?", hint: "Con gì? Của ai? Nuôi từ bao giờ?" },
      { title: "Hình dáng bên ngoài", hint: "Lông, mắt, tai, đuôi, chân..." },
      { title: "Thói quen – hoạt động", hint: "Ăn, ngủ, chơi đùa thế nào?" },
      { title: "Kỉ niệm của em với nó", hint: "Một lần đáng nhớ..." },
      { title: "Tình cảm của em", hint: "Em yêu quý, chăm sóc nó ra sao?" }
    ],
    openers: [
      "Trong nhà em, ___ là người bạn nhỏ mà em yêu quý nhất.",
      "Sinh nhật năm ngoái, em được ___ tặng một chú ___ xinh xắn.",
      "Mỗi lần em đi học về, ___ lại chạy ra đón em từ đầu ngõ."
    ],
    closers: [
      "Em xem ___ như một người bạn thân thiết và sẽ ___.",
      "Em mong ___ luôn khoẻ mạnh để ngày nào cũng ___ cùng em.",
      "Càng ngày em càng yêu ___ vì ___."
    ]
  },
  {
    id: "l4-caycoi",
    grade: 4,
    emoji: "🌳",
    title: "Tả cây bóng mát trên sân trường",
    genre: "Miêu tả cây cối",
    intro: "Cây phượng, cây bàng hay cây bằng lăng... người bạn xanh nào che mát cho em mỗi giờ ra chơi?",
    images: [
      { url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80", cap: "Tán cây xoè rộng như chiếc ô khổng lồ", emoji: "🌳" },
      { url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80", cap: "Nắng xuyên qua vòm lá xanh um", emoji: "🍃" }
    ],
    questions: [
      "Cây trong ảnh có gì nổi bật? Tán lá trông giống hình gì?",
      "Sân trường mình có cây gì? Cây ấy đứng ở đâu?",
      "Gốc cây, thân cây sờ vào cảm thấy thế nào?",
      "Giờ ra chơi, dưới gốc cây thường có những hoạt động gì?"
    ],
    wordGroups: [
      { name: "Gốc – thân – rễ", icon: "🪵", words: ["xù xì", "to bằng vòng tay hai bạn ôm", "rễ nổi ngoằn ngoèo", "vững chãi", "nâu sẫm", "mốc thếch"] },
      { name: "Tán lá", icon: "🍃", words: ["xoè rộng như chiếc ô khổng lồ", "xanh um", "rợp mát cả góc sân", "rì rào trong gió", "lấp lánh nắng"] },
      { name: "Hoa – quả – mùa", icon: "🌺", words: ["đỏ rực như lửa", "tím biếc", "chi chít nụ", "báo hè về", "rụng đầy gốc như trải thảm"] },
      { name: "Quanh gốc cây", icon: "🐦", words: ["chim chóc ríu rít", "giờ ra chơi rộn ràng", "bóng mát dịu êm", "ghế đá thân quen", "tiếng ve ngân vang"] },
      { name: "Tình cảm", icon: "💗", words: ["gắn bó", "người bạn của tuổi học trò", "che chở", "nhớ mãi không quên"] }
    ],
    branches: [
      { title: "Cây gì? Ở đâu?", hint: "Ai trồng? Trồng từ bao giờ?" },
      { title: "Gốc – thân – cành – rễ", hint: "To, nhỏ, màu gì, sờ vào ra sao?" },
      { title: "Lá – hoa – quả", hint: "Theo mùa cây thay đổi thế nào?" },
      { title: "Cây với chúng em", hint: "Giờ ra chơi, chim chóc, tiếng ve..." },
      { title: "Tình cảm của em", hint: "Em muốn nói gì với cây?" }
    ],
    openers: [
      "Giữa sân trường em sừng sững một cây ___ không biết đã bao nhiêu tuổi.",
      "Không biết cây ___ được trồng từ bao giờ, chỉ biết khi em vào lớp Một, cây đã ___.",
      "Trong sân trường, em thích nhất là cây ___ đứng cạnh ___."
    ],
    closers: [
      "Cây ___ như một người bạn lớn, ngày ngày ___ cho chúng em.",
      "Mai này xa trường, em sẽ nhớ mãi ___.",
      "Em mong cây ___ mãi xanh tươi để ___."
    ]
  },
  {
    id: "l4-dovat",
    grade: 4,
    emoji: "🧸",
    title: "Tả đồ chơi hoặc đồ vật em yêu thích",
    genre: "Miêu tả đồ vật",
    intro: "Chú gấu bông, chiếc cặp sách hay hộp bút màu... món đồ nào luôn ở bên em?",
    images: [
      { url: "https://images.unsplash.com/photo-1562040506-a9b32cb51b94?w=1200&q=80", cap: "Chú gấu bông mềm mại", emoji: "🧸" },
      { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80", cap: "Góc học tập với những đồ vật thân quen", emoji: "🎒" }
    ],
    questions: [
      "Món đồ trong ảnh có màu sắc, hình dáng thế nào?",
      "Em có món đồ chơi hay đồ dùng nào yêu thích nhất?",
      "Ai đã tặng hoặc mua nó cho em? Vào dịp nào?",
      "Nếu món đồ ấy biết nói, nó sẽ kể gì về em nhỉ?"
    ],
    wordGroups: [
      { name: "Hình dáng – kích thước", icon: "📐", words: ["nhỏ gọn", "vuông vắn", "tròn trịa", "to bằng ___", "xinh xắn", "vừa tay em ôm"] },
      { name: "Màu sắc – chất liệu", icon: "🎨", words: ["mềm mại như bông", "nâu sô-cô-la", "hồng phấn", "bóng loáng", "êm ái", "sặc sỡ"] },
      { name: "Các bộ phận", icon: "🔩", words: ["đôi mắt đen láy như hạt nhãn", "chiếc nơ đỏ thắm", "khoá kéo sáng bóng", "quai đeo chắc chắn", "ngăn nhỏ xinh xinh"] },
      { name: "Em dùng – em chơi", icon: "🎮", words: ["ôm vào lòng mỗi tối", "kể chuyện cho nó nghe", "đồng hành đến lớp", "giữ gìn cẩn thận", "lau chùi sạch sẽ"] },
      { name: "Tình cảm", icon: "💗", words: ["người bạn nhỏ", "món quà kỉ niệm", "quý hơn vàng", "không thể thiếu"] }
    ],
    branches: [
      { title: "Món đồ ấy là gì?", hint: "Ai tặng/mua? Vào dịp nào?" },
      { title: "Bao quát bên ngoài", hint: "Hình dáng, kích thước, màu sắc, chất liệu" },
      { title: "Từng bộ phận", hint: "Chi tiết nào đáng yêu nhất?" },
      { title: "Em dùng nó thế nào?", hint: "Chơi, học, giữ gìn ra sao?" },
      { title: "Vì sao em yêu quý?", hint: "Kỉ niệm gắn với món đồ" }
    ],
    openers: [
      "Trong góc học tập của em, ___ là món đồ em nâng niu nhất.",
      "Nhân dịp ___, ___ đã tặng em một ___ thật đẹp.",
      "Em có rất nhiều đồ chơi, nhưng thân thiết nhất với em vẫn là ___."
    ],
    closers: [
      "Em sẽ giữ gìn ___ thật cẩn thận vì ___.",
      "___ không chỉ là một món đồ mà còn là ___.",
      "Mỗi lần nhìn ___, em lại nhớ đến ___."
    ]
  },
  {
    id: "l4-hoatdong",
    grade: 4,
    emoji: "🎪",
    title: "Thuật lại một hoạt động ở trường em",
    genre: "Thuật lại sự việc",
    intro: "Ngày hội đọc sách, hội thi văn nghệ hay buổi tham quan... sự kiện nào làm em nhớ mãi?",
    images: [
      { url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80", cap: "Lớp học rộn ràng ngày hội", emoji: "🎪" },
      { url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&q=80", cap: "Ngày hội đọc sách", emoji: "📚" }
    ],
    questions: [
      "Trường mình vừa tổ chức hoạt động gì? Ở đâu, khi nào?",
      "Hôm ấy có những ai tham gia? Không khí thế nào?",
      "Em nhớ nhất khoảnh khắc nào? Vì sao?",
      "Kết thúc hoạt động, em cảm thấy ra sao?"
    ],
    wordGroups: [
      { name: "Thời gian – mở đầu", icon: "🕐", words: ["sáng thứ Hai đầu tuần", "từ sớm tinh mơ", "đúng 8 giờ", "sau lễ chào cờ", "trước ngày hội một tuần"] },
      { name: "Quang cảnh", icon: "🎏", words: ["cờ hoa rực rỡ", "băng rôn đỏ thắm", "sân khấu lộng lẫy", "gian hàng san sát", "sân trường như ngày Tết"] },
      { name: "Hoạt động diễn ra", icon: "🎭", words: ["biểu diễn văn nghệ", "thi kéo co gay cấn", "trưng bày sản phẩm", "cổ vũ vang dội", "xếp hàng ngay ngắn", "hào hứng tham gia"] },
      { name: "Âm thanh – không khí", icon: "🔊", words: ["tiếng reo hò", "tràng vỗ tay giòn giã", "rộn ràng", "náo nức", "tưng bừng", "tiếng trống thúc giục"] },
      { name: "Cảm xúc", icon: "💗", words: ["hồi hộp", "vui sướng", "tự hào", "tiếc nuối khi kết thúc", "mong chờ năm sau"] }
    ],
    branches: [
      { title: "Hoạt động gì? Khi nào? Ở đâu?", hint: "Giới thiệu chung về sự kiện" },
      { title: "Trước khi diễn ra", hint: "Chuẩn bị, quang cảnh, không khí" },
      { title: "Diễn biến chính", hint: "Việc gì diễn ra trước, việc gì sau?" },
      { title: "Khoảnh khắc em nhớ nhất", hint: "Chi tiết thú vị, bất ngờ" },
      { title: "Kết thúc – cảm nghĩ", hint: "Kết quả và cảm xúc của em" }
    ],
    openers: [
      "Thứ ___ tuần trước, trường em tưng bừng tổ chức ___.",
      "Em mong chờ mãi, cuối cùng ngày hội ___ cũng đến.",
      "Hằng năm, cứ đến ___, trường em lại tổ chức ___."
    ],
    closers: [
      "Buổi ___ khép lại nhưng niềm vui vẫn còn ___.",
      "Em mong trường sẽ tổ chức thêm nhiều ___ để chúng em ___.",
      "Hoạt động ấy giúp em hiểu rằng ___."
    ]
  },
  {
    id: "l4-vietthu",
    grade: 4,
    emoji: "✉️",
    title: "Viết thư cho người thân hoặc bạn bè",
    genre: "Viết thư",
    intro: "Ông bà ở quê, người bạn chuyển trường... em muốn gửi lời yêu thương đến ai?",
    images: [
      { url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80", cap: "Lá thư tay chan chứa tình cảm", emoji: "✉️" },
      { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80", cap: "Quê hương nơi ông bà đang sống", emoji: "🏞️" }
    ],
    questions: [
      "Em muốn viết thư cho ai? Người ấy đang ở đâu?",
      "Đã bao lâu em chưa gặp người ấy?",
      "Em muốn kể cho người ấy nghe chuyện gì của mình?",
      "Em muốn hỏi thăm điều gì về người ấy?"
    ],
    wordGroups: [
      { name: "Lời chào – hỏi thăm", icon: "👋", words: ["ông bà kính mến", "bạn thân mến", "dạo này ông bà có khoẻ không ạ", "lâu rồi cháu chưa được về thăm", "cả nhà vẫn bình an chứ ạ"] },
      { name: "Kể chuyện của em", icon: "📖", words: ["cháu vừa được điểm mười môn ___", "lớp em có chuyện vui lắm", "em mới tập được ___", "cuối tuần em thường ___"] },
      { name: "Lời hỏi han", icon: "❓", words: ["vườn rau của bà còn xanh tốt không ạ", "cậu đã quen trường mới chưa", "đàn gà nhà mình lớn chưa ạ", "bao giờ cậu về thăm lớp cũ"] },
      { name: "Lời hứa – mong ước", icon: "🌟", words: ["cháu hứa sẽ chăm ngoan", "hè này nhất định cháu về", "mong sớm gặp lại", "giữ gìn sức khoẻ nhé"] },
      { name: "Lời chúc cuối thư", icon: "💌", words: ["chúc ông bà mạnh khoẻ, sống lâu", "chúc cậu học giỏi", "cháu yêu ông bà nhiều lắm", "nhớ viết thư cho tớ nhé"] }
    ],
    branches: [
      { title: "Phần đầu thư", hint: "Địa điểm, ngày tháng, lời chào" },
      { title: "Hỏi thăm người nhận", hint: "Sức khoẻ, công việc, cuộc sống" },
      { title: "Kể chuyện của em", hint: "Học tập, gia đình, chuyện vui" },
      { title: "Lí do – mong muốn", hint: "Vì sao em viết thư? Em mong gì?" },
      { title: "Cuối thư", hint: "Lời chúc, lời hứa, kí tên" }
    ],
    openers: [
      "___, ngày ___ tháng ___ năm ___. \n___ kính mến! Đã lâu rồi cháu chưa được về thăm ___.",
      "___ thân mến! Từ ngày cậu chuyển trường, tớ nhớ cậu lắm.",
      "___ yêu quý của cháu! Nhân dịp ___, cháu viết thư thăm ___."
    ],
    closers: [
      "Thư đã dài, cháu xin dừng bút. Cháu chúc ___ luôn ___.",
      "Cháu hứa sẽ ___ để ___ vui lòng. Cháu yêu ___ nhiều lắm!",
      "Mong sớm nhận được thư của ___. Tạm biệt ___ nhé!"
    ]
  },
  {
    id: "l4-camxuc",
    grade: 4,
    emoji: "💗",
    title: "Nêu tình cảm, cảm xúc về một người thân yêu",
    genre: "Biểu cảm",
    intro: "Mẹ, bố, ông bà hay anh chị... ai là người em muốn nói lời yêu thương nhất?",
    images: [
      { url: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1200&q=80", cap: "Vòng tay ấm áp của người thân", emoji: "🤗" },
      { url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80", cap: "Gia đình bên nhau", emoji: "👨‍👩‍👧" }
    ],
    questions: [
      "Người em yêu quý nhất trong gia đình là ai?",
      "Người ấy thường làm gì cho em mỗi ngày?",
      "Kỉ niệm nào với người ấy làm em nhớ nhất?",
      "Nếu được nói một câu với người ấy, em sẽ nói gì?"
    ],
    wordGroups: [
      { name: "Người ấy là ai", icon: "👤", words: ["người luôn bên em", "chỗ dựa của cả nhà", "người bạn lớn của em", "người em thương nhất"] },
      { name: "Việc làm – chăm sóc", icon: "🍲", words: ["thức khuya dậy sớm", "nấu những bữa cơm ngon", "đưa đón em đi học", "kể chuyện cho em nghe", "dạy em từng nét chữ"] },
      { name: "Cử chỉ – lời nói", icon: "🗣️", words: ["nụ cười hiền hậu", "bàn tay ấm áp", "giọng nói dịu dàng", "ánh mắt trìu mến", "lời dặn dò ân cần"] },
      { name: "Cảm xúc của em", icon: "💓", words: ["ấm áp", "biết ơn", "hạnh phúc", "thương lắm", "an tâm", "tự hào"] },
      { name: "Mong ước – lời hứa", icon: "🌟", words: ["mong ___ luôn khoẻ mạnh", "hứa chăm ngoan học giỏi", "muốn lớn thật nhanh để ___", "sẽ luôn ở bên ___"] }
    ],
    branches: [
      { title: "Người ấy là ai?", hint: "Giới thiệu người em muốn nói đến" },
      { title: "Điều em nhớ về người ấy", hint: "Việc làm, cử chỉ, lời nói" },
      { title: "Kỉ niệm sâu sắc", hint: "Một lần em không thể quên" },
      { title: "Cảm xúc của em", hint: "Em cảm thấy thế nào khi ở bên?" },
      { title: "Mong ước của em", hint: "Em mong điều gì cho người ấy?" }
    ],
    openers: [
      "Trong gia đình, người em yêu quý và gắn bó nhất là ___.",
      "\"___\" – mỗi lần nghe tiếng gọi ấy, lòng em lại thấy ấm áp lạ thường.",
      "Nếu ai hỏi em thương ai nhất, em sẽ trả lời ngay: đó là ___."
    ],
    closers: [
      "Em mong ___ luôn mạnh khoẻ để ___ mãi bên em.",
      "Em thầm hứa sẽ ___ để ___ luôn vui lòng.",
      "Với em, ___ chính là ___ quý giá nhất trên đời."
    ]
  },

  /* ==================== LỚP 5 ==================== */
  {
    id: "l5-tanguoi",
    grade: 5,
    emoji: "👵",
    title: "Tả một người thân trong gia đình em",
    genre: "Miêu tả người",
    intro: "Dáng mẹ tảo tần, mái tóc bạc của bà, nụ cười của bố... em sẽ vẽ ai bằng ngôn từ?",
    images: [
      { url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80", cap: "Chân dung một người thân yêu", emoji: "👩" },
      { url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80", cap: "Khoảnh khắc gia đình sum vầy", emoji: "👨‍👩‍👧" }
    ],
    questions: [
      "Em định tả ai? Người ấy khoảng bao nhiêu tuổi?",
      "Nhìn người ấy, điều gì khiến em chú ý đầu tiên?",
      "Khuôn mặt, mái tóc, đôi bàn tay... của người ấy thế nào?",
      "Tính tình người ấy ra sao? Có việc làm nào thể hiện điều đó?"
    ],
    wordGroups: [
      { name: "Vóc dáng – tuổi tác", icon: "🧍", words: ["dong dỏng cao", "đậm người", "nhanh nhẹn", "đã ngoài năm mươi", "dáng đi tất bật", "lưng còng theo năm tháng"] },
      { name: "Khuôn mặt – mái tóc", icon: "🙂", words: ["phúc hậu", "rám nắng", "vầng trán cao", "tóc điểm bạc", "búi tóc gọn gàng", "nếp nhăn nơi khoé mắt"] },
      { name: "Đôi mắt – nụ cười", icon: "✨", words: ["ánh mắt trìu mến", "đen láy", "hiền từ", "nụ cười rạng rỡ", "cười hiền như bụt", "ấm áp lạ thường"] },
      { name: "Đôi tay – việc làm", icon: "🤲", words: ["chai sần vì vất vả", "khéo léo", "thoăn thoắt", "gân guốc", "nâng niu từng món đồ", "ấm áp mỗi khi nắm tay em"] },
      { name: "Tính tình", icon: "💛", words: ["dịu dàng", "nghiêm khắc mà yêu thương", "hài hước", "chu đáo", "hết lòng vì con cháu", "được hàng xóm quý mến"] }
    ],
    branches: [
      { title: "Người ấy là ai?", hint: "Tên gọi, tuổi, nghề nghiệp" },
      { title: "Ngoại hình", hint: "Dáng người, mặt, tóc, mắt, tay..." },
      { title: "Tính tình – lời nói", hint: "Qua việc làm cụ thể nào?" },
      { title: "Hoạt động thường ngày", hint: "Người ấy thường làm gì? Với em?" },
      { title: "Tình cảm của em", hint: "Em yêu quý, kính trọng thế nào?" }
    ],
    openers: [
      "Trong gia đình, người gần gũi với em nhất chính là ___.",
      "\"Cháu ___ ơi, vào ăn cơm!\" – tiếng gọi thân thương ấy của ___ đã theo em suốt tuổi thơ.",
      "Nếu có một bức ảnh em luôn mang theo, đó sẽ là ảnh của ___."
    ],
    closers: [
      "Em mong ___ sống thật lâu bên con cháu để ___.",
      "Mỗi việc ___ làm đều dạy em bài học về ___.",
      "Em tự nhủ phải ___ để xứng đáng với tình yêu thương của ___."
    ]
  },
  {
    id: "l5-tacanh",
    grade: 5,
    emoji: "🌾",
    title: "Tả một cảnh đẹp ở quê hương em",
    genre: "Miêu tả phong cảnh",
    intro: "Cánh đồng lúa chín, dòng sông êm đềm hay con đường làng... khung cảnh nào in đậm trong em?",
    images: [
      { url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80", cap: "Cánh đồng vàng óng lúc hoàng hôn", emoji: "🌾" },
      { url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&q=80", cap: "Dòng sông êm đềm soi bóng mây trời", emoji: "🏞️" },
      { url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80", cap: "Sớm mai sương giăng trên đồng quê", emoji: "🌄" }
    ],
    questions: [
      "Cảnh trong ảnh có những gì? Màu sắc nào nổi bật?",
      "Quê em (hoặc nơi em sống) có cảnh đẹp nào?",
      "Vào buổi sáng, buổi chiều, cảnh ấy thay đổi ra sao?",
      "Đứng trước cảnh ấy, em nghe thấy, ngửi thấy những gì?"
    ],
    wordGroups: [
      { name: "Bầu trời – nắng gió", icon: "☀️", words: ["trong veo", "xanh thăm thẳm", "nắng vàng như mật", "gió nồm mát rượi", "mây trắng bồng bềnh", "ráng chiều đỏ ối"] },
      { name: "Cánh đồng – cây cỏ", icon: "🌾", words: ["biển lúa vàng óng", "trải dài tít tắp", "thoang thoảng hương lúa mới", "gợn sóng theo gió", "xanh mướt một màu"] },
      { name: "Dòng sông – mặt nước", icon: "💧", words: ["êm đềm trôi", "lấp lánh như dát bạc", "trong vắt", "uốn quanh làng như dải lụa", "soi bóng hàng tre"] },
      { name: "Âm thanh – con người", icon: "🔊", words: ["tiếng chim lảnh lót", "tiếng cười nói của cô bác gặt lúa", "sáo diều vi vu", "đàn trâu thung thăng", "khói bếp lam chiều"] },
      { name: "Cảm xúc", icon: "💗", words: ["bình yên", "thân thương", "tự hào", "xao xuyến", "muốn ôm trọn vào lòng"] }
    ],
    branches: [
      { title: "Cảnh gì? Ở đâu?", hint: "Em ngắm cảnh ấy vào lúc nào?" },
      { title: "Bao quát từ xa", hint: "Nhìn toàn cảnh thấy gì nổi bật?" },
      { title: "Từng nét đẹp gần", hint: "Trời, nước, cây cỏ, con vật..." },
      { title: "Con người trong cảnh", hint: "Ai đang làm gì? Âm thanh nào?" },
      { title: "Cảm xúc của em", hint: "Cảnh gợi cho em điều gì?" }
    ],
    openers: [
      "Ai đã một lần về ___ quê em, chắc chắn không quên được ___.",
      "Mỗi dịp hè về quê, em lại háo hức chạy ra ngắm ___.",
      "Trong kí ức của em, đẹp nhất vẫn là ___ vào những buổi ___."
    ],
    closers: [
      "Ngắm ___, em càng thêm yêu ___ của mình.",
      "Dù mai này đi xa, em vẫn sẽ nhớ về ___ như nhớ ___.",
      "Em mong ___ mãi đẹp như thế để ___."
    ]
  },
  {
    id: "l5-conmua",
    grade: 5,
    emoji: "⛈️",
    title: "Tả một cơn mưa",
    genre: "Miêu tả hiện tượng thiên nhiên",
    intro: "Cơn mưa rào mùa hạ đến nhanh, đi nhanh mà để lại bao điều thú vị để quan sát.",
    images: [
      { url: "https://images.unsplash.com/photo-1428592953211-077101b2021b?w=1200&q=80", cap: "Mưa rơi trên phố", emoji: "🌧️" },
      { url: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=1200&q=80", cap: "Giọt mưa đọng trên lá", emoji: "💧" }
    ],
    questions: [
      "Trước cơn mưa, bầu trời và cảnh vật thay đổi thế nào?",
      "Trong cơn mưa, em nghe thấy những âm thanh gì?",
      "Cây cối, con vật, con người làm gì khi mưa đến?",
      "Sau cơn mưa, cảnh vật có gì khác trước?"
    ],
    wordGroups: [
      { name: "Trước cơn mưa", icon: "🌥️", words: ["mây đen kéo đến ùn ùn", "trời tối sầm", "gió nổi lên", "không khí oi ả", "chuồn chuồn bay thấp", "sấm ì ầm phía xa"] },
      { name: "Mưa đến", icon: "🌧️", words: ["lộp độp trên mái tôn", "trắng xoá cả trời", "xối xả", "rào rào trên tàu lá chuối", "hạt mưa đan chéo", "sấm chớp đì đùng"] },
      { name: "Cảnh vật trong mưa", icon: "🌿", words: ["cây cối hả hê tắm mát", "đường phố loang loáng nước", "người đi đường vội vã", "gà mẹ dang cánh ủ con", "bong bóng nước phập phồng"] },
      { name: "Sau cơn mưa", icon: "🌈", words: ["trời quang mây tạnh", "cầu vồng bảy sắc", "lá cây xanh bóng như vừa gội đầu", "chim chóc bay ra hót vang", "không khí trong lành mát mẻ"] },
      { name: "Cảm xúc", icon: "💗", words: ["thích thú", "dễ chịu", "khoan khoái", "reo lên vui sướng", "biết ơn cơn mưa"] }
    ],
    branches: [
      { title: "Mưa vào lúc nào?", hint: "Buổi nào? Em đang ở đâu?" },
      { title: "Trước cơn mưa", hint: "Trời, mây, gió, con vật..." },
      { title: "Trong cơn mưa", hint: "Âm thanh, hạt mưa, cảnh vật" },
      { title: "Sau cơn mưa", hint: "Bầu trời, cây cối, con người" },
      { title: "Cảm nghĩ của em", hint: "Cơn mưa đem lại điều gì?" }
    ],
    openers: [
      "Trưa hôm ấy, trời đang nắng chang chang bỗng ___.",
      "\"Sắp mưa rồi!\" – tiếng ai đó reo lên khi ___.",
      "Cả tuần nay trời oi bức, ai cũng mong một ___."
    ],
    closers: [
      "Cơn mưa đi qua, để lại ___.",
      "Em thầm cảm ơn cơn mưa vì đã ___.",
      "Nhìn ___ sau mưa, lòng em thấy ___."
    ]
  },
  {
    id: "l5-thaygiao",
    grade: 5,
    emoji: "👩‍🏫",
    title: "Tả thầy giáo, cô giáo mà em quý mến",
    genre: "Miêu tả người",
    intro: "Người đã dạy em từng nét chữ, từng phép tính... em sẽ khắc hoạ thầy cô bằng những từ ngữ nào?",
    images: [
      { url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80", cap: "Lớp học thân thương", emoji: "🏫" },
      { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80", cap: "Bài giảng say sưa trên bục giảng", emoji: "👩‍🏫" }
    ],
    questions: [
      "Em muốn tả thầy cô nào? Thầy cô dạy em năm lớp mấy?",
      "Dáng vẻ của thầy cô khi giảng bài trông thế nào?",
      "Giọng nói, ánh mắt của thầy cô có gì đặc biệt?",
      "Kỉ niệm nào với thầy cô khiến em nhớ nhất?"
    ],
    wordGroups: [
      { name: "Dáng vẻ", icon: "🧍", words: ["dáng người thanh mảnh", "nhanh nhẹn", "tà áo dài thướt tha", "giản dị", "gọn gàng", "trẻ trung"] },
      { name: "Khuôn mặt – ánh mắt", icon: "✨", words: ["hiền hậu", "ánh mắt ấm áp", "nụ cười tươi như hoa", "nghiêm nghị mà bao dung", "rạng rỡ khi trò làm bài tốt"] },
      { name: "Giọng nói – lời giảng", icon: "🗣️", words: ["trầm ấm", "trong trẻo", "truyền cảm", "dễ hiểu", "như rót vào tai", "kiên nhẫn giảng lại từng chút"] },
      { name: "Việc làm – cử chỉ", icon: "📝", words: ["nắn nót từng nét phấn", "cúi xuống sửa bài cho từng bạn", "thức khuya chấm bài", "động viên khi em buồn", "công bằng với mọi học sinh"] },
      { name: "Tình cảm", icon: "💗", words: ["kính trọng", "biết ơn", "như người mẹ thứ hai", "nhớ mãi", "muốn nói lời cảm ơn"] }
    ],
    branches: [
      { title: "Thầy cô ấy là ai?", hint: "Dạy môn gì, lớp nào, bao lâu?" },
      { title: "Ngoại hình", hint: "Dáng vẻ, khuôn mặt, trang phục" },
      { title: "Khi giảng bài", hint: "Giọng nói, cử chỉ, cách dạy" },
      { title: "Kỉ niệm với em", hint: "Lần thầy cô giúp đỡ, động viên em" },
      { title: "Tình cảm của em", hint: "Em kính trọng, biết ơn thế nào?" }
    ],
    openers: [
      "Trong những năm học ở trường tiểu học, người để lại trong em ấn tượng sâu sắc nhất là ___.",
      "\"Cả lớp mở vở ra nào!\" – giọng nói ấm áp ấy của ___ vẫn vang mãi trong em.",
      "Mỗi khi nhìn nét chữ của mình, em lại nhớ đến ___ – người đã ___."
    ],
    closers: [
      "Em thầm hứa sẽ ___ để không phụ lòng ___.",
      "Dù sau này lớn khôn, em vẫn mãi nhớ ơn ___ vì ___.",
      "Với em, ___ chính là ___ trên con đường học tập."
    ]
  },
  {
    id: "l5-kechuyen",
    grade: 5,
    emoji: "📖",
    title: "Kể chuyện sáng tạo (đóng vai nhân vật)",
    genre: "Kể chuyện sáng tạo",
    intro: "Nếu em là chú ếch trong truyện, là cô Tấm hay ông Bụt... câu chuyện sẽ được kể lại thế nào?",
    images: [
      { url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&q=80", cap: "Thế giới cổ tích trong trang sách", emoji: "📖" },
      { url: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&q=80", cap: "Mỗi cuốn sách là một cuộc phiêu lưu", emoji: "✨" }
    ],
    questions: [
      "Em chọn kể lại câu chuyện nào? Vì sao em thích nó?",
      "Em sẽ đóng vai nhân vật nào trong truyện?",
      "Nếu là nhân vật ấy, em sẽ cảm thấy gì ở từng sự việc?",
      "Em có muốn thêm chi tiết mới hoặc thay đổi kết thúc không?"
    ],
    wordGroups: [
      { name: "Xưng hô khi đóng vai", icon: "🎭", words: ["tôi", "ta", "mình", "lão", "tớ đây chính là ___", "các bạn có biết tôi là ai không?"] },
      { name: "Mở đầu hấp dẫn", icon: "🌟", words: ["ngày xửa ngày xưa", "chuyện xảy ra vào một ngày ___", "tôi vẫn nhớ như in", "hôm ấy trời ___"] },
      { name: "Diễn biến – hành động", icon: "⚡", words: ["bỗng nhiên", "chẳng ngờ", "vội vàng", "quyết định", "thì thầm", "giật mình", "mừng rỡ"] },
      { name: "Suy nghĩ – cảm xúc nhân vật", icon: "💭", words: ["tim tôi đập thình thịch", "tôi tự nhủ", "ân hận vô cùng", "sung sướng biết bao", "lo lắng khôn nguôi"] },
      { name: "Lời kết – bài học", icon: "🎁", words: ["từ đó tôi hiểu rằng", "câu chuyện của tôi là thế đấy", "các bạn đừng như tôi nhé", "và chúng tôi sống vui vẻ bên nhau"] }
    ],
    branches: [
      { title: "Truyện gì? Vai ai?", hint: "Em đóng vai nhân vật nào?" },
      { title: "Mở đầu câu chuyện", hint: "Nhân vật tự giới thiệu thế nào?" },
      { title: "Sự việc chính", hint: "Kể theo trình tự, thêm lời thoại" },
      { title: "Suy nghĩ của nhân vật", hint: "Vai em đóng cảm thấy gì?" },
      { title: "Kết thúc – bài học", hint: "Giữ nguyên hay sáng tạo mới?" }
    ],
    openers: [
      "Xin chào các bạn! Tôi là ___ trong câu chuyện \"___\" đây.",
      "Các bạn có nhận ra tôi không? Tôi chính là ___ mà mọi người hay nhắc đến.",
      "Ngày hôm ấy, tôi – ___ – đã gặp một chuyện không thể nào quên."
    ],
    closers: [
      "Câu chuyện của tôi là như thế. Từ đó, tôi luôn tự nhắc mình phải ___.",
      "Giờ đây mỗi lần nhớ lại, tôi vẫn ___. Còn bạn, bạn sẽ làm gì nếu là tôi?",
      "Và thế là ___, chúng tôi sống ___ bên nhau."
    ]
  },
  {
    id: "l5-neuykien",
    grade: 5,
    emoji: "💬",
    title: "Nêu ý kiến về một hiện tượng (đồng tình / phản đối)",
    genre: "Văn nghị luận đơn giản",
    intro: "Nên đọc sách mỗi ngày? Có nên chơi điện thoại nhiều? Em nghĩ gì – hãy nói bằng lí lẽ của mình!",
    images: [
      { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80", cap: "Đọc sách mỗi ngày – nên hay không?", emoji: "📚" },
      { url: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=1200&q=80", cap: "Trẻ em và màn hình điện tử", emoji: "📱" }
    ],
    questions: [
      "Hiện tượng cô nêu ra là gì? Em thấy nó quen thuộc không?",
      "Em đồng tình hay không đồng tình? Giơ tay nào!",
      "Vì sao em nghĩ như vậy? Kể một dẫn chứng em từng thấy.",
      "Nếu bạn nghĩ khác em, em sẽ thuyết phục bạn thế nào?"
    ],
    wordGroups: [
      { name: "Nêu ý kiến", icon: "🙋", words: ["theo em", "em hoàn toàn đồng tình", "em cho rằng", "em không tán thành việc", "ý kiến của em là"] },
      { name: "Đưa lí lẽ", icon: "🧠", words: ["trước hết", "bên cạnh đó", "quan trọng hơn", "bởi vì", "điều đó giúp chúng ta", "nếu không thì"] },
      { name: "Dẫn chứng", icon: "🔎", words: ["chẳng hạn như", "em từng thấy", "bạn ___ lớp em là một ví dụ", "sách báo cũng từng nói", "thực tế cho thấy"] },
      { name: "Thuyết phục", icon: "🤝", words: ["chắc hẳn các bạn cũng thấy", "thử nghĩ mà xem", "không ai muốn ___", "vậy tại sao chúng ta không ___"] },
      { name: "Khẳng định lại", icon: "✅", words: ["tóm lại", "vì những lẽ trên", "em tin rằng", "mong các bạn cùng ___", "hãy bắt đầu từ hôm nay"] }
    ],
    branches: [
      { title: "Hiện tượng gì?", hint: "Giới thiệu vấn đề cần bàn" },
      { title: "Ý kiến của em", hint: "Đồng tình hay phản đối?" },
      { title: "Lí lẽ 1 + dẫn chứng", hint: "Vì sao? Ví dụ nào?" },
      { title: "Lí lẽ 2 + dẫn chứng", hint: "Còn lí do nào nữa?" },
      { title: "Khẳng định – lời kêu gọi", hint: "Nhắc lại ý kiến, mong muốn" }
    ],
    openers: [
      "Gần đây, lớp em bàn luận sôi nổi về việc ___. Theo em, ___.",
      "\"___\" – đó là điều em luôn tin tưởng.",
      "Có bạn cho rằng ___, nhưng em lại nghĩ khác."
    ],
    closers: [
      "Tóm lại, em tin rằng ___. Mong các bạn cùng ___.",
      "Vì những lẽ trên, em mong mọi người ___ ngay từ hôm nay.",
      "___ là việc nhỏ nhưng mang lại ___. Bạn và tôi, chúng ta cùng thực hiện nhé!"
    ]
  }
];
