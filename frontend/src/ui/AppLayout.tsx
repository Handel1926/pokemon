import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { POKEMON, ThemeContextType } from "../../types";
import { UserContext } from "./UserContext";

export interface USER {
  email: string;
  password: string;
  isAuthenticated: boolean;
  pokemon: POKEMON[];
}

export interface USERContext {
  user: USER;
  setUser: Dispatch<SetStateAction<USER>>;
}

export const ThemeContext = createContext<ThemeContextType>("light");

function AppLayout() {
  const [user, setUser] = useState<USER>({
    email: "",
    password: "",
    isAuthenticated: false,
    pokemon: [],
  });
  const navigate = useNavigate();
  const userCo = useContext(UserContext);
  const [theme, setTheme] = useState<ThemeContextType>("light");

  useEffect(() => {
    if (!userCo?.user.isAuthenticated) {
      navigate("/login");
    }
  }, [userCo, navigate]);
  return (
    <ThemeContext.Provider value={theme}>
      <div
        className={`${
          theme === "light" ? "bg-white text-black " : "bg-black text-white"
        }w-full h-svh flex flex-col overflow-hidden mt-[5%]`}
      >
        <Header setTheme={setTheme} theme={theme} />
        <Outlet context={{ user, setUser }} />
      </div>
    </ThemeContext.Provider>
  );
}

export default AppLayout;
