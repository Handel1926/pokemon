import { EvolutionChain, POKEM, POKEMON } from "../../types";

export async function getAllpoke(startList: number, stopList: number) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${startList}&limit=${stopList}`
  );
  const newPokeList = await res.json();
  const data: POKEM[] | undefined = newPokeList.results;
  return data;
}

export async function getPokemone(id: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const specieres = await fetch(
    `https://pokeapi.co/api/v2/evolution-chain/${id}`
  );
  if (!res.ok) {
    throw new Error("check your network connection");
  }
  const newSpecie: EvolutionChain = await specieres.json();
  const detail: POKEMON = await res.json();

  return { newSpecie, detail };
}
