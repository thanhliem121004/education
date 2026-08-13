import { createClient } from "@supabase/supabase-js";
import { gGet, gSet } from "./core.js";

const DEFAULT_BUCKET = "vuon-y-tuong";

export function getSupabaseConfig() {
  const saved = gGet("supabaseConfig", {});
  return {
    url: saved.url || import.meta.env.VITE_SUPABASE_URL || "",
    key: saved.key || import.meta.env.VITE_SUPABASE_ANON_KEY || "",
    bucket: saved.bucket || DEFAULT_BUCKET
  };
}

export function saveSupabaseConfig(cfg) {
  gSet("supabaseConfig", cfg);
}

export function getSupabaseClient() {
  const cfg = getSupabaseConfig();
  if (!cfg.url || !cfg.key) return null;
  try {
    return createClient(cfg.url, cfg.key);
  } catch (err) {
    console.error("Lỗi kết nối Supabase:", err);
    return null;
  }
}

export async function testSupabaseConnection(url, key, bucket = DEFAULT_BUCKET) {
  if (!url || !key) {
    return { ok: false, error: "Vui lòng nhập đầy đủ Supabase URL và Anon Key." };
  }
  try {
    const client = createClient(url, key);
    const { data: buckets, error } = await client.storage.listBuckets();
    if (error) throw error;
    
    const targetBucket = buckets?.find(b => b.name === bucket);
    if (!targetBucket) {
      return { 
        ok: true, 
        warning: `Kết nối Supabase thành công nhưng chưa tìm thấy bucket '${bucket}'. Hãy tạo bucket public này trên Supabase Storage.`
      };
    }
    return { ok: true, message: `Kết nối thành công tới Supabase bucket '${bucket}'!` };
  } catch (err) {
    return { ok: false, error: err.message || "Không thể kết nối Supabase." };
  }
}

export async function uploadToSupabase(file, filePath) {
  const cfg = getSupabaseConfig();
  const client = getSupabaseClient();
  if (!client) throw new Error("Chưa cấu hình Supabase Client");

  const bucket = cfg.bucket || DEFAULT_BUCKET;
  
  // Tải file lên Supabase Storage.
  // upsert: false — tên tệp đã kèm timestamp nên không bao giờ trùng;
  // nhờ vậy chỉ cần quyền INSERT (không đòi quyền UPDATE/ghi đè).
  const { data, error } = await client.storage
    .from(bucket)
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false
    });

  if (error) throw error;

  // Lấy đường dẫn public URL
  const { data: publicUrlData } = client.storage
    .from(bucket)
    .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
}
