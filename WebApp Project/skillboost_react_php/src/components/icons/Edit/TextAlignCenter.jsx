import * as React from "react";
const SvgTextAlignCenter = (props) => (
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
      d="M17 18H7m13-4H4m13-4H7m13-4H4"
    />
  </svg>
);
export default SvgTextAlignCenter;
