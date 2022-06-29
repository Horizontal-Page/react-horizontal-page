// Always use React for using hooks it make it cleaner
import React from "react";
import { propertiesInterface } from "../interface";
import { CalcHeight, CalcMaxTranslate, CalcTranslateX } from "../calc";
import { useHorizontalProperties } from "../interface/horizontalProperties";

const customHook: useHorizontalProperties = ({ multiplier }) => {
  const wrapperRef: React.RefObject<HTMLElement> = React.useRef();
  const containerRef: React.RefObject<HTMLElement> = React.useRef();
  // properties
  const [properties, setProperties] = React.useState<propertiesInterface>({
    translateX: 0,
    height: 0,
    maxTranslateX: 0,
  });

  // eventListener
  const resize = () => {};
  const scroll = () => {};

  // componentDidMount
  React.useEffect(() => {
    setProperties(() => {
      return {
        translateX: CalcTranslateX(
          wrapperRef.current.scrollWidth,
          containerRef.current.offsetTop,
          CalcMaxTranslate(wrapperRef.current.scrollWidth)
        ),
        maxTranslateX: CalcMaxTranslate(wrapperRef.current.scrollWidth),
        height: CalcHeight(wrapperRef.current.scrollWidth, multiplier),
      };
    });

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return { wrapperRef, containerRef, properties };
};

export default customHook;

/* height is the width of (wrapper.scrollWidth - window.height ) 
this is because if you minus the wrapper.scrollwidth with window.height 
you will get the initial scroll of the scrollwidth of the wrapper 
unless if the wrapper.scrollwidth - height < 0 */
