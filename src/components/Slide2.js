import React from "react";
import MenuLetterPage from "./MenuLetterPage";
import { cartaPages } from "../data/cartaUnikoPages";

function Slide2() {
  return <MenuLetterPage pageIndex={1} {...cartaPages[1]} />;
}

export default Slide2;
