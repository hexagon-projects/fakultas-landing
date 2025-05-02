
import type { Partner } from "../types/partner";
import ApiService from "./ApiService";

const PartnerService = {
  getAll() {
    return ApiService.get("partner");
  },

  getAllHome() {
    return ApiService.get("partner-home");
  },

  getById(id: number): Promise<Partner> {
    return ApiService.get(`partner/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching partner by ID:", error);
        throw error;
      });
  },
};

export default PartnerService;
