import { Resend } from "resend";
import { PayOrderTemplate } from "../components/shared/email-temapltes/pay-order";

export const sendEmail = async (
  to: string,
  subject: string,
  params: { orderId: number; totalAmount: number; paymentUrl: string }
) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to,
    subject,
    html: PayOrderTemplate(params),
  });

  if (error) {
    throw error;
  }

  return data;
};
