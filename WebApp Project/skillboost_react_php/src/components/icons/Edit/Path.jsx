import * as React from "react";
const SvgPath = (props) => (
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
      d="M8.121 15.879a3 3 0 1 0-4.243 4.243 3 3 0 0 0 4.243-4.243m0 0L15.88 8.12m0 0a3 3 0 1 0 4.243-4.243 3 3 0 0 0-4.243 4.243m0 0 .004-.004"
    />
  </svg>
);
export default SvgPath;
