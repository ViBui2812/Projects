import * as React from "react";
const SvgUserCircle = (props) => (
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
      d="M17.217 19.332A6.98 6.98 0 0 0 12 17c-2.073 0-3.935.9-5.217 2.332M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
    />
  </svg>
);
export default SvgUserCircle;
