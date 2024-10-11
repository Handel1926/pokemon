import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import Card from "./Card";
import { EvolutionChain, POKEMON } from "../../types";

type Props = {
  url: string;
  name: string;
  pokeBall: string;
};

export default function TableRow({ url, name, pokeBall }: Props) {
  const [details, setDetails] = useState<POKEMON>();
  const [specie, setSpecie] = useState<EvolutionChain>();
  const navigate = useNavigate();
  const pokeId = url.split("/")[6];
  useEffect(() => {
    async function getPokemone() {
      const res = await fetch(`http://localhost:3000/pokemon/${pokeId}`);
      const specieres = await fetch(
        `https://pokeapi.co/api/v2/evolution-chain/${pokeId}`
      );
      if (!res.ok) {
        throw new Error("check your network connection");
      }
      const newSpecie = await specieres.json();
      const detail = await res.json();

      setDetails(detail);
      setSpecie(newSpecie);
    }
    getPokemone();
  }, []);

  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;

  const move = () => navigate(`/pokemon/details/${pokeId}`);

  return (
    <tr className="cursor-pointer">
      <td className=" m-auto p-2 border-2" onClick={move}>
        <img src={imgUrl} alt="" className="w-[100px] h-[100px]" />
      </td>
      <td className=" m-auto p-2 border-2" onClick={move}>
        {name}
      </td>
      <td className=" m-auto p-2 border-2">
        <Modal>
          <Modal.Open>
            <p>{pokeBall}</p>
          </Modal.Open>
          <Modal.Window>
            <Card pokemon={details} specie={specie} />
          </Modal.Window>
        </Modal>
      </td>
    </tr>
  );
}
