"use client";

import React, { useState } from "react";
import { usePaymentStats } from "@/queries/admin.queries";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PaymentFilter } from "@/types/admin.type";

function ManagePayments() {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<PaymentFilter>("total");
  const pageSize = 10;
  const { data, isLoading, error } = usePaymentStats(page, pageSize, filter);

  const payments = data?.data?.items || [];
  const pagination = data?.data || {
    totalItems: 0,
    page: 1,
    pageSize: 10,
    totalPages: 0,
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  };

  const handleFilterChange = (newFilter: PaymentFilter) => {
    setFilter(newFilter);
    setPage(1); // Reset về trang 1 khi đổi filter
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusBadge = (status: number) => {
    if (status === 1) {
      return (
        <span className="px-3 py-1 rounded text-sm font-medium bg-green-500/20 text-green-400 border border-green-500/30">
          Đã thanh toán
        </span>
      );
    } else {
      return (
        <span className="px-3 py-1 rounded text-sm font-medium bg-gray-500/20 text-gray-400 border border-gray-500/30">
          Hết hạn
        </span>
      );
    }
  };

  if (isLoading) {
    return (
      <div className="text-white">
        <h1 className="text-3xl font-bold mb-6">Quản lý thanh toán</h1>
        <div className="text-slate-400">Đang tải dữ liệu...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-white">
        <h1 className="text-3xl font-bold mb-6">Quản lý thanh toán</h1>
        <div className="text-red-400">Đã có lỗi xảy ra khi tải dữ liệu</div>
      </div>
    );
  }

  return (
    <div className="text-white space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Quản lý thanh toán</h1>
          <p className="text-slate-400">
            Xem và quản lý các giao dịch thanh toán
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2">
          <Button
            variant={filter === "total" ? "default" : "outline"}
            onClick={() => handleFilterChange("total")}
            className={
              filter === "total"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
            }
          >
            Tất cả
          </Button>
          <Button
            variant={filter === "weekly" ? "default" : "outline"}
            onClick={() => handleFilterChange("weekly")}
            className={
              filter === "weekly"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
            }
          >
            Theo tuần
          </Button>
        </div>
      </div>

      {/* Payment Table */}
      <Card className="bg-slate-900/50 border-slate-700">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-300">
                    ID
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-300">
                    User ID
                  </th>
                  <th className="text-right py-4 px-6 text-sm font-semibold text-slate-300">
                    Số tiền
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-300">
                    Provider
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-300">
                    Mã đơn hàng
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-300">
                    Ngày thanh toán
                  </th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-slate-300">
                    Trạng thái
                  </th>
                </tr>
              </thead>
              <tbody>
                {payments.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="text-center py-12 text-slate-400"
                    >
                      Không có dữ liệu thanh toán
                    </td>
                  </tr>
                ) : (
                  payments.map((payment) => (
                    <tr
                      key={payment.id}
                      className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors"
                    >
                      {/* ID */}
                      <td className="py-4 px-6">
                        <span className="text-white font-medium">
                          {payment.id}
                        </span>
                      </td>

                      {/* User ID */}
                      <td className="py-4 px-6">
                        <span className="text-slate-300">{payment.userId}</span>
                      </td>

                      {/* Amount */}
                      <td className="py-4 px-6 text-right">
                        <span className="text-white font-medium">
                          {formatCurrency(payment.amount)}
                        </span>
                      </td>

                      {/* Provider */}
                      <td className="py-4 px-6">
                        <span className="text-slate-300">
                          {payment.provider}
                        </span>
                      </td>

                      {/* Order Code (providerTXN) */}
                      <td className="py-4 px-6">
                        <span className="text-slate-300 font-mono">
                          {payment.providerTXN}
                        </span>
                      </td>

                      {/* Paid At */}
                      <td className="py-4 px-6">
                        <span className="text-slate-300">
                          {formatDate(payment.paidAt)}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="py-4 px-6">
                        {getStatusBadge(payment.status)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="flex items-center justify-between px-6 py-4 border-t border-slate-700">
              <div className="text-sm text-slate-400">
                Hiển thị {(pagination.page - 1) * pagination.pageSize + 1} -{" "}
                {Math.min(
                  pagination.page * pagination.pageSize,
                  pagination.totalItems
                )}{" "}
                trong tổng số {pagination.totalItems} kết quả
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700 disabled:opacity-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Trước
                </Button>
                <div className="text-sm text-slate-300 px-4">
                  Trang {pagination.page} / {pagination.totalPages}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setPage((p) => Math.min(pagination.totalPages, p + 1))
                  }
                  disabled={page === pagination.totalPages}
                  className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700 disabled:opacity-50"
                >
                  Sau
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default ManagePayments;
