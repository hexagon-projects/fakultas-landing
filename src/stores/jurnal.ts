export interface Jurnal {
  id: number;
  id_departement: number;
  id_team: number;
  title: string;
  name: string;
  slug: string;
  description: string;
  home?: null | string;
  image1: string;
  image2: string;
  image3: string;
  created_at: string;
  updated_at: string;

}
