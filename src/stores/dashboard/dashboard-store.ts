import { defineStore } from "pinia";

export const useDashboardStore = defineStore("Dashboard", {
    state: () => ({
        dashboardData: {} as any,
        loading: false,
    }),
    getters: {
    },
    actions: {
    },
})