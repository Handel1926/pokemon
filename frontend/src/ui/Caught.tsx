import React, { useContext } from "react";
import { json } from "react-router-dom";
import { UserContext } from "./UserContext";
import { ThemeContext, USER } from "./AppLayout";
import Table from "./Table";
import { POKEM } from "../../types";

export default function Caught() {
  const contextUser = useContext(UserContext);
  const theme = useContext(ThemeContext);
  const usersLocalStore: USER[] = JSON.parse(
    localStorage.getItem("users") as string
  );
  const user = usersLocalStore.find(
    (user) => user.email === contextUser?.user.email
  );

  return (
    <div
      className={`${
        theme === "light" ? "bg-white text-black " : "bg-black text-white"
      } h-full w-full p-8 flex flex-col gap-3`}
    >
      <table className=" border border-black text-inherit">
        <thead>
          <tr>
            <th>ICON</th>
            <th>NAME</th>
          </tr>
        </thead>
        <tbody>
          {user &&
            user.pokemon.map((poke) => (
              <tr key={poke.id}>
                <td>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`}
                    alt=""
                  />{" "}
                </td>
                <td>{poke.name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
