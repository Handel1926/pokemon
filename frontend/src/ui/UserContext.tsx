import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import { USER } from "./AppLayout";

export interface USERContext {
  user: USER;
  setUser: Dispatch<SetStateAction<USER>>;
}
interface Props {
  children: ReactNode;
}
export const UserContext = createContext<USERContext | undefined>(undefined);

export default function User({ children }: Props) {
  const [user, setUser] = useState<USER>({
    email: "",
    password: "",
    isAuthenticated: false,
    pokemon: [],
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
