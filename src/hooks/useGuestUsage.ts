import { useState, useEffect } from "react";

interface GuestUsage {
  count: number;
  history: Array<{
    id: string;
    original_text: string;
    rewritten_text: string;
    translation?: string;
    settings: {
      tone: string;
      length: string;
      target_lang?: string;
    };
    created_at: string;
  }>;
}

const GUEST_USAGE_KEY = "fixmytext_guest_usage";
const GUEST_LIMIT = 100;

export const useGuestUsage = () => {
  const [guestUsage, setGuestUsage] = useState<GuestUsage>(() => {
    const stored = localStorage.getItem(GUEST_USAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return { count: 0, history: [] };
      }
    }
    return { count: 0, history: [] };
  });

  useEffect(() => {
    localStorage.setItem(GUEST_USAGE_KEY, JSON.stringify(guestUsage));
  }, [guestUsage]);

  const canRewrite = guestUsage.count < GUEST_LIMIT;
  const remaining = Math.max(0, GUEST_LIMIT - guestUsage.count);

  const incrementUsage = (entry: Omit<GuestUsage["history"][0], "id" | "created_at">) => {
    setGuestUsage((prev) => ({
      count: prev.count + 1,
      history: [
        {
          id: Date.now().toString(),
          ...entry,
          created_at: new Date().toISOString(),
        },
        ...prev.history,
      ],
    }));
  };

  const clearHistory = () => {
    setGuestUsage({ count: 0, history: [] });
  };

  return {
    canRewrite,
    remaining,
    limit: GUEST_LIMIT,
    count: guestUsage.count,
    history: guestUsage.history,
    incrementUsage,
    clearHistory,
  };
};
