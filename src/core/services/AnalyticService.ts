import ApiService from "./ApiService";

const AnalyticService = {
  getAll() {
    return ApiService.get("analytics");
  },
};

export default AnalyticService;
