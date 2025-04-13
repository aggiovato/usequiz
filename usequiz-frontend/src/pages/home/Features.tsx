const Features = () => {
  return (
    <>
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
    </>
  );
};

export default Features;
