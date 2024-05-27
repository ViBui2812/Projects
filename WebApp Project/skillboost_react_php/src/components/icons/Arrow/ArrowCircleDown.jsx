import * as React from "react";
const SvgArrowCircleDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9 13 3 3m0 0 3-3m-3 3V8m9 4a9 9 0 1 0-18 0 9 9 0 0 0 18 0"
    />
  </svg>
);
export default SvgArrowCircleDown;
