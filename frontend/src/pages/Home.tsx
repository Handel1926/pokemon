import { useEffect, useState } from "react";
import { PAGE_SIZE, TOTAL_NUM_CARD } from "../pageSize";

function Home() {
  const [pageN, setPageN] = useState(1);

  const [pokeMonList, setPokemonList] = useState();
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
    <div className="h-full w-full p-8 ">
      <div className="flex justify-between">
        <button type="button" onClick={goLeft}>
          left
        </button>
        <button type="button" onClick={goRight}>
          right
        </button>
      </div>
    </div>
  );
}

export default Home;
