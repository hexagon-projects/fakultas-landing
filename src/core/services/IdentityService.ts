import ApiService from "./ApiService";

const IdentityService = {
  getAll() {
    return ApiService.get("indentity");
  },
};

export default IdentityService;
