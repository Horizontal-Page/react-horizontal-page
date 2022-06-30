import type React from "react";
import { propertiesInterface } from "../horizontalProperties";

interface TranslateX {
  container: React.RefObject<HTMLElement>;
  setState: React.Dispatch<React.SetStateAction<propertiesInterface>>;
  wrapper: React.RefObject<HTMLElement>;
}

export type { TranslateX };
