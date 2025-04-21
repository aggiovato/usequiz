import { useEffect, useRef, useState } from "react";
import { Location } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const useNavbar = (location: Location) => {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { t } = useTranslation();

  const routes = [
    { name: t("header.navbar.home"), path: "/" },
    { name: t("header.navbar.subjects"), path: "/subjects" },
    { name: t("header.navbar.questions"), path: "/questions" },
    { name: t("header.navbar.about"), path: "/about" },
    { name: t("header.navbar.contact"), path: "/contact" },
  ];

  const currentedRoutes = routes.map((route) => ({
    ...route,
    currentPage: location.pathname === route.path,
  }));

  return { open, setOpen, currentedRoutes, dropdownRef };
};
