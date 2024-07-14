import React, { useState, useEffect, useCallback } from "react";
import AlumniCard from "./AlumniCard";

const data = [
  {
    id: 1,
    name: "Maaz Karim",
    department: "AIML",
    domain: "Deep Learning",
    tagline: "Reinforcing deep learning one epoch at a time.",
    imageURL:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
    twitter: "https://twitter.com/_MaazKarim_",
    github: "https://github.com/Cyber-Machine",
    linkedin: "https://github.com/Cyber-Machine",
    gender: "Male",
  },
  {
    id: 2,
    name: "Aditya Gupta",
    department: "ECE",
    domain: "Android Development",
    tagline: "Building Android Application by fixing dependencies.",
    imageURL:
      "https://pbs.twimg.com/profile_images/1537609745741139968/MV2aJner_400x400.jpg",
    twitter: "https://twitter.com/Aditya_Gupta_99",
    github: "https://github.com/Aditya-gupta99",
    linkedin: "https://github.com/Cyber-Machine",
    gender: "Male",
  },
  {
    id: 3,
    name: "Ankur Singh",
    department: "AIML",
    domain: "Backend Development",
    tagline:
      "Bulding Backend application by using Node.js framework and applying it fully in real world.",
    imageURL:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    twitter: "https://twitter.com/Aditya_Gupta_99",
    github: "https://github.com/Aditya-gupta99",
    linkedin: "https://github.com/Cyber-Machine",
    gender: "Male",
  },
  {
    id: 4,
    name: "Anukalp Jain",
    department: "AIML",
    domain: "Frontend Development",
    tagline:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
    imageURL:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    twitter: "https://twitter.com/Aditya_Gupta_99",
    github: "https://github.com/Aditya-gupta99",
    linkedin: "https://github.com/Cyber-Machine",
    gender: "Male",
  },
  {
    id: 5,
    name: "Krish Tiwary",
    department: "ISE",
    domain: "Data Engineer",
    tagline:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
    imageURL:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    twitter: "https://twitter.com/Aditya_Gupta_99",
    github: "https://github.com/Aditya-gupta99",
    linkedin: "https://github.com/Cyber-Machine",
    gender: "Male",
  },
  {
    id: 6,
    name: "Akanksha Singh",
    department: "ISE",
    domain: "Data Engineer",
    tagline:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
    imageURL:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    twitter: "https://twitter.com/Aditya_Gupta_99",
    github: "https://github.com/Aditya-gupta99",
    linkedin: "https://github.com/Cyber-Machine",
    gender: "Female",
  },
  {
    id: 7,
    name: "Ananya Singh Wattamwar",
    department: "ECE",
    domain: "Data Engineer",
    tagline:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
    imageURL:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    twitter: "https://twitter.com/Aditya_Gupta_99",
    github: "https://github.com/Aditya-gupta99",
    linkedin: "https://github.com/Cyber-Machine",
    gender: "Female",
  },
  {
    id: 8,
    name: "Ananya Singh Wattamwar",
    department: "ECE",
    domain: "Data Engineer",
    tagline:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
    imageURL:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    twitter: "https://twitter.com/Aditya_Gupta_99",
    github: "https://github.com/Aditya-gupta99",
    linkedin: "https://github.com/Cyber-Machine",
    gender: "Female",
  },
  {
    id: 9,
    name: "Ananya Singh Wattamwar",
    department: "ECE",
    domain: "Data Engineer",
    tagline:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
    imageURL:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    twitter: "https://twitter.com/Aditya_Gupta_99",
    github: "https://github.com/Aditya-gupta99",
    linkedin: "https://github.com/Cyber-Machine",
    gender: "Female",
  },
  {
    id: 10,
    name: "Ananya Singh Wattamwar",
    department: "ECE",
    domain: "Data Engineer",
    tagline:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
    imageURL:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    twitter: "https://twitter.com/Aditya_Gupta_99",
    github: "https://github.com/Aditya-gupta99",
    linkedin: "https://github.com/Cyber-Machine",
    gender: "Female",
  },
  {
    id: 11,
    name: "Ananya Singh Wattamwar",
    department: "ECE",
    domain: "Data Engineer",
    tagline:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
    imageURL:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    twitter: "https://twitter.com/Aditya_Gupta_99",
    github: "https://github.com/Aditya-gupta99",
    linkedin: "https://github.com/Cyber-Machine",
    gender: "Female",
  },
];

function AlumniContent() {
  // loading functionality is pending
  const [dropdown, setDropdown] = useState(false);
  const [dbData, setdbData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(dbData.length / itemsPerPage);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const pagination = [...Array(totalPages + 1).keys()].slice(1);
  console.log(pagination);
  const [dbFilteredData, setdbFilteredData] = useState(dbData.slice(firstIndex, lastIndex));
  
  useEffect(() => {
    setdbFilteredData(dbData.slice(firstIndex, lastIndex));
  }, [currentPage])
  
  const changeCurrentPage = (page) => {
    setCurrentPage(page);
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const filterDataDropdown = (department) => {
    const filteredData = dbFilteredData.filter(
      (item) => item.department === department
    );
    setdbFilteredData(filteredData);
    setCurrentPage(1);
  };

  const handleSearch = (search) => {
    const filteredData = dbFilteredData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setdbFilteredData(filteredData);
    setCurrentPage(1);
  };

  return (
    <div className="bg-white">
      <div className="container px-6 py-4 mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 capitalize lg:text-4xl mt-6">
          Our Alumni
        </h1>

        <div className="w-full flex flex-col md:flex-row justify-evenly items-center md:items-start">
          <div className="relative w-full md:w-3/5 flex m-7">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full h-12 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              placeholder="Search by Name..."
              required
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button
              type="button"
              className="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
          <div className="relative w-full md:w-auto m-7">
            <div className="dropdown inline-block relative w-full md:w-auto">
              <button
                className="bg-blue-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center hover:text-gray-900 w-50% md:w-auto"
                onClick={() => setDropdown(!dropdown)}
              >
                <span className="mr-1">Department</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              {dropdown && (
                <ul className="dropdown-menu absolute text-gray-700 pt-1 z-10 w-50% md:w-full">
                  {["AIML", "CSE", "ISE", "ECE", "EEE"].map((department) => (
                    <button
                      key={department}
                      className="rounded bg-gray-200 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 block whitespace-no-wrap w-full"
                      value={department}
                      onClick={(e) => filterDataDropdown(e.target.value)}
                    >
                      {department}
                    </button>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dbFilteredData.map((a) => (
            <AlumniCard
              key={a.id}
              id={a.id}
              name={a.name}
              department={a.department}
              gender={a.gender}
              domain={a.domain}
              github={a.github}
              linkedin={a.linkedin}
              twitter={a.twitter}
              imageURL={a.imageURL}
              dataLength={dbFilteredData.length}
            />
          ))}
        </div>
        <nav className="pagination flex justify-center mt-10">
          <ul className="flex list-none p-0 m-0">
            <li className="page-item mx-1">
              <a
                href="#"
                className="page-link px-3 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-200 transition-colors duration-300"
                onClick={prevPage}
              >
                Prev
              </a>
            </li>
            {pagination.map((n, i) => (
              <li
                className={`page-item mx-1 ${
                  currentPage === n ? "bg-blue-500 text-white" : ""
                }`}
                key={i}
              >
                <a
                  href="#"
                  className={`page-link px-3 py-2 border border-gray-300 ${
                    currentPage === n
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-200 transition-colors duration-300"
                  }`}
                  onClick={() => changeCurrentPage(n)}
                >
                  {n}
                </a>
              </li>
            ))}
            <li className="page-item mx-1">
              <a
                href="#"
                className="page-link px-3 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-200 transition-colors duration-300"
                onClick={nextPage}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default AlumniContent;
