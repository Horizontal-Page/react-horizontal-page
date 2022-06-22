// calculation function in ./calc/*
import React, { LegacyRef, useEffect, useRef } from "react";
import styled from "styled-components";

const ContainerElement = styled.div({ position: "relative" });
const StickyElement = styled.div({ position: "sticky", width: "100%" });
const WrapperElement = styled.div({
  width: "fit-container",
  overflow: "hidden",
});

type props = {
  children: JSX.Element | string | any;
};

function HorizontalScroll({ children }: props) {
  const container: LegacyRef<HTMLDivElement> = useRef();
  const wrapper: LegacyRef<HTMLDivElement> = useRef();

  useEffect(() => {}, []);
  return (
    <ContainerElement ref={container}>
      <StickyElement>
        <WrapperElement ref={wrapper}>{children}</WrapperElement>
      </StickyElement>
    </ContainerElement>
  );
}
export default HorizontalScroll;
