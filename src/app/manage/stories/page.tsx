"use client";

import React, { useState } from "react";
import { useStoryStats } from "@/queries/admin.queries";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  MessageCircle,
} from "lucide-react";

function ManageStories() {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { data, isLoading, error } = useStoryStats(page, pageSize);

  const stories = data?.data?.stories?.items || [];
  const pagination = data?.data?.stories || {
    totalItems: 0,
    page: 1,
    pageSize: 10,
    totalPages: 0,
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, "").substring(0, 50) + "...";
  };

  const getStatusBadge = (status: number) => {
    const statusMap: Record<number, { label: string; className: string }> = {
      0: { label: "Nháp", className: "bg-yellow-500/20 text-yellow-400" },
      1: { label: "Đã xuất bản", className: "bg-green-500/20 text-green-400" },
      2: { label: "Ẩn", className: "bg-gray-500/20 text-gray-400" },
    };
    return (
      statusMap[status] || {
        label: "Không xác định",
        className: "bg-gray-500/20 text-gray-400",
      }
    );
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < pagination.totalPages) setPage(page + 1);
  };

  if (isLoading) {
    return (
      <div className="text-white">
        <h1 className="text-3xl font-bold mb-6">Quản lý câu chuyện</h1>
        <div className="text-slate-400">Đang tải dữ liệu...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-white">
        <h1 className="text-3xl font-bold mb-6">Quản lý câu chuyện</h1>
        <div className="text-red-400">Có lỗi xảy ra khi tải dữ liệu</div>
      </div>
    );
  }

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-6">Quản lý câu chuyện</h1>

      <Card className="bg-slate-900 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">
            Tổng số câu chuyện: {pagination.totalItems}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-4 text-slate-300 font-semibold">
                    ID
                  </th>
                  <th className="text-left p-4 text-slate-300 font-semibold">
                    Ảnh bìa
                  </th>
                  <th className="text-left p-4 text-slate-300 font-semibold">
                    Tiêu đề
                  </th>
                  <th className="text-left p-4 text-slate-300 font-semibold">
                    Tóm tắt
                  </th>
                  <th className="text-left p-4 text-slate-300 font-semibold">
                    Trạng thái
                  </th>
                  <th className="text-left p-4 text-slate-300 font-semibold">
                    Thống kê
                  </th>
                  <th className="text-left p-4 text-slate-300 font-semibold">
                    Ngày tạo
                  </th>
                  <th className="text-left p-4 text-slate-300 font-semibold">
                    Người dùng
                  </th>
                </tr>
              </thead>
              <tbody>
                {stories.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="p-8 text-center text-slate-400">
                      Không có dữ liệu
                    </td>
                  </tr>
                ) : (
                  stories.map((story) => {
                    const statusBadge = getStatusBadge(story.storyStatus);
                    return (
                      <tr
                        key={story.id}
                        className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors"
                      >
                        <td className="p-4 text-slate-300">{story.id}</td>
                        <td className="p-4">
                          {story.coverImageUrl ? (
                            <img
                              src={story.coverImageUrl}
                              alt={story.title}
                              className="w-[60px] h-[60px] rounded object-cover"
                            />
                          ) : (
                            <div className="w-[60px] h-[60px] bg-slate-700 rounded flex items-center justify-center text-slate-500 text-xs">
                              No Image
                            </div>
                          )}
                        </td>
                        <td className="p-4">
                          <div className="max-w-[200px]">
                            <p
                              className="text-white font-medium truncate"
                              title={story.title}
                            >
                              {story.title}
                            </p>
                            <p className="text-slate-400 text-xs mt-1 truncate">
                              {story.slug}
                            </p>
                          </div>
                        </td>
                        <td className="p-4">
                          <p className="text-slate-300 text-sm max-w-[250px] truncate">
                            {stripHtml(story.summary || story.content)}
                          </p>
                        </td>
                        <td className="p-4">
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${statusBadge.className}`}
                          >
                            {statusBadge.label}
                          </span>
                          {story.isAnonymous && (
                            <span className="ml-2 px-2 py-1 rounded text-xs font-medium bg-blue-500/20 text-blue-400">
                              Ẩn danh
                            </span>
                          )}
                        </td>
                        <td className="p-4">
                          <div className="flex flex-col gap-1 text-sm">
                            <div className="flex items-center gap-2 text-slate-300">
                              <Eye className="h-4 w-4" />
                              <span>{story.viewCount}</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-300">
                              <Heart className="h-4 w-4" />
                              <span>{story.likeCount}</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-300">
                              <MessageCircle className="h-4 w-4" />
                              <span>{story.commentCount}</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-slate-300 text-sm">
                          {formatDate(story.createdAt)}
                        </td>
                        <td className="p-4">
                          <div className="text-slate-300 text-sm">
                            {story.isAnonymous ? (
                              <span className="text-slate-500">Ẩn danh</span>
                            ) : (
                              <span>ID: {story.userId}</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {pagination.totalPages > 0 && (
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-700">
              <div className="text-slate-400 text-sm">
                Trang {pagination.page} / {pagination.totalPages} (
                {pagination.totalItems} câu chuyện)
              </div>
              <div className="flex items-center gap-2">
                <Button
                  onClick={handlePrevPage}
                  disabled={page === 1}
                  variant="outline"
                  className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700 disabled:opacity-50"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Trước
                </Button>
                <div className="flex items-center gap-1">
                  {Array.from(
                    { length: Math.min(5, pagination.totalPages) },
                    (_, i) => {
                      let pageNum = i + 1;

                      // Tính toán pageNum dựa trên trang hiện tại
                      if (pagination.totalPages > 5) {
                        if (page <= 3) {
                          pageNum = i + 1;
                        } else if (page >= pagination.totalPages - 2) {
                          pageNum = pagination.totalPages - 4 + i;
                        } else {
                          pageNum = page - 2 + i;
                        }
                      }

                      return (
                        <Button
                          key={pageNum}
                          onClick={() => setPage(pageNum)}
                          variant={page === pageNum ? "default" : "outline"}
                          className={`${
                            page === pageNum
                              ? "bg-blue-600 text-white"
                              : "bg-slate-800 border-slate-700 text-white hover:bg-slate-700"
                          }`}
                        >
                          {pageNum}
                        </Button>
                      );
                    }
                  )}
                </div>
                <Button
                  onClick={handleNextPage}
                  disabled={page === pagination.totalPages}
                  variant="outline"
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

export default ManageStories;
