import ApiService from "./ApiService";

const SideBannerService = {
  getOne() {
    return ApiService.get("side-baner");
  },
};

export default SideBannerService;
