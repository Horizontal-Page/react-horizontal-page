import type { TranslateX } from "../interface";

function CalcTranslateX({ container, wrapper, setState }: TranslateX) {
  // percentage variable return a numberic number between 0 - 1
  // percentage variable check the viewport of the div
  const percentage =
    (window.scrollY - container.current.offsetTop) /
    (container.current.clientHeight - window.innerHeight);
  const maxHeight = wrapper.current.clientWidth - window.innerWidth;
  // validation
  if (percentage < 0) {
    setState((p) => {
      return { ...p, translateX: 0 };
    });
  } else if (percentage > 1) {
    setState((p) => {
      return { ...p, translateX: -Math.abs(maxHeight) };
    });
  } else {
    setState((p) => {
      return {
        ...p,
        translateX: -Math.abs(percentage * maxHeight),
      };
    });
  }
}

export { CalcTranslateX };
