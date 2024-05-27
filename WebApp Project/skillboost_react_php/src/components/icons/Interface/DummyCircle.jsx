import * as React from "react";
const SvgDummyCircle = (props) => (
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
      d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12"
    />
  </svg>
);
export default SvgDummyCircle;
