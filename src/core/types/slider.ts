export interface Slider {
  id: number;
  id_departement: number;
  title: string;
  description: string;
  image1: string;
  image2: string;
  yt: string;
  status: "active" | "inactive";
  home: "0" | "1";
  created_at: string;
  updated_at: string;
}
