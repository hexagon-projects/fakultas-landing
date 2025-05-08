import ApiService from "./ApiService";

const FasilitasService = {
  getAll() {
    return ApiService.get("fasilitas");
  },

  getAllHome() {
    return ApiService.get("fasilitas-home");
  },

  getById(id: number) {
    return ApiService.get(`fasilitas/${id}`)
  },
};

export default FasilitasService;
