import { defineStore } from "pinia";
import type { Team } from "@/core/types/team";
import TeamService from "@/core/services/TeamService";

interface TeamStore {
  teams: Team[];
  currentTeams: Team[];
  loading: boolean;
  error: string | null;
}

export const useTeamStore = defineStore("team", {
  state: (): TeamStore => ({
    teams: [],
    currentTeams: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchTeam() {
      this.loading = true;
      this.error = null;
      try {
        const response = await TeamService.getAll();
        this.teams = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch teams";
        console.error("Error fetching teams:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchTeamHome() {
      this.loading = true;
      this.error = null;
      try {
        const response = await TeamService.getAllHome();
        this.teams = response.data;
      } catch (error: any) {
        this.error = error.message || "Failed to fetch teams";
        console.error("Error fetching teams:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchTeambyId(id: number) {
      this.loading = true;
      this.error = null;
      try {
        const partner = await TeamService.getById(id);
        this.currentTeams = [partner];
      } catch (error: any) {
        this.error = error.message || "Failed to fetch partner";
        console.error("Error fetching partner:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
