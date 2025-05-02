import type { Prestasi } from "../types/Prestasi";
import ApiService from "./ApiService";

const PrestasiService = {
  getAll() {
    return ApiService.get("prestasi");
  },

  getAllHome() {
    return ApiService.get("prestasi-home");
  },

  getById(id: number): Promise<Prestasi> {
    return ApiService.get(`prestasi/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching prestasi by ID:", error);
        throw error;
      });
  },
};

export default PrestasiService;
