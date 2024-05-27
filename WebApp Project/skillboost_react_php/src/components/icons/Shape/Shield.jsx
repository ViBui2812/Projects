import * as React from "react";
const SvgShield = (props) => (
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
      d="M12.926 20.631C15.032 19.678 20 16.733 20 10.165V6.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C18.48 3 17.92 3 16.8 3H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 4.52 4 5.08 4 6.2v3.965c0 6.568 4.968 9.513 7.074 10.466.223.102.335.152.588.195.16.028.518.028.677 0 .252-.043.363-.093.585-.194z"
    />
  </svg>
);
export default SvgShield;
