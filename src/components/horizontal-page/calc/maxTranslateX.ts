// max translateX of wrapper
export default (scrollWidth: number) => {
  // always return 0 if max translate is lessthan 0
  if (scrollWidth - window.innerWidth < 0) {
    return 0;
  } else {
    return scrollWidth - window.innerWidth;
  }
};
