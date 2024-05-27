import * as React from "react";
const SvgSwichtLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M8 18h8a6 6 0 0 0 0-12H8a6 6 0 1 0 0 12" />
      <path d="M8 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
    </g>
  </svg>
);
export default SvgSwichtLeft;
