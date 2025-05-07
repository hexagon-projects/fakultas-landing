export interface Agenda {
  id: number;
  title: string;
  slug: string | null;
  start_date: string;
  end_date: string;
  description: string;
  event: string;
  location: string;
  yt: string;
  register_link: string;
  contact: string;
  image: string;
  category: string;
  created_at: string;
  updated_at: string;
}
