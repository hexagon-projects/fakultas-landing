import { defineStore } from "pinia";
import type { Unggulan } from "@/core/types/unggulan";
import UnggulanService from "@/core/services/UnggulanService";

interface UnggulanState {
  unggulans: Unggulan[];
  currentUnggulan: Unggulan | null;
  loading: boolean;
  error: string | null;
}

export const useUnggulanStore = defineStore("unggulan", {
  state: (): UnggulanState => ({
    unggulans: [],
    currentUnggulan: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchUnggulans() {
      this.loading = true;
      this.error = null;
      try {
        const response = await UnggulanService.getAll();
        this.unggulans = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch unggulans";
        console.error("Error fetching unggulans:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchUnggulansHome() {
      this.loading = true;
      this.error = null;
      try {
        const response = await UnggulanService.getAllHome();
        this.unggulans = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch unggulans";
        console.error("Error fetching unggulans:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchUnggulanbyId(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const unggulan = await UnggulanService.getById(id);
        this.currentUnggulan = unggulan;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch unggulan";
        console.error("Error fetching unggulan:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
