import SideBannerService from "@/core/services/SideBannerService";
import type SideBanner from "@/core/types/sidebanner";
import { defineStore } from "pinia";

interface SideBannerStore {
  sidebanner: SideBanner | null;
  loading: boolean;
  error: string | null;
}

export const useSideBannerStore = defineStore("side-baner", {
  state: (): SideBannerStore => ({
    sidebanner: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchSidebanner() {
      this.loading = true;
      this.error = null;
      try {
        const response = await SideBannerService.getOne();
        this.sidebanner = response.data;
        console.log(response.data)
      } catch (error: any) {
        this.error = error.message || "Failed to fetch sidebanner";
        console.error("Error fetching sidebanner:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
