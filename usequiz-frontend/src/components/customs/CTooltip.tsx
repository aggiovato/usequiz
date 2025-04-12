import { useState } from "react";

interface CTooltipProps {
  children: React.ReactNode;
  tooltipText?: string | React.ReactNode;
  tt_position?: "top" | "bottom";
}

const CTooltip = ({
  children,
  tooltipText = "!!!",
  tt_position = "bottom",
}: CTooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {isVisible && (
        <div
          className={`absolute z-50 max-w-[350px] w-full px-3 py-2 text-xs text-white text-center bg-black/75 rounded-md shadow-lg break-words transition-all duration-300
          ${
            tt_position === "top" ? "bottom-[115%]" : "top-[115%]"
          } left-1/2 -translate-x-1/2
          `}
        >
          {tooltipText}
          <div
            className={`absolute left-1/2 -translate-x-1/2 border-4 border-transparent
            ${
              tt_position === "top"
                ? "top-full border-t-black/80"
                : "bottom-full border-b-black/80"
            }`}
          />
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default CTooltip;
