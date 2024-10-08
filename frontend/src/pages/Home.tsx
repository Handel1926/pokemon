import { useEffect, useState } from "react";
import { PAGE_SIZE, TOTAL_NUM_CARD } from "../pageSize";
import Card from "../ui/Card";
import Table from "../ui/Table";

type POKEM = {
  url: string;
  name: string;
};

function Home() {
  const [pageN, setPageN] = useState(1);

  const [pokeMonList, setPokemonList] = useState<POKEM[]>();
  const [startList, setStartList] = useState<number>(0);
  const [stopList, setstopList] = useState<number>(20);

  useEffect(() => {
    async function getAllpoke() {
      const res = await fetch(
        `http://localhost:3000/pokemon?start=${startList}&stop=${stopList}`
      );
      const newPokeList = await res.json();
      setPokemonList(newPokeList);
      console.log(newPokeList, startList, stopList);
    }
    getAllpoke();
  }, [startList, stopList]);

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
    console.log(newPage, startList);
  }

  return (
    <div className="h-full w-full p-8 flex flex-col gap-3">
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
        <Table pokeList={pokeMonList} />
      </div>
    </div>
  );
}

export default Home;
