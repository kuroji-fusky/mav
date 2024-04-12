import { BACKEND_URL } from "./env"

export const uploadImage = async (formData) => {
  return await fetch(`${BACKEND_URL}/v1/profile/upload`, {
    method: "POST",
    body: formData,
    credentials: "include"
  })
}
