const AboutPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] h-full min-h-[calc(100vh-6.25rem)]">
      <div className="p-6 md:p-12 flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold text-dark-teal mb-4">Sobre mí</h1>
          <p className="max-w-[60ch] text-dark-teal/80">
            Soy un desarrollador apasionado por crear herramientas útiles,
            simples y accesibles. Este proyecto nace como un espacio para
            organizar y practicar preguntas tipo test de mis estudios y
            compartirlas de forma abierta.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-dark-teal mb-2">
            Información del proyecto
          </h2>
          <ul className="text-dark-teal/80 text-sm space-y-1">
            <li>Versión: 1.0.0</li>
            <li>Objetivo: Practicar preguntas test de forma sencilla.</li>
            <li>
              Próximas versiones: modo usuario, creación de preguntas, rating,
              comentarios, progreso guardado...
            </li>
          </ul>
        </div>
      </div>

      {/* Lateral derecho */}
      <div className="bg-dark-teal text-white p-6 md:p-12 flex flex-col justify-between items-center">
        <div className="flex flex-col items-center gap-4">
          <img
            src="./src/assets/img/me.png"
            alt="Profile"
            className="w-38 h-38 rounded-full object-cover border-3 border-amber-glow"
          />
          <div className="text-center">
            <h2 className="text-amber-glow text-xl font-bold mb-1">
              Alejandro Lugo
            </h2>
            <p className="text-sm">Full-Stack Dev</p>
          </div>

          <div className="text-sm text-gray-300 mt-4 space-y-2">
            <p>Email: aggiovato@gmail.com</p>
            <p>Github: @tuuser</p>
            <p>LinkedIn: /in/tuuser</p>
          </div>
        </div>

        <div className="text-xs text-gray-400 mt-8 text-center">
          <p>
            Este proyecto está en constante evolución. ¡Gracias por probarlo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
