"use server";

export async function checkCaptcha(captcha: string) {
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
    {
      method: "POST",
    }
  );
  const data = await response.json();
  //console.log(data);
  return data;
}
