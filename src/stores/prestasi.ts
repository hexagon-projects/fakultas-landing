import { defineStore } from "pinia";
import type { Prestasi } from "@/core/types/Prestasi";
import PrestasiService from "@/core/services/PrestasiService";

interface PrestasiState {
  prestasis: Prestasi[];
  currentPrestasi: Prestasi[];
  loading: boolean;
  error: string | null;
}

export const usePrestasiStore = defineStore("prestasi", {
  state: (): PrestasiState => ({
    prestasis: [],
    currentPrestasi: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchPrestasis() {
      this.loading = true;
      this.error = null;
      try {
        const response = await PrestasiService.getAll();
        this.prestasis = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch prestasis";
        console.error("Error fetching prestasis:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchPrestasisHome() {
      this.loading = true;
      this.error = null;
      try {
        const response = await PrestasiService.getAllHome();
        this.prestasis = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch prestasis";
        console.error("Error fetching prestasis:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchPrestasibyId(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const prestasi = await PrestasiService.getById(id);
        this.currentPrestasi = [prestasi];
      } catch (error: any) {
        this.error = error.message || "Failed to fetch prestasi";
        console.error("Error fetching prestasi:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
