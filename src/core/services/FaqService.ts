import ApiService from "./ApiService";

const FaqService = {
  getAll() {
    return ApiService.get("faqs");
  },
};

export default FaqService;
