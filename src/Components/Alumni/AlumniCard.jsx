import React from "react";

function AlumniCard({
  id,
  name,
  department,
  domain,
  linkedin,
  twitter,
  github,
  imageURL,
}) {
  return (
    <div className="dark:!bg-navy-800 shadow-shadow-500 shadow-3xl rounded-lg relative mx-auto flex h-full w-full max-w-[550px] flex-col items-center bg-gray-100 bg-cover bg-clip-border p-[16px] dark:text-white dark:shadow-none">
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{
          backgroundImage: 'url("https://i.ibb.co/xmP2pS6/Profile.png")',
        }}
      >
        <div className="absolute -bottom-12 flex h-[98px] w-[100px] items-center justify-center rounded-full border-[4px] border-white">
          <img
            className="h-full w-full rounded-full"
            src={imageURL}
            alt="Avatar"
          />
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-bluePrimary text-xl font-bold">{name}</h4>
        <p className="text-lightSecondary text-base font-bold">{department}</p>
        <p className="text-lightSecondary text-base font-normal">{domain}</p>
      </div>
      <div className="mt-4 mb-3 flex gap-4 md:!gap-14">
        <a href={twitter} className="text-blue-400">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557a9.93 9.93 0 0 1-2.825.775 4.932 4.932 0 0 0 2.163-2.724 9.866 9.866 0 0 1-3.127 1.195A4.924 4.924 0 0 0 16.846 3a4.92 4.92 0 0 0-4.92 4.92c0 .386.044.762.126 1.124C7.691 8.794 4.066 6.87 1.64 3.85a4.822 4.822 0 0 0-.664 2.475 4.92 4.92 0 0 0 2.188 4.1 4.933 4.933 0 0 1-2.23-.616v.062a4.922 4.922 0 0 0 3.946 4.83 4.952 4.952 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419 9.867 9.867 0 0 1-6.102 2.104c-.395 0-.788-.023-1.176-.068A13.94 13.94 0 0 0 7.548 21c9.058 0 14.01-7.507 14.01-14.01 0-.213-.005-.426-.014-.637A9.935 9.935 0 0 0 24 4.557z" />
          </svg>
        </a>
        <a href={github} className="text-black">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.3 3.438 9.8 8.207 11.387.6.113.82-.262.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.614-4.042-1.614-.546-1.387-1.334-1.757-1.334-1.757-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.806 1.305 3.492.997.107-.774.42-1.305.762-1.606-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.467-2.38 1.235-3.221-.124-.303-.535-1.527.117-3.18 0 0 1.007-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.138 3 .405 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.244 2.877.12 3.18.77.842 1.234 1.911 1.234 3.221 0 4.61-2.805 5.624-5.475 5.92.43.372.815 1.103.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .318.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
        <a href={linkedin} className="text-blue-800">
          <svg className="w-9 h-9" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default AlumniCard;
