import ApiService from "./ApiService";

const SliderService = {
  getAll() {
    return ApiService.get("slider");
  },

  getAllHome() {
    return ApiService.get("slider-home");
  },

  getById(id: number) {
    return ApiService.get(`slider/${id}`)
  },
};

export default SliderService;
