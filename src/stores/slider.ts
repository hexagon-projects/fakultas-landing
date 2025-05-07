import { defineStore } from "pinia";
import type { Slider } from "@/core/types/slider";
import SliderService from "@/core/services/SliderService";

interface SliderStore {
  sliders: Slider[];
  currentSlider: Slider[] | null;
  loading: boolean;
  error: string | null;
}

export const useSliderStore = defineStore("slider", {
  state: (): SliderStore => ({
    sliders: [],
    currentSlider: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchSlider() {
      this.loading = true;
      this.error = null;
      try {
        const response = await SliderService.getAll();
        this.sliders = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch sliders";
        console.error("Error fetching sliders:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchSliderHome() {
      this.loading = true;
      this.error = null;
      try {
        const response = await SliderService.getAllHome();
        this.sliders = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch sliders";
        console.error("Error fetching sliders:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchSliderbyId(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const partner = await SliderService.getById(id);
        this.currentSlider = [partner];
      } catch (error: any) {
        this.error = error.message || "Failed to fetch partner";
        console.error("Error fetching partner:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
