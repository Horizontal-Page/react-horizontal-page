// Always use React for using hooks it make it cleaner
import React, { LegacyRef } from "react";
import { propertiesInterface } from "../interface";
import { CalcHeight, CalcMaxTranslate, CalcTranslateX } from "../calc";
import { useHorizontalProperties } from "../interface/horizontalProperties";

const customHook: useHorizontalProperties = ({ multiplier }) => {
  const wrapperRef: React.MutableRefObject<HTMLElement> = React.useRef();
  const containerRef: React.MutableRefObject<HTMLElement> = React.useRef();
  // properties
  const [properties, setProperties] = React.useState<propertiesInterface>(
    () => {
      // pr --> properties for acronym
      const pr = {
        translateX: 0,
        height: 0,
        maxTranslateX: 0,
      };
      console.log(wrapperRef);
      if (typeof window !== "undefined") {
        return pr;
      } else {
        return pr;
      }
    }
  );

  // componentDidMount
  React.useEffect(() => {
    console.log("HELLO");
    () => {};
  }, []);

  return { wrapperRef, containerRef, properties };
};

export default customHook;

/* height is the width of (wrapper.scrollWidth - window.height ) 
this is because if you minus the wrapper.scrollwidth with window.height 
you will get the initial scroll of the scrollwidth of the wrapper 
unless if the wrapper.scrollwidth - height < 0 */
