import { create } from "zustand";

type User = {
  id: string;
  name: string;
  email: string;
  photoProfile: string;
};

type AuthState = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
  updatePhotoProfile: (url: string) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  updatePhotoProfile: (url) =>
    set((state) =>
      state.user ? { user: { ...state.user, photoProfile: url } } : state
    ),
}));
