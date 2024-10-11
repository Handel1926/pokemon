import { useContext } from "react";
import { POKEM } from "../../types";
import TableRow from "./TableRow";
import { ThemeContext } from "./AppLayout";

type Props = {
  pokeList: POKEM[] | undefined;
};

export default function Table({ pokeList }: Props) {
  const theme = useContext(ThemeContext);
  return (
    <table
      className={`${
        theme === "light" ? "bg-white text-black " : "bg-black text-white"
      }  w-full h-full overflow-y-auto`}
    >
      <thead>
        <tr className="w-full h-fit text-inherit">
          <th>Icons</th>
          <th>Name</th>
          <th>PokeBall</th>
        </tr>
      </thead>
      <tbody>
        {pokeList &&
          pokeList.map((poke, index) => (
            <TableRow
              url={poke.url}
              name={poke.name}
              pokeBall="ball"
              key={index}
            />
          ))}
      </tbody>
    </table>
  );
}
