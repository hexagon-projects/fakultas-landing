import ApiService from "./ApiService";

const UnggulanService = {
  getAll() {
    return ApiService.get("unggulan");
  },

  getAllHome() {
    return ApiService.get("unggulan-home");
  },

  getById(id: number) {
    return ApiService.get(`unggulan/${id}`)
  },
};

export default UnggulanService;
