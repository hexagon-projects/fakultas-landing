import { useAuthStore } from "./auth/auth";
import { useBerandaStore } from "./beranda/beranda-store";
import { useKerjasamaStore } from "./kerjasama/kerjasama-store";
import { useTentangStore } from "./tentang/tentang-store";

// Stores
export const berandaStore = useBerandaStore();
export const tentangStore = useTentangStore();
export const kerjasamaStore = useKerjasamaStore();

// AUTH
export const AuthStore = useAuthStore();

export default { AuthStore };
