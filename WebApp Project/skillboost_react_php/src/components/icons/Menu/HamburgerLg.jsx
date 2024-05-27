import * as React from "react";
const SvgHamburgerLg = (props) => (
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
      d="M3 17h18M3 12h18M3 7h18"
    />
  </svg>
);
export default SvgHamburgerLg;
