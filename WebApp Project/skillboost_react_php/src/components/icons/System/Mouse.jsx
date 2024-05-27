import * as React from "react";
const SvgMouse = (props) => (
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
      d="M12 10V7m6 2v6a6 6 0 0 1-12 0V9a6 6 0 1 1 12 0"
    />
  </svg>
);
export default SvgMouse;
