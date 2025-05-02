// src/stores/departement.ts
import { defineStore } from "pinia";
import type { Departement } from "@/core/types/departement";
import DepartementService from "@/core/services/DepartmentService";

interface DepartementState {
  departements: Departement[];
  currentDepartement: Departement | null;
  loading: boolean;
  error: string | null;
}

export const useDepartementStore = defineStore("departement", {
  state: (): DepartementState => ({
    departements: [],
    currentDepartement: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchDepartements() {
      this.loading = true;
      this.error = null;
      try {
        const response = await DepartementService.getAll();
        this.departements = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch departements";
        console.error("Error fetching departements:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchDepartementBySlug(slug: string) {
      this.currentDepartement = null;
      this.loading = true;
      this.error = null;
      try {
        const departement = await DepartementService.getBySlug(slug);
        if (departement) {
          this.currentDepartement = departement;
        } else {
          this.error = "Departement not found";
        }
      } catch (error: any) {
        this.error = error.message || "Failed to fetch departement";
        console.error("Error fetching departement:", error);
      } finally {
        this.loading = false;
      }
    },
  },

  getters: {
    activeDepartements: (state) =>
      state.departements.filter((d) => d.status === "active"),
  },
});
