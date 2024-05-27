import * as React from "react";
const SvgListCheck = (props) => (
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
      d="M4 17h7m9-3-4 4-2-2M4 12h11M4 7h11"
    />
  </svg>
);
export default SvgListCheck;
