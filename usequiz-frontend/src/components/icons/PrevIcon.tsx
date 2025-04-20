import type { SVGProps } from "react";

interface PrevIconProps {
  isDisabled?: boolean;
}

const PrevIcon = ({
  isDisabled = false,
  ...props
}: PrevIconProps & SVGProps<SVGSVGElement>) => {
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
        d="M22.499 81.2372L22.5 81.2366L97.499 37.9372C97.4994 37.937 97.4997 37.9368 97.5001 37.9366C111.942 29.5953 130 40.0181 130 56.7001V143.3C130 159.983 111.941 170.405 97.499 162.063L22.5 118.764L22.499 118.763C8.05864 110.422 8.05864 89.5786 22.499 81.2372Z"
        fill={isDisabled ? "#d8d8d8" : "#E0EDE9"}
        stroke={isDisabled ? "#666666" : "#0D6F73"}
        strokeWidth="10"
      />
      <path
        d="M125 56.7001V143.3C125 156.133 111.108 164.15 100 157.733L25 114.433C13.8916 108.017 13.8916 91.9835 25 85.5668L100 42.2668C111.108 35.8501 125 43.8668 125 56.7001Z"
        fill={isDisabled ? "#bfbfbf" : "#84BABF"}
        fillOpacity="0.7"
      />
      <path
        d="M125 143.3L150 157.733C161.108 164.15 175 156.133 175 143.3V56.7001C175 43.8668 161.108 35.8501 150 42.2668L125 56.7001M125 143.3V56.7001M125 143.3C125 156.133 111.108 164.15 100 157.733L25 114.433C13.8916 108.017 13.8916 91.9835 25 85.5668L100 42.2668C111.108 35.8501 125 43.8668 125 56.7001"
        stroke={isDisabled ? "#666666" : "#0D6F73"}
        strokeWidth="10"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PrevIcon;
