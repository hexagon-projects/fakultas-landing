import { defineStore } from "pinia";
import type { Kurikulum } from "@/core/types/kurikulum";
import KurikulumService from "@/core/services/KurikulumService";

interface KurikulumState {
  kurikulum: Kurikulum[];
  currentKurikulum: Kurikulum[];
  loading: boolean;
  error: string | null;
}

export const useKurikulumStore = defineStore("kurikulum", {
  state: (): KurikulumState => ({
    kurikulum: [],
    currentKurikulum: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchKurikulum() {
      this.loading = true;
      this.error = null;
      try {
        const response = await KurikulumService.getAll();
        this.kurikulum = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch kurikulum";
        console.error("Error fetching kurikulum:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchKurikulumHome() {
      this.loading = true;
      this.error = null;
      try {
        const response = await KurikulumService.getAllHome();
        this.kurikulum = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch kurikulum";
        console.error("Error fetching kurikulum:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchKurikulumbyId(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const kurikulum = await KurikulumService.getById(id);
        this.currentKurikulum = kurikulum;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch kurikulum";
        console.error("Error fetching kurikulum:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
