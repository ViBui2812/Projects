import * as React from "react";
const SvgCylinder = (props) => (
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
      d="M18 7v10c0 1.657-2.686 3-6 3s-6-1.343-6-3V7m12 0c0-1.657-2.686-3-6-3S6 5.343 6 7m12 0c0 1.657-2.686 3-6 3S6 8.657 6 7"
    />
  </svg>
);
export default SvgCylinder;
