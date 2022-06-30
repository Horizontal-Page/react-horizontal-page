// --> src/components/horizontalPage.tsx
import type React from "react";

interface HorizontalPage {
  (props: params): any;
}

interface params {
  multiplier?: number | undefined;
  lerp?: number | undefined;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode | JSX.Element;
}

export type { HorizontalPage };
