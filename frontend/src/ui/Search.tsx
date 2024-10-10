import { useEffect, useState } from "react";
import SearchModal from "./SearchModal";
import { POKEM } from "../../types";
import DisplaySearchList from "./DisplaySearchList";

function Search() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [allPokeList, setAllPokeList] = useState<POKEM[]>();
  const [searchList, setSearchList] = useState<POKEM[]>();

  useEffect(() => {
    async function getAllPoke() {
      const res = await fetch(`http://localhost:3000/pokemon?start=0&stop=150`);
      const AllPoke = await res.json();
      setAllPokeList(AllPoke);
    }
    getAllPoke();
  }, []);

  useEffect(() => {
    const newSearchList = allPokeList?.filter((poke) =>
      poke.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchList((preValue) => newSearchList);
  }, [searchInput, allPokeList]);

  return (
    <SearchModal>
      <SearchModal.Open>
        <input
          type="text"
          placeholder="Search by name"
          className=" w-64"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </SearchModal.Open>
      <SearchModal.Window>
        <DisplaySearchList searchList={searchList} />
      </SearchModal.Window>
    </SearchModal>
  );
}

export default Search;
