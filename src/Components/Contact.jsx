import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        "matildawiberg93@gmail.com"
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  const links = [
    {
      id: 1,
      type: "modal",
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
    },
    {
      id: 2,
      child: (
        <>
          My Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/CV_Matilda_Viberg_English.pdf",
      target: "_blank",
      rel: "noopener noreferrer",
      style: "rounded-br-md",
    },
    {
      id: 3,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/matilda-viberg/",
      target: "_blank",
      rel: "noopener noreferrer",
      style: "rounded-tr-md",
    },
  ];

  return (
    <section
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-24"
      name="contact"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center md:w-1/2">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-700">
            Contact
          </p>
        </div>

        <ul className="w-full">
          {links.map(
            ({
              id,
              child,
              href,
              style,
              download,
              target,
              rel,
              type,
            }) => (
              <li
                key={id}
                className={`flex justify-around shadow-inner shadow-[#7F7FEA]
                  w-full h-14 px-4 m-4 rounded-md duration-300
                  bg-black hover:scale-105 hover:bg-gray-900 ${style || ""
                  }`}
              >
                {type === "modal" ? (
                  <button
                    onClick={() => setShowModal(true)}
                    className="flex justify-center gap-4 items-center w-full text-white"
                  >
                    {child}
                  </button>
                ) : (
                  <a
                    href={href}
                    target={target}
                    rel={rel}
                    download={download}
                    className="flex justify-center gap-4 items-center w-full text-white"
                  >
                    {child}
                  </a>
                )}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-gray-900 p-8 rounded-xl shadow-lg w-11/12 max-w-md">
            <h3 className="text-2xl font-bold mb-4">
              Get in Touch
            </h3>

            <p className="text-gray-300 mb-4">
              Feel free to reach out regarding opportunities,
              collaborations, or questions.
            </p>

            <div className="bg-black border border-gray-700 rounded-md p-3 text-center mb-6">
              matildawiberg93@gmail.com
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={copyEmail}
                className="bg-[#7F7FEA] px-4 py-2 rounded-md hover:opacity-90 transition"
              >
                {copied ? "Copied!" : "Copy Email"}
              </button>

              <a
                href="mailto:matildawiberg93@gmail.com"
                className="bg-[#7F7FEA] px-4 py-2 rounded-md hover:opacity-70 transition"
              >
                Send Email
              </a>

              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white hover:scale-110 transition"
                aria-label="Close modal"
              >
                <FaTimes size={28} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}