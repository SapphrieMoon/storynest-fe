"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import StoryNestLoader from "@/components/story-nest-loader/StoryNestLoader";

export default function GoogleCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();

  useEffect(() => {
    const token = searchParams.get("token");
    const avatar = searchParams.get("avatar");
    const userId = searchParams.get("userId");
    const credits = searchParams.get("credits");

    if (!token) return;

    // lưu token
    login(token);

    // lưu avatar (decode)
    if (avatar) {
      localStorage.setItem("avatar", decodeURIComponent(avatar));
    }

    // lưu userId
    if (userId) {
      localStorage.setItem("userId", userId);
    }

    // lưu credits
    if (credits) {
      localStorage.setItem("credits", credits);
    } else {
      localStorage.setItem("credits", "0");
    }

    router.replace("/home");
  }, [login, router, searchParams]);

  return (
    <div className="mt-3">
      <StoryNestLoader />
    </div>
  );
}
