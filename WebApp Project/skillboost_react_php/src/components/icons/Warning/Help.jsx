import * as React from "react";
const SvgHelp = (props) => (
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
      d="M8.195 8.765A4 4 0 1 1 12 14v1m.05 4v.1h-.1V19z"
    />
  </svg>
);
export default SvgHelp;
