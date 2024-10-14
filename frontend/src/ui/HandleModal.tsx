import React, { useContext } from "react";
import { ThemeContext } from "./AppLayout";
import { ModalContext } from "./Modal";

interface Props {
  children: React.ReactNode;
  pokeCondition: string;
}

export default function HandleModal({ children, pokeCondition }: Props) {
  const theme = useContext(ThemeContext);
  const { setShowModal } = useContext(ModalContext);

  const handleClick = () => {
    if (pokeCondition === "nill") {
      setShowModal(true);
    } else if (pokeCondition === theme) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  return <div onClick={handleClick}>{children}</div>;
}
