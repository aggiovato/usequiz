import profileImg from "../../assets/img/profile.svg";
import logoDark from "../../assets/img/rounded_dark.svg";
import { useTranslation, Trans } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] h-full min-h-[calc(100vh-6.25rem)]">
      <div className="p-6 md:p-12 flex flex-col gap-8">
        <div className="flex flex-col gap-7 text-sm">
          <div className="flex items-center gap-4">
            <img
              src={logoDark}
              alt="Logo"
              className="w-20 h-20 rounded-full object-cover"
            />
            <h1 className="text-3xl font-bold text-dark-teal">
              {t("about.title")}
            </h1>
          </div>
          <p className="max-w-[80ch] text-dark-teal/80">
            <Trans i18nKey="about.desc" components={[<span />]} />
          </p>
          <ul className="text-dark-teal/90 text-sm space-y-2 list-none pl-2">
            {[
              t("about.features_list.1"),
              t("about.features_list.2"),
              t("about.features_list.3"),
              t("about.features_list.4"),
              t("about.features_list.5"),
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="text-rose-clay font-bold px-2 py-0 rounded-md bg-rose-clay/10">
                  ➤
                </div>
                <div className="text-teal-bright/80 font-bold">{item}</div>
              </li>
            ))}
          </ul>
          <p className="max-w-[80ch] text-dark-teal/80">
            <Trans i18nKey="about.desc2" components={[<></>, <span />]} />
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-dark-teal mb-2">
            {t("about.details_title")}
          </h2>
          <ul className="text-dark-teal/80 text-sm space-y-1">
            <li>
              <Trans
                i18nKey="about.details_list.1"
                components={[<span />, <strong />]}
              />
            </li>
            <li>
              <Trans
                i18nKey="about.details_list.2"
                components={[<span />, <strong />]}
              />
            </li>
            <li>
              <Trans
                i18nKey="about.details_list.3"
                components={[<span />, <strong />]}
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-dark-teal text-white p-6 md:p-8 flex flex-col justify-between items-center">
        <div className="flex flex-col items-center gap-4">
          <img
            src={profileImg}
            alt="Profile"
            className="w-38 h-38 rounded-full object-cover border-3 border-amber-glow"
          />
          <div className="text-center mb-4">
            <h2 className="text-amber-glow text-xl font-bold mb-1">
              {t("about.about_me.name")}
            </h2>
            <p className="text-sm">{t("about.about_me.desc")}</p>
          </div>

          <div>
            <h2 className="text-amber-glow/90 text-lg font-bold">
              {t("about.about_me.title")}
            </h2>
            <p className="text-sm text-gray-300 mt-4 font-light max-w-[40ch]">
              {t("about.about_me.info")}
            </p>
            <hr className="border-amber-glow/80 border-t-3 mt-4" />
          </div>

          <div className="text-sm text-gray-300 md:mt-4 md:space-y-2">
            <p>{t("about.about_me.contact.email")}</p>
            <p>{t("about.about_me.contact.github")}</p>
          </div>
        </div>

        <div className="text-xs text-gray-400 text-center mt-10 md:mt-0">
          <p>{t("about.footer")}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
