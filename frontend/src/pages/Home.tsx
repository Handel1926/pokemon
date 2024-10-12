import { useContext, useEffect, useState } from "react";
import { PAGE_SIZE } from "../pageSize";
import Table from "../ui/Table";
import { ThemeContext } from "../ui/AppLayout";
import { getAllpoke } from "../service/getAllPoke";
import { useQuery, useQueryClient } from "@tanstack/react-query";

type POKEM = {
  url: string;
  name: string;
};

function Home() {
  const [pageN, setPageN] = useState(1);
  const queryClient = useQueryClient();
  const [startList, setStartList] = useState<number>(0);
  const [stopList, setstopList] = useState<number>(20);
  const theme = useContext(ThemeContext);
  const { data, isPending } = useQuery({
    queryKey: ["pokemons", [startList, stopList]],
    queryFn: () => getAllpoke(startList, startList),
  });
  queryClient.prefetchQuery({
    queryKey: ["pokemons", [startList, stopList]],
    queryFn: () => getAllpoke(startList, startList),
  });

  useEffect(() => {
    const startIndex = (pageN - 1) * PAGE_SIZE;
    const limit = pageN < 8 ? 20 : 11;
    setstopList(limit);
    setStartList(startIndex);
    console.log(pageN);
  }, [pageN]);

  function goLeft() {
    const newPage = pageN === 0 ? 1 : pageN - 1;
    setPageN(newPage);
  }
  function goRight() {
    const newPage = pageN === 8 ? 8 : pageN + 1;
    setPageN(newPage);
  }

  return (
    <div
      className={`${
        theme === "light" ? "bg-white text-black " : "bg-black text-white"
      } h-full w-full p-8 flex flex-col gap-3`}
    >
      <div className="flex justify-between border rounded shadow shadow-black p-4">
        <button
          type="button"
          onClick={goLeft}
          className=" capitalize font-semibold text-xl"
        >
          previous
        </button>
        <button
          type="button"
          onClick={goRight}
          className=" capitalize font-semibold text-xl"
        >
          Next
        </button>
      </div>

      <div className="w-full h-full pb-36 overflow-y-auto">
        {isPending ? <h1>Loading...</h1> : <Table pokeList={data} />}
      </div>
    </div>
  );
}

export default Home;
