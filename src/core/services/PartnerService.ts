
import ApiService from "./ApiService";

const PartnerService = {
  getAll() {
    return ApiService.get("partner");
  },

  getAllHome() {
    return ApiService.get("partner-home");
  },

  getById(id: number) {
    return ApiService.get(`partner/${id}`)
  },
};

export default PartnerService;
