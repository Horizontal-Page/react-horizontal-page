// !! note the height is the wrapper scrollWidth

export default (height: number, multiplier: number | undefined) => {
  /* if multiplier is undefined/ungiven then make it 1, otherwise put the multiplier if it's given.
  undefined is falsy so you dont need to check if it's true or false. */
  multiplier = multiplier ? multiplier : 1;
  /* without ternary operator
  if(multiplier) {
    multiplier = multiplier;
  }else {
    multiplier = 1;
  }
  */

  // to get the initial scroll you need to minus the window.innerheight also apply the multiplier effect
  height = (height - window.innerHeight) * multiplier;

  // if height is lessthan window.innerheight always return window.innerheight
  if (height < window.innerHeight) {
    return window.innerHeight;
  } else {
    return height;
  }
};
