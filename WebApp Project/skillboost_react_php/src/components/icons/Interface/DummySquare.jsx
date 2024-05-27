import * as React from "react";
const SvgDummySquare = (props) => (
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
      d="M6 9.2v5.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.606c1.118 0 1.677 0 2.104-.218.377-.192.683-.498.875-.874.218-.428.218-.987.218-2.104V9.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C16.48 6 15.92 6 14.8 6H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 7.52 6 8.08 6 9.2"
    />
  </svg>
);
export default SvgDummySquare;
