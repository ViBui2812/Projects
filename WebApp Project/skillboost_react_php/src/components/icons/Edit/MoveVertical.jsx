import * as React from "react";
const SvgMoveVertical = (props) => (
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
      d="M12 21V3m0 18 3-3m-3 3-3-3m3-15L9 6m3-3 3 3"
    />
  </svg>
);
export default SvgMoveVertical;
