import { ReactNode } from "react";
import clsx from "clsx";

type DialogType = "info" | "success" | "warning" | "error";

interface CDialogWrapperProps {
  type?: DialogType;
  children: ReactNode;
  onClose?: () => void;
}

const dialogObj = {
  info: {
    title: "Información",
    icon: "info-circle",
  },
  success: {
    title: "Éxito",
    icon: "check-circle",
  },
  warning: {
    title: "¡Atención!",
    icon: "exclamation-triangle",
  },
  error: {
    title: "Error",
    icon: "exclamation-circle",
  },
};

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
          "min-w-[150px] md:min-w-[400px] max-w-md rounded-md p-6 shadow-lg bg-light-teal text-dark-teal",
          {
            "border-l-6 border-blue-400": type === "info",
            "border-l-6 border-teal-bright": type === "success",
            "border-l-6 border-amber-glow": type === "warning",
            "border-l-6 border-rose-clay": type === "error",
          }
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-2">
          <p
            className={clsx("text-xl font-bold mb-2", {
              "border-blue-400": type === "info",
              "text-teal-bright": type === "success",
              "text-amber-glow": type === "warning",
              "text-rose-clay": type === "error",
            })}
          >
            {dialogObj[type].title}
          </p>

          <hr className="border-teal-bright/20 border-t-3 mb-4" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default CDialogWrapper;
