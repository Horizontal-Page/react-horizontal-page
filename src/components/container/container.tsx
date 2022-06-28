import React from "react";
import { StickyElement, ContainerElement } from "../../styled-components";

// containerProps
interface ContainerProps {
  ref: React.Ref<HTMLElement | any>;
  height: number;
  children: React.ReactNode | JSX.Element;
}

function Container({ ref, height, children }: ContainerProps) {
  return (
    <ContainerElement ref={ref} style={{ height: `${height}px` }}>
      <StickyElement style={{ height: "100vh" }}>{children}</StickyElement>
    </ContainerElement>
  );
}

export default Container;
