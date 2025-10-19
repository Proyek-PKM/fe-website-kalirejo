import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { userData } from '../data/userData';
import type { UserData } from '../data/userData';

// Define the shape of the store's state
interface AuthState {
  isAuthenticated: boolean;
  user: UserData | null;
  login: (username: string, password: string) => { success: boolean; message: string };
  register: (username: string, password: string) => { success: boolean; message: string };
  logout: () => void;
}

// In-memory temporary users (this will reset when the app reloads)
let temporaryUsers: UserData[] = [];

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,



      login: (username, password) => {
        // First check in original userData
        let user = userData.find(
          u => (u.username === username || u.email === username) && u.password === password && u.isActive
        );

        // If not found in original data, check in temporary users
        if (!user) {
          user = temporaryUsers.find(
            u => (u.username === username || u.email === username) && u.password === password && u.isActive
          );
        }

        if (user) {
          set({ isAuthenticated: true, user });
          return { success: true, message: 'Login successful!' };
        } else {
          return { success: false, message: 'Invalid username or password.' };
        }
      },

      register: (username, password) => {
        // Check if user already exists in original userData
        const originalUserExists = userData.some(
          u => u.username === username || u.email === username
        );

        if (originalUserExists) {
          return { success: false, message: 'Username or email already exists in the system.' };
        }

        // Check if user already exists in temporary users
        const tempUserExists = temporaryUsers.some(
          u => u.username === username || u.email === username
        );

        if (tempUserExists) {
          return { success: false, message: 'Username or email already exists.' };
        }

        // Create new user
        const newId = Math.max(0, ...userData.map(u => u.id), ...temporaryUsers.map(u => u.id)) + 1;
        const newUser: UserData = {
          id: newId,
          username,
          email: `${username}@kalirejo.desa.id`, // Generate a default email
          password, // In a real app, this would be hashed
          role: 'user', // Default role for new registrants
          isActive: true,
        };

        // Add to temporary users
        temporaryUsers.push(newUser);

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