import Banner from "./Banner";
import WelcomeMsg from "./WelcomeMsg";
import Features from "./Features";
import banner from "../../assets/img/banner.svg";
import bannerMobile from "../../assets/img/banner_mobile.svg";

import { version } from "../../version";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-6.25rem)]">
      {/* Hero */}
      <section className="relative flex items-start justify-center text-center px-4">
        <Banner banner={banner} bannerMobile={bannerMobile} />
        <WelcomeMsg />
      </section>

      {/* *************************************************************************** */}

      {/* Features */}
      <section className="px-6 md:px-10 mt-18 mb-6">
        <Features />
      </section>

      {/* *************************************************************************** */}

      {/* Footer */}
      <footer className="md:hidden px-6 md:px-10 mt-10 mb-6 md:mb-0">
        <p className="text-center text-sm text-dark-teal/60">
          Made with ❤️ by{" "}
          <a
            href="https://github.com/aggiovato/usequiz.git"
            target="_blank"
            rel="noreferrer"
            className="text-teal-strong hover:underline"
          >
            Heber
          </a>
          <span className="text-sm text-dark-teal/60">v{version}</span>
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
