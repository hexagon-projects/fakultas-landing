import ApiService from "./ApiService";

const OrganisasiService = {
  getAll() {
    return ApiService.get("organisasi");
  },

  getAllHome() {
    return ApiService.get("organisasi-home");
  },

  getById(id: number) {
    return ApiService.get(`organisasi/${id}`)
  },
};

export default OrganisasiService;
