// max translateX of wrapper
export default (scrollWidth: number) => {
  // always return 0 if max translate is lessthan 0
  const maxWidth = scrollWidth - window.innerWidth;
  if (maxWidth < 0) {
    return 0;
  } else {
    return maxWidth;
  }
};
