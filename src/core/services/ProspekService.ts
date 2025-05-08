
import ApiService from "./ApiService";

const ProspekService = {
  getAll() {
    return ApiService.get("prospek");
  },

  getAllHome() {
    return ApiService.get("prospek-home");
  },

  getById(id: number) {
    return ApiService.get(`prospek/${id}`)
  },
};

export default ProspekService;
