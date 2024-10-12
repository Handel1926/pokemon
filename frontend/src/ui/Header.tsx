import { Dispatch, SetStateAction } from "react";
import Search from "./Search";
import { ThemeContextType } from "../../types";
import { Link } from "react-router-dom";

type Props = {
  setTheme: Dispatch<SetStateAction<ThemeContextType>>;
  theme: string;
};

function Header({ setTheme, theme }: Props) {
  const handleTheme = () => {
    setTheme((preval) => (preval === "light" ? "dark" : "light"));
  };
  return (
    <nav className="absolute z-50 top-0 left-0 w-full h-fit flex items-center bg-black">
      <div className="w-fit flex items-center gap-3">
        <img
          src="/assets/pokemon_icon.png"
          alt="Pokemon_icon"
          className="w-16 h-16"
        />
        <h1 className="text-4xl text-yellow-200">
          <Link to={"/home"}>Pokemone</Link>
        </h1>
      </div>

      <Search />

      <button type="button" onClick={handleTheme} className="text-white">
        {theme}
      </button>
    </nav>
  );
}

export default Header;
