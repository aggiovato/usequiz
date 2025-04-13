interface BannerProps {
  banner: string;
  bannerMobile: string;
}

const Banner = ({ banner, bannerMobile }: BannerProps) => {
  return (
    <picture>
      <source
        srcSet={bannerMobile}
        media="(max-width: 768px)"
        className="absolute inset-0 w-full object-cover opacity-30 pointer-events-none"
      />
      <img
        src={banner}
        alt="useQuiz Banner"
        className="absolute inset-0 w-full object-cover opacity-35 pointer-events-none"
      />
    </picture>
  );
};

export default Banner;
