import { useContext } from "react";
import { POKEM } from "../../types";
import { ModalContext } from "./Modal";
import { useNavigate } from "react-router-dom";
type Props = {
  searchList: POKEM[] | undefined;
};

export default function DisplaySearchList({ searchList }: Props) {
  const navigate = useNavigate();
  const { setShowModal } = useContext(ModalContext);

  const moveTodetails = (index: number) => {
    setShowModal(false);
    navigate(`/pokemon/details/${index + 1}`);
  };
  return (
    <div className="w-full h-fit relative">
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
