import * as React from "react";
const SvgMention = (props) => (
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
      d="M15 12.002V13a2 2 0 1 0 4 0v-1a7 7 0 1 0-4.406 6.502m.406-6.5a3 3 0 1 1 0-.004m0 .004v-.004m0 0V9"
    />
  </svg>
);
export default SvgMention;
