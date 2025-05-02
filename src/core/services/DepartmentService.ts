import ApiService from "./ApiService";
import type { Departement } from "../types/departement";

const DepartementService = {
  getAll() {
    return ApiService.get("departement");
  },

  async getBySlug(slug: string): Promise<Departement | undefined> {
    const response = await ApiService.get("departement");
    const departements = response.data;
    return departements.find((d: Departement) => d.slug === slug);
  },
};

export default DepartementService;
