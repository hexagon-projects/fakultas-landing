export interface Post {
  id: number;
  id_category: number;
  title: string;
  slug: string | null;
  resume: string;
  content: string;
  publish: string;
  image: string;
  yt: string;
  status: string;
  created_at: string;
  updated_at: string;
}
