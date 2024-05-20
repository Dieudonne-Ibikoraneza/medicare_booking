import { BASE_URL } from "../../config";
import useGetProfile from "../../hooks/useFetchData";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "../../pages/Doctors/DoctorAbout";

const Overview = () => {
  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/doctors/profile/me`
  );

  return (
    <>
      <div className="flex items-center gap-4 mb-10">
        <figure className="max-w-[200px] max-h-[200px]">
          <img src={data?.photo} alt="" className="w-full" />
        </figure>

        <div>
          <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold">
            {data.specialization}
          </span>
          <h3 className="text-[22px] leading-9 font-bold text-headingColor mt-3">
            {data.name}
          </h3>
          <div className="flex items-center gap-[6px]">
            <span className="flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
              <img src={starIcon} alt="" />
              {data.averageRating}
            </span>
            <span className="text-textColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold">
              ({data.totalRating})
            </span>
          </div>
          <p className="text__para font-[15px] lg:max-w-[390px] leading-6">
            {data.bio}
          </p>
        </div>
      </div>
      <DoctorAbout
        name={data.name}
        about={data.about}
        qualifications={data.qualifications}
        experiences={data.experiences}
      />
    </>
  );
};

export default Overview;