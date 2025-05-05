export interface IFakultasData {
    id: number;
    name: string;
    akreditasi: string;
    tagline: string;
    yt_id: string;
    instagram: string;
    tiktok: string;
    youtube: string;
    facebook: string;
    statistik1: string;
    statistik2: string;
    statistik3: string;
    statistik4: string;
    title1: string;
    title2: string;
    title3: string;
    title4?: null | string;
    description1: string;
    description2: string;
    description3: string;
    description4?: null | string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    color1: string;
    color2: string;
    address?: null | string;
    map?: null | string;
    link1?: null | string;
    link2?: null | string;
    link3?: null | string;
    link4?: null | string;
}

export interface IDataUngulan {
    id: number;
    id_departement: number;
    title: string;
    description: string;
    image: string;
    home?: null | string;
    created_at: string;
    updated_at: string;
}

export interface IPrestasiData {
    id: number;
    id_departement: number;
    title: string;
    name: string;
    winner_name: string;
    description: string;
    home?: null | string;
    image: string;
    created_at: string;
    updated_at: string;
}

export interface IAgendaData {
    id: number;
    title: string;
    slug: string;
    start_date: string;
    end_date: string;
    description: string;
    event: string;
    location: string;
    yt: string;
    register_link: string;
    contact: string;
    image: string;
    created_at: string;
    updated_at: string;
}
export interface ITestimoniData {
    id: number;
    id_departement: number | null;
    name: string;
    title: string;
    description: string;
    home: string | null;
    yt: string;
    image: string;
    created_at: string;
    updated_at: string;
}

export interface IOrganisasiData {
    id: number;
    id_departement: number;
    name: string;
    category: string;
    description: string;
    home: string;
    image: string;
    created_at: string;
    updated_at: string;
}

export interface IBeritaData {
    id: number;
    id_category: number;
    title: string;
    slug: string;
    resume: string;
    content: string;
    publish: string;
    image: string;
    yt: string;
    status: string;
    created_at: string;
    updated_at: string;
}

export interface IFasilitasData {
    id: number;
    id_departement: number;
    title: string;
    subtitle: string;
    description: string;
    home?: null | string;
    image1: string;
    image2: string;
    image3?: null | string;
    image4?: null | string;
    yt: string;
    created_at: string;
    updated_at: string;
}

export interface IMitraData {
    id: number;
    id_departement: number;
    name: string;
    url: string;
    description: string;
    detail: string;
    image: string;
    status: string;
    home: string;
    created_at: string;
    updated_at: string;
}

export interface IPortofolioData {
    id: number;
    id_departement: number;
    title: string;
    description: string;
    home?: null | string;
    image1: string;
    image2: string;
    image3: string;
    yt: string;
    created_at: string;
    updated_at: string;
}

export interface IDosenData {
    id: number;
    id_departement: number;
    name: string;
    title: string;
    email: string;
    phone: string;
    ig: string;
    fb: string;
    yt: string;
    tiktok: string;
    image: string;
    home?: null | string;
    created_at: string;
    updated_at: string;
}

export interface IJurnalData {
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