import * as React from "react";
const SvgArrowDownUp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m11 16-3 3m0 0-3-3m3 3V5m5 3 3-3m0 0 3 3m-3-3v14"
    />
  </svg>
);
export default SvgArrowDownUp;
