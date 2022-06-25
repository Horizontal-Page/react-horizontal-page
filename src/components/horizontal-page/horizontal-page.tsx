/* Import React with some hooks and types for typescript */
import React, { CSSProperties, LegacyRef, Ref, useEffect, useRef, useState } from "react";
/* styled component for cssProperties --> https://styled-components.com/ */
import styled from "styled-components";
// calculation function in ./calc/*
import { CalcTranslateX, CalcHeight, CalcMaxTranslate } from "./calc";

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
  lerp?: number;
};

/* settings Interface contains WrapperElement(Transforms:TranslateX CSSProperties),ContainerElement(Height CSSProperties) */
interface WrapperElementInterface {
  translateX: number;
  height: number;
}

function HorizontalScroll({
  children,
  style,
  className,
  multiplier,
  lerp,
}: props) {
  const container: LegacyRef<HTMLDivElement> = useRef();
  const wrapper: LegacyRef<HTMLDivElement> = useRef();
  const [settings, setSettings] = useState<WrapperElementInterface>({
    translateX: 0,
    height: 0,
  });

  useEffect(() => {
    const containerHeight = CalcHeight(wrapper.current.scrollWidth, multiplier);
    setSettings((p) => {
      return {
        ...p,
        height: containerHeight,
      };
    });
    // resize event Callback
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
    // scroll event Callback
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
            // check if lerping is undefined.
            transition: `${
              lerp !== undefined ? `${lerp}s` : `0s`
            } all cubic-bezier(0, 0, 0.58, 1)`,
          }}
          className={className}
        >
          {children}
        </WrapperElement>
      </StickyElement>
    </ContainerElement>
  );
}

type WrapperELementProps = {
  settings: WrapperElementInterface;
  children?: JSX.Element | React.ReactNode | string;
  container:Ref<HTMLDivElement>;
  wrapper:Ref<HTMLDivElement>;
  style:CSSProperties;
  lerp:number;
  className:string;
};

function Wrapper({ children, settings,container ,wrapper,style ,lerp,className}:WrapperELementProps) {
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
            // check if lerping is undefined.
            transition: `${
              lerp !== undefined ? `${lerp}s` : `0s`
            } all cubic-bezier(0, 0, 0.58, 1)`,
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
