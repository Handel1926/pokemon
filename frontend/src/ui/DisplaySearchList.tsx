import React, { Dispatch, SetStateAction, useContext } from "react";
import { POKEM } from "../../types";
import { SearchContext } from "./SearchModal";
import { useNavigate } from "react-router-dom";
type Props = {
  searchList: POKEM[] | undefined;
};

export default function DisplaySearchList({ searchList }: Props) {
  const navigate = useNavigate();
  const { setShowSearch } = useContext(SearchContext);

  const moveTodetails = (index: number) => {
    setShowSearch(false);
    navigate(`/pokemon/details/${index + 1}`);
  };
  return (
    <div className="w-full h-fit relative">
      <button
        type="button"
        onClick={() => setShowSearch(false)}
        className="absolute bg-black text-white right-4 top-4"
      >
        close
      </button>
      <ul>
        {searchList &&
          searchList.map((pokemon, index) => (
            <li key={index} onClick={() => moveTodetails(index)}>
              {pokemon.name}
            </li>
          ))}
      </ul>
    </div>
  );
}
