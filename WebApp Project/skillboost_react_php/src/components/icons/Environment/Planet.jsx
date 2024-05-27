import * as React from "react";
const SvgPlanet = (props) => (
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
      d="M6.898 18.162a8 8 0 0 0 12.93-7.821m-12.93 7.82a8 8 0 1 1 12.93-7.821m-12.93 7.822c1.955-.447 4.282-1.38 6.628-2.734 2.73-1.576 4.951-3.416 6.302-5.088m-12.93 7.822c-2.43.555-4.286.362-4.898-.698-.63-1.091.196-2.867 2-4.755m15.828-2.369c1.252-1.55 1.756-2.956 1.224-3.876-.539-.933-2.043-1.195-4.052-.865"
    />
  </svg>
);
export default SvgPlanet;
