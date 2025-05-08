import { defineStore } from "pinia";
import type { Testimonial } from "@/core/types/testimoni";
import TestimoniService from "@/core/services/TestimoniService";

interface TestimoniState {
  testimoni: Testimonial[];
  currentTestimoni: Testimonial[];
  loading: boolean;
  error: string | null;
}

export const useTestimoniStore = defineStore("testimoni", {
  state: (): TestimoniState => ({
    testimoni: [],
    currentTestimoni: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchTestimoni() {
      this.loading = true;
      this.error = null;
      try {
        const response = await TestimoniService.getAll();
        this.testimoni = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch testimoni";
        console.error("Error fetching testimoni:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchTestimoniHome() {
      this.loading = true;
      this.error = null;
      try {
        const response = await TestimoniService.getAllHome();
        this.testimoni = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch testimoni";
        console.error("Error fetching testimoni:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchTestimonibyId(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const testimoni = await TestimoniService.getById(id);
        this.currentTestimoni = testimoni.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch testimoni";
        console.error("Error fetching testimoni:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
