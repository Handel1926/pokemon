import React from "react";

type Props = {
  url: string;
  name: string;
};

export default function Card({ url, name }: Props) {
  const id = url.split("/")[6];
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="w-[150px] h-[200px] bg-stone-400 border-3 border-black shadow-md rounded-md shadow-black cursor-pointer">
      <img src={imgUrl} alt="" className="w-[150px] h-[150px]" />
      <h2 className="border bg-white text-black text-center mx-auto">{name}</h2>
    </div>
  );
}
