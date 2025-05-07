import ApiService from "@/core/services/ApiService";
import { defineStore } from "pinia";
import type { IFakultasData, IDataUngulan, IPrestasiData, IAgendaData, ITestimoniData, IOrganisasiData, IBeritaData, IFasilitasData, IMitraData, IPortofolioData, IDosenData, IJurnalData, ISliderData } from "./beranda-interface";
import { hexToCssHsl, hexToRgb } from "@/core/helpers/helper";

export const useBerandaStore = defineStore("beranda", {
    state: () => ({
        fakultasData: {} as IFakultasData,
        ungulanData: [] as IDataUngulan[],
        prestasiData: [] as IPrestasiData[],
        agendaData: [] as IAgendaData[],
        testimoniData: [] as ITestimoniData[],
        organisasiData: [] as IOrganisasiData[],
        beritaData: [] as IBeritaData[],
        fasilitasData: [] as IFasilitasData[],
        mitraData: [] as IMitraData[],
        portofolioData: [] as IPortofolioData[],
        dosenData: [] as IDosenData[],
        jurnalData: [] as IJurnalData[],
        sliderData: [] as ISliderData[],
        isLoading: false as boolean,
        isLoaded: false as boolean,
    }),
    actions: {
        async getInitialData() {
            try {
                await Promise.all([
                    this.getDataUngulan(true),
                    this.getDataPrestasi(true),
                    this.getDataAgenda(),
                    this.getDataOrganisasi(true),
                    this.getDataBerita(),
                    this.getDataFasilitas(true),
                    this.getDataPortofolio(true),
                    this.getDataDosen(true),
                    this.getDataSlider(true),
                ]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },

        async getDataBeranda() {
            this.isLoading = true;
            try {
                const response = await ApiService.get("/fakultas");

                if (response.status === 200) {
                    this.fakultasData = response.data;
                    const rgbColor = hexToRgb(this.fakultasData.color1);
                    const hslColor = hexToCssHsl(this.fakultasData.color1);

                    document.documentElement.style.setProperty('--color-primary-r', rgbColor.r.toString());
                    document.documentElement.style.setProperty('--color-primary-g', rgbColor.g.toString());
                    document.documentElement.style.setProperty('--color-primary-b', rgbColor.b.toString());
                    document.documentElement.style.setProperty('--background', hslColor);
                } else {
                    this.fakultasData = {} as IFakultasData;
                    console.error("Error fetching data:", response.status, response.statusText);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                this.isLoading = false;
                this.isLoaded = true;
            }
        },

        async fetchData(endpoint: string, isHome: boolean = false) {
            const route = isHome ? `${endpoint}-home` : endpoint;
            try {
                const response = await ApiService.get(route);
                if (response.status === 200) {
                    return response.data;
                }
                console.error("Error fetching data:", response.status, response.statusText);
                return null;
            } catch (error) {
                console.error(`Error fetching ${endpoint}:`, error);
                return null;
            }
        },

        async getDataUngulan(isHome: boolean = false) {
            const data = await this.fetchData("/unggulan", isHome);
            this.ungulanData = data || [] as IDataUngulan[];
        },

        async getDataPrestasi(isHome: boolean = false) {
            const data = await this.fetchData("/prestasi", isHome);
            this.prestasiData = data || [] as IPrestasiData[];
        },

        async getDataAgenda(isHome: boolean = false) {
            const data = await this.fetchData("/agenda", isHome);
            this.agendaData = data || [] as IAgendaData[];
        },

        async getDataTestimoni(isHome: boolean = false) {
            const data = await this.fetchData("/testimoni", isHome);
            this.testimoniData = data || [] as ITestimoniData[];
        },

        async getDataOrganisasi(isHome: boolean = false) {
            const data = await this.fetchData("/organisasi", isHome);
            this.organisasiData = data || [] as IOrganisasiData[];
        },

        async getDataBerita(isHome: boolean = false) {
            const data = await this.fetchData("/post", isHome);
            this.beritaData = data || [] as IBeritaData[];
        },

        async getDataFasilitas(isHome: boolean = false) {
            const data = await this.fetchData("/fasilitas", isHome);
            this.fasilitasData = data || [] as IFasilitasData[];
        },

        async getDataMitra(isHome: boolean = false) {
            const data = await this.fetchData("/partner", isHome);
            this.mitraData = data || [] as IMitraData[];
        },

        async getDataPortofolio(isHome: boolean = false) {
            const data = await this.fetchData("/portofolio", isHome);
            this.portofolioData = data || [] as IPortofolioData[];
        },

        async getDataDosen(isHome: boolean = false) {
            const data = await this.fetchData("/team", isHome);
            this.dosenData = data || [] as IDosenData[];
        },

        async getDataJurnal(isHome: boolean = false) {
            const data = await this.fetchData("/jurnal", isHome);
            this.jurnalData = data || [] as IJurnalData[];
        },

        async getDataSlider(isHome: boolean = false) {
            const data = await this.fetchData("/slider", isHome);
            this.sliderData = data || [] as ISliderData[];
        },
    },
});
