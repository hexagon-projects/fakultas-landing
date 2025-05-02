import type { Slider } from "../types/slider";
import ApiService from "./ApiService";

const SliderService = {
  getAll() {
    return ApiService.get("slider");
  },

  getAllHome() {
    return ApiService.get("slider-home");
  },

  getById(id: number): Promise<Slider> {
    return ApiService.get(`slider/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching slider by ID:", error);
        throw error;
      });
  },
};

export default SliderService;
