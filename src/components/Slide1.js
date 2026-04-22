import React from "react";
import MenuLetterPage from "./MenuLetterPage";
import { cartaPages } from "../data/cartaUnikoPages";

function Slide1() {
  return <MenuLetterPage pageIndex={0} {...cartaPages[0]} />;
}

export default Slide1;
