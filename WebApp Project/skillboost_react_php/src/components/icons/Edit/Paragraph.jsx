import * as React from "react";
const SvgParagraph = (props) => (
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
      d="M12 5v8m0-8h4m-4 0h-1a4 4 0 1 0 0 8h1m0 0v6m4-14v14m0-14h1"
    />
  </svg>
);
export default SvgParagraph;
