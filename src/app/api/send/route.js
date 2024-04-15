import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: toEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Muchas gracias por contactarte conmigo!</p>
          <p>Mensaje enviado:</p>
          <p>{message}</p>
          <p>Desde el mail:</p>
          <p>{email}</p>
        </>
      ),
    });

    console.log(data)

    return NextResponse.json(data);

  } catch (error) {
    console.log(error)
    return NextResponse.json({ error });
  }
}
