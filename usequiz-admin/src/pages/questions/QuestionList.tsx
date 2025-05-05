import { useEffect, useState } from "react";
import { QuestionType } from "../../types/question";
import { getAllQuestions } from "../../services/questions";
import { useNavigate } from "react-router-dom";
//import { truncate } from "../../utils/helpers"; // crea una función truncate simple si quieres

export default function QuestionList() {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [filtered, setFiltered] = useState<QuestionType[]>([]);
  const [subjectFilter, setSubjectFilter] = useState("");
  const [unitFilter, setUnitFilter] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("");
  const [questionFilter, setQuestionFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;

  const navigate = useNavigate();

  useEffect(() => {
    getAllQuestions().then((res) => {
      setQuestions(res);
      setFiltered(res);
    });
  }, []);

  useEffect(() => {
    let result = questions;

    if (subjectFilter)
      result = result.filter((q) =>
        q.subject.toLowerCase().includes(subjectFilter.toLowerCase())
      );

    if (unitFilter)
      result = result.filter((q) =>
        q.unit.title.toLowerCase().includes(unitFilter.toLowerCase())
      );

    if (difficultyFilter)
      result = result.filter((q) => q.difficulty === difficultyFilter);

    if (questionFilter)
      result = result.filter((q) =>
        q.question.toLowerCase().includes(questionFilter.toLowerCase())
      );

    setFiltered(result);
    setCurrentPage(1);
  }, [subjectFilter, unitFilter, difficultyFilter, questionFilter, questions]);

  const startIndex = (currentPage - 1) * pageSize;
  const paginated = filtered.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(filtered.length / pageSize);

  const handleDelete = (id: string) => {
    if (confirm("¿Eliminar esta pregunta?")) {
      setQuestions((prev) => prev.filter((q) => q.id !== id));
    }
  };

  const clearFilters = () => {
    setSubjectFilter("");
    setUnitFilter("");
    setDifficultyFilter("");
    setQuestionFilter("");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-48px)] p-6 space-y-4">
      {/* Filtros */}
      <section
        id="filters"
        className="sticky flex justify-center top-0 z-10 bg-light-teal"
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full max-w-5xl justify-items-center">
          <input
            type="text"
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
            placeholder="Filtrar por asignatura"
            className="input-field w-full max-w-xs"
          />
          <input
            type="text"
            value={unitFilter}
            onChange={(e) => setUnitFilter(e.target.value)}
            placeholder="Filtrar por unidad"
            className="input-field w-full max-w-xs"
          />
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="input-field w-full max-w-xs"
          >
            <option value="">Todas las dificultades</option>
            <option value="easy">Fácil</option>
            <option value="medium">Media</option>
            <option value="hard">Difícil</option>
          </select>
          <input
            type="text"
            value={questionFilter}
            onChange={(e) => setQuestionFilter(e.target.value)}
            placeholder="Buscar por texto de pregunta"
            className="input-field w-full max-w-xs"
          />
          <button onClick={clearFilters} className="btn btn-icon">
            Limpiar filtros
          </button>
        </div>
      </section>

      {/* Desktop: Tabla */}
      <div className="hidden md:block overflow-y-auto flex-1 border border-teal-bright/40 rounded-md">
        <table className="w-full table-auto text-left text-sm">
          <thead className="bg-teal-bright text-white sticky top-0 z-10">
            <tr className="h-[60px]">
              <th className="p-3">ID</th>
              <th className="p-3">Asignatura</th>
              <th className="p-3">Unidad</th>
              <th className="p-3">Dificultad</th>
              <th className="p-3">Pregunta</th>
              <th className="p-3">Opciones</th>
              <th className="p-3">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-dark-teal divide-y divide-teal-bright/40">
            {paginated.map((q) => (
              <tr key={q.id} className="hover:bg-light-teal/50">
                <td className="p-2">{q.id!.slice(0, 6)}...</td>
                <td className="p-2">{q.subject}</td>
                <td className="p-2">{q.unit.title}</td>
                <td className="p-2 capitalize">{q.difficulty}</td>
                <td className="p-2 truncate max-w-[220px]" title={q.question}>
                  {q.question}
                </td>
                <td className="p-2">{q.options.length}</td>
                <td className="p-2 flex gap-3">
                  <button
                    onClick={() => navigate(`/questions/${q.id}`)}
                    className="text-blue-600 hover:underline"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(q.id!)}
                    className="text-rose-clay hover:underline"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            {paginated.length === 0 && (
              <tr>
                <td colSpan={7} className="p-4 text-center text-gray-500">
                  No se encontraron preguntas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile: Cards */}
      <div className="md:hidden flex flex-col items-center space-y-4 overflow-y-auto flex-1">
        {paginated.map((q) => (
          <div
            key={q.id}
            className="border border-teal-bright/30 rounded-md p-4 shadow-sm bg-light-teal w-full max-w-xs"
          >
            <div className="text-xs text-teal-strong mb-1">
              ID: {q.id!.slice(0, 6)}...
            </div>
            <div className="font-bold text-dark-teal">{q.subject}</div>
            <div className="text-sm">Unidad: {q.unit.title}</div>
            <div className="text-sm">Dificultad: {q.difficulty}</div>
            <div className="text-sm truncate" title={q.question}>
              {q.question}
            </div>
            <div className="text-sm mb-2">Opciones: {q.options.length}</div>
            <div className="flex gap-4">
              <button
                onClick={() => navigate(`/questions/${q.id}`)}
                className="btn btn-ghost text-sm"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(q.id!)}
                className="btn btn-ghost text-sm text-rose-clay"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="hidden md:flex justify-center mt-2 gap-4">
        <button
          className="btn btn-ghost"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          ◀ Anterior
        </button>
        <span className="text-sm font-semibold text-dark-teal">
          Página {currentPage} de {totalPages}
        </span>
        <button
          className="btn btn-ghost"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Siguiente ▶
        </button>
      </div>
    </div>
  );
}
