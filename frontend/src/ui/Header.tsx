import { Dispatch, SetStateAction } from "react";
import Search from "./Search";
import { ThemeContextType } from "../../types";

type Props = {
  setTheme: Dispatch<SetStateAction<ThemeContextType>>;
  theme: string;
};

function Header({ setTheme, theme }: Props) {
  const handleTheme = () => {
    setTheme((preval) => (preval === "light" ? "dark" : "light"));
  };
  return (
    <nav className=" w-full h-fit flex items-center bg-black">
      <div className="w-fit flex items-center gap-3">
        <img
          src="/assets/pokemon_icon.png"
          alt="Pokemon_icon"
          className="w-16 h-16"
        />
        <h1 className="text-4xl text-yellow-200">Pokemone</h1>
      </div>

      <Search />

      <button type="button" onClick={handleTheme} className="text-white">
        {theme}
      </button>
    </nav>
  );
}

export default Header;
