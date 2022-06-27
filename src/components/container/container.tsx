import React from "react";
import { StickyElement, ContainerElement } from "../../styled-components";
import Wrapper from "../wrapper";

// containerProps
interface ContainerProps {
  ref: React.Ref<HTMLElement | any>;
  height: number;
  wrapperRef: React.Ref<HTMLElement | any>;
  translateX: number;
  children: Chilren;
  maxHeight: number;
  className?: string;
  lerp?: number;
}

// -- if children is function inteface 
interface Chilren {
  ({ height, translateX, maxHeight }: ChildrenObject): React.ReactNode;
}
// -- childrenObject
interface ChildrenObject {
  height: number;
  translateX: number;
  maxHeight: number;
}

function Container({
  ref,
  height,
  children,
  className,
  translateX,
  wrapperRef,
  lerp,
  maxHeight,
}: ContainerProps) {
  if (typeof children === "function") {
    return (
      <ContainerElement ref={ref} style={{ height: `${height}px` }}>
        <StickyElement style={{ height: "100vh" }}>
          <Wrapper
            lerp={lerp}
            translateX={translateX}
            ref={wrapperRef}
            className={className}
          >
            {children({ maxHeight, translateX, height })}
          </Wrapper>
        </StickyElement>
      </ContainerElement>
    );
  }
}

export default Container;
