export const sendContactForm = async (data: {
  email: string;
  text: string;
}) => {
  const url = process.env.NEXT_PUBLIC_EMAIL_API;
  if (!url) throw new Error("Email API not set");

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to send message");
      return res;
    })
    .catch((err) => {
      throw new Error(err);
    });
};
