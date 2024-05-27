import * as React from "react";
const SvgText = (props) => (
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
      d="M10 19h2m0 0h2m-2 0V5m0 0H6v1m6-1h6v1"
    />
  </svg>
);
export default SvgText;
