import ApiService from "./ApiService";

const KurikulumService = {
  getAll() {
    return ApiService.get("kurikulum");
  },

  getAllHome() {
    return ApiService.get("kurikulum-home");
  },

  getById(id: number) {
    return ApiService.get(`kurikulum/${id}`)
  },
};

export default KurikulumService;
