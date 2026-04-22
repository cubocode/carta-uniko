import React from "react";
import MenuLetterPage from "./MenuLetterPage";
import { cartaPages } from "../data/cartaUnikoPages";

function Slide5() {
  return <MenuLetterPage pageIndex={4} {...cartaPages[4]} />;
}

export default Slide5;
