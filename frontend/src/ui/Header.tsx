import Search from "./Search";

function Header() {
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
    </nav>
  );
}

export default Header;
