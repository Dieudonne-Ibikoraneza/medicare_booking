import { authContext } from "../../Context/AuthContext";
import { BiMenu } from "react-icons/bi";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Tabs = ({ tab, setTab }) => {
  const { dispatch } = useContext(authContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md">
        <button
          onClick={() => setTab("overview")}
          className={`${
            tab === "overview"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab("appointments")}
          className={`${
            tab === "appointments"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Appointments
        </button>
        <button
          onClick={() => setTab("settings")}
          className={`${
            tab === "settings"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Profile
        </button>
        <div className="w-full mt-[100px]">
          <button
            className="w-full bg-[#181A1E] text-white leading-7 p-3 text-[16px] rounded-md"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button className="w-full bg-red-600 mt-4 text-white leading-7 p-3 text-[16px] rounded-md">
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
