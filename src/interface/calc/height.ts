import React from "react";
import { propertiesInterface } from "../horizontalProperties";

interface calcHeight {
  multiplier: number;
  wrapper: React.RefObject<HTMLElement>;
  setState: React.Dispatch<React.SetStateAction<propertiesInterface>>;
}




export default calcHeight;
