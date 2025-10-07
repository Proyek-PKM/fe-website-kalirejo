// Temporary user accounts data for the login system
export interface UserData {
  id: number;
  username: string;
  email: string;
  password: string; // In a real application, passwords should be hashed
  role: 'admin' | 'staff' | 'user';
  isActive: boolean;
}

export const userData: UserData[] = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@kalirejo.desa.id',
    password: 'admin123', // Temporary default password
    role: 'admin',
    isActive: true,
  },
  {
    id: 2,
    username: 'staff',
    email: 'staff@kalirejo.desa.id',
    password: 'staff123', // Temporary default password
    role: 'staff',
    isActive: true,
  },
  {
    id: 3,
    username: 'kepala_desa',
    email: 'kepaladesa@kalirejo.desa.id',
    password: 'kepaladesa123', // Temporary default password
    role: 'admin',
    isActive: true,
  },
  {
    id: 4,
    username: 'bendahara',
    email: 'bendahara@kalirejo.desa.id',
    password: 'bendahara123', // Temporary default password
    role: 'staff',
    isActive: true,
  },
  {
    id: 5,
    username: 'warga1',
    email: 'warga1@kalirejo.desa.id',
    password: 'warga123', // Temporary default password
    role: 'user',
    isActive: true,
  },
];

// Helper function to find a user by username or email
export const findUser = (identifier: string, password?: string): UserData | undefined => {
  const user = userData.find(
    user => (user.username === identifier || user.email === identifier) && user.isActive
  );
  
  // If password is provided, verify it matches (for temporary implementation)
  if (password && user && user.password !== password) {
    return undefined;
  }
  
  return user;
};

// Helper function to check if a user exists by username or email
export const userExists = (identifier: string): boolean => {
  return userData.some(
    user => (user.username === identifier || user.email === identifier) && user.isActive
  );
};

// Helper function to add a new user (for temporary implementation)
export const addUser = (username: string, password: string, email?: string): UserData => {
  const newId = Math.max(...userData.map(u => u.id)) + 1;
  const newUser: UserData = {
    id: newId,
    username,
    email: email || `${username}@kalirejo.desa.id`,
    password, // In a real app, this would be hashed
    role: 'user', // Default role for new registrants
    isActive: true,
  };
  
  // Note: For this temporary implementation, new users won't be
  // permanently added to the userData array since it's a constant
  return newUser;
};