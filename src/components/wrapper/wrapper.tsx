import React from "react";
import { WrapperElement } from "../../styled-components";

interface WrapperProps {
  ref: React.Ref<HTMLElement | any>;
  translateX: number;
  style?: React.CSSProperties;
  className?: string;
  lerp?: number;
  children: React.ReactNode;
}
function Wrapper({
  ref,
  className,
  style,
  translateX,
  lerp,
  children,
}: WrapperProps) {
  return (
    <WrapperElement
      ref={ref}
      style={{
        transform: `translateX(${translateX}px)`,
        ...style,
        // check if lerping is undefined.
        transition: `${
          lerp !== undefined ? `${lerp}s` : `0s`
        } all cubic-bezier(0, 0, 0.58, 1)`,
      }}
      className={className}
    >
      {children}
    </WrapperElement>
  );
}

export default Wrapper;
