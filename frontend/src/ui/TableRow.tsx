import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import Card from "./Card";

import { useQuery } from "@tanstack/react-query";
import { getPokemone } from "../service/getAllPoke";

type Props = {
  url: string;
  name: string;
  pokeBall: string;
};

export default function TableRow({ url, name, pokeBall }: Props) {
  const navigate = useNavigate();
  const pokeId = url.split("/")[6];
  const { data, isPending } = useQuery({
    queryKey: ["pokemon", [pokeId]],
    queryFn: () => getPokemone(pokeId),
  });

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
            {isPending ? (
              <h1>Loading...</h1>
            ) : (
              <Card pokemon={data?.detail} specie={data?.newSpecie} />
            )}
          </Modal.Window>
        </Modal>
      </td>
    </tr>
  );
}
