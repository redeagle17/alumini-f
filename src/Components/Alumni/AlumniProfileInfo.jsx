import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function AlumniProfileInfo() {
  const { user_id } = useParams();
  const [userData, setUserData] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getSingleUserData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/v1/users_data/${user_id}/single_user_profile`
        );
        setUserData(res.data.data);
        setWorkExperience(res.data.data.workExperiences);
      } catch (error) {
        toast.error("Error in fetching user's details");
      }
    };
    getSingleUserData();
  }, [user_id]);

  useEffect(() => {
    const fetchRepos = async () => {
      if (userData.github) {
        const githubUsername = userData.github.split("/").pop();
        try {
          const response = await fetch(
            `https://api.github.com/users/${githubUsername}/repos?page=1&per_page=10`
          );
          const data = await response.json();
          setRepos(data);
        } catch (error) {
          toast.error("Error in fetching GitHub repositories");
        }
      }
    };

    if (userData.github) {
      fetchRepos();
    }
  }, [userData.github]);

  return (
    <>
      <Navbar />
      <div className="flex justify-center pt-16">
        <div className="overflow-hidden max-w-6xl">
          <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg p-6 shadow-inner mb-6">
            <img
              src={userData.profileImage}
              alt={userData.firstName}
              className="w-24 h-24 rounded-lg object-cover mx-auto md:mx-0"
            />
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <h2 className="text-2xl font-bold">
                {userData.firstName} {userData.lastName}
              </h2>
              <p className="text-gray-600">{userData.college}</p>
              <p className="text-gray-600">{userData.headline}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-inner ">
              <h3 className="text-xl font-semibold mb-4">
                Personal Information
              </h3>
              <div className="h-80 overflow-y-auto">
                <p className="text-gray-700 mb-4">{userData.about}</p>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span className="font-semibold">Gender:</span>{" "}
                    {userData.gender || "Not Available"}
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Mobile:</span>{" "}
                    {userData.phone || "Not Available"}
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Email:</span>{" "}
                    {userData.email || "Not Available"}
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Department:</span>
                    {userData.department || "Not Available"}
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Location:</span>
                    {userData.location || "Not Available"}
                  </p>
                  <div className="flex space-x-2">
                    <span className="font-semibold">Social:</span>
                    <a href={userData.linkedin} className="text-blue-700">
                      LinkedIn
                    </a>
                    <a href={userData.twitter} className="text-blue-700">
                      Twitter
                    </a>
                    <a href={userData.github} className="text-blue-700">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
              <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
              {workExperience.map((workData, index) => {
                const formatDate = (isoString) => {
                  const date = new Date(isoString);
                  return new Intl.DateTimeFormat("en-CA").format(date);
                };

                return (
                  <div
                    key={index}
                    className="flex justify-between items-start mb-4"
                  >
                    <div className="flex items-center">
                      <div className="ml-1">
                        <p className="font-semibold">{workData.position}</p>
                        <p className="text-gray-500 text-sm">
                          {workData.company}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {formatDate(workData.startDate)} to{" "}
                          {workData.endDate
                            ? formatDate(workData.endDate)
                            : "Present"}
                        </p>
                        {index < workExperience.length - 1 && (
                          <hr className="w-72 mt-4 border-t-1 border-gray-300" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
              <h3 className="text-xl font-semibold mb-4">Projects</h3>
              <div className="h-80 overflow-y-auto">
                {repos.map((github_data, index) => (
                  <>
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col items-start ml-1">
                        <p className="font-semibold">{github_data.name}</p>
                        <p className="text-gray-500 text-sm">
                          {github_data["description"]
                            ? github_data["description"]
                            : "Not Available"}
                        </p>
                      </div>
                      <a
                        href={github_data.html_url}
                        className="ml-2 text-blue-500"
                      >
                        Link
                      </a>
                    </div>
                    {index < repos.length - 1 && (
                      <hr className="w-72 mt-2 border-t-1 border-gray-300" />
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AlumniProfileInfo;
