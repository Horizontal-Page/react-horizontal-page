// --> src/components/horizontalPage.tsx
import type { CSSProperties, ReactNode } from "react";

interface HorizontalPage {
  ({ multiplier }: params): any;
}
interface params {
  multiplier?: number | undefined;
  lerp?: number | undefined;
  className?: string;
  style?: CSSProperties;
  children?: children | ReactNode | JSX.Element;
}

interface children {
  ({ translateX, maxTranslateX, height }?: childrenParams): ReactNode;
}

interface childrenParams {
  translateX: number;
  maxTranslateX: number;
  height: number;
}

export default HorizontalPage;
