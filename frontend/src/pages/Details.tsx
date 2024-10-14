import { useParams } from "react-router-dom";
import Card from "../ui/Card";
import { useQuery } from "@tanstack/react-query";
import { getPokemone } from "../service/getAllPoke";

export default function Details() {
  const { id } = useParams();
  const { data, isPending } = useQuery({
    queryKey: ["pokemon", [id]],
    queryFn: () => getPokemone(id as string),
  });

  return (
    <div className="w-full h-full flex flex-col p-8">
      {isPending ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1 className=" capitalize text-5xl">{data?.detail.name}</h1>
          <div className="w-full h-full flex justify-center items-center">
            <Card
              pokemon={data?.detail}
              specie={data?.newSpecie}
              cardType="details"
            />
          </div>
        </>
      )}
    </div>
  );
}
