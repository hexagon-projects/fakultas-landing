
import type { Prospek } from "../types/prospek";
import ApiService from "./ApiService";

const ProspekService = {
  getAll() {
    return ApiService.get("prospek");
  },

  getAllHome() {
    return ApiService.get("prospek-home");
  },

  getById(id: number): Promise<Prospek> {
    return ApiService.get(`prospek/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching prospek by ID:", error);
        throw error;
      });
  },
};

export default ProspekService;
