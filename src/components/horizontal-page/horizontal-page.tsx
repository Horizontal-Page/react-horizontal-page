import React from "react";
import { useHorizontalProperties } from "../../customHooks";
import { HorizontalPage as HorizontalPageInterface } from "../../interface";
import Container from "../container";
import Wrapper from "../wrapper";

const HorizontalPage: HorizontalPageInterface = ({
  multiplier,
  lerp,
  className,
  style,
  children,
}) => {
  // hooks for properties
  const { containerRef, wrapperRef, properties } = useHorizontalProperties({
    multiplier,
  });

  return (
    <Container ref={containerRef} height={properties.height}>
      <Wrapper
        style={style}
        className={className}
        ref={wrapperRef}
        lerp={lerp}
        translateX={properties.translateX}
      >
        {children}
      </Wrapper>
    </Container>
  );
};

export default HorizontalPage;
