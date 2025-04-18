import { ReactNode } from "react";
import clsx from "clsx";

type DialogType = "info" | "success" | "warning" | "error";

interface CDialogWrapperProps {
  type?: DialogType;
  children: ReactNode;
  onClose?: () => void;
}

const CDialogWrapper = ({
  type = "info",
  children,
  onClose,
}: CDialogWrapperProps) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-6 md:p-4"
      onClick={onClose}
    >
      <div
        className={clsx(
          "min-w-[150px] md:min-w-[400px] max-w-md w-full rounded-md p-6 shadow-lg bg-light-teal text-dark-teal",
          {
            "border-l-6 border-blue-400": type === "info",
            "border-l-6 border-teal-bright": type === "success",
            "border-l-6 border-amber-glow": type === "warning",
            "border-l-6 border-rose-clay": type === "error",
          }
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex gap-2"></div>
        {children}
      </div>
    </div>
  );
};

export default CDialogWrapper;
