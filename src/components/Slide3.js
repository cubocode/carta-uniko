import React from "react";
import MenuLetterPage from "./MenuLetterPage";
import { cartaPages } from "../data/cartaUnikoPages";

function Slide3() {
  return <MenuLetterPage pageIndex={2} {...cartaPages[2]} />;
}

export default Slide3;
