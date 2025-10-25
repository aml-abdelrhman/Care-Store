import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  openLogin: false,
  login: (userData) => {
    set({ user: userData, openLogin: false });
    localStorage.setItem("user", JSON.stringify(userData));
  },
  logout: () => {
    set({ user: null });
    localStorage.removeItem("user");
  },
  toggleLogin: () => set((state) => ({ openLogin: !state.openLogin })),
  loadUser: () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) set({ user: storedUser });
  },
}));
