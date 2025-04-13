import { useState } from "react";
import { Location } from "react-router-dom";

export const useNavbar = (location: Location) => {
  const [open, setOpen] = useState(false);

  const routes = [
    { name: "Home", path: "/" },
    { name: "Subjects", path: "/subjects" },
    { name: "Questions", path: "/questions" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const currentedRoutes = routes.map((route) => ({
    ...route,
    currentPage: location.pathname === route.path,
  }));

  console.log("Current location: ", location.pathname);
  console.log("Current route: ", currentedRoutes);

  return { open, setOpen, currentedRoutes };
};
