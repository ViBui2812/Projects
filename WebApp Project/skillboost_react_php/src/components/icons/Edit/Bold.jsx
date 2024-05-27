import * as React from "react";
const SvgBold = (props) => (
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
      d="M8 12h4.5M8 12V5h4.5a3.5 3.5 0 1 1 0 7M8 12v7h5.5a3.5 3.5 0 1 0 0-7h-1"
    />
  </svg>
);
export default SvgBold;
