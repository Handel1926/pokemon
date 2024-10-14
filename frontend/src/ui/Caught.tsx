import React from "react";

export default function Caught() {
  const users = localStorage.getItem("users");
  console.log(users);
  return <div>Caught</div>;
}
