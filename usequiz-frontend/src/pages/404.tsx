import { useNavigate } from "react-router-dom";
import NotFoundIcon from "../components/icons/NotFoundIcon";
import HomeIcon from "../components/icons/HomeIcon";
import PaperplaneIcon from "../components/icons/PaperplaneIcon";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center">
      <NotFoundIcon className="w-120 h-60" />
      <h1 className="text-2xl font-bold mt-8 mb-2">Ooooops! Are you lost?</h1>
      <p className="text-sm mt-2">
        It seems like the page you are looking for does not exist.
      </p>
      <p className="text-sm mt-2">
        If you think this is an error, please contact us.
      </p>

      <div className="flex gap-4 mt-6">
        <button
          className="btn flex items-center justify-center gap-4"
          onClick={() => navigate("/")}
        >
          Go home
          <HomeIcon className="w-4 h-4 mb-0.5" />
        </button>

        <button
          className="btn flex items-center justify-center gap-4"
          onClick={() => navigate("/contact")}
        >
          Contact us
          <PaperplaneIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default NotFound;
