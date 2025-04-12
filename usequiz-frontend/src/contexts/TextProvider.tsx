import { useEffect, useState } from "react";
import CTooltip from "../components/customs/CTooltip";

interface TextProviderProps {
  text: string;
  charLimitLarge?: number;
  charLimitSmall?: number;
}

const TextProvider = ({
  text,
  charLimitLarge = 50,
  charLimitSmall = 20,
}: TextProviderProps) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1200);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const charLimit = isSmallScreen ? charLimitSmall : charLimitLarge;

  const shouldTruncate = text.length > charLimit;
  const displayText = shouldTruncate
    ? `${text.substring(0, charLimit)}...`
    : text;

  return shouldTruncate ? (
    <CTooltip tooltipText={shouldTruncate ? text : null}>
      <span className="text-provider">{displayText}</span>
    </CTooltip>
  ) : (
    <span className="text-provider">{displayText}</span>
  );
};

export default TextProvider;
