import * as React from "react";
const SvgMapPin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M5 9.923c0 4.852 4.244 8.864 6.123 10.402.27.22.405.332.606.388.156.044.386.044.542 0 .201-.056.336-.167.606-.388C14.756 18.787 19 14.775 19 9.923a6.89 6.89 0 0 0-2.05-4.895A7.04 7.04 0 0 0 12 3a7.04 7.04 0 0 0-4.95 2.028A6.88 6.88 0 0 0 5 9.923" />
      <path d="M10 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    </g>
  </svg>
);
export default SvgMapPin;
