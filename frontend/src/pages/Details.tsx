import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../ui/Card";
import { EvolutionChain, POKEMON, PokemonSpecies } from "../../types";

export default function Details() {
  const [details, setDetails] = useState<POKEMON>();
  const [specie, setSpecie] = useState<EvolutionChain>();
  const { id } = useParams();

  useEffect(() => {
    async function getPokemone() {
      const res = await fetch(`http://localhost:3000/pokemon/${id}`);
      const specieres = await fetch(
        `https://pokeapi.co/api/v2/evolution-chain/${id}`
      );
      if (!res.ok) {
        throw new Error("check your network connection");
      }
      const newSpecie = await specieres.json();
      const detail = await res.json();

      setDetails(detail);
      setSpecie(newSpecie);
    }
    getPokemone();
  }, [id]);
  console.log(specie);
  return (
    <div className="w-full h-full flex flex-col p-8">
      <h1 className=" capitalize text-5xl">{details?.name}</h1>
      <div className="w-full h-full flex justify-center items-center">
        <Card pokemon={details} specie={specie} />
      </div>
    </div>
  );
}
