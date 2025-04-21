import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LOCALES } from "../../i18n";
import LanguageIcon from "../icons/LanguageIcon";

const CLanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLanguage = Object.values(LOCALES).find(
    (lang) => lang.code === i18n.language
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block pr-4 md:p-4" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 md:px-3 md:py-2 rounded bg-dark-teal md:hover:bg-teal-shine/20 transition text-sm text-amber-glow hover:cursor-pointer hover:font-bold focus:outline-none md:focus:ring-2 md:focus:ring-amber-glow focus:shadow-md"
      >
        {selectedLanguage?.Flag && (
          <LanguageIcon className="w-6 h-6 md:w-8 md:h-8" />
        )}
        <div className="hidden sm:inline">{selectedLanguage?.cap}</div>
      </button>

      {isOpen && (
        <ul className="absolute right-2 mt-2 bg-dark-teal border border-teal-600 rounded-md shadow-md w-36 z-50">
          {Object.values(LOCALES).map((lang) => {
            const isCurrent = lang.code === i18n.language;
            return (
              <li
                key={lang.code}
                className={`px-4 py-3 text-sm cursor-pointer flex items-center gap-2 transition
                  ${
                    isCurrent
                      ? "text-amber-glow font-bold"
                      : "text-white hover:bg-teal-strong hover:text-amber-glow"
                  }
                `}
                onClick={() => handleLanguageChange(lang.code)}
              >
                {lang.Flag && <lang.Flag />}
                <div>{lang.label}</div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CLanguageDropdown;
