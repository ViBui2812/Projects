import * as React from "react";
const SvgAirplay = (props) => (
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
      d="M6.25 17h-.053c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.875C3 15.48 3 14.92 3 13.8V8.2c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C4.52 5 5.08 5 6.2 5h11.6c1.12 0 1.68 0 2.107.218.377.192.683.497.875.874.218.427.218.987.218 2.105v5.606c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.874.875C19.48 17 18.92 17 17.803 17h-.05M16 20H8l4-5z"
    />
  </svg>
);
export default SvgAirplay;
