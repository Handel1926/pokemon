import { Outlet } from "react-router-dom";
import Header from "./Header";
import { createContext, useContext, useState } from "react";
import { ThemeContextType } from "../../types";

export const ThemeContext = createContext<ThemeContextType>("light");

function AppLayout() {
  const [theme, setTheme] = useState<ThemeContextType>("light");
  return (
    <ThemeContext.Provider value={theme}>
      <div
        className={`${
          theme === "light" ? "bg-white text-black " : "bg-black text-white"
        }w-full h-svh flex flex-col overflow-hidden`}
      >
        <Header setTheme={setTheme} theme={theme} />
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
}

export default AppLayout;
