import type { SVGProps } from "react";

const BreadcrumbsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      {...props}
    >
      <path
        d="M51.1293 40.8457L83.1717 71.9168C85.2263 73.9061 85.2263 76.8385 83.1717 78.8278L21.2536 138.878C17.3779 142.623 10 140.354 10 135.423V81.975L51.1293 40.8457Z"
        fill="#E0EDE9"
      />
      <path
        opacity="0.5"
        d="M10 68.7692V15.3216C10 10.3906 17.3779 8.12117 21.2536 11.8661L44.4239 34.336L10 68.7692Z"
        fill="#84BABF"
      />
      <path
        d="M59.3103 20.085L76.7433 38.7605M59.3103 132.154C59.3103 132.154 111.609 78.681 111.609 76.1195C111.609 73.5579 98.5345 62.1108 98.5345 62.1108"
        stroke="#C1DCDF"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M87.7012 20.085L105.134 38.5115M87.7012 130.66C87.7012 130.66 140 77.8998 140 75.3723C140 72.8449 126.925 61.5505 126.925 61.5505"
        stroke="#E0EDE9"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BreadcrumbsIcon;
