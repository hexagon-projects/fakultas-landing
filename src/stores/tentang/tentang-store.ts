import ApiService from "@/core/services/ApiService";
import { defineStore } from "pinia";
import type { IDosenData } from "./tentang-interface";

export const useTentangStore = defineStore("tentang", {
    state: () => ({
        dosenData: [] as IDosenData[],
    }),
    getters: {
    },
    actions: {
        async getInitialData() {
            try {
                Promise.all([
                    this.getDosenData(),
                ]).then(() => {
                    console.log("All data fetched successfully");
                });
            } catch (error) {
                console.error("Error fetching initial data:", error);
            }
        },
        async getDosenData() {
            try {
                const response = await ApiService.get("/team");
                if (response.status === 200) {
                    this.dosenData = response.data;
                } else {
                    this.dosenData = [] as IDosenData[];
                    console.error("Error fetching dosen data:", response.status, response.statusText);
                }
            } catch (error) {
                console.error("Error fetching dosen data:", error);
            }
        },
    },
})