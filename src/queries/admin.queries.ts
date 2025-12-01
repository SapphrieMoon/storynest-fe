import {
  adminLogin,
  getDashboardStats,
  getStoryStats,
  getSubscription,
} from "@/services/admin.service";
import {
  AdminLoginRequest,
  GetDashboardStatsResponse,
  GetStoryStatsResponse,
  GetSubscriptionStatsResponse,
} from "@/types/admin.type";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data: AdminLoginRequest) => adminLogin(data),
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};

export const useStoryStats = (page: number, pageSize: number) => {
  return useQuery<GetStoryStatsResponse>({
    queryKey: ["story-stats", page, pageSize],
    queryFn: () => getStoryStats(page, pageSize),
    staleTime: 1000 * 30, // cache 30s cho admin
  });
};

export const useSubscriptionStats = () => {
  return useQuery<GetSubscriptionStatsResponse>({
    queryKey: ["subscription-stats"],
    queryFn: getSubscription,
    staleTime: 1000 * 60, // cache 1 phút
  });
};

export const useDashboardStats = () => {
  return useQuery<GetDashboardStatsResponse>({
    queryKey: ["dashboard-stats"],
    queryFn: getDashboardStats,
    staleTime: 1000 * 60, // cache 1 phút
  });
};
