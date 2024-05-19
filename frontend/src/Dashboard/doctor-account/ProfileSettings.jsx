import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

const ProfileSettings = () => {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    specialization: "",
    ticketPrice: 0,
    qualifications: [
      { startingDate: "", endingDate: "", degree: "", university: "" },
    ],
    experiences: [
      { startingDate: "", endingDate: "", position: "", hospital: "" },
    ],
    timeSlots: [{ day: "", startingTime: "", endingTime: "" }],
    about: "",
    photo: null,
  });

  const handleInputChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = () => {};

  const updateProfileHandler = async (e) => {
    e.preventDefault();
  };

  //reusable function for adding item
  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  const addQualification = (e) => {
    e.preventDefault();
    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "",
      university: "",
    });
  };

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
        Profile Information
      </h2>

      <form>
        <div className="mb-5">
          <p className="form__label">Name*</p>
          <input
            type="text"
            name="name"
            value={FormData.name}
            onChange={handleInputChange}
            placeholder="Full Names"
            className="form__input"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Email*</p>
          <input
            type="email"
            name="email"
            value={FormData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form__input"
            readOnly
            aria-readonly
            disabled={true}
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Phone*</p>
          <input
            type="number"
            name="phone"
            value={FormData.phone}
            onChange={handleInputChange}
            placeholder="Phone number"
            className="form__input"
          />
        </div>
        <div className="mb-5">
          <p className="form__label">Bio*</p>
          <input
            type="text"
            name="bio"
            value={FormData.bio}
            onChange={handleInputChange}
            placeholder="Bio"
            className="form__input"
          />
        </div>

        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="form__label">Gender*</p>
              <select
                name="gender"
                value={FormData.gender}
                onChange={handleInputChange}
                className="form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <p className="form__label">Specialization*</p>
              <select
                name="specialization"
                value={FormData.specialization}
                onChange={handleInputChange}
                className="form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>

            <div>
              <p className="form__label">Ticket Price*</p>
              <input
                type="number"
                name="ticketPrice"
                placeholder="100"
                value={FormData.ticketPrice}
                onChange={handleInputChange}
                className="form__input"
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <p className="form__label">Qualifications*</p>
          {FormData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Starting Date*</p>
                    <input
                      type="date"
                      name={`startingDate-${index}`}
                      value={item.startingDate}
                      onChange={(e) => {
                        const newQualifications = [...FormData.qualifications];
                        newQualifications[index].startingDate = e.target.value;
                        setFormData({
                          ...FormData,
                          qualifications: newQualifications,
                        });
                      }}
                      className="form__input"
                    />
                  </div>

                  <div>
                    <p className="form__label">Ending Date*</p>
                    <input
                      type="date"
                      name={`endingDate-${index}`}
                      value={item.endingDate}
                      onChange={(e) => {
                        const newQualifications = [...FormData.qualifications];
                        newQualifications[index].endingDate = e.target.value;
                        setFormData({
                          ...FormData,
                          qualifications: newQualifications,
                        });
                      }}
                      className="form__input"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form__label">Degree*</p>
                    <input
                      type="text"
                      name={`degree-${index}`}
                      value={item.degree}
                      onChange={(e) => {
                        const newQualifications = [...FormData.qualifications];
                        newQualifications[index].degree = e.target.value;
                        setFormData({
                          ...FormData,
                          qualifications: newQualifications,
                        });
                      }}
                      className="form__input"
                    />
                  </div>

                  <div>
                    <p className="form__label">University*</p>
                    <input
                      type="text"
                      name={`university-${index}`}
                      value={item.university}
                      onChange={(e) => {
                        const newQualifications = [...FormData.qualifications];
                        newQualifications[index].university = e.target.value;
                        setFormData({
                          ...FormData,
                          qualifications: newQualifications,
                        });
                      }}
                      className="form__input"
                    />
                  </div>
                </div>

                <button className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer">
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={addQualification}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Qualification
          </button>
        </div>

        <div className="mb-5">
          <p className="form__label">Experiences*</p>
          {FormData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">Starting Date*</p>
                    <input
                      type="date"
                      name={`startingDate-${index}`}
                      value={item.startingDate}
                      onChange={(e) => {
                        const newExperiences = [...FormData.experiences];
                        newExperiences[index].startingDate = e.target.value;
                        setFormData({
                          ...FormData,
                          experiences: newExperiences,
                        });
                      }}
                      className="form__input"
                    />
                  </div>

                  <div>
                    <p className="form__label">Ending Date*</p>
                    <input
                      type="date"
                      name={`endingDate-${index}`}
                      value={item.endingDate}
                      onChange={(e) => {
                        const newExperiences = [...FormData.experiences];
                        newExperiences[index].endingDate = e.target.value;
                        setFormData({
                          ...FormData,
                          experiences: newExperiences,
                        });
                      }}
                      className="form__input"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form__label">Position*</p>
                    <input
                      type="text"
                      name={`position-${index}`}
                      value={item.position}
                      onChange={(e) => {
                        const newExperiences = [...FormData.experiences];
                        newExperiences[index].position = e.target.value;
                        setFormData({
                          ...FormData,
                          experiences: newExperiences,
                        });
                      }}
                      className="form__input"
                    />
                  </div>

                  <div>
                    <p className="form__label">Hospital*</p>
                    <input
                      type="text"
                      name={`hospital-${index}`}
                      value={item.hospital}
                      onChange={(e) => {
                        const newExperiences = [...FormData.experiences];
                        newExperiences[index].hospital = e.target.value;
                        setFormData({
                          ...FormData,
                          experiences: newExperiences,
                        });
                      }}
                      className="form__input"
                    />
                  </div>
                </div>

                <button className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer">
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
            Add Experience
          </button>
        </div>

        <div className="mb-5">
          <p className="form__label">Time Slots*</p>
          {FormData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                  <div>
                    <p className="form__label">Day*</p>
                    <select
                      name={`day-${index}`}
                      value={item.day}
                      onChange={(e) => {
                        const newTimeSlots = [...FormData.timeSlots];
                        newTimeSlots[index].day = e.target.value;
                        setFormData({
                          ...FormData,
                          timeSlots: newTimeSlots,
                        });
                      }}
                      className="form__input py-3.5"
                    >
                      <option value="">Select</option>
                      <option value="saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                    </select>
                  </div>

                  <div>
                    <p className="form__label">Starting Time*</p>
                    <input
                      type="time"
                      name={`startingTime-${index}`}
                      value={item.startingTime}
                      onChange={(e) => {
                        const newTimeSlots = [...FormData.timeSlots];
                        newTimeSlots[index].startingTime = e.target.value;
                        setFormData({
                          ...FormData,
                          timeSlots: newTimeSlots,
                        });
                      }}
                      className="form__input"
                    />
                  </div>
                  <div>
                    <p className="form__label">Ending Time*</p>
                    <input
                      type="time"
                      name={`endingTime-${index}`}
                      value={item.endingTime}
                      onChange={(e) => {
                        const newTimeSlots = [...FormData.timeSlots];
                        newTimeSlots[index].endingTime = e.target.value;
                        setFormData({
                          ...FormData,
                          timeSlots: newTimeSlots,
                        });
                      }}
                      className="form__input"
                    />
                  </div>
                  <div className="flex items-center">
                    <button className="bg-red-600 p-2 rounded-full text-white text-[18px] cursor-pointer mt-6">
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
            Add TimeSlot
          </button>
        </div>

        <div className="mb-5">
          <p className="form__label">About*</p>
          <textarea
            name="about"
            rows={5}
            value={FormData.about}
            placeholder="Write about you"
            onChange={handleInputChange}
            className="form__input"
          ></textarea>
        </div>

        <div className="mb-5 items-center gap-3">
          {FormData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img
                src={FormData.photo}
                className="w-full rounded-full"
                alt=""
              />
            </figure>
          )}

          <div className="relative w-[130px] h-[50px]">
            <input
              type="file"
              name="photo"
              onChange={handleFileInputChange}
              id="customFile"
              accept=".jpg, .png"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />

            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066FF34] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
            >
              Upload Photo
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            type="submit"
            onClick={updateProfileHandler}
            className="bg-primaryColor leading-[30px] text-white text-[18px] w-full py-3 px-4 rounded-lg"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;
