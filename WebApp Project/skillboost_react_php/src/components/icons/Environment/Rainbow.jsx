import * as React from "react";
const SvgRainbow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 17v-2a9 9 0 1 1 18 0v2M6 17v-2a6 6 0 0 1 12 0v2m-9 0v-2a3 3 0 1 1 6 0v2"
    />
  </svg>
);
export default SvgRainbow;
