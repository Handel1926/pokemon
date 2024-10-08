import React from "react";
import { POKEM } from "../../types";
import TableRow from "./TableRow";

type Props = {
  pokeList: POKEM[] | undefined;
};

export default function ({ pokeList }: Props) {
  return (
    <table className="w-full h-full overflow-y-auto">
      <tr className="w-full h-fit">
        <th>Icons</th>
        <th>Name</th>
        <th>PokeBall</th>
      </tr>
      {pokeList &&
        pokeList.map((poke) => (
          <TableRow url={poke.url} name={poke.name} pokeBall="ball" />
        ))}
    </table>
  );
}
