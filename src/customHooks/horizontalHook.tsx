// Always use React for using hooks it make it cleaner
import React from "react";

// interface for properties State<>
interface propertiesInterface {
  translateX: number;
  height: number;
}

function useHorizontal() {
  const wrapperRef = React.useRef();
  const containerRef = React.useRef();
  const [properties, setProperties] = React.useState<propertiesInterface>(
    () => {
      // pr --> properties for acronym
      const pr = {
        translateX: 0,
        height: 0,
      };
      if (typeof window !== "undefined") {
        return pr;
      } else {
        return {
          translateX: 0,
          height: 0,
        };
      }
    }
  );

  // componentDidMount
  React.useEffect(() => {
    console.log("HELLO");
  }, []);
  return [wrapperRef, containerRef, properties];
}

export default useHorizontal;
