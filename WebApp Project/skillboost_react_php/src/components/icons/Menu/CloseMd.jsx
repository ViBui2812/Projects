import * as React from "react";
const SvgCloseMd = (props) => (
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
      d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6"
    />
  </svg>
);
export default SvgCloseMd;
