export interface IDosenData {
    id: number;
    id_departement: number;
    name: string;
    title: string;
    description: string;
    home?: null | string;
    image: string;
    created_at: string;
    updated_at: string;
}

export interface ITimelineData {
    id: number;
    id_departement: number;
    title: string;
    slug: string;
    description: string;
    image: string;
    no_urut: number;
    home?: null | string;
    created_at: string;
    updated_at: string;
}