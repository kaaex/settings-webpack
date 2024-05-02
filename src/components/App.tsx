import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import backgroundImg from "../assets/background.png";
import Profile from "../assets/profile.svg";

export const App = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => setCounter((prev) => prev + 1);

  return (
    <div>
      <img width={100} height={100} src={backgroundImg} alt="" />
      <Profile />
      <Link to={"/about"}>about</Link>
      <br />
      <Link to={"/shop"}>shop</Link>
      <h1 className={classes.value}>{counter}</h1>
      <button onClick={increment} className={classes.button}>
        increment
      </button>
      <Outlet />
    </div>
  );
};
