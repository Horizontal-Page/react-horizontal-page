// !! note the height is the wrapper scrollWidth not Y axis of the scroll 

export default (height: number, multiplier: number | undefined) => {
  //   to ge the initial scroll you need to minus the window.innerheight
  height = height - window.innerHeight;
  if (multiplier !== undefined) {
    if (multiplier > 2) {
      height = height * 2;
    } else if (multiplier < 0) {
      height = height * 0;
    } else {
      height = height * multiplier;
    }
  }
  /*  if (height is lessthan 0) return 0 
 else return height*/
  if (height < window.innerHeight) {
    return window.innerHeight;
  } else {
    return height - window.innerWidth;
  }
};