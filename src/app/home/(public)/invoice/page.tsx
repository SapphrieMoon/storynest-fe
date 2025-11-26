"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCheckPaymentQuery } from "@/queries/payment.queries";
import { count } from "console";
import { Check, Download } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const orderCode = searchParams.get("orderCode");
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  const { data: checkPayment, isLoading } = useCheckPaymentQuery(
    orderCode ? Number(orderCode) : 0
  );

  useEffect(() => {
    if (countdown <= 0) {
      router.push("/home");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, router]);
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
      <div className="relative">
        {/* Success Icon */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="w-6 h-6 text-white" />
          </div>
        </div>

        <Card className="bg-gray-800 text-white p-8 pt-12 w-full max-w-md mx-auto relative overflow-hidden border-none">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl mb-2">Thanh toán thành công!</h1>
            <p className="text-gray-400">
              Thanh toán của bạn đã được thực hiện thành công.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-600 mb-8"></div>

          {/* Total Payment */}
          <div className="text-center mb-8">
            <p className="text-gray-400 mb-2">Tổng giá tiền</p>
            <p className="text-3xl">{checkPayment?.data.amount}</p>
          </div>

          {/* Payment Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-400 text-sm mb-1">Mã hóa đơn</p>
              <p className="text-white">{checkPayment?.data.id}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-400 text-sm mb-1">Thời gian thanh toán</p>
              <p className="text-white">
                {checkPayment?.data?.createdAt
                  ? new Intl.DateTimeFormat("vi-VN", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    }).format(new Date(checkPayment.data.createdAt))
                  : "--"}
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-400 text-sm mb-1">
                Phương thức thanh toán
              </p>
              <p className="text-white">Thanh toán ngân hàng</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-400 text-sm mb-1">Người gửi</p>
              <p className="text-white">Antonio Roberto</p>
            </div>
          </div>

          {/* Download Button */}
          <Button
            variant="ghost"
            className="w-full text-gray-300 hover:text-white hover:bg-gray-700 mb-8"
          >
            <Download className="w-4 h-4 mr-2" />
            Get PDF Receipt
          </Button>

          {/* Decorative Bottom Edge */}
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-background">
            <div className="flex h-full">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gray-800"
                  style={{
                    clipPath: "ellipse(50% 100% at 50% 0%)",
                  }}
                />
              ))}
            </div>
          </div>
        </Card>

        {/* 🔥 DÒNG ĐẾM NGƯỢC NỔI BẬT NGOÀI CARD */}
        <div className="mt-6 flex justify-center">
          <div className="px-5 py-2 rounded-full bg-green-500/10 border border-green-400/30 text-green-300 text-sm font-medium shadow-lg shadow-green-500/20 animate-pulse">
            Tự động quay về trang chủ sau{" "}
            <span className="text-white font-bold mx-1">{countdown}</span>
            giây
          </div>
        </div>
      </div>
    </div>
  );
}
