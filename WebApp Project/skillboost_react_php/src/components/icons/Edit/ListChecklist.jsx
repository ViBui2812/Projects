import * as React from "react";
const SvgListChecklist = (props) => (
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
      d="M11 17h9M8 15l-2.5 3L4 17m7-5h9M8 10l-2.5 3L4 12m7-5h9M8 5 5.5 8 4 7"
    />
  </svg>
);
export default SvgListChecklist;
