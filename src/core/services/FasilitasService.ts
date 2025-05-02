import type { Fasilitas } from "../types/fasilitas";
import ApiService from "./ApiService";

const FasilitasService = {
  getAll() {
    return ApiService.get("fasilitas");
  },

  getAllHome() {
    return ApiService.get("fasilitas-home");
  },

  getById(id: number): Promise<Fasilitas> {
    return ApiService.get(`fasilitas/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching fasilitas by ID:", error);
        throw error;
      });
  },
};

export default FasilitasService;
