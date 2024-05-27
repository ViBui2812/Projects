import * as React from "react";
const SvgMove = (props) => (
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
      d="M12 21v-9m0 9 3-3m-3 3-3-3m3-6V3m0 9H3m9 0h9m-9-9L9 6m3-3 3 3M3 12l3 3m-3-3 3-3m15 3-3-3m3 3-3 3"
    />
  </svg>
);
export default SvgMove;
