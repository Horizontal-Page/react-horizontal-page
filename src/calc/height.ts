// !! note the height is the wrapper scrollWidth
import { CalcHeight, propertiesInterface } from "../interface";

export default ({ multiplier, wrapper, setState }: CalcHeight) => {
  /* if multiplier is undefined/ungiven then make it 1, otherwise put the multiplier if it's given.
  undefined is falsy so you dont need to check if it's true or false. */
  multiplier = multiplier ? multiplier : 1;
  // to get the initial scroll you need to minus the window.innerheight also apply the multiplier effect
  let height = (wrapper.current.scrollWidth - window.innerHeight) * multiplier;
  // as you can see I used window.innerheight instead of window.innerwidth it's because I wanna know if height is lessthan window.innerheight
  // if height is lessthan window.innerheight always return window.innerheight 
  height = height < window.innerHeight ? window.innerHeight : height;

  setState((p) => {
    return { ...p, height };
  });
};
