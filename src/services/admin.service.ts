import https from "@/lib/axios";
import {
  AdminLoginRequest,
  AdminLoginResponse,
  GetDashboardStatsResponse,
  GetStoryStatsResponse,
  GetSubscriptionStatsResponse,
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
