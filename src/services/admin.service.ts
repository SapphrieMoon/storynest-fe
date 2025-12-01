import https from "@/lib/axios";
import {
  AdminLoginRequest,
  AdminLoginResponse,
  GetDashboardStatsResponse,
  GetPaymentStatsResponse,
  GetStoryStatsResponse,
  GetSubscriptionStatsResponse,
  PaymentFilter,
} from "@/types/admin.type";

export const adminLogin = async (
  data: AdminLoginRequest
): Promise<AdminLoginResponse> => {
  const response = await https.post("/api/Auth/admin/login", data);
  return response.data;
};

export const getStoryStats = async (
  page: number,
  pageSize: number
): Promise<GetStoryStatsResponse> => {
  const response = await https.get("/api/Admin/story", {
    params: {
      page,
      pageSize,
    },
  });

  return response.data;
};

export const getSubscription =
  async (): Promise<GetSubscriptionStatsResponse> => {
    const response = await https.get("/api/Admin/subscription");
    return response.data;
  };

export const getDashboardStats =
  async (): Promise<GetDashboardStatsResponse> => {
    const response = await https.get("/api/Admin/dashboard");
    return response.data;
  };

export const getPaymentStats = async (
  page: number,
  pageSize: number,
  filter: PaymentFilter = "total"
): Promise<GetPaymentStatsResponse> => {
  const response = await https.get("/api/Admin/payment", {
    params: {
      page,
      pageSize,
      filter,
    },
  });

  return response.data;
};
