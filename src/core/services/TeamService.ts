import type { Team } from "../types/team";
import ApiService from "./ApiService";

const TeamService = {
  getAll() {
    return ApiService.get("team");
  },

  getAllHome() {
    return ApiService.get("team-home");
  },

  getById(id: number): Promise<Team> {
    return ApiService.get(`team/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching team by ID:", error);
        throw error;
      });
  },
};

export default TeamService;
