import React from "react";
import MenuLetterPage from "./MenuLetterPage";
import { cartaPages } from "../data/cartaUnikoPages";

function Slide6() {
  return <MenuLetterPage pageIndex={5} {...cartaPages[5]} />;
}

export default Slide6;
