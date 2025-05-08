import OrganisasiService from "@/core/services/OrganisasiService";
import type { Organization } from "@/core/types/organisasi";
import { defineStore } from "pinia";

interface OrganisasiStore {
  organizations: Organization[];
  currentOrganizations: Organization[];
  loading: boolean;
  error: string | null;
}

export const useOrganisasiStore = defineStore("organisasi", {
  state: (): OrganisasiStore => ({
    organizations: [],
    currentOrganizations: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchOrganisasi() {
      this.loading = true;
      this.error = null;
      try {
        const response = await OrganisasiService.getAll();
        this.organizations = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch organizations";
        console.error("Error fetching organizations:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchOrganisasiHome() {
      this.loading = true;
      this.error = null;
      try {
        const response = await OrganisasiService.getAllHome();
        this.organizations = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch organizations";
        console.error("Error fetching organizations:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchOrganisasibyId(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const organisasi = await OrganisasiService.getById(id);
        this.currentOrganizations = organisasi.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch organisasi";
        console.error("Error fetching organisasi:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
