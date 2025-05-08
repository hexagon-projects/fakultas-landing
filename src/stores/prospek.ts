import { defineStore } from "pinia";
import type { Prospek } from "@/core/types/prospek";
import ProspekService from "@/core/services/ProspekService";

interface ProspekState {
  prospek: Prospek[];
  currentProspek: Prospek[];
  loading: boolean;
  error: string | null;
}

export const useProspekStore = defineStore("prospek", {
  state: (): ProspekState => ({
    prospek: [],
    currentProspek: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchProspek() {
      this.loading = true;
      this.error = null;
      try {
        const response = await ProspekService.getAll();
        this.prospek = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch prospek";
        console.error("Error fetching prospek:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchProspekHome() {
      this.loading = true;
      this.error = null;
      try {
        const response = await ProspekService.getAllHome();
        this.prospek = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch prospek";
        console.error("Error fetching prospek:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchProspekbyId(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const unggulan = await ProspekService.getById(id);
        this.currentProspek = unggulan.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch unggulan";
        console.error("Error fetching unggulan:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
