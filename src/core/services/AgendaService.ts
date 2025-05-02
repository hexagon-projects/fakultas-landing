import ApiService from "./ApiService";
import type { Agenda } from "../types/agenda";

const AgendaService = {
  getAll() {
    return ApiService.get("agenda");
  },

  getBySlug(slug: string): Promise<Agenda> {
    return ApiService.get(`agenda/${slug}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching agenda by slug:", error);
        throw error;
      });
  },
};

export default AgendaService;
