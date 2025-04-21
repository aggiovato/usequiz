import useSubjectStore from "../stores/useSubjectStore";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const useSubject = () => {
  const subjects = useSubjectStore((state) => state.subjects);
  const lettersMap = useSubjectStore((state) => state.lettersMap);

  const { i18n } = useTranslation();
  useEffect(() => {}, [i18n.language]);

  return { subjects, lettersMap };
};

export default useSubject;
