import OtpTemplate from "@/components/templates/authPage/otp";
import React, { Suspense } from "react";

function OtpPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Suspense>
        <OtpTemplate/>
      </Suspense>
    </div>
  );
}

export default OtpPage;
