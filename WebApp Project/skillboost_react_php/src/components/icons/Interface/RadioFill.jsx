import * as React from "react";
const SvgRadioFill = (props) => (
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
      <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16" />
      <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
    </g>
  </svg>
);
export default SvgRadioFill;
