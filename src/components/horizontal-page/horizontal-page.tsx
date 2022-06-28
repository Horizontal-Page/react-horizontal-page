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
  const { containerRef, wrapperRef, properties } = useHorizontalProperties({
    multiplier,
  });

  if (typeof children === "function") {
    return (
      <Container ref={containerRef} height={properties.height}>
        <Wrapper
          style={style}
          className={className}
          ref={wrapperRef}
          lerp={lerp}
          translateX={properties.translateX}
        >
          {children({
            translateX: properties.translateX,
            maxTranslateX: properties.maxTranslateX,
            height: properties.height,
          })}
        </Wrapper>
      </Container>
    );
  }
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
