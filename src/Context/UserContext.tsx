import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type User = { name: string; email: string } | null;

type UserContextType = {
  user: User;
  setUser: (user: User) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<User>(null);

  // Fake "logout"
  const logout = () => setUserState(null);

  // Fake "login" by setting user
  const setUser = (user: User) => setUserState(user);

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook
export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within a UserProvider");
  return ctx;
}
