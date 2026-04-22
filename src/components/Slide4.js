import React from "react";
import MenuLetterPage from "./MenuLetterPage";
import { cartaPages } from "../data/cartaUnikoPages";

function Slide4() {
  return <MenuLetterPage pageIndex={3} {...cartaPages[3]} />;
}

export default Slide4;
