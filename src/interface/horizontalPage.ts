// --> src/components/horizontalPage.tsx
import type React from "react";

interface HorizontalPage {
  ({ multiplier }: params): any;
}
interface params {
  multiplier?: number | undefined;
  lerp?: number | undefined;
  className?: string;
  style?:React.CSSProperties;
  children?: children | React.ReactNode | JSX.Element;
}

interface children {
  ({ translateX, maxTranslateX, height }?: childrenParams): React.ReactNode;
}

interface childrenParams {
  translateX: number;
  maxTranslateX: number;
  height: number;
}

export type { HorizontalPage };
