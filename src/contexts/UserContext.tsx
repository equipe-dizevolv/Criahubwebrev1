import { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'admin' | 'breeder' | 'employee' | 'advisor';

interface User {
  username: string;
  role: UserRole;
}

interface UserContextType {
  user: User | null;
  userRole: UserRole;
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  setUserRole: (role: UserRole) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<UserRole>('admin');

  const login = (username: string, password: string): boolean => {
    // Validação simples - em produção seria uma chamada à API
    if (username === 'admin' && password === '1234') {
      setUser({
        username: 'admin',
        role: 'admin',
      });
      setUserRole('admin');
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      userRole, 
      isAuthenticated: user !== null,
      login,
      logout,
      setUserRole 
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
