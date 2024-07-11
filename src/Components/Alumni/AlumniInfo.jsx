import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function AlumniInfo() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center pt-10">
        <div className="overflow-hidden max-w-6xl">
          <div className="flex bg-gray-50 rounded-lg p-6 shadow-inner mb-6">
            <img
              src="https://i.ibb.co/xmP2pS6/Profile.png"
              alt="Alec Thompson"
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div className="ml-6 mt-5">
              <h2 className="text-2xl font-bold">Alec Thompson</h2>
              <p className="text-gray-600">CEO / Co-Founder</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner ">
              <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
              <div className="mb-4">
                <h4 className="text-lg font-semibold">ACCOUNT</h4>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3" checked />
                    <span>Email me when someone follows me</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span>Email me when someone answers on my post</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3" checked />
                    <span>Email me when someone mentions me</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold">APPLICATION</h4>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3" checked />
                    <span>New launches and projects</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3" checked />
                    <span>Monthly product updates</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span>Subscribe to newsletter</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
              <h3 className="text-xl font-semibold mb-4">
                Work Experience
              </h3>
              <p className="text-gray-700 mb-4">
                Hi, I'm Alec Thompson, Decisions: If you can't decide, the
                answer is no. If two equally difficult paths, choose the one
                more painful in the short term (pain avoidance is creating an
                illusion of equality).
              </p>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="font-semibold">Full Name:</span> Alec M.
                  Thompson
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold">Mobile:</span> (44) 123 1234
                  123
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold">Email:</span>{" "}
                  alec.thompson@mail.com
                </p>
                <p className="flex justify-between">
                  <span className="font-semibold">Location:</span> USA
                </p>
                <div className="flex space-x-2">
                  <span className="font-semibold">Social:</span>
                  <a href="#" className="text-blue-500">
                    Facebook
                  </a>
                  <a href="#" className="text-blue-400">
                    Twitter
                  </a>
                  <a href="#" className="text-pink-500">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
              <h3 className="text-xl font-semibold mb-4">Projects</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Sophie B."
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <p className="font-semibold">Sophie B.</p>
                      <p className="text-gray-500 text-sm">
                        Hi! I need more information..
                      </p>
                    </div>
                  </div>
                  <a href="#" className="text-blue-500">
                    REPLY
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src="https://randomuser.me/api/portraits/women/47.jpg"
                      alt="Anne Marie"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <p className="font-semibold">Anne Marie</p>
                      <p className="text-gray-500 text-sm">
                        Awesome work, can you...
                      </p>
                    </div>
                  </div>
                  <a href="#" className="text-blue-500">
                    REPLY
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src="https://randomuser.me/api/portraits/women/50.jpg"
                      alt="Ivanna"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <p className="font-semibold">Ivanna</p>
                      <p className="text-gray-500 text-sm">
                        About files I can...
                      </p>
                    </div>
                  </div>
                  <a href="#" className="text-blue-500">
                    REPLY
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/51.jpg"
                      alt="Peterson"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <p className="font-semibold">Peterson</p>
                      <p className="text-gray-500 text-sm">
                        Have a great afternoon...
                      </p>
                    </div>
                  </div>
                  <a href="#" className="text-blue-500">
                    REPLY
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/45.jpg"
                      alt="Nick Daniel"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <p className="font-semibold">Nick Daniel</p>
                      <p className="text-gray-500 text-sm">
                        Hi! I need more information...
                      </p>
                    </div>
                  </div>
                  <a href="#" className="text-blue-500">
                    REPLY
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AlumniInfo;
