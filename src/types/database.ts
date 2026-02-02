// Database types for Supabase tables

export interface ContactSubmission {
  id: string;
  created_at: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  language: 'en' | 'th' | 'zh';
  user_agent: string | null;
  ip_address: string | null;
}

export type ContactSubmissionInsert = Omit<ContactSubmission, 'id' | 'created_at'>;

export interface RewriteHistory {
  id: string;
  user_id: string;
  original_text: string;
  rewritten_text: string;
  translation: string | null;
  settings: {
    tone?: string;
    length?: string;
    target_lang?: string;
  };
  created_at: string;
}

export type RewriteHistoryInsert = Omit<RewriteHistory, 'id' | 'created_at'>;

export interface UserUsage {
  user_id: string;
  monthly_rewrites: number;
  last_reset_at: string;
  subscription_tier: 'free' | 'paid';
  created_at: string;
  updated_at: string;
}

export type UserUsageUpdate = Partial<Omit<UserUsage, 'user_id' | 'created_at'>>;

export type ConversationOutcome = 
  | 'resolved' 
  | 'needs_followup' 
  | 'transferred' 
  | 'abandoned' 
  | 'scheduled_callback' 
  | 'other';

export type UserSentiment = 
  | 'positive' 
  | 'neutral' 
  | 'negative' 
  | 'frustrated' 
  | 'satisfied';

export interface ElevenLabsConversation {
  id: string;
  created_at: string;
  updated_at: string | null;
  user_name: string | null;
  user_email: string | null;
  user_phone: string | null;
  conversation_summary: string;
  user_intent: string;
  conversation_outcome: ConversationOutcome;
  action_items: string | null;
  user_sentiment: UserSentiment | null;
  tags: string | null;
  additional_notes: string | null;
  thai_translation: string | null;
}

export type ElevenLabsConversationInsert = Omit<ElevenLabsConversation, 'id' | 'created_at' | 'updated_at'>;

export interface Database {
  public: {
    Tables: {
      contact_submissions: {
        Row: ContactSubmission;
        Insert: ContactSubmissionInsert;
        Update: Partial<ContactSubmissionInsert>;
      };
      rewrite_history: {
        Row: RewriteHistory;
        Insert: RewriteHistoryInsert;
        Update: Partial<RewriteHistoryInsert>;
      };
      user_usage: {
        Row: UserUsage;
        Insert: Partial<UserUsage>;
        Update: UserUsageUpdate;
      };
      elevenlabs_conversations: {
        Row: ElevenLabsConversation;
        Insert: ElevenLabsConversationInsert;
        Update: Partial<ElevenLabsConversationInsert>;
      };
    };
  };
}
