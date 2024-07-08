import React from "react";

function AlumniInfo() {
  return (
    // <>
    //   <div>
    //     <div className="relative flex flex-col flex-auto min-w-0 p-4 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-gray-400/80 bg-clip-border mb-4 draggable">
    //       <div className="flex flex-wrap -mx-3">
    //         <div className="flex-none w-auto max-w-full px-3">
    //           <div className="text-base ease-soft-in-out relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
    //             <img
    //               src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/bruce-mars.jpg"
    //               alt="profile_image"
    //               className="w-20 shadow-soft-sm rounded-xl"
    //             ></img>
    //           </div>
    //         </div>
    //         <div className="flex-none w-auto max-w-full px-3 my-auto">
    //           <div className="h-full">
    //             <h5 className="mb-1">Thompson</h5>
    //             <p className="mb-0 font-semibold leading-normal text-sm">
    //               CEO / Co-Founder
    //             </p>
    //           </div>
    //         </div>
    //         <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12"></div>
    //       </div>
    //     </div>
    //   </div>
    //   <div>
    //     <div className="w-full pb-6 mx-auto removable">
    //       <div className="flex flex-wrap -mx-3 drop-zone">
    //         <div className="w-full max-w-full px-3 xl:w-4/12">
    //           <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
    //             <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
    //               <h6 className="mb-0">Platform Settings</h6>
    //             </div>
    //             <div className="flex-auto p-4">
    //               <h6 className="font-bold leading-tight uppercase text-xs text-slate-500">
    //                 Account
    //               </h6>
    //               <ul className="flex flex-col pl-0 mb-0 rounded-lg">
    //                 <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
    //                   <div className="min-h-6 mb-0.5 block pl-0">
    //                     <input
    //                       id="follow"
    //                       className="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
    //                       type="checkbox"
    //                       defaultChecked=""
    //                     ></input>
    //                     <label
    //                       htmlFor=" follow"
    //                       className="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500"
    //                     >
    //                       Email me when someone follows me
    //                     </label>
    //                   </div>
    //                 </li>
    //                 <li className="relative block px-0 py-2 bg-white border-0 text-inherit">
    //                   <div className="min-h-6 mb-0.5 block pl-0">
    //                     <input
    //                       id="answer"
    //                       className="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
    //                       type="checkbox"
    //                     ></input>
    //                     <label
    //                       htmlFor="answer"
    //                       className="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500"
    //                     >
    //                       Email me when someone answers on my post
    //                     </label>
    //                   </div>
    //                 </li>
    //                 <li className="relative block px-0 py-2 bg-white border-0 rounded-b-lg text-inherit">
    //                   <div className="min-h-6 mb-0.5 block pl-0">
    //                     <input
    //                       id="mention"
    //                       className="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
    //                       type="checkbox"
    //                       defaultChecked=""
    //                     ></input>
    //                     <label
    //                       htmlFor="mention"
    //                       className="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500"
    //                     >
    //                       Email me when someone mentions me
    //                     </label>
    //                   </div>
    //                 </li>
    //               </ul>
    //               <h6 className="mt-6 font-bold leading-tight uppercase text-xs text-slate-500">
    //                 Application
    //               </h6>
    //               <ul className="flex flex-col pl-0 mb-0 rounded-lg">
    //                 <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
    //                   <div className="min-h-6 mb-0.5 block pl-0">
    //                     <input
    //                       id="launches projects"
    //                       className="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
    //                       type="checkbox"
    //                     ></input>
    //                     <label
    //                       htmlFor="launches projects"
    //                       className="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500"
    //                     >
    //                       New launches and projects
    //                     </label>
    //                   </div>
    //                 </li>
    //                 <li className="relative block px-0 py-2 bg-white border-0 text-inherit">
    //                   <div className="min-h-6 mb-0.5 block pl-0">
    //                     <input
    //                       id="product updates"
    //                       className="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
    //                       type="checkbox"
    //                       defaultChecked=""
    //                     ></input>
    //                     <label
    //                       htmlFor="product updates"
    //                       className="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500"
    //                     >
    //                       Monthly product updates
    //                     </label>
    //                   </div>
    //                 </li>
    //                 <li className="relative block px-0 py-2 pb-0 bg-white border-0 rounded-b-lg text-inherit">
    //                   <div className="min-h-6 mb-0.5 block pl-0">
    //                     <input
    //                       id="subscribe"
    //                       className="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
    //                       type="checkbox"
    //                     ></input>
    //                     <label
    //                       htmlFor="subscribe"
    //                       className="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500"
    //                     >
    //                       Subscribe to newsletter
    //                     </label>
    //                   </div>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12 mb-4 draggable">
    //           <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
    //             <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
    //               <div className="flex flex-wrap -mx-3">
    //                 <div className="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
    //                   <h6 className="mb-0">Profile Information</h6>
    //                 </div>
    //                 <div className="w-full max-w-full px-3 text-right shrink-0 md:w-4/12 md:flex-none">
    //                   <a
    //                     href="#!"
    //                     data-target="tooltip_trigger"
    //                     data-placement="top"
    //                   >
    //                     <i
    //                       className="leading-normal fas fa-user-edit text-sm text-slate-400"
    //                       aria-hidden="true"
    //                     ></i>
    //                   </a>
    //                   <div
    //                     data-target="tooltip"
    //                     className="px-2 py-1 text-center text-white bg-black rounded-lg text-sm hidden"
    //                     data-popper-placement="top"
    //                     style={{
    //                       position: "absolute",
    //                       inset: "auto auto 0px 0px",
    //                       margin: "0px",
    //                       transform: "translate3d(882.4px, -414.4px, 0px)",
    //                     }}
    //                   >
    //                     Edit Profile
    //                     <div
    //                       className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
    //                       data-popper-arrow=""
    //                       style={{
    //                         position: "absolute",
    //                         left: "0px",
    //                         transform: "translate3d(0px, 0px, 0px)",
    //                       }}
    //                     ></div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="flex-auto p-4">
    //               <p className="leading-normal text-sm">
    //                 Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
    //                 answer is no. If two equally difficult paths, choose the one
    //                 more painful in the short term (pain avoidance is creating
    //                 an illusion of equality).
    //               </p>
    //               <hr className="h-px my-6 bg-transparent bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent"></hr>
    //               <ul className="flex flex-col pl-0 mb-0 rounded-lg">
    //                 <li className="relative block px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit">
    //                   Alec M. Thompson
    //                   <strong className="text-slate-700">Full Name:</strong>
    //                 </li>
    //                 <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
    //                   (44) 123 1234 123
    //                   <strong className="text-slate-700">Mobile:</strong>
    //                 </li>
    //                 <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
    //                   alecthompson@mail.com
    //                   <strong className="text-slate-700">Email:</strong>
    //                 </li>
    //                 <li className="relative block px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
    //                   USA
    //                   <strong className="text-slate-700">Location:</strong>
    //                 </li>
    //                 <li className="relative block px-4 py-2 pb-0 pl-0 bg-white border-0 border-t-0 rounded-b-lg text-inherit">
    //                   <strong className="leading-normal text-sm text-slate-700">
    //                     Social:
    //                   </strong>
    //                   <a
    //                     className="inline-block py-0 pl-1 pr-2 mb-0 font-bold text-center text-blue-800 align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-none"
    //                     href="#!"
    //                   >
    //                     <i
    //                       className="fab fa-facebook fa-lg"
    //                       aria-hidden="true"
    //                     ></i>
    //                   </a>
    //                   <a
    //                     className="inline-block py-0 pl-1 pr-2 mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-none text-sky-600"
    //                     href="#!"
    //                   >
    //                     <i
    //                       className="fab fa-twitter fa-lg"
    //                       aria-hidden="true"
    //                     ></i>
    //                   </a>
    //                   <a
    //                     className="inline-block py-0 pl-1 pr-2 mb-0 font-bold text-center align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-none text-sky-900"
    //                     href="#!"
    //                   >
    //                     <i
    //                       className="fab fa-instagram fa-lg"
    //                       aria-hidden="true"
    //                     ></i>
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12 mb-4 draggable">
    //           <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
    //             <div className="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
    //               <h6 className="mb-0">Conversations</h6>
    //             </div>
    //             <div className="flex-auto p-4">
    //               <ul className="flex flex-col pl-0 mb-0 rounded-lg">
    //                 <li className="relative flex items-center px-0 py-2 mb-2 bg-white border-0 rounded-t-lg text-inherit">
    //                   <div className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
    //                     <img
    //                       src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/kal-visuals-square.jpg"
    //                       alt="kal"
    //                       className="w-full shadow-soft-2xl rounded-xl"
    //                     ></img>
    //                   </div>
    //                   <div className="flex flex-col items-start justify-center">
    //                     <h6 className="mb-0 leading-normal text-sm">
    //                       Sophie B.
    //                     </h6>
    //                     <p className="mb-0 leading-tight text-xs">
    //                       Hi! I need more information..
    //                     </p>
    //                   </div>
    //                   <a
    //                     className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
    //                     href="#!"
    //                   >
    //                     Reply
    //                   </a>
    //                 </li>
    //                 <li className="relative flex items-center px-0 py-2 mb-2 bg-white border-0 border-t-0 text-inherit">
    //                   <div className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
    //                     <img
    //                       src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/marie.jpg"
    //                       alt="kal"
    //                       className="w-full shadow-soft-2xl rounded-xl"
    //                     ></img>
    //                   </div>
    //                   <div className="flex flex-col items-start justify-center">
    //                     <h6 className="mb-0 leading-normal text-sm">
    //                       Anne Marie
    //                     </h6>
    //                     <p className="mb-0 leading-tight text-xs">
    //                       Awesome work, can you..
    //                     </p>
    //                   </div>
    //                   <a
    //                     className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
    //                     href="#!"
    //                   >
    //                     Reply
    //                   </a>
    //                 </li>
    //                 <li className="relative flex items-center px-0 py-2 mb-2 bg-white border-0 border-t-0 text-inherit">
    //                   <div className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
    //                     <img
    //                       src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/ivana-square.jpg"
    //                       alt="kal"
    //                       className="w-full shadow-soft-2xl rounded-xl"
    //                     ></img>
    //                   </div>
    //                   <div className="flex flex-col items-start justify-center">
    //                     <h6 className="mb-0 leading-normal text-sm">Ivanna</h6>
    //                     <p className="mb-0 leading-tight text-xs">
    //                       About files I can..
    //                     </p>
    //                   </div>
    //                   <a
    //                     className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
    //                     href="#!"
    //                   >
    //                     Reply
    //                   </a>
    //                 </li>
    //                 <li className="relative flex items-center px-0 py-2 mb-2 bg-white border-0 border-t-0 text-inherit">
    //                   <div className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
    //                     <img
    //                       src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/team-4.jpg"
    //                       alt="kal"
    //                       className="w-full shadow-soft-2xl rounded-xl"
    //                     ></img>
    //                   </div>
    //                   <div className="flex flex-col items-start justify-center">
    //                     <h6 className="mb-0 leading-normal text-sm">
    //                       Peterson
    //                     </h6>
    //                     <p className="mb-0 leading-tight text-xs">
    //                       Have a great afternoon..
    //                     </p>
    //                   </div>
    //                   <a
    //                     className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
    //                     href="#!"
    //                   >
    //                     Reply
    //                   </a>
    //                 </li>
    //                 <li className="relative flex items-center px-0 py-2 bg-white border-0 border-t-0 rounded-b-lg text-inherit">
    //                   <div className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
    //                     <img
    //                       src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/team-3.jpg"
    //                       alt="kal"
    //                       className="w-full shadow-soft-2xl rounded-xl"
    //                     ></img>
    //                   </div>
    //                   <div className="flex flex-col items-start justify-center">
    //                     <h6 className="mb-0 leading-normal text-sm">
    //                       Nick Daniel
    //                     </h6>
    //                     <p className="mb-0 leading-tight text-xs">
    //                       Hi! I need more information..
    //                     </p>
    //                   </div>
    //                   <a
    //                     className="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
    //                     href="#!"
    //                   >
    //                     Reply
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-6xl">
        <div className="flex p-6">
          <img
            src="https://i.ibb.co/xmP2pS6/Profile.png"
            alt="Alec Thompson"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="ml-6">
            <h2 className="text-2xl font-bold">Alec Thompson</h2>
            <p className="text-gray-600">CEO / Co-Founder</p>
          </div>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold mb-4">Platform Settings</h3>
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
            <h3 className="text-xl font-semibold mb-4">Profile Information</h3>
            <p className="text-gray-700 mb-4">
              Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer
              is no. If two equally difficult paths, choose the one more painful
              in the short term (pain avoidance is creating an illusion of
              equality).
            </p>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span className="font-semibold">Full Name:</span> Alec M.
                Thompson
              </p>
              <p className="flex justify-between">
                <span className="font-semibold">Mobile:</span> (44) 123 1234 123
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
            <h3 className="text-xl font-semibold mb-4">Conversations</h3>
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
  );
}

export default AlumniInfo;
