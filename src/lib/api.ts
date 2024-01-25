export const sendContactForm = async (data: { email: string; text: string }) =>
  fetch(import.meta.env.PUBLIC_EMAIL_API, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to send message")
      return res
    })
    .catch((err) => {
      throw new Error(err)
    })
