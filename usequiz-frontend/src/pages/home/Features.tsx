import { useTranslation } from "react-i18next";
import studySVG from "../../assets/img/study.svg";
import createSVG from "../../assets/img/create.svg";
import collectionsSVG from "../../assets/img/collection.svg";
import rateSVG from "../../assets/img/rate.svg";
import { TFunction } from "i18next";

const translateFeatures = (t: TFunction) => {
  return [
    {
      title: t("home.features.study.title"),
      desc: t("home.features.study.desc"),
      svg: studySVG,
    },
    {
      title: t("home.features.create.title"),
      desc: t("home.features.create.desc"),
      svg: createSVG,
    },
    {
      title: t("home.features.collections.title"),
      desc: t("home.features.collections.desc"),
      svg: collectionsSVG,
    },
    {
      title: t("home.features.rate.title"),
      desc: t("home.features.rate.desc"),
      svg: rateSVG,
    },
  ];
};

const Features = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="text-xl md:text-2xl font-bold text-dark-teal mb-8 text-center">
        {t("home.features.title")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {translateFeatures(t).map((item) => (
          <div
            key={item.title}
            className="relative group overflow-hidden cursor-pointer p-6 border-3 text-teal-strong border-teal-bright rounded-md hover:border-teal-shine/70 transition shadow-md hover:shadow-lg"
          >
            <img
              src={item.svg}
              alt={item.title}
              className="absolute top-2 right-2 w-16 h-16 rotate-20 opacity-80 -z-10 pointer-events-none select-none [&>svg]:w-full [&>svg]:h-full transition-all duration-300 group-hover:rotate-10 group-hover:opacity-20 group-hover:w-[140px] group-hover:h-[140px] group-hover:-top-3 group-hover:-right-5"
            />
            <h3 className="text-xl font-semibold text-teal-strong">
              {item.title}
            </h3>
            <p className="text-dark-teal/70 text-sm max-w-[25ch] break-words mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
