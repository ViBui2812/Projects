import * as React from "react";
const SvgCheckAll = (props) => (
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
      d="m8 12.485 4.243 4.243 8.484-8.485M3 12.485l4.243 4.243m8.485-8.485L12.5 11.5"
    />
  </svg>
);
export default SvgCheckAll;
