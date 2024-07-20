import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";

const department_options = [
  { name: "AIML" },
  { name: "CSE" },
  { name: "ECE" },
  { name: "ISE" },
  { name: "EEE" },
  { name: "ME" },
  { name: "CE" },
  { name: "Others" },
];

function AlumniPersonalInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [headline, setHeadline] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [college, setCollege] = useState("");
  const [department, setDepartment] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState([]);
  const [workExperiences, setWorkExperiences] = useState([
    {
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      currentWork: false,
    },
  ]);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddWorkExperience = () => {
    setWorkExperiences([...workExperiences, { position: "", company: "" }]);
  };

  const handleRemoveWorkExperience = (index) => {
    if (index != 0) {
      const newWorkExperiences = [...workExperiences];
      newWorkExperiences.splice(index, 1);
      setWorkExperiences(newWorkExperiences);
    }
  };

  const handleWorkExperienceChange = (index, field, value) => {
    const newWorkExperiences = [...workExperiences];
    newWorkExperiences[index][field] = value;
    if (field === "currentWork" && value) {
      newWorkExperiences[index]["endDate"] = "";
    }
    setWorkExperiences(newWorkExperiences);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user_id", currentUser._id);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("location", location);
    formData.append("gender", gender);
    formData.append("headline", headline);
    formData.append("phone", phone);
    formData.append("linkedin", linkedin);
    formData.append("github", github);
    formData.append("twitter", twitter);
    formData.append("college", college);
    formData.append("department", department);
    formData.append("about", about);
    formData.append("profileImage", image);

    workExperiences.forEach((workExperience, index) => {
      formData.append(
        `workExperiences[${index}][position]`,
        workExperience.position
      );
      formData.append(
        `workExperiences[${index}][company]`,
        workExperience.company
      );
      formData.append(
        `workExperiences[${index}][startDate]`,
        workExperience.startDate
      );
      formData.append(
        `workExperiences[${index}][endDate]`,
        workExperience.endDate
      );
      formData.append(
        `workExperiences[${index}][currentWork]`,
        workExperience.currentWork
      );
    });
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    try {
      const res = await axios.post(
        "https://alumni-b.vercel.app/api/v1/users_data/profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(res.data.message, {
        autoClose: 3000,
      });
      setTimeout(() => {
        navigate("/home");
      }, 4000);
    } catch (error) {
      console.log(error);
      const res = error.response;
      console.log(res);
      toast.error(res.data.message);
    }
  };
  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-start pt-10">
      <div className="rounded-lg overflow-hidden w-full max-w-4xl p-6">
        <h2 className="flex text-2xl font-bold mb-4 justify-center">
          Profile Information
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className=" p-6 rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="w-full mt-2 p-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="w-full mt-2 p-2  text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300">Location</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="w-full mt-2 p-2  text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Location"
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300">Gender</label>
                <input
                  type="text"
                  name="gender"
                  id="gender"
                  className="w-full mt-2 p-2  text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Gender"
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300">College Name</label>
                <input
                  type="text"
                  name="college"
                  id="college"
                  className="w-full mt-2 p-2  text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="College Name"
                  onChange={(e) => setCollege(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300">Department</label>
                <select
                  className="w-full mt-2 p-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select Department
                  </option>
                  {department_options.map((option) => (
                    <option key={option.name} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-1">
                <label className="block text-gray-300">Headline</label>
                <textarea
                  className="w-full h-12 mt-2 p-2  text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="A Short Headline About You"
                  rows="2"
                  onChange={(e) => setHeadline(e.target.value)}
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="photo"
                  className="blocktext-gray-300 dark:text-gray-200"
                >
                  Upload Photo
                </label>
                <input
                  type="file"
                  name="photo"
                  id="photo"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-gray-300">About</label>
                <textarea
                  className="w-full mt-2 p-2  text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="About You"
                  rows="2"
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>

          <div className=" p-6 rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="w-full mt-2 p-2  text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300">LinkedIn</label>
                <input
                  type="url"
                  name="linkedin"
                  id="linkedin"
                  className="w-full mt-2 p-2  text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="LinkedIn URL"
                  onChange={(e) => setLinkedin(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300">Github</label>
                <input
                  type="url"
                  name="github"
                  id="github"
                  className="w-full mt-2 p-2  text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Github URL"
                  onChange={(e) => setGithub(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300">Twitter</label>
                <input
                  type="text"
                  name="twitter"
                  id="twitter"
                  className="w-full mt-2 p-2  text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Twitter URL"
                  onChange={(e) => setTwitter(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="p-6 rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
            {workExperiences.map((experience, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
              >
                <div>
                  <label className="block text-gray-300">Position</label>
                  <input
                    type="text"
                    className="w-full mt-2 p-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Position"
                    value={experience.position}
                    onChange={(e) =>
                      handleWorkExperienceChange(
                        index,
                        "position",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <label className="block text-gray-300">Company</label>
                  <input
                    type="text"
                    className="w-full mt-2 p-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Company"
                    value={experience.company}
                    onChange={(e) =>
                      handleWorkExperienceChange(
                        index,
                        "company",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <label className="block text-gray-300">Start Date</label>
                  <input
                    type="date"
                    className="w-full mt-2 p-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={experience.startDate}
                    onChange={(e) =>
                      handleWorkExperienceChange(
                        index,
                        "startDate",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div>
                  <label className="block text-gray-300">End Date</label>
                  <input
                    type="date"
                    className="w-full mt-2 p-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={experience.endDate}
                    onChange={(e) =>
                      handleWorkExperienceChange(
                        index,
                        "endDate",
                        e.target.value
                      )
                    }
                    disabled={experience.currentWork}
                  />
                </div>
                <div className="col-span-1 md:col-span-2 flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={experience.currentWork}
                    onChange={(e) =>
                      handleWorkExperienceChange(
                        index,
                        "currentWork",
                        e.target.checked
                      )
                    }
                  />
                  <label className="block text-gray-300">Current Work</label>
                </div>
                <div className="col-span-1 md:col-span-2 flex justify-end">
                  {index != 0 ? (
                    <button
                      type="button"
                      onClick={() => handleRemoveWorkExperience(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  ) : null}
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddWorkExperience}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add New Position
            </button>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AlumniPersonalInfo;
