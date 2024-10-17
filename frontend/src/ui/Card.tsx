import { useContext, useState } from "react";
import { EvolutionChain, POKEMON } from "../../types";
import { UserContext } from "./UserContext";
import { USER } from "./AppLayout";

type Props = {
  pokemon: POKEMON | undefined;
  specie: EvolutionChain | undefined;
  cardType: string;
};

export default function Card({ pokemon, specie, cardType }: Props) {
  const [captureInput, setCaptureInpute] = useState<number>(0);
  const [capture, setCapture] = useState<boolean>(false);
  const contextVal = useContext(UserContext);

  const handlecapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaptureInpute(e.target.valueAsNumber);

    if (e.target.valueAsNumber >= 10) {
      const newpokemon = contextVal?.user.pokemon
        ? [...contextVal?.user.pokemon, pokemon]
        : [pokemon];
      const newUser = { ...contextVal?.user, pokemon: newpokemon } as USER;
      contextVal?.setUser(newUser);
      setCapture(true);
      const userLocal: USER[] = JSON.parse(
        localStorage.getItem("users") as string
      );
      const updateUser = userLocal.map((user) => {
        return user.email === newUser.email ? { ...newUser } : { ...user };
      });
      localStorage.setItem("users", JSON.stringify(updateUser));
    } else {
      setCapture(false);
    }
  };

  return (
    <div className="w-full md:w-[400px] h-full py-4 border-2 border-white bg-stone-100 border-3 shadow-md rounded-md shadow-black cursor-pointer flex flex-col justify-center items-center gap-2">
      <h1>{pokemon?.name}</h1>
      <img
        src={pokemon && pokemon.sprites.front_default}
        alt=""
        className="w-[200px] h-[200px] "
      />
      <>
        {cardType === "capture" ? (
          <div>
            {capture ? (
              <h1>CAPTURED !!!</h1>
            ) : (
              <>
                <label htmlFor="capture">Capture</label>
                <input
                  type="range"
                  id="capture"
                  value={captureInput}
                  min={0}
                  max={11}
                  onChange={handlecapture}
                />
              </>
            )}
          </div>
        ) : (
          <>
            <div className="w-full flex justify-between px-4 border border-black  ">
              <h3 className="text-2xl font-bold">Types</h3>
              <div className="flex gap-2 flex-col md:flex-row">
                {pokemon &&
                  pokemon.types.map((type, index) => (
                    <p
                      className="text-xl capitalize border py-1 px-4 "
                      key={index}
                    >
                      {type.type.name}
                    </p>
                  ))}
              </div>
            </div>
            <div className="w-full flex justify-between px-4 border border-black ">
              <h3 className="text-2xl font-bold">Evolutions</h3>
              <div className="flex gap-2 ">
                <p className="text-xl capitalize border py-1 px-4">
                  {specie && specie.chain.evolves_to[0]?.species.name}
                </p>
              </div>
            </div>
            <div className="w-full flex justify-between px-4 border border-black ">
              <h3 className="text-2xl font-bold">Abilities</h3>
              <div className="flex gap-2 flex-col md:flex-row">
                {pokemon &&
                  pokemon.abilities.map((ability, index) => (
                    <p
                      className="text-xl capitalize border py-1 px-4"
                      key={index}
                    >
                      {ability.ability.name}
                    </p>
                  ))}
              </div>
            </div>
          </>
        )}
      </>
    </div>
  );
}
