import { useEffect, useState } from "react";

import { POKEM } from "../../types";
import DisplaySearchList from "./DisplaySearchList";

import Modal from "./Modal";

function Search() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [allPokeList, setAllPokeList] = useState<POKEM[]>();
  const [searchList, setSearchList] = useState<POKEM[]>();

  useEffect(() => {
    async function getAllPoke() {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150`
      );
      const AllPoke = await res.json();
      setAllPokeList(AllPoke.results);
    }
    getAllPoke();
  }, []);

  useEffect(() => {
    const newSearchList = allPokeList?.filter((poke) =>
      poke.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchList(() => newSearchList);
  }, [searchInput, allPokeList]);

  return (
    <Modal>
      <Modal.Open>
        <input
          type="text"
          placeholder="Search by name"
          className=" w-64"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </Modal.Open>
      <Modal.Window>
        <DisplaySearchList searchList={searchList} />
      </Modal.Window>
    </Modal>
  );
}

export default Search;
