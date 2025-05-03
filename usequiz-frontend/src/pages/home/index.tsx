import Banner from "./Banner";
import WelcomeMsg from "./WelcomeMsg";
import Footer from "./Footer";
import Features from "./Features";
import banner from "../../assets/img/banner.svg";
import bannerMobile from "../../assets/img/banner_mobile.svg";

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
      <section className="relative">
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
