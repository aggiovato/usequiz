export const routeToTitle = (route: string): string => {
  try {
    const decodedRoute = decodeURIComponent(route);
    const parts = decodedRoute.split("/");

    const subjIndex = parts.indexOf("subjects");
    const quesIndex = parts.indexOf("questions");

    const titleParts = parts.slice(subjIndex + 1, quesIndex);

    const capitalized = titleParts.map((part) =>
      part
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );

    return decodedRoute.includes("/subjects")
      ? capitalized.join(" - ")
      : "questions.all-questions";
  } catch {
    return "Untitled Pack";
  }
};
