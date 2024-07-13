import React from "react";
import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

// Store it in database
const data = [
  {
    id: 1,
    name: "Maaz Karim",
    domain: "Deep Learning",
    tagline: "Reinforcing deep learning one epoch at a time.",
    image_src:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
    twitter: "https://twitter.com/_MaazKarim_",
    github: "https://github.com/Cyber-Machine",
    linkedin: "https://github.com/Cyber-Machine",
  },
  {
    id: 2,
    name: "Aditya Gupta",
    domain: "Android Development",
    tagline: "Building Android Application by fixing dependencies.",
    image_src:
      "https://pbs.twimg.com/profile_images/1537609745741139968/MV2aJner_400x400.jpg",
    twitter: "https://twitter.com/Aditya_Gupta_99",
    github: "https://github.com/Aditya-gupta99",
    linkedin: "https://github.com/Cyber-Machine",
  },
  {
    id: 3,
    name: "Ankur Singh",
    domain: "Backend Development",
    tagline:
      "Bulding Backend application by using Node.js framework and applying it fully in real world.",
    image_src:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    twitter: "https://twitter.com/Aditya_Gupta_99",
    github: "https://github.com/Aditya-gupta99",
    linkedin: "https://github.com/Cyber-Machine",
  },
  {
    id: 4,
    name: "Anukalp Jain",
    domain: "Frontend Development",
    tagline:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
    image_src:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    twitter: "https://twitter.com/Aditya_Gupta_99",
    github: "https://github.com/Aditya-gupta99",
    linkedin: "https://github.com/Cyber-Machine",
  },
];

function AlumniList() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <>
      <div className="mx-auto mb-4 lg:max-w-xl text-center mt-4">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Know Our Alumni
        </p>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
      </div>
      <div className="section">
        <div className="section-center">
          {people.map((person, personIndex) => {
            const {
              id,
              image_src,
              name,
              domain,
              tagline,
              twitter,
              github,
              linkedin,
            } = person;
            let position = "nextSlide";
            if (personIndex === index) {
              position = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article key={id} className={position}>
                <img src={image_src} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{domain}</p>
                <p className="flex justify-center space-x-3 mt-2">
                  <a
                    href={twitter}
                    className="text-gray-600 transition-colors duration-300 hover:text-blue-900"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href={github}
                    className="text-gray-600 transition-colors duration-300 hover:text-gray-900"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={linkedin}
                    className="text-gray-600 transition-colors duration-300 hover:text-gray-900"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22.23 0H1.77C.792 0 0 .774 0 1.727v20.545C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.727V1.727C24 .774 23.208 0 22.23 0zM7.178 20.452H3.577V9H7.18v11.452zm-1.8-13.023a2.07 2.07 0 01-2.07-2.07c0-1.143.926-2.07 2.07-2.07s2.07.926 2.07 2.07c0 1.143-.926 2.07-2.07 2.07zM20.452 20.45h-3.603V14.93c0-1.317-.025-3.01-1.834-3.01-1.833 0-2.112 1.43-2.112 2.91v5.624H9.301V9h3.452v1.56h.048c.481-.914 1.658-1.875 3.414-1.875 3.649 0 4.322 2.403 4.322 5.526v6.24h-.085z" />
                    </svg>
                  </a>
                </p>
                <p className="text">{tagline}</p>
              </article>
            );
          })}
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default AlumniList;
