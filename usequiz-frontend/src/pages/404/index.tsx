import { useNavigate } from "react-router-dom";
import NotFoundIcon from "../../components/icons/NotFoundIcon";
import HomeIcon from "../../components/icons/HomeIcon";
import PaperplaneIcon from "../../components/icons/PaperplaneIcon";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center p-8">
      <NotFoundIcon className="w-90 h-40 md:w-120 md:h-60" />
      <h1 className="text-2xl font-bold mt-12 mb-6 md:mt-8 md:mb-2">
        Ooooops! Are you lost?
      </h1>
      <p className="text-sm mt-2 text-justify">
        It seems like the page you are looking for does not exist.
      </p>
      <p className="text-sm mt-6 md:mt-2 text-justify">
        If you think this is an error, please contact us.
      </p>

      <div className="btn-group">
        <button
          className="btn btn-primary btn-icon"
          onClick={() => navigate("/")}
        >
          Go home
          <HomeIcon className="mb-0.5" />
        </button>

        <button
          className="btn btn-primary btn-icon"
          onClick={() => navigate("/contact")}
        >
          Contact us
          <PaperplaneIcon />
        </button>
      </div>
    </div>
  );
};

export default NotFound;
