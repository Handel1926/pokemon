import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  url: string;
  name: string;
  pokeBall: string;
};

export default function TableRow({ url, name, pokeBall }: Props) {
  const navigate = useNavigate();

  const pokeId = url.split("/")[6];
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;

  const move = () => navigate(`/pokemon/details/${pokeId}`);

  return (
    <tr>
      <td className=" m-auto p-2 border-2" onClick={move}>
        <img src={imgUrl} alt="" className="w-[100px] h-[100px]" />
      </td>
      <td className=" m-auto p-2 border-2" onClick={move}>
        {name}
      </td>
      <td className=" m-auto p-2 border-2">{pokeBall}</td>
    </tr>
  );
}
