import { version } from "../../version";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GitHubIcon from "../../components/icons/GitHubIcon";
import AtIcon from "../../components/icons/AtIcon";
import CopyRightIcon from "../../components/icons/CopyRightIcon";

const Footer = ({ footer }: { footer: string }) => {
  const { t } = useTranslation();

  return (
    <footer className="md:hidden w-full bg-transparent text-light-teal pt-0 pb-6">
      {/* Background decoration */}

      <img
        src={footer}
        alt="Decorative Footer Background"
        className="w-full h-auto block pointer-events-none"
      />

      {/* Footer content */}
      <div className="-mt-[175px] z-10 relative flex flex-col items-center gap-6 px-8 w-full">
        <div className="grid grid-cols-2 gap-6 text-sm w-full max-w-md">
          {/* Navegation */}
          <div className="w-full">
            <h3 className="font-bold text-amber-glow mb-4 select-none">
              {t("footer.navigation")}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  to="/"
                  className="hover:underline hover:text-teal-shine2 hover:text-shadow-teal-100"
                >
                  {t("footer.navigation.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/subjects"
                  className="hover:underline hover:text-teal-shine2 hover:text-shadow-teal-100"
                >
                  {t("footer.navigation.subjects")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:underline hover:text-teal-shine2 hover:text-shadow-teal-100"
                >
                  {t("footer.navigation.about")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full">
            <h3 className="font-bold text-amber-glow mb-4 select-none">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 hover:underline hover:text-teal-shine2 hover:text-shadow-teal-100"
                >
                  <AtIcon className="w-5 h-5" /> {t("footer.email")}
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/aggiovato/usequiz"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:underline hover:text-teal-shine2 hover:text-shadow-teal-100"
                >
                  <GitHubIcon className="w-5 h-5" /> {t("footer.github")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Final line */}
        <div className="flex items-center gap-2 text-center text-xs text-light-teal/70 mt-2">
          <CopyRightIcon className="w-3.5 h-3.5" /> {new Date().getFullYear()} –{" "}
          {t("footer.made_with_love")}{" "}
          <a
            href="https://github.com/aggiovato"
            target="_blank"
            rel="noreferrer"
            className="text-amber-glow/80 hover:text-amber-glow hover:underline"
          >
            Aggiovato
          </a>{" "}
          –
          <strong className="text-amber-glow/80 hover:text-amber-glow">
            v{version}
          </strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
