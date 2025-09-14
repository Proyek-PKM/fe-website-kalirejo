import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Define the shape of the store's state
interface AuthState {
  isAuthenticated: boolean;
  user: { username: string } | null;
  users: any[]; // In a real app, this would not be here!
  login: (username: string, password: string) => boolean;
  register: (username: string, password: string) => { success: boolean; message: string };
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      user: null,
      // Temporary user "database"
      users: [{ username: 'admin', password: 'admin' }],

      login: (username, password) => {
        const { users } = get();
        const userExists = users.find(
          (u) => u.username === username && u.password === password
        );

        if (userExists) {
          set({ isAuthenticated: true, user: { username: userExists.username } });
          return true;
        }
        return false;
      },

      register: (username, password) => {
        const { users } = get();
        const userExists = users.find((u) => u.username === username);

        if (userExists) {
          return { success: false, message: 'Username already exists.' };
        }

        const newUser = { username, password };
        set((state) => ({ users: [...state.users, newUser] }));
        return { success: true, message: 'Registration successful! Please log in.' };
      },

      logout: () => {
        set({ isAuthenticated: false, user: null });
      },
    }),
    {
      name: 'auth-storage', // unique name for localStorage key
      storage: createJSONStorage(() => localStorage), // use localStorage
    }
  )
);

export default useAuthStore;