import * as React from "react";
const SvgUnderline = (props) => (
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
      d="M6 19h12M8 5v6a4 4 0 0 0 8 0V5"
    />
  </svg>
);
export default SvgUnderline;
