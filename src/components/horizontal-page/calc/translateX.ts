export default (height: number, offsetTop: number, maxheight: number) => {
  /* percentage of the container -> if the height is inside the container */
  // note * this percentage uses decimal point so the 100% is 1.
  const percentage =
    (window.scrollY - offsetTop) / (height - window.innerHeight);
  // always revert the sign of integer/float ---> n - (n*2)

  if (percentage < 0) {
    return 0;
  } else if (percentage > 1) {
    return -Math.abs(maxheight);
  } else {
    return -Math.abs(percentage * maxheight);
  }
};
