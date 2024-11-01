import React from "react";

interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTemplate = ({
  orderId,
  totalAmount,
  paymentUrl,
}: {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}) => `
  <div>
    <h1>Order #${orderId}</h1>
    <p>
      Pay for the order in the amount of <b>${totalAmount} $</b>. Go to 
      <a href="${paymentUrl}">using this link</a> to pay for the order.
    </p>
  </div>
`;
