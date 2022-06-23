/* Import React with some hooks and types for typescript */
import React, { LegacyRef, useEffect, useRef, useState } from "react";
/* styled component for cssProperties --> https://styled-components.com/ */
import styled from "styled-components";
// calculation function in ./calc/*
import { CalcTranslateX, CalcHeight, CalcMaxTranslate } from "./calc";
import height from "./calc/height";

const ContainerElement = styled.div({ position: "relative" });
const StickyElement = styled.div({
  position: "sticky",
  width: "100%",
  overflow: "hidden",
  top: "0",
});
const WrapperElement = styled.div({
  width: "fit-content",
  display: "flex",
  maxHeight: "100vh",
});

type props = {
  children?: JSX.Element | string | any;
  style?: React.CSSProperties;
  className?: string | number | any;
  multiplier?: number;
};

/* settings Interface contains a --> 
WrapperElement(Transforms:TranslateX CSSProperties)
,
ContainerElement(Height CSSProperties) */
interface WrapperElementInterface {
  translateX: number;
  height: number;
}

function HorizontalScroll({ children, style, className, multiplier }: props) {
  const container: LegacyRef<HTMLDivElement> = useRef();
  const wrapper: LegacyRef<HTMLDivElement> = useRef();
  const [settings, setSettings] = useState<WrapperElementInterface>({
    translateX: 0,
    height: 0,
  });

  useEffect(() => {
    // resize event Callback
    const containerHeight = CalcHeight(wrapper.current.scrollWidth, multiplier);
    setSettings((p) => {
      return {
        ...p,
        height: containerHeight,
      };
    });
    const resize = () => {
      const containerHeight = CalcHeight(
        wrapper.current.scrollWidth,
        multiplier
      );

      setSettings((p) => {
        return {
          ...p,
          height: containerHeight,
        };
      });
    };
    const scroll = () => {
      // calculate the height of container
      const containerHeight = CalcHeight(
        wrapper.current.scrollWidth,
        multiplier
      );
      // calculate the max translate of wrapper
      const maxTranslateX = CalcMaxTranslate(wrapper.current.scrollWidth);
      // calculate the translateX of the wrapper
      const translateX = CalcTranslateX(
        containerHeight,
        container.current.offsetTop,
        maxTranslateX
      );
      setSettings((p) => {
        return {
          ...p,
          translateX: translateX,
        };
      });
    };
    window.addEventListener("scroll", scroll);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <ContainerElement
      ref={container}
      style={{ height: `${settings.height}px`, minHeight: "100vh" }}
    >
      <StickyElement style={{ height: "100vh" }}>
        <WrapperElement
          ref={wrapper}
          style={{
            transform: `translateX(${settings.translateX}px)`,
            ...style,
          }}
          className={className}
        >
          {children}
        </WrapperElement>
      </StickyElement>
    </ContainerElement>
  );
}
export default HorizontalScroll;
