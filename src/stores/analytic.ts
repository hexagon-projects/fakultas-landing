import { defineStore } from "pinia";
import AnalyticService from "@/core/services/AnalyticService";
import type { Analytic } from "@/core/types/analytic";

interface AnalyticStore {
  analytic: Analytic | null;
  loading: boolean;
  error: string | null;
}

export const useAnalyticStore = defineStore("analytics", {
  state: (): AnalyticStore => ({
    analytic: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchAnalytic() {
      this.loading = true;
      this.error = null;
      try {
        const response = await AnalyticService.getAll();
        this.analytic = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch analytic";
        console.error("Error fetching analytic:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
