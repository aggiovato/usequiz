import { Link } from "react-router-dom";

const WelcomeMsg = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-12 items-center">
      <div className="relative flex flex-col items-center gap-6 mt-30 md:mt-40">
        <h1 className="text-3xl md:text-5xl font-bold text-dark-teal/80">
          Welcome to{" "}
          <div className="text-teal-strong/80 font-bold px-2 py-0 rounded-md bg-teal-bright/10 text-3xl md:text-4xl">
            useQuiz()
          </div>
        </h1>
        <p className="max-w-[40ch] text-dark-teal/80 text-lg">
          La forma más sencilla de aprender, crear y compartir preguntas tipo
          test.
        </p>
        <div className="btn-group">
          <Link to="/sign-up" className="btn btn-primary">
            Create your account
          </Link>
          <Link to="/subjects" className="btn btn-ghost">
            Hit the road
          </Link>
        </div>
      </div>

      {/* Actual pack question card */}

      <div className="card-container"></div>
    </div>
  );
};

export default WelcomeMsg;
