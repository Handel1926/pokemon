import { useContext, useEffect, useState } from "react";
import { UserContext } from "../ui/UserContext";
import { useNavigate } from "react-router-dom";
import { USER } from "../ui/AppLayout";

function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [emailErrorM, setEmailErrorM] = useState<string>("");
  const [passWordErrorM, setPasswordErrorM] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [activeBtn, setActiveBtn] = useState<boolean>(false);
  const contextVal = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    function checkLogin() {
      if (!email) {
        setEmailErrorM("Please fill in your email");
        setActiveBtn(false);
      } else {
        setEmailErrorM("");
      }
      if (!password) {
        setPasswordErrorM("Please fill in your password");
        setActiveBtn(false);
      } else if (password.length < 6) {
        setPasswordErrorM("Password should be more than 6 characters");
        setActiveBtn(false);
      } else if (email && password.length >= 6) {
        setEmailErrorM("");
        setPasswordErrorM("");
        setActiveBtn(true);
      }
    }
    checkLogin();
  }, [email, password]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const newUser: USER = {
      email,
      password,
      isAuthenticated: true,
      pokemon: [],
    };

    const users = localStorage.getItem("users");

    if (users) {
      const newUsers = [...JSON.parse(users), newUser];
      console.log(newUsers);
      localStorage.setItem("users", JSON.stringify(newUsers));
    } else {
      localStorage.setItem("users", JSON.stringify([newUser]));
    }
    contextVal?.setUser(newUser);
    sessionStorage.setItem("user", JSON.stringify(newUser));

    navigate("/home");
  };

  return (
    <div className="h-svh w-full flex justify-center items-center">
      <form className="h-[300px] w-3/4 md:w-1/2  rounded-md bg-stone-950/50  bg-cover  text-white shadow-md shadow-black backdrop-blur-sm md:flex-row">
        <div className="flex h-full w-full flex-col justify-center gap-4 px-8 py-2">
          <div className="flex w-full flex-col md:flex-row md:justify-between ">
            <label htmlFor="email" className=" text font-bold text-black">
              Email
            </label>
            <div className="flex flex-col w-full md:w-3/4">
              <input
                placeholder="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full md:w-3/4 p-1 text-black"
              />
              <p className="text-red-600 text-sm">{emailErrorM}</p>
            </div>
          </div>
          <div className="flex w-full flex-col md:flex-row md:justify-between ">
            <label htmlFor="password" className=" text font-bold text-black">
              Password
            </label>
            <div className="flex flex-col w-full md:w-3/4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full md:w-3/4 p-1 text-black"
              />
              <p className="text-red-600 text-sm">{passWordErrorM}</p>
            </div>
          </div>
          <div className="flex w-full flex-row-reverse gap-2 ">
            <label
              htmlFor="showpassword"
              className=" text font-bold text-black"
            >
              Show Password
            </label>
            <input
              title="show password"
              type="checkbox"
              className=""
              onChange={() => setShowPassword(!showPassword)}
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              className={`w-fit px-8 py-2 ${
                activeBtn ? "bg-yellow-800" : "bg-gray-400 cursor-not-allowed"
              } rounded-full`}
              onClick={handleClick}
              disabled={!activeBtn}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
