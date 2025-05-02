
import type { Prospek } from "../types/prospek";
import ApiService from "./ApiService";

const KurikulumService = {
  getAll() {
    return ApiService.get("kurikulum");
  },

  getAllHome() {
    return ApiService.get("kurikulum-home");
  },

  getById(id: number): Promise<Prospek> {
    return ApiService.get(`kurikulum/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching kurikulum by ID:", error);
        throw error;
      });
  },
};

export default KurikulumService;
