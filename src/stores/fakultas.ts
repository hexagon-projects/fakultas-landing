import { defineStore } from "pinia";
import type { Faculty } from "@/core/types/fakultas";
import FakultasService from "@/core/services/FakultasService";

interface FakultasState {
  fakultas: Faculty[];
  loading: boolean;
  error: string | null;
}

export const useFakultasStore = defineStore("fakultas", {
  state: (): FakultasState => ({
    fakultas: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchFakultas() {
      this.loading = true;
      this.error = null;
      try {
        const response = await FakultasService.getDetail();
        this.fakultas = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch fakultas";
        console.error("Error fetching fakultas:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
