import ApiService from "./ApiService";

const FakultasService = {
  getDetail() {
    return ApiService.get("fakultas");
  },
};

export default FakultasService;
