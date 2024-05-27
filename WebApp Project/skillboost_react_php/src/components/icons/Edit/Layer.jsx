import * as React from "react";
const SvgLayer = (props) => (
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
      d="m21 14-9 6-9-6m18-4-9 6-9-6 9-6z"
    />
  </svg>
);
export default SvgLayer;
