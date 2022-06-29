import React from "react";
import { propertiesInterface } from "../horizontalProperties";

interface height {
  multiplier: number;
  wrapper: React.RefObject<HTMLElement>;
  setState: React.Dispatch<React.SetStateAction<propertiesInterface>>;
}

export type { height };
