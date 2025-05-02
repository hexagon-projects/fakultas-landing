import type { Testimonial } from "../types/testimoni";
import ApiService from "./ApiService";

const TestimoniService = {
  getAll() {
    return ApiService.get("testimoni");
  },

  getAllHome() {
    return ApiService.get("testimoni-home");
  },

  getById(id: number): Promise<Testimonial> {
    return ApiService.get(`testimoni/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching testimoni by ID:", error);
        throw error;
      });
  },
};

export default TestimoniService;
