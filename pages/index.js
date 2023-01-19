import Head from "next/head";
import Portfolio from "../pages/portfolio";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { BsFillMoonFill } from "react-icons/bs"; //BsList
import { useEffect, useState } from "react";
import backend from "../public/backend.png";
import frontend from "../public/frontend.png";
import more from "../public/more.png";
import Image from "next/image";
import { motion as m } from "framer-motion";
import Type from "./type";
import { shuffle } from "lodash"; // npm i lodash

const textColor = [
  "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600",
  "text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600",
  "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600",
];

const logoColor = [
  "bg-gradient-to-r from-yellow-400 to-yellow-600 dark:text-black text-white",
  "bg-gradient-to-r from-red-400 to-red-600 dark:text-black text-white",
  "bg-gradient-to-r from-orange-400 to-orange-600 dark:text-black text-white",
];

export default function Home() {

  const [text, setText] = useState(null);

  useEffect(() => {
    setText(shuffle(textColor).pop());
  }); //changes when refreshed

  const [logo, setLogo] = useState(null);

  useEffect(() => {
    setLogo(shuffle(logoColor).pop());
  }); //changes when refreshed


  {
    /* Dark mode and Light mode */
  }
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div loading="lazy" className={darkMode ? "dark" : ""}>
      {/* Head Section */}
      <Head>
        <title>Jawon Winbush | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main section. The m before main is a framer motion component that shows a smooth transition when page displays. */}
      <m.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className=" bg-white px-4 dark:bg-black md:px-10 font-extraOld"
        id="About"
      >
        <section className="min-h-screen">
          <nav className="py-10 mb-6 md:mb-12 flex justify-between">
            <h1 className={`text-3xl md:text-5xl px-1 rounded-md ${logo}`}>
              WΦN
            </h1>
            <ul className="flex items-center">
              <div className="navbar flex">
                <li>
                  <a
                    className={`text-md md:text-2xl font-semibold px-4 py-2 border-none ml-8 ${text}`}
                    href="#About"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className={`text-md md:text-2xl font-semibold px-4 py-2 border-none ml-8 ${text}`}
                    href="#Skills"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className={`text-md md:text-2xl font-semibold px-4 py-2 border-none ml-8 ${text}`}
                    href="#Projects"
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    className={`text-md md:text-2xl font-semibold px-4 py-2 border-none ml-8 ${text}`}
                    href="#Contact"
                  >
                    Contact
                  </a>
                </li>
              </div>

              <li>
                <BsFillMoonFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-lg md:text-2xl text-black md:dark:text-white dark:text-yellow-500 md:ml-8 mx-4 cursor-pointer"
                />
              </li>

              {/* <li>
                <BsList className=" cursor-pointer text-3xl md:hidden dark:text-white text-black" />
              </li> */}
            </ul>
          </nav>
          <div className="text-center px-4 md:px-10">
            <h2 className="text-3xl font-bold	md:text-7xl dark:text-white">
              Greetings, my name is JA
              <span className={`${text}`}>WON WIN</span>
              BUSH.
            </h2>
            <h3 className={`text-2xl py-2 ${text} md:text-4xl font-semibold`}>
              <Type />
            </h3>

            <div className="content md:justify-between justify-center flex pt-10">
              <p className=" text-gray-800 dark:text-gray-200 max-w-md md:max-w-3xl mx-auto text-lg whitespace-pre-line	md:text-3xl font-light mt-4 md:mt-10 ">
                Currently studying informatics at IUPUI and graduating in May of
                2023. A versatile software developer with 3+ years of experience
                in programming, UX design, and data management. A well-organised
                person, problem solver, and independent employee with high
                attention to detail. My objective is to develop websites and
                applications that make a difference. When I'm not coding I enjoy
                reading, watching fútbol, and exercising. If you have a project
                in mind or would like to make an enquiry simply contact me
                below.
              </p>

              {/* <div className=" hero mx-auto bg-white-500 rounded-2xl md:w-80 md:h-80 overflow-hidden mt-12 w-56 h-56 md:relative absolute items-center hover:shadow-xl">
                <Image
                  src={jawon}
                  layout="fill"
                  objectFit="cover"
                  className="object-top"
                />
              </div> */}
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3
              className={`text-3xl md:text-5xl font-semibold pt-20 text-center ${text}`}
              id="Skills"
            >
              Skills
            </h3>
            <p className="md:text-3xl text-lg py-2 leading-8 text-gray-800 dark:text-gray-200 text-center pb-6">
              My professional skillset.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={frontend} width={100} height={100} />
              <h3 className="text-xl pt-8 pb-2 font-bold">Frontend</h3>

              <p className="text-gray-800 py-1 ">HTML</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-orange-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "94%" }}
                >
                  94%
                </div>
              </div>

              <p className="text-gray-800 py-1 ">CSS</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "87%" }}
                >
                  87%
                </div>
              </div>

              <p className="text-gray-800 py-1 ">JavaScript</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-yellow-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "77%" }}
                >
                  77%
                </div>
              </div>

              <p className="text-gray-800 py-1 ">ReactJS</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-blue-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "68%" }}
                >
                  68%
                </div>
              </div>
              <p className="text-gray-800 py-1 ">AngularJS</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-red-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "35%" }}
                >
                  35%
                </div>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                priority
                src={backend}
                width={100}
                height={100}
                alt="Hero"
              />
              <h3 className="text-xl pt-8 pb-2 font-bold">Backend</h3>

              <p className="text-gray-800 py-1 ">SQL & MySQL</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-gray-400 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full"
                  style={{ width: "90%" }}
                >
                  90%
                </div>
              </div>

              <p className="text-gray-800 py-1 ">PHP & PhpMyAdmin</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-indigo-300 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "83%" }}
                >
                  83%
                </div>
              </div>

              <p className="text-gray-800 py-1 ">NodeJS</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-lime-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "68%" }}
                >
                  68%
                </div>
              </div>

              <p className="text-gray-800 py-1 ">Python & Jupyter Notebook</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-yellow-400 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full"
                  style={{ width: "68%" }}
                >
                  68%
                </div>
              </div>

              <p className="text-gray-800 py-1 ">C#</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-purple-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "39%" }}
                >
                  39%
                </div>
              </div>

              <p className="text-gray-800 py-1 ">C++</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-red-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "39%" }}
                >
                  37%
                </div>
              </div>

              <p className="text-gray-800 py-1 ">ASP.NET</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-blue-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "35%" }}
                >
                  35%
                </div>
              </div>

              <p className="text-gray-800 py-1 ">Java</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-orange-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "34%" }}
                >
                  34%
                </div>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={more} width={100} height={100} />
              <h3 className="text-xl pt-8 pb-2 font-bold">More</h3>
              <p className="text-gray-800 py-1 ">
                Visual Studio Code & Visual Studio
              </p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-blue-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "95%" }}
                >
                  95%
                </div>
              </div>

              <p className="text-gray-800 py-1 ">Adobe Photoshop</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "90%" }}
                >
                  90%
                </div>
              </div>

              <p className="text-gray-800 py-1 ">Adobe Illustrator</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-orange-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "86%" }}
                >
                  86%
                </div>
              </div>

              <p className="text-gray-800 py-1 ">PhpStorm</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-purple-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "85%" }}
                >
                  85%
                </div>
              </div>

              <p className="text-gray-800 py-1 ">WordPress</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-blue-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "84%" }}
                >
                  84%
                </div>
              </div>

              <p className="text-gray-800 py-1 ">Figma</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                  className="bg-red-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: "83%" }}
                >
                  83%
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3
              className={`text-3xl md:text-5xl font-semibold py-1 text-center ${text}`}
              id="Projects"
            >
              Projects
            </h3>
            <p className="md:text-3xl text-lg py-2 leading-8 text-gray-800 dark:text-gray-200 text-center pb-6">
              My relevant projects.
            </p>
          </div>
          <Portfolio />
          <div>
            <h3
              className={`text-3xl md:text-5xl font-semibold pt-24 text-center ${text}`}
              id="Contact"
            >
              Contact me
            </h3>
            <p className="md:text-3xl text-lg py-2 leading-8 text-gray-800 dark:text-gray-200 text-center pb-6">
              Let's talk.
            </p>
            <section>
              {/* <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <form
                  action="mailto:jawonwinbush@gmail.com"
                  method="POST"
                  className="space-y-8"
                >
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-lg font-medium text-black dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-black text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="subject"
                      className="block mb-2 text-lg font-medium text-black dark:text-white"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block p-3 w-full text-lg text-black dark:text-white bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Your subject..."
                      required
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="message"
                      className="block mb-2 text-lg font-medium text-black dark:text-white"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-5 text-lg font-medium dark:text-white sm:w-fit focus:ring-4 focus:outline-none bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-md"
                  >
                    Send message
                  </button>
                </form>
              </div> */}
            </section>
          </div>
          <footer>
            <div className="text-5xl flex justify-center gap-10 md:gap-16 py-3 text-black dark:text-white">
              <a href="mailto:jawonwinbush@gmail.com" target={"_blank"}>
                <AiOutlineMail className="hover:cursor-pointer" />
              </a>
              <a href="tel:3176544324" target={"_blank"}>
                <AiOutlinePhone className="hover:cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/jawonmwinbush/"
                target={"_blank"}
              >
                <AiFillLinkedin className="hover:cursor-pointer" />
              </a>
              <a href="https://www.github.com/jwinbush/" target={"_blank"}>
                <AiFillGithub className="hover:cursor-pointer" />
              </a>
            </div>

            <div className=" pt-20 text-black dark:text-white md:text-md text-sm text-center">
              <p>Designed and developed by Jawon Winbush. (2023)</p>
            </div>
          </footer>
        </section>
      </m.main>
    </div>
  );
}
