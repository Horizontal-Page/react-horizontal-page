import React from "react";
import { propertiesInterface } from "../horizontalProperties";

interface TranslateX {
  container: React.RefObject<HTMLElement>;
  setState: React.Dispatch<React.SetStateAction<propertiesInterface>>;
}

export type { TranslateX };
