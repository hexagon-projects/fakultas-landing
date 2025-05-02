import type { Unggulan } from "../types/unggulan";
import ApiService from "./ApiService";

const UnggulanService = {
  getAll() {
    return ApiService.get("unggulan");
  },

  getAllHome() {
    return ApiService.get("unggulan-home");
  },

  getById(id: number): Promise<Unggulan> {
    return ApiService.get(`unggulan/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching unggulan by ID:", error);
        throw error;
      });
  },
};

export default UnggulanService;
