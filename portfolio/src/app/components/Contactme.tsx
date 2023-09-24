import React from "react";

type Props = {};

function Contactme({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left max-w-7xl px-5 md:px-10 mx-auto justify-center">
      <div className="flex flex-col space-y-10 md:justify-evenly">
        <h4 className="text-2xl md:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let's talk</span>{" "}
          🤝 👨‍💻
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#F7AB0A"
              className="w-7 h-7 animate-pulse"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <p className="text-xl md:text-2xl">+229 96931602</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#F7AB0A"
              className="w-7 h-7 animate-pulse"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <p className="text-xl md:text-2xl">esperat.dimon@epitech.eu</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#F7AB0A"
              className="w-7 h-7 animate-pulse"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p className="text-xl md:text-2xl">Abomey Calavi, Benin</p>
          </div>
          <form className="flex flex-col mx-auto w-full md:w-fit space-y-2">
            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <input
                className="contactinput"
                type="text"
                placeholder="First Name"
              />
              <input
                className="contactinput"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <input className="contactinput" type="email" placeholder="Email" />
            <textarea
              className="contactinput"
              name=""
              placeholder="Message"
            ></textarea>
            <button className="bg-[#F7AB0A] py-3 md:py-5 px-6 md:px-10 text-black rounded-md font-bold text-lg md:h-14">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactme;
