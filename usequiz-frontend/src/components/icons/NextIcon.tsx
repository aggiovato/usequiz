import type { SVGProps } from "react";

interface NextIconProps {
  isDisabled?: boolean;
}

const NextIcon = ({
  isDisabled = false,
  ...props
}: NextIconProps & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      {...props}
    >
      <path
        opacity="0.6"
        d="M177.501 81.2372L177.5 81.2366L102.501 37.9372C102.501 37.937 102.5 37.9368 102.5 37.9366C88.0581 29.5953 70 40.0181 70 56.7001V143.3C70 159.983 88.0589 170.405 102.501 162.063L177.5 118.764L177.501 118.763C191.941 110.422 191.941 89.5786 177.501 81.2372Z"
        fill={isDisabled ? "#d8d8d8" : "#E0EDE9"}
        stroke={isDisabled ? "#666666" : "#0D6F73"}
        strokeWidth="10"
      />
      <path
        d="M75 56.7001V143.3C75 156.133 88.8917 164.15 100 157.733L175 114.433C186.108 108.017 186.108 91.9835 175 85.5668L100 42.2668C88.8917 35.8501 75 43.8668 75 56.7001Z"
        fill={isDisabled ? "#bfbfbf" : "#84BABF"}
        fillOpacity="0.7"
      />
      <path
        d="M75 143.3L50 157.733C38.8917 164.15 25 156.133 25 143.3V56.7001C25 43.8668 38.8917 35.8501 50 42.2668L75 56.7001M75 143.3V56.7001M75 143.3C75 156.133 88.8917 164.15 100 157.733L175 114.433C186.108 108.017 186.108 91.9835 175 85.5668L100 42.2668C88.8917 35.8501 75 43.8668 75 56.7001"
        stroke={isDisabled ? "#666666" : "#0D6F73"}
        strokeWidth="10"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NextIcon;
