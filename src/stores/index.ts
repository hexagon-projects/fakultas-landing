import { useAuthStore } from "./auth/auth";
import { useDashboardStore } from "./dashboard/dashboard-store";

// Stores
export const DashboardStore = useDashboardStore();

// AUTH
export const AuthStore = useAuthStore();

export default { AuthStore };
