import * as React from "react";
const SvgBarLeft = (props) => (
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
      d="M9 20V4m0 16h7.803c1.118 0 1.677 0 2.104-.218.377-.192.683-.498.875-.875.218-.427.218-.986.218-2.104V7.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C18.48 4 17.92 4 16.8 4H9m0 16H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.875C4 18.48 4 17.92 4 16.8V7.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4H9"
    />
  </svg>
);
export default SvgBarLeft;
