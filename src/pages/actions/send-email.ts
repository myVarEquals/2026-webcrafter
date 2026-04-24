import type { APIRoute } from "astro";
import { sendEmail } from "../utils/email";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  // Get the form data submitted by the user on the home page
  const formData = await request.formData();
  const to = import.meta.env.SEND_EMAIL_TO as string;
  const emailFrom = formData.get("email") as string;
  const replyTo = emailFrom as string;
  const name = formData.get("name") as string | null;
  const phone = formData.get("phone") as string | null;
  const subject = `Contact Form Submission from ${name}` as string;
  const formMessage = formData.get("message") as string | null;
  const message = `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${emailFrom}</p>
                   <p><strong>Phone:</strong> ${phone}</p>
                   <p><strong>Message:</strong></p>
                   <p>${formMessage}</p>` as string;

  // Throw an error if we're missing any of the needed fields.
  if (!to || !subject || !message) {
    throw new Error("Missing required fields");
  }

  // Try to send the email using a `sendEmail` function we'll create next. Throw
  // an error if it fails.
  try {
    const html = `<div>${message}</div>`;
    await sendEmail({ to, replyTo, subject, html });
  } catch (error) {
    throw new Error("Failed to send email");
  }

  // Redirect the user to a success page after the email is sent.
  return redirect("/thank-you");
};