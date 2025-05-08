import ApiService from "./ApiService";

const TeamService = {
  getAll() {
    return ApiService.get("team");
  },

  getAllHome() {
    return ApiService.get("team-home");
  },

  getById(id: number) {
    return ApiService.get(`team/${id}`)
  },
};

export default TeamService;
