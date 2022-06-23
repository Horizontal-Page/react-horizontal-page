/* Import React with some hooks and types for typescript */
import React, { LegacyRef, useEffect, useRef, useState } from "react";
/* styled component for cssProperties --> https://styled-components.com/ */
import styled from "styled-components";
// calculation function in ./calc/*
import { CalcTranslateX } from "./calc";

const ContainerElement = styled.div({ position: "relative" });
const StickyElement = styled.div({
  position: "sticky",
  width: "100%",
  overflow: "hidden",
});
const WrapperElement = styled.div({
  width: "fit-content",
  display: "flex",
  maxHeight: "100vh",
});

type props = {
  children?: JSX.Element | string | any;
};

/* settings Interface contains a --> 
WrapperElement(Transforms:TranslateX CSSProperties)
,
ContainerElement(Height CSSProperties) */
interface WrapperElementInterface {
  translateX: number;
  height: 0;
}

function HorizontalScroll({ children }: props) {
  const container: LegacyRef<HTMLDivElement> = useRef();
  const wrapper: LegacyRef<HTMLDivElement> = useRef();
  const [settings, setSettings] = useState<WrapperElementInterface>({
    translateX: 0,
    height: 0,
  });

  useEffect(() => {
    // resize event Callback
    const resize = () => {
      console.log(wrapper.current.scrollWidth);
      setSettings((p) => {
        return {
          ...p,
        };
      });
    };
    window.addEventListener("resize", resize);

    return () => {
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
          }}
        >
          {children}
        </WrapperElement>
      </StickyElement>
    </ContainerElement>
  );
}
export default HorizontalScroll;
