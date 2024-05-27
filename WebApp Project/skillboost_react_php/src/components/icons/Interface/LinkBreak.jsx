import * as React from "react";
const SvgLinkBreak = (props) => (
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
      d="M16 20v-2m2-2h2M7.05 11.293l-1.414 1.414a4 4 0 0 0 5.657 5.657l1.415-1.414M6 8H4m4-4v2m3.293 1.05 1.414-1.414a4 4 0 1 1 5.656 5.657l-1.414 1.414"
    />
  </svg>
);
export default SvgLinkBreak;
