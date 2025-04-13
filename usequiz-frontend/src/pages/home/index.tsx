import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import WelcomeMsg from "./WelcomeMsg";
import Features from "./Features";

const HomePage = () => {
  const { banner, bannerMobile } = useLoaderData() as {
    banner: string;
    bannerMobile: string;
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-6.25rem)]">
      {/* Hero */}
      <section className="relative flex items-start justify-center text-center px-4">
        <Banner banner={banner} bannerMobile={bannerMobile} />
        <WelcomeMsg />
      </section>

      {/* *************************************************************************** */}

      {/* Features */}
      <section className="px-6 md:px-12 mt-20 mb-6 md:mb-0">
        <Features />
      </section>
    </div>
  );
};

export default HomePage;
