export const homeLoader = async () => {
  const banner = await import("../assets/img/banner.svg");
  const bannerMobile = await import("../assets/img/banner_mobile.svg");

  return {
    banner: banner.default,
    bannerMobile: bannerMobile.default,
  };
};
