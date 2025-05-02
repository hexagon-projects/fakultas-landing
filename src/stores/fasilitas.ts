import { defineStore } from "pinia";
import FasilitasService from "@/core/services/FasilitasService";
import type { Fasilitas } from "@/core/types/fasilitas";

interface FasilitasStore {
  fasilitas: Fasilitas[];
  currentFasilitas: Fasilitas[];
  loading: boolean;
  error: string | null;
}

export const useFasilitasStore = defineStore("fasilitas", {
  state: (): FasilitasStore => ({
    fasilitas: [],
    currentFasilitas: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchFasilitas() {
      this.loading = true;
      this.error = null;
      try {
        const response = await FasilitasService.getAll();
        this.fasilitas = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch fasilitas";
        console.error("Error fetching fasilitas:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchFasilitasHome() {
      this.loading = true;
      this.error = null;
      try {
        const response = await FasilitasService.getAllHome();
        this.fasilitas = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch fasilitas";
        console.error("Error fetching fasilitas:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchFasilitasbyId(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const partner = await FasilitasService.getById(id);
        this.currentFasilitas = partner;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch partner";
        console.error("Error fetching partner:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
