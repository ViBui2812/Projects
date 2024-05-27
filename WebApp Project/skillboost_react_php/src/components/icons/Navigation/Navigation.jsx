import * as React from "react";
const SvgNavigation = (props) => (
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
      d="m4.805 3.555 15.81 4.865c.862.265.96 1.446.153 1.85l-6.7 3.35a1 1 0 0 0-.448.447l-3.35 6.7c-.403.807-1.584.71-1.85-.153L3.555 4.804a1 1 0 0 1 1.25-1.249"
    />
  </svg>
);
export default SvgNavigation;
