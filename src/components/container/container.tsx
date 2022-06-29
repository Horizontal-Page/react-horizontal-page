import React from "react";
import { StickyElement, ContainerElement } from "../../styled-components";

// containerProps
interface ContainerProps {
  height: number;
  children: React.ReactNode | JSX.Element;
}

const Container = React.forwardRef(
  (props: ContainerProps, ref: React.MutableRefObject<any>) => (
    <ContainerElement ref={ref} style={{ height: `${props.height}px` }}>
      <StickyElement style={{ height: "100vh" }}>
        {props.children}
      </StickyElement>
    </ContainerElement>
  )
);

export default Container;
