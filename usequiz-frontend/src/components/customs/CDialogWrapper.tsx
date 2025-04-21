import { ReactNode } from "react";
import warningIcon from "../../assets/img/warning.svg";
import infoIcon from "../../assets/img/info.svg";
import successIcon from "../../assets/img/success.svg";
import errorIcon from "../../assets/img/error.svg";
import { useTranslation } from "react-i18next";
import { TFunction } from "i18next";
import clsx from "clsx";

type DialogType = "info" | "success" | "warning" | "error";

interface CDialogWrapperProps {
  type?: DialogType;
  children: ReactNode;
  onClose?: () => void;
}

const generateTypes = (t: TFunction) => {
  return {
    info: {
      title: t("dialog.info.title"),
      icon: infoIcon,
    },
    success: {
      title: t("dialog.success.title"),
      icon: successIcon,
    },
    warning: {
      title: t("dialog.warning.title"),
      icon: warningIcon,
    },
    error: {
      title: t("dialog.error.title"),
      icon: errorIcon,
    },
  };
};

const CDialogWrapper = ({
  type = "info",
  children,
  onClose,
}: CDialogWrapperProps) => {
  const { t } = useTranslation();
  const types = generateTypes(t);

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
          <div className="flex items-center gap-4 mb-2">
            <img
              src={types[type].icon}
              alt={types[type].title}
              className="w-10 h-10"
            />
            <p
              className={clsx("text-xl font-bold", {
                "border-blue-400": type === "info",
                "text-teal-bright": type === "success",
                "text-amber-glow": type === "warning",
                "text-rose-clay": type === "error",
              })}
            >
              {types[type].title}
            </p>
          </div>

          <hr className="border-teal-bright/20 border-t-3 mb-4" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default CDialogWrapper;
