import * as React from "react";
const SvgListUnordered = (props) => (
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
      d="M9 17h10M9 12h10M9 7h10M5.002 17v.002H5V17zm0-5v.002H5V12zm0-5v.002H5V7z"
    />
  </svg>
);
export default SvgListUnordered;
