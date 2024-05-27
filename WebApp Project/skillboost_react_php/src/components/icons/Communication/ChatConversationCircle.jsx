import * as React from "react";
const SvgChatConversationCircle = (props) => (
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
      d="M9.338 15.99a6 6 0 1 0-5.408-2.78l-.424 1.272v.002c-.163.487-.244.73-.187.893.05.141.163.253.304.303.162.058.404-.023.888-.184l.007-.002 1.272-.424a5.97 5.97 0 0 0 3.548.92m0 0q0 0 0 0m0 0a6.003 6.003 0 0 0 8.872 3.08l1.272.424h.003c.487.163.73.244.893.186a.5.5 0 0 0 .302-.303c.058-.162-.023-.406-.186-.895l-.424-1.272.142-.235A6 6 0 0 0 15 8l-.225.004-.113.006"
    />
  </svg>
);
export default SvgChatConversationCircle;
