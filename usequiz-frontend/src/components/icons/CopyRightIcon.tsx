import type { SVGProps } from "react";

const CopyRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M14.6 9a4 4 0 1 0 0 6" />
      </g>
    </svg>
  );
};

export default CopyRightIcon;
