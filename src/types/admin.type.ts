export interface AdminLoginRequest {
  usernameOrEmail: string;
  password: string;
  deviceId?: string | null;
  ipAddress?: string | null;
  userAgent?: string | null;
}

export interface AdminLoginData {
  id: number;
  username: string;
  accessToken: string;
  refreshToken: string;
  avatarUrl: string;
}

export interface AdminLoginResponse {
  status: number;
  message: string;
  data: AdminLoginData;
}

// ====== ROOT RESPONSE ======
export interface GetStoryStatsResponse {
  status: number;
  message: string;
  data: {
    stories: StoriesPagination;
  };
}

// ====== PAGINATION ======
export interface StoriesPagination {
  totalItems: number;
  page: number;
  pageSize: number;
  totalPages: number;
  items: StoryItem[];
}

// ====== STORY ITEM ======
export interface StoryItem {
  id: number;
  title: string;
  slug: string;
  content: string; // HTML string
  summary: string; // HTML string
  coverImageUrl: string;
  privacyStatus: number; // enum nếu sau này có
  storyStatus: number; // enum nếu sau này có
  viewCount: number;
  likeCount: number;
  commentCount: number;
  isAnonymous: boolean;
  createdAt: string; // ISO date string
  lastUpdatedAt: string | null;
  publishedAt: string;
  userId: number;

  user: User | null;
  media: Media[];
  collectionStories: CollectionStory[];
  comments: Comment[];
  likes: Like[];
  storyTags: StoryTag[];
  storyViews: StoryView[];
  reports: Report[];
  sentimentAnalyses: SentimentAnalysis[];
}

// ====== RELATED ENTITIES (rỗng nên khai báo cơ bản) ======
export type User = Record<string, unknown>;
export type Media = Record<string, unknown>;
export type CollectionStory = Record<string, unknown>;
export type Comment = Record<string, unknown>;
export type Like = Record<string, unknown>;
export type StoryTag = Record<string, unknown>;
export type StoryView = Record<string, unknown>;
export type Report = Record<string, unknown>;
export type SentimentAnalysis = Record<string, unknown>;

// ====== ROOT RESPONSE ======
export interface GetSubscriptionStatsResponse {
  status: number;
  message: string;
  data: SubscriptionStatsData;
}

// ====== DATA ======
export interface SubscriptionStatsData {
  totalSubscriptions: number;
  activeSubscriptions: number;
  totalRevenue: number;
  totalFreemiumUsers: number;
  totalPremiumUsers: number;
  bloomPlan: SubscriptionPlanStats;
  flourishPlan: SubscriptionPlanStats;
  ensemblePlan: SubscriptionPlanStats;
}

// ====== PLAN ITEM ======
export interface SubscriptionPlanStats {
  planName: string;
  userCount: number;
}

// ====== ROOT RESPONSE ======
export interface GetDashboardStatsResponse {
  status: number;
  message: string;
  data: DashboardStatsData;
}

// ====== DATA ======
export interface DashboardStatsData {
  totalUsers: number;
  totalStories: number;
  totalComments: number;
  totalSubscriptions: number;
}
