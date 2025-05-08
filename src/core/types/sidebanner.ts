export default interface SideBanner {
  id: number;
  id_departement: number;
  title: string;
  description: string;
  image1: string;
  image2: string;
  yt: string;
  status: 'active' | 'inactive' | string;
  home: '0' | '1' | string;
  created_at: string;
  updated_at: string;
}
