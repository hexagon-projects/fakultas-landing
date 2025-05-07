export interface Organization {
  id: number;
  id_departement: number | null;
  name: string;
  category: string;
  description: string;
  home?: string | null;
  image: string;
  created_at: string;
  updated_at: string;
}
