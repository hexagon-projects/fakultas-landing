export interface Partner {
  id: number;
  id_departement: number;
  name: string;
  url: string;
  description: string;
  detail: string;
  image: string | null;
  status: string;
  home?: string | null;
  created_at: string;
  updated_at: string;
}
