import ApiService from "@/core/services/ApiService";
import { defineStore } from "pinia";

export const useKerjasamaStore = defineStore("kerjasama", {
    state: () => ({
    }),
    getters: {
    },
    actions: {
        async getInitialData() {
            try {
                Promise.all([
                ]).then(() => {
                    console.log("All data fetched successfully");
                });
            } catch (error) {
                console.error("Error fetching initial data:", error);
            }
        },
    },
})