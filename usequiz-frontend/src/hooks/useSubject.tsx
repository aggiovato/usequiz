import useSubjectStore from "../stores/useSubjectStore";

const useSubject = () => {
  const subjects = useSubjectStore((state) => state.subjects);
  const lettersMap = useSubjectStore((state) => state.lettersMap);

  return { subjects, lettersMap };
};

export default useSubject;
