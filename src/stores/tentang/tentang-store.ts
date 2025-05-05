import ApiService from "@/core/services/ApiService";
import { defineStore } from "pinia";
import type { IDosenData, ITimelineData } from "./tentang-interface";

export const useTentangStore = defineStore("tentang", {
    state: () => ({
        dosenData: [] as IDosenData[],
        timelineData: [] as ITimelineData[],
    }),
    getters: {
    },
    actions: {
        async getInitialData() {
            try {
                Promise.all([
                    this.getDosenData(),
                    this.getTimelineData(),
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
        async getTimelineData() {
            try {
                const response = await ApiService.get("/timeline");
                if (response.status === 200) {
                    this.timelineData = response.data;
                } else {
                    this.timelineData = [] as ITimelineData[];
                    console.error("Error fetching timeline data:", response.status, response.statusText);
                }
            } catch (error) {
                console.error("Error fetching timeline data:", error);
            }
        },
    },
})