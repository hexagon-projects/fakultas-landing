import ApiService from "./ApiService";

const PrestasiService = {
  getAll() {
    return ApiService.get("prestasi");
  },

  getAllHome() {
    return ApiService.get("prestasi-home");
  },

  getById(id: number) {
    return ApiService.get(`prestasi/${id}`)
  },
};

export default PrestasiService;
