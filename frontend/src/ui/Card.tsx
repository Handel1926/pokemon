import { EvolutionChain, POKEMON } from "../../types";

type Props = {
  pokemon: POKEMON | undefined;
  specie: EvolutionChain | undefined;
};

export default function Card({ pokemon, specie }: Props) {
  return (
    <div className="w-[400px] h-[500px] border-2 border-white bg-stone-100 border-3 shadow-md rounded-md shadow-black cursor-pointer flex flex-col justify-center items-center gap-2">
      <img
        src={pokemon && pokemon.sprites.front_default}
        alt=""
        className="w-[200px] h-[200px] "
      />
      <div className="w-full flex justify-between px-4">
        <h3 className="text-2xl font-bold">Types</h3>
        <div className="flex gap-2 ">
          {pokemon &&
            pokemon.types.map((type, index) => (
              <p className="text-xl capitalize border py-1 px-4 " key={index}>
                {type.type.name}
              </p>
            ))}
        </div>
      </div>
      <div className="w-full flex justify-between px-4">
        <h3 className="text-2xl font-bold">Evolutions</h3>
        <div className="flex gap-2 ">
          <p className="text-xl capitalize border py-1 px-4">
            {specie && specie.chain.evolves_to[0]?.species.name}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between px-4">
        <h3 className="text-2xl font-bold">Abilities</h3>
        <div className="flex gap-2 ">
          {pokemon &&
            pokemon.abilities.map((ability, index) => (
              <p className="text-xl capitalize border py-1 px-4" key={index}>
                {ability.ability.name}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
