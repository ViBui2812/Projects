import * as React from "react";
const SvgChartPie = (props) => (
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
      d="M12 3a9 9 0 1 0 9 9m-9-9a9 9 0 0 1 9 9m-9-9v9m9 0h-9m6 6.5L12 12"
    />
  </svg>
);
export default SvgChartPie;
