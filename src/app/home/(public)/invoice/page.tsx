import { Suspense } from "react";
import PaymentSuccessClient from "./PaymentSuccessClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      <PaymentSuccessClient />
    </Suspense>
  );
}
