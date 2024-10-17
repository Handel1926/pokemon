import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Search from "./Search";
import { ThemeContextType } from "../../types";
import { Link } from "react-router-dom";

type Props = {
  setTheme: Dispatch<SetStateAction<ThemeContextType>>;
  theme: string;
};

function Header({ setTheme, theme }: Props) {
  const [show, setShow] = useState<boolean>(false);
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
      <div className="w-full flex items-center gap-3">
        <img
          src="/assets/pokemon_icon.png"
          alt="Pokemon_icon"
          className="w-16 h-16"
        />
        <h1 className="text-4xl text-yellow-200">
          <Link to={"/home"}>Pokemone</Link>
        </h1>
      </div>
      <div
        className={`w-10 rounded-md h-10 border-2 ${
          show ? "hidden" : "block"
        } flex flex-col border-white gap-1 p-2 md:hidden`}
        onClick={() => setShow(!show)}
      >
        <div className="border-6 border-white h-full bg-white w-full"></div>
        <div className="border-6 border-white h-full bg-white w-full"></div>
        <div className="border-6 border-white h-full bg-white w-full"></div>
      </div>
      <div
        className={`relative w-full h-full items-center ${
          show ? "block" : "hidden"
        } md:block`}
      >
        <div
          className={`absolute top-4 right-0 z-50 md:w-full w-fit h-fit bg-gray-300 text-black md:relative md:top-0 md:bg-inherit md:text-white flex gap-5 flex-col px-4 py-8 md:p-0 items-end md:items-center md:flex-row md:justify-between `}
        >
          <div onClick={() => setShow(false)} className="md:hidden ">
            <p className="">close</p>
          </div>
          <Search />

          <button type="button" onClick={handleTheme} className="">
            {theme}
          </button>
          <ul className=" flex gap-3">
            <li>
              <Link to={"/Home"}>Home</Link>
            </li>
            <li>
              <Link to={"/pokemon/caught"}>Caught</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
