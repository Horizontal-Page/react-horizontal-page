// Always use React for using hooks it make it cleaner
import React from "react";
import { propertiesInterface } from "../interface";
import { CalcHeight, CalcTranslateX } from "../calc";
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
  const resize = () => {
    CalcHeight({ multiplier, wrapper: wrapperRef, setState: setProperties });
  };
  const scroll = () => {
    CalcTranslateX({ container: containerRef, setState: setProperties });
  };

  // componentDidMount
  React.useEffect(() => {
    // didMount
    CalcHeight({ multiplier, wrapper: wrapperRef, setState: setProperties });

    // eventListener
    window.addEventListener("scroll", scroll);
    window.addEventListener("resize", resize);

    // didUnmount
    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return { wrapperRef, containerRef, properties };
};

export default customHook;

/* height is the width of (wrapper.scrollWidth - window.height ) 
this is because if you minus the wrapper.scrollWidth with window.height 
you will get the initial scroll of the scrollwidth of the wrapper 
unless if the wrapper.scrollwidth - height < 0 ,
in summarize to get the scroll you need to minus the windowSize*/
