import type { MutableRefObject } from "react";

// this is for useHorizontalProperties
interface useHorizontalProperties {
  ({ multiplier }: params): {
    wrapperRef: MutableRefObject<HTMLElement>;
    containerRef: MutableRefObject<HTMLElement>;
    properties: propertiesInterface;
  };
}
interface params {
  multiplier: number;
}

interface propertiesInterface {
  translateX: number;
  height: number;
  maxTranslateX: number;
}

export type { propertiesInterface, useHorizontalProperties };
