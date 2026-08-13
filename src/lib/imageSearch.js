/* Tìm ảnh tự do bản quyền từ Wikimedia Commons (không cần khoá API)
   — chỉ trả về ảnh được phép dùng lại, kèm tên tác giả + giấy phép. */

export async function searchFreeImages(query) {
  const url =
    "https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*" +
    "&generator=search&gsrnamespace=6&gsrlimit=24" +
    "&gsrsearch=" + encodeURIComponent("filetype:bitmap " + query) +
    "&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=420";

  const res = await fetch(url);
  if (!res.ok) throw new Error("Không kết nối được kho ảnh (" + res.status + ")");
  const data = await res.json();
  const pages = data?.query?.pages ? Object.values(data.query.pages) : [];

  return pages
    .map((p) => {
      const info = p.imageinfo && p.imageinfo[0];
      if (!info || !info.thumburl) return null;
      const meta = info.extmetadata || {};
      const clean = (html) => String(html || "").replace(/<[^>]*>/g, "").trim();
      return {
        id: p.pageid,
        index: p.index || 0,
        thumb: info.thumburl,
        /* bản to hơn để chiếu lên màn hình lớp */
        large: info.thumburl.replace(/\/\d+px-/, "/1200px-"),
        original: info.url,
        title: String(p.title || "").replace(/^File:/, ""),
        author: clean(meta.Artist?.value).slice(0, 70),
        license: clean(meta.LicenseShortName?.value)
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.index - b.index);
}
