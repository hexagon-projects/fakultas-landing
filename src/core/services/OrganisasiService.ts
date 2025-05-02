import type { Organization } from "../types/organisasi";
import ApiService from "./ApiService";

const OrganisasiService = {
  getAll() {
    return ApiService.get("organisasi");
  },

  getAllHome() {
    return ApiService.get("organisasi-home");
  },

  getById(id: number): Promise<Organization> {
    return ApiService.get(`organisasi/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching organisasi by ID:", error);
        throw error;
      });
  },
};

export default OrganisasiService;
