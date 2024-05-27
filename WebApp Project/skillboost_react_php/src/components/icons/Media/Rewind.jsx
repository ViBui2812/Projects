import * as React from "react";
const SvgRewind = (props) => (
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
      d="m12 12 9 5V7zm0 0V7l-9 5 9 5z"
    />
  </svg>
);
export default SvgRewind;
