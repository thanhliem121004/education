import { gGet, gSet } from "./core.js";
import { getSupabaseClient, uploadToSupabase } from "./supabase.js";

/* Quản lý ảnh tùy chỉnh cho từng chủ đề bài dạy */
export function getAllCustomTopicImages() {
  return gGet("customTopicImages", {});
}

export function getCustomTopicImages(topicId) {
  const all = getAllCustomTopicImages();
  return all[topicId] || {};
}

export function getCustomTopicSlotImage(topicId, slotIndex) {
  const images = getCustomTopicImages(topicId);
  return images[slotIndex] || null;
}

export function saveCustomTopicSlotImage(topicId, slotIndex, url) {
  const all = getAllCustomTopicImages();
  if (!all[topicId]) all[topicId] = {};
  all[topicId][slotIndex] = url;
  gSet("customTopicImages", all);
  // Dispatch custom event để các component lắng nghe cập nhật UI realtime
  window.dispatchEvent(new CustomEvent("custom-images-updated", { detail: { topicId, slotIndex, url } }));
}

export function removeCustomTopicSlotImage(topicId, slotIndex) {
  const all = getAllCustomTopicImages();
  if (all[topicId]) {
    delete all[topicId][slotIndex];
    if (Object.keys(all[topicId]).length === 0) {
      delete all[topicId];
    }
    gSet("customTopicImages", all);
    window.dispatchEvent(new CustomEvent("custom-images-updated", { detail: { topicId, slotIndex, url: null } }));
  }
}

export function clearAllCustomTopicImagesForTopic(topicId) {
  const all = getAllCustomTopicImages();
  if (all[topicId]) {
    delete all[topicId];
    gSet("customTopicImages", all);
    window.dispatchEvent(new CustomEvent("custom-images-updated", { detail: { topicId } }));
  }
}

/* Chuyển file sang Base64 làm dự phòng local */
export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

/* Xử lý upload ảnh thông minh (Ưu tiên Supabase -> Fallback Base64 LocalStorage) */
export async function uploadTopicImage(topicId, slotIndex, file) {
  const client = getSupabaseClient();
  const fileExt = file.name.split('.').pop() || 'jpg';
  const filePath = `topics/${topicId}/${slotIndex}_${Date.now()}.${fileExt}`;

  if (client) {
    try {
      const publicUrl = await uploadToSupabase(file, filePath);
      saveCustomTopicSlotImage(topicId, slotIndex, publicUrl);
      return { ok: true, url: publicUrl, source: "supabase" };
    } catch (err) {
      console.warn("Upload Supabase thất bại, tự động chuyển sang lưu bộ nhớ cục bộ:", err);
    }
  }

  // Fallback sang lưu Base64 trong LocalStorage
  const base64Url = await fileToBase64(file);
  saveCustomTopicSlotImage(topicId, slotIndex, base64Url);
  return { ok: true, url: base64Url, source: "local" };
}
