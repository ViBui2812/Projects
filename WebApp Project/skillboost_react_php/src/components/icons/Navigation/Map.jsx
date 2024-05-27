import * as React from "react";
const SvgMap = (props) => (
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
      d="M15 6v15m0-15 6-3v15l-6 3m0-15L9 3m6 18-6-3m0 0-6 3V6l6-3m0 15V3"
    />
  </svg>
);
export default SvgMap;
