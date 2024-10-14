import { Dispatch, SetStateAction, useEffect } from "react";
import Search from "./Search";
import { ThemeContextType } from "../../types";
import { Link } from "react-router-dom";

type Props = {
  setTheme: Dispatch<SetStateAction<ThemeContextType>>;
  theme: string;
};

function Header({ setTheme, theme }: Props) {
  useEffect(() => {
    const lclTheme = localStorage.getItem("theme");
    if (lclTheme && lclTheme.length > 0) {
      setTheme(lclTheme as ThemeContextType);
    }
  }, [setTheme]);
  const handleTheme = () => {
    setTheme((preval) => (preval === "light" ? "dark" : "light"));
    localStorage.setItem("theme", theme);
  };
  return (
    <nav className="absolute z-50 top-0 left-0 w-full h-fit flex items-center justify-between bg-black">
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
      <ul className="text-white flex gap-3">
        <li>
          <Link to={"/Home"}>Home</Link>
        </li>
        <li>
          <Link to={"/pokemon/caught"}>Caught</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
