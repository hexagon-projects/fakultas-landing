export interface Testimonial {
  id: number;
  id_departement: number | null;
  name: string;
  title: string;
  description: string;
  home?: string | null;
  yt: string;
  image: string;
  created_at: string;
  updated_at: string;
}
