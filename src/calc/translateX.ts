import { TranslateX } from "../interface";

function TranslateX({ container, setState }: TranslateX) {
  // percentage variable return a numberic number between 0 - 1
  // percentage variable check the viewport of the div
  const percentage =
    (window.scrollY - container.current.offsetTop) /
    (container.current.clientHeight - window.innerHeight);
  const maxHeight = -Math.abs(
    container.current.clientHeight + window.innerHeight - window.innerWidth
  );
  // validation
  if (percentage < 0) {
    setState((p) => {
      return { ...p, translateX: 0 };
    });
  } else if (percentage > 1) {
    setState((p) => {
      return { ...p, translateX: maxHeight };
    });
  } else {
    setState((p) => {
      return {
        ...p,
        translateX: percentage * maxHeight,
      };
    });
  }
}

export default TranslateX;
