"use client";

import React from "react";
import {
  useDashboardStats,
  useSubscriptionStats,
} from "@/queries/admin.queries";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  BookOpen,
  MessageCircle,
  CreditCard,
  TrendingUp,
  DollarSign,
  UserCheck,
  UserX,
  Sparkles,
} from "lucide-react";

function AdminDashboard() {
  const { data: dashboardData, isLoading: dashboardLoading } =
    useDashboardStats();
  const { data: subscriptionData, isLoading: subscriptionLoading } =
    useSubscriptionStats();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const getPlanColor = (planName: string) => {
    const colors: Record<
      string,
      { bg: string; border: string; text: string; icon: string }
    > = {
      Bloom: {
        bg: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
        border: "border-purple-500/50",
        text: "text-purple-400",
        icon: "text-purple-400",
      },
      Flourish: {
        bg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
        border: "border-blue-500/50",
        text: "text-blue-400",
        icon: "text-blue-400",
      },
      Ensemble: {
        bg: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
        border: "border-yellow-500/50",
        text: "text-yellow-400",
        icon: "text-yellow-400",
      },
    };
    return (
      colors[planName] || {
        bg: "bg-slate-800",
        border: "border-slate-700",
        text: "text-slate-400",
        icon: "text-slate-400",
      }
    );
  };

  if (dashboardLoading || subscriptionLoading) {
    return (
      <div className="text-white">
        <h1 className="text-3xl font-bold mb-6">Thống kê</h1>
        <div className="text-slate-400">Đang tải dữ liệu...</div>
      </div>
    );
  }

  const dashboardStats = dashboardData?.data || {
    totalUsers: 0,
    totalStories: 0,
    totalComments: 0,
    totalSubscriptions: 0,
  };

  const subscriptionStats = subscriptionData?.data || {
    totalSubscriptions: 0,
    activeSubscriptions: 0,
    totalRevenue: 0,
    totalFreemiumUsers: 0,
    totalPremiumUsers: 0,
    bloomPlan: { planName: "Bloom", userCount: 0 },
    flourishPlan: { planName: "Flourish", userCount: 0 },
    ensemblePlan: { planName: "Ensemble", userCount: 0 },
  };

  return (
    <div className="text-white space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Thống kê tổng quan</h1>
        <p className="text-slate-400">
          Xem tổng quan về hệ thống và người dùng
        </p>
      </div>

      {/* Dashboard Stats */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-slate-300">
          Thống kê hệ thống
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 border-blue-500/50 hover:border-blue-400/70 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">
                Tổng người dùng
              </CardTitle>
              <Users className="h-5 w-5 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-400">
                {dashboardStats.totalUsers.toLocaleString("vi-VN")}
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Người dùng đã đăng ký
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 border-purple-500/50 hover:border-purple-400/70 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">
                Tổng câu chuyện
              </CardTitle>
              <BookOpen className="h-5 w-5 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-400">
                {dashboardStats.totalStories.toLocaleString("vi-VN")}
              </div>
              <p className="text-xs text-slate-400 mt-1">Câu chuyện đã tạo</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-600/20 to-green-800/20 border-green-500/50 hover:border-green-400/70 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">
                Tổng bình luận
              </CardTitle>
              <MessageCircle className="h-5 w-5 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-400">
                {dashboardStats.totalComments.toLocaleString("vi-VN")}
              </div>
              <p className="text-xs text-slate-400 mt-1">Bình luận đã đăng</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 border-orange-500/50 hover:border-orange-400/70 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">
                Tổng gói đăng ký
              </CardTitle>
              <CreditCard className="h-5 w-5 text-orange-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-400">
                {dashboardStats.totalSubscriptions.toLocaleString("vi-VN")}
              </div>
              <p className="text-xs text-slate-400 mt-1">Gói đã đăng ký</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Subscription Stats */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-slate-300">
          Thống kê đăng ký
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card className="bg-gradient-to-br from-indigo-600/20 to-indigo-800/20 border-indigo-500/50 hover:border-indigo-400/70 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">
                Tổng đăng ký
              </CardTitle>
              <CreditCard className="h-5 w-5 text-indigo-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-indigo-400">
                {subscriptionStats.totalSubscriptions.toLocaleString("vi-VN")}
              </div>
              <p className="text-xs text-slate-400 mt-1">Tất cả gói</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 border-emerald-500/50 hover:border-emerald-400/70 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">
                Đang hoạt động
              </CardTitle>
              <TrendingUp className="h-5 w-5 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-400">
                {subscriptionStats.activeSubscriptions.toLocaleString("vi-VN")}
              </div>
              <p className="text-xs text-slate-400 mt-1">Gói đang kích hoạt</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 border-yellow-500/50 hover:border-yellow-400/70 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">
                Tổng doanh thu
              </CardTitle>
              <DollarSign className="h-5 w-5 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-400">
                {formatCurrency(subscriptionStats.totalRevenue)}
              </div>
              <p className="text-xs text-slate-400 mt-1">Tổng tiền thu được</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-slate-600/20 to-slate-800/20 border-slate-500/50 hover:border-slate-400/70 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">
                Người dùng miễn phí
              </CardTitle>
              <UserX className="h-5 w-5 text-slate-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-400">
                {subscriptionStats.totalFreemiumUsers.toLocaleString("vi-VN")}
              </div>
              <p className="text-xs text-slate-400 mt-1">Không đăng ký</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 border-cyan-500/50 hover:border-cyan-400/70 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">
                Người dùng trả phí
              </CardTitle>
              <UserCheck className="h-5 w-5 text-cyan-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-cyan-400">
                {subscriptionStats.totalPremiumUsers.toLocaleString("vi-VN")}
              </div>
              <p className="text-xs text-slate-400 mt-1">Đã đăng ký gói</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Plan Stats */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-slate-300">
          Thống kê theo gói
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Bloom Plan */}
          {(() => {
            const colors = getPlanColor(subscriptionStats.bloomPlan.planName);
            return (
              <Card
                className={`${colors.bg} ${colors.border} hover:border-purple-400/70 transition-colors`}
              >
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className={`text-sm font-medium ${colors.text}`}>
                    {subscriptionStats.bloomPlan.planName}
                  </CardTitle>
                  <Sparkles className={`h-5 w-5 ${colors.icon}`} />
                </CardHeader>
                <CardContent>
                  <div className={`text-3xl font-bold ${colors.text}`}>
                    {subscriptionStats.bloomPlan.userCount.toLocaleString(
                      "vi-VN"
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Người dùng</p>
                </CardContent>
              </Card>
            );
          })()}

          {/* Flourish Plan */}
          {(() => {
            const colors = getPlanColor(
              subscriptionStats.flourishPlan.planName
            );
            return (
              <Card
                className={`${colors.bg} ${colors.border} hover:border-blue-400/70 transition-colors`}
              >
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className={`text-sm font-medium ${colors.text}`}>
                    {subscriptionStats.flourishPlan.planName}
                  </CardTitle>
                  <Sparkles className={`h-5 w-5 ${colors.icon}`} />
                </CardHeader>
                <CardContent>
                  <div className={`text-3xl font-bold ${colors.text}`}>
                    {subscriptionStats.flourishPlan.userCount.toLocaleString(
                      "vi-VN"
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Người dùng</p>
                </CardContent>
              </Card>
            );
          })()}

          {/* Ensemble Plan */}
          {(() => {
            const colors = getPlanColor(
              subscriptionStats.ensemblePlan.planName
            );
            return (
              <Card
                className={`${colors.bg} ${colors.border} hover:border-yellow-400/70 transition-colors`}
              >
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className={`text-sm font-medium ${colors.text}`}>
                    {subscriptionStats.ensemblePlan.planName}
                  </CardTitle>
                  <Sparkles className={`h-5 w-5 ${colors.icon}`} />
                </CardHeader>
                <CardContent>
                  <div className={`text-3xl font-bold ${colors.text}`}>
                    {subscriptionStats.ensemblePlan.userCount.toLocaleString(
                      "vi-VN"
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Người dùng</p>
                </CardContent>
              </Card>
            );
          })()}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
