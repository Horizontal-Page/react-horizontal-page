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
const Wrapper = React.forwardRef(
  (props: WrapperProps, ref: React.RefObject<HTMLElement | any>) => {
    return (
      <WrapperElement
        ref={ref}
        style={{
          transform: `translateX(${props.translateX}px)`,
          ...props.style,
          // check if lerping is undefined.
          transition: `${
            props.lerp !== undefined ? `${props.lerp}s` : `0s`
          } all cubic-bezier(0, 0, 0.6, 1)`,
        }}
        className={props.className}
      >
        {props.children}
      </WrapperElement>
    );
  }
);

export default Wrapper;
