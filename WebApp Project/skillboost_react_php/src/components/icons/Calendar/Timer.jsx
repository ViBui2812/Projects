import * as React from "react";
const SvgTimer = (props) => (
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
      d="M12 13V9m9-3-2-2m-9-2h4m-2 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16"
    />
  </svg>
);
export default SvgTimer;
