import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import backgroundImg from "../assets/background.png";
import Profile from "../assets/profile.svg";

const Button = (width: number) => {
  console.log(width);
};

export const App = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => setCounter((prev) => prev + 1);

  if (_PLATFORM_ === "desktop") {
    return <div>isDesktop</div>;
  }

  if (_PLATFORM_ === "mobile") {
    return <div>isMobile</div>;
  }

  Button(100);

  return (
    <div>
      <h1>PLATFORM {_PLATFORM_}</h1>
      <img width={100} height={100} src={backgroundImg} alt="" />
      <Profile width={200} height={200} />
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
