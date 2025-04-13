import { Link } from "react-router-dom";
import banner from "../assets/img/banner.svg";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[calc(100vh-6.25rem)] flex items-start justify-center text-center px-4">
        <img
          src={banner}
          alt="useQuiz Banner"
          className="absolute inset-0 w-full object-cover opacity-40 pointer-events-none"
        />

        <div className="relative flex flex-col items-center gap-6 mt-48">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-teal">
            Welcome to useQuiz()
          </h1>
          <p className="max-w-[50ch] text-dark-teal/80 text-lg">
            La forma más sencilla de aprender, crear y compartir preguntas tipo
            test.
          </p>
          <Link to="/sign-up" className="btn btn-primary">
            Create your account
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-12">
        <h2 className="text-3xl font-bold text-dark-teal mb-8 text-center">
          What can you do?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Study",
              desc: "Practice with unlimited questions from all subjects.",
            },
            { title: "Create", desc: "Make your own custom questions easily." },
            {
              title: "Collections",
              desc: "Group questions into packs and share them.",
            },
            {
              title: "Rate & Comment",
              desc: "Give feedback and discuss questions from others.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border-2 border-teal-strong rounded-md p-6 flex flex-col gap-3 hover:border-teal-bright transition shadow-md hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-teal-strong">
                {item.title}
              </h3>
              <p className="text-dark-teal/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
