import { defineStore } from "pinia";
import type { Partner } from "@/core/types/partner";
import PartnerService from "@/core/services/PartnerService";

interface PartnerState {
  partners: Partner[];
  currentPartner: Partner[];
  loading: boolean;
  error: string | null;
}

export const usePartnerStore = defineStore("partner", {
  state: (): PartnerState => ({
    partners: [],
    currentPartner: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchPartners() {
      this.loading = true;
      this.error = null;
      try {
        const response = await PartnerService.getAll();
        this.partners = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch partners";
        console.error("Error fetching partners:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchPartnersHome() {
      this.loading = true;
      this.error = null;
      try {
        const response = await PartnerService.getAllHome();
        this.partners = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch partners";
        console.error("Error fetching partners:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchPartnerbyId(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const partner = await PartnerService.getById(id);
        this.currentPartner = partner;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch partner";
        console.error("Error fetching partner:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
