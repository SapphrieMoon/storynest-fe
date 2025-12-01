import { Suspense } from "react";
import GoogleCallbackClient from "./GoogleCallbackClient";

export default function GoogleCallbackPage() {
  return (
    <Suspense fallback={<div className="mt-3">Loading...</div>}>
      <GoogleCallbackClient />
    </Suspense>
  );
}
