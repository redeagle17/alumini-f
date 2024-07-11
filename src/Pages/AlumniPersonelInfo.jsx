import React from "react";
import { useState } from "react";

function AlumniPersonelInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [workExperiences, setWorkExperiences] = useState([
    { position: "", company: "", description: "" },
  ]);

  const handleAddWorkExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      { position: "", company: "", description: "" },
    ]);
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
    setWorkExperiences(newWorkExperiences);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-start pt-10">
      <div className="rounded-lg overflow-hidden w-full max-w-4xl p-6">
        <h2 className="flex text-2xl font-bold mb-4 justify-center">
          Profile Information
        </h2>
        <form className="space-y-6">
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
              <div className="col-span-1 md:col-span-2">
                <label className="block text-gray-300">Description</label>
                <textarea
                  className="w-full mt-2 p-2  text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="A Short Description About You"
                  rows="2"
                  onChange={(e) => setDescription(e.target.value)}
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

export default AlumniPersonelInfo;
