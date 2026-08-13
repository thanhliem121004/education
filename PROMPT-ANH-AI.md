# 🎨 Bộ prompt tạo ảnh AI cho Vườn Ý Tưởng (52 ảnh)

## Cách dùng

1. Mở Gemini (hoặc công cụ tạo ảnh khác).
2. Với **mỗi ảnh**: dán **PHONG CÁCH CHUNG** + prompt riêng của ảnh đó thành một tin nhắn.
3. Tải ảnh về, **đổi tên đúng như cột tên tệp** (đuôi `.jpg`).
4. Bỏ vào đúng thư mục trong `public/images/` của dự án. Web tự nhận, không cần sửa code.
   - Chưa có ảnh nào thì web vẫn chạy bình thường (dùng ảnh dự phòng trên mạng).

## PHONG CÁCH CHUNG (dán kèm mọi prompt)

```
Children's picture-book illustration for Vietnamese primary school students.
Soft watercolor and gouache style, warm sunny colors, clean composition,
gentle rounded shapes, cheerful wholesome mood. Vietnamese setting:
countryside village or small-town school. Vietnamese children wear white
shirts with red scarves when at school. High detail, soft natural light.
No text, no letters, no watermark, no logo. Landscape orientation 3:2.
```

---

## 1. Ảnh trang chủ (1 ảnh)

| Tên tệp | Prompt |
|---|---|
| `public/images/hero.jpg` | A cozy classroom scene: a group of happy Vietnamese primary school students writing eagerly in their notebooks with purple ink pens, imagination visualized as small colorful doodles (trees, cats, clouds, kites) floating above their heads, warm morning light through the window. |

## 2. Ảnh 5 khối lớp (5 ảnh — thư mục `public/images/grades/`)

| Tên tệp | Prompt |
|---|---|
| `lop-1.jpg` | A tiny first-grade Vietnamese girl looking at a big colorful picture book and speaking her first sentences, a friendly teacher kneeling beside her, kindergarten-like bright classroom corner. |
| `lop-2.jpg` | A small Vietnamese boy proudly showing a short paragraph he wrote in a notebook with wide lines, a little chick sticker on the page, sunny classroom desk. |
| `lop-3.jpg` | A Vietnamese girl flying a colorful kite on a green schoolyard while classmates write notes on clipboards, blue sky with fluffy clouds. |
| `lop-4.jpg` | A Vietnamese boy at a desk drawing a colorful mind map with branching colored lines connecting little pictures of a cat, a tree and a school, focused and joyful. |
| `lop-5.jpg` | A confident Vietnamese girl standing in front of her class presenting her own essay, classmates raising hands excitedly, teacher smiling by the green chalkboard. |

## 3. Ảnh chủ đề — LỚP 1 (thư mục `public/images/topics/<mã>/`)

### `l1-giadinh` — Gia đình của em
| Tên tệp | Prompt |
|---|---|
| `l1-giadinh/1.jpg` | A warm Vietnamese family of four having dinner together in a cozy home: father, mother, a primary school girl and her little brother, rice bowls and a steaming pot, everyone laughing. |
| `l1-giadinh/2.jpg` | A Vietnamese grandmother hugging her small grandchild on a wooden porch, a cup of tea and a plate of fruit nearby, tender and loving moment. |

### `l1-convat` — Con vật đáng yêu
| Tên tệp | Prompt |
|---|---|
| `l1-convat/1.jpg` | A happy golden puppy with a wagging tail sitting on green grass in a Vietnamese village yard, tongue out as if smiling. |
| `l1-convat/2.jpg` | A cute round-eyed kitten with soft grey fur playing with a ball of red yarn on a tiled floor. |

### `l1-dochoi` — Đồ chơi em thích
| Tên tệp | Prompt |
|---|---|
| `l1-dochoi/1.jpg` | A soft brown teddy bear with a red bow sitting on a child's bed next to a pillow, morning light, very huggable and friendly. |

### `l1-truonghoc` — Trường của em
| Tên tệp | Prompt |
|---|---|
| `l1-truonghoc/1.jpg` | A bright Vietnamese first-grade classroom: small desks, a green chalkboard, colorful paper decorations, children raising hands happily. |
| `l1-truonghoc/2.jpg` | Vietnamese children playing jump rope and shuttlecock on a sunny schoolyard with a red-roofed school building and a big shade tree. |

## 4. Ảnh chủ đề — LỚP 2

### `l2-nguoithan` — Kể về một người thân
| Tên tệp | Prompt |
|---|---|
| `l2-nguoithan/1.jpg` | A Vietnamese mother helping her small son with homework at a wooden desk in the evening, warm lamp light, gentle smile, tea cup nearby. |

### `l2-dochoi` — Tả một đồ chơi em thích
| Tên tệp | Prompt |
|---|---|
| `l2-dochoi/1.jpg` | A collection of beloved children's toys arranged on a shelf: teddy bear, toy car, kite and building blocks, soft afternoon light from a window. |

### `l2-convat` — Kể về con vật nuôi
| Tên tệp | Prompt |
|---|---|
| `l2-convat/1.jpg` | A playful kitten chasing a butterfly in a Vietnamese garden with banana trees and a clay water jar. |
| `l2-convat/2.jpg` | A friendly village dog walking beside a small Vietnamese child on a dirt path between rice fields at sunset. |

### `l2-viecnha` — Kể về việc em giúp bố mẹ
| Tên tệp | Prompt |
|---|---|
| `l2-viecnha/1.jpg` | A small Vietnamese girl happily sweeping the floor of a tidy home with a traditional broom while her mother hangs laundry in the background, both smiling. |

### `l2-cogiao` — Kể về thầy cô giáo
| Tên tệp | Prompt |
|---|---|
| `l2-cogiao/1.jpg` | A gentle Vietnamese female teacher in a white ao dai leaning down to guide a student's handwriting, chalkboard with simple drawings behind, warm classroom. |

## 5. Ảnh chủ đề — LỚP 3

### `l3-dovat` — Tả một đồ vật em yêu thích
| Tên tệp | Prompt |
|---|---|
| `l3-dovat/1.jpg` | A charming study corner of a Vietnamese pupil: a round red alarm clock, a blue school bag, pencil case and neat notebooks on a wooden desk by a window. |

### `l3-hoatdong` — Kể lại một hoạt động ở trường
| Tên tệp | Prompt |
|---|---|
| `l3-hoatdong/1.jpg` | Vietnamese students in a lively classroom activity: some performing a small play with paper puppets, classmates clapping, colorful decorations. |
| `l3-hoatdong/2.jpg` | A school book festival: Vietnamese children browsing colorful book stalls under bunting flags on the schoolyard. |

### `l3-canhdep` — Nêu cảm xúc về cảnh đẹp quê hương
| Tên tệp | Prompt |
|---|---|
| `l3-canhdep/1.jpg` | A golden rice field at sunset in the Vietnamese countryside, farmers with conical hats in the distance, dragonflies in the warm air. |
| `l3-canhdep/2.jpg` | A calm blue river curving around a Vietnamese village with bamboo groves reflected in the water, a small wooden boat. |

### `l3-banthan` — Kể về người bạn thân
| Tên tệp | Prompt |
|---|---|
| `l3-banthan/1.jpg` | Two Vietnamese primary school best friends walking to school together sharing an umbrella, laughing, school bags bouncing. |

### `l3-viectot` — Kể lại một việc tốt em đã làm
| Tên tệp | Prompt |
|---|---|
| `l3-viectot/1.jpg` | A kind Vietnamese schoolboy helping an elderly woman carry a basket of vegetables across a quiet village road, morning market in the background. |

## 6. Ảnh chủ đề — LỚP 4

### `l4-convat` — Tả con vật em yêu thích
| Tên tệp | Prompt |
|---|---|
| `l4-convat/1.jpg` | Portrait of an adorable tabby cat with big round green eyes sitting on a windowsill of a Vietnamese home, tail curled neatly. |
| `l4-convat/2.jpg` | A joyful golden dog running through a village yard scattering a few chickens, motion and fun, banana trees behind. |
| `l4-convat/3.jpg` | A mischievous kitten stretching after a nap in a sunbeam on a woven mat, yawning wide. |

### `l4-caycoi` — Tả cây bóng mát trên sân trường
| Tên tệp | Prompt |
|---|---|
| `l4-caycoi/1.jpg` | A majestic old flamboyant tree (phượng vĩ) with blazing red flowers spreading like a giant umbrella over a Vietnamese schoolyard, students playing in its shade. |
| `l4-caycoi/2.jpg` | Sunlight filtering through the dense green canopy of a big schoolyard tree, stone bench and school building below, peaceful recess morning. |

### `l4-dovat` — Tả đồ chơi hoặc đồ vật em yêu thích
| Tên tệp | Prompt |
|---|---|
| `l4-dovat/1.jpg` | A well-loved teddy bear with a red bow sitting against a pillow, one ear slightly worn, telling a story of many hugs. |
| `l4-dovat/2.jpg` | A neat Vietnamese pupil's study corner: school bag hanging on a chair, bookshelf, pencil jar and a small lamp, everything tidy and loved. |

### `l4-hoatdong` — Thuật lại một hoạt động ở trường
| Tên tệp | Prompt |
|---|---|
| `l4-hoatdong/1.jpg` | A festive Vietnamese school celebration: stage with red bunting, students performing a dance, audience of children cheering on the schoolyard. |
| `l4-hoatdong/2.jpg` | An exciting tug-of-war match between two teams of Vietnamese students, classmates cheering wildly on the sidelines, dust flying. |

### `l4-vietthu` — Viết thư cho người thân
| Tên tệp | Prompt |
|---|---|
| `l4-vietthu/1.jpg` | A Vietnamese child writing a heartfelt letter at a desk, envelope and stamps nearby, a photo of grandparents propped against a lamp. |
| `l4-vietthu/2.jpg` | A peaceful Vietnamese countryside scene with a small house, vegetable garden and chickens — the beloved home of grandparents far away. |

### `l4-camxuc` — Nêu tình cảm, cảm xúc về một người thân yêu
| Tên tệp | Prompt |
|---|---|
| `l4-camxuc/1.jpg` | A Vietnamese mother embracing her child warmly at the doorway of their home, schoolbag on the ground, pure love and safety. |
| `l4-camxuc/2.jpg` | Three generations of a Vietnamese family sitting together on a mat in the yard under string lights, grandmother telling stories, children listening with wonder. |

## 7. Ảnh chủ đề — LỚP 5

### `l5-tanguoi` — Tả một người thân trong gia đình
| Tên tệp | Prompt |
|---|---|
| `l5-tanguoi/1.jpg` | A warm portrait of a Vietnamese grandmother with silver hair in a bun, kind wrinkled smile, wearing a brown blouse, sitting by a window with soft light. |
| `l5-tanguoi/2.jpg` | A Vietnamese father teaching his child to ride a bicycle on a village road, both laughing, late afternoon golden light. |

### `l5-tacanh` — Tả một cảnh đẹp ở quê hương
| Tên tệp | Prompt |
|---|---|
| `l5-tacanh/1.jpg` | A vast golden rice field at harvest in Vietnam, farmers in conical hats, white storks flying over, mountains soft in the distance. |
| `l5-tacanh/2.jpg` | A tranquil river at dawn in the Vietnamese countryside, mist over the water, a ferryman poling a small boat, reflections of trees. |
| `l5-tacanh/3.jpg` | Early morning in a Vietnamese village: dew on grass, smoke rising from kitchen roofs, a dirt road lined with bamboo leading to green fields. |

### `l5-conmua` — Tả một cơn mưa
| Tên tệp | Prompt |
|---|---|
| `l5-conmua/1.jpg` | A dramatic summer rain shower over a Vietnamese street: children in colorful raincoats splashing puddles, silver rain streaks, shop awnings dripping. |
| `l5-conmua/2.jpg` | After the rain: a bright rainbow over wet rice fields, glistening banana leaves with water drops, birds returning to the clear sky. |

### `l5-thaygiao` — Tả thầy cô giáo em quý mến
| Tên tệp | Prompt |
|---|---|
| `l5-thaygiao/1.jpg` | A devoted Vietnamese teacher in a white ao dai writing gracefully on a green chalkboard, students watching attentively in the foreground. |
| `l5-thaygiao/2.jpg` | A Vietnamese teacher kneeling beside a student's desk patiently explaining a lesson, encouraging smile, classroom full of light. |

### `l5-kechuyen` — Kể chuyện sáng tạo
| Tên tệp | Prompt |
|---|---|
| `l5-kechuyen/1.jpg` | A magical open storybook on a desk with fairy-tale characters rising from its pages like glowing mist: a gentle fairy, a clever frog, an old banyan tree. |
| `l5-kechuyen/2.jpg` | A Vietnamese child reading under a blanket fort with a flashlight, imagination swirling above as tiny glowing scenes of adventures. |

### `l5-neuykien` — Nêu ý kiến về một hiện tượng
| Tên tệp | Prompt |
|---|---|
| `l5-neuykien/1.jpg` | Vietnamese children happily reading books together under a big tree in a library garden, stacks of colorful books around them. |
| `l5-neuykien/2.jpg` | A gentle contrast scene: one Vietnamese child absorbed in a glowing phone in a dim room, while through the window other children play soccer outside in the sun. |

---

## Ghi chú

- Ảnh **1.jpg** của mỗi chủ đề đồng thời là **ảnh bìa** trên thẻ chủ đề.
- Nếu muốn giữ nét vẽ đồng nhất tuyệt đối, hãy tạo tất cả ảnh trong **cùng một cuộc trò chuyện** với Gemini và nhắc: "giữ đúng phong cách các ảnh trước".
- Kích thước khuyên dùng: ngang, tỉ lệ 3:2 (khoảng 1536×1024). Web tự cắt vừa khung.
- Muốn thêm ảnh cho chủ đề nào, chỉ cần đặt thêm `4.jpg`, `5.jpg`... và thêm chú thích trong `src/data/` (mảng `images`).
