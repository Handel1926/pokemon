import React from "react";

type Props = {
  url: string;
  name: string;
  pokeBall: string;
};

export default function TableRow({ url, name, pokeBall }: Props) {
  const pokeId = url.split("/")[6];
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;
  return (
    <tr>
      <td className=" m-auto p-2 border-2">
        <img src={imgUrl} alt="" className="w-[100px] h-[100px]" />
      </td>
      <td className=" m-auto p-2 border-2">{name}</td>
      <td className=" m-auto p-2 border-2">{pokeBall}</td>
    </tr>
  );
}
