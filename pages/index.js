import Head from "next/head";
import Link from "next/link";
import Portfolio from "../pages/portfolio";
import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import jawon from "../public/portraitOfMe2.jpg";
import backend from "../public/backend.png";
import frontend from "../public/frontend.png";
import more from "../public/more.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import {motion as m} from "framer-motion";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div loading="lazy" className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jawon Winbush | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <m.main
        initial={{opacity: 0 }}
        animate={{opacity: 1 }}
        transition={{ duration: 0.75 }} 
        className=" bg-white px-4 dark:bg-gray-900 md:px10 lg:px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600 font-bold	">WΦN</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="text-md md:text-xl font-semibold bg-gradient-to-r from-red-500 text- to-orange-600 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center px-10">
            <h2 className="text-5xl font-bold	md:text-7xl dark:text-white">
              Welcome, my name is JA<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">WON WIN</span>BUSH. 
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-4xl font-semibold">
              Software developer and UX designer.
            </h3>

            <div className="md:justify-between justify-center flex py-2">
              <p className=" text-gray-800 dark:text-gray-200 max-w-md md:max-w-4xl mx-auto text-xl md:text-2xl font-light mt-32 ">
              I'm a senior studying informatics at IUPUI. A versatile software developer with 3+ years of experience in programming, UX design, and data management for various projects. 
              Skilled in problem solving under pressure and dedicated to my team’s success. My objective is to develop websites and applications that make a difference! 
              When I'm not coding I enjoy creating artwork, learning new skills, watching fútbol, and exercising. 
              Contact me below!
             </p>

            <div className="mx-auto bg-white-500 rounded md:w-80 md:h-80 overflow-hidden mt-12 w-56 h-56 md:relative absolute items-center invisible md:visible">
              
              <Image src={jawon} layout="fill" objectFit="cover" className="object-top" />
            </div>
          </div>
          
          </div>
        </section>
  
        <section>
          <div>
            <h3 className="text-3xl md:text-5xl font-semibold pt-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600 ">Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={frontend} width={100} height={100} />
              <h3 className="text-xl pt-8 pb-2 font-bold">
                Frontend
              </h3>
              
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              
              <p className="text-gray-800 py-1 ">HTML</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-orange-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '94%'}}>94%</div>
              </div>

              <p className="text-gray-800 py-1 ">CSS</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '87%'}}>87%</div>
              </div>

              <p className="text-gray-800 py-1 ">JavaScript</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-yellow-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '77%'}}>77%</div>
              </div>

              <p className="text-gray-800 py-1 ">ReactJS</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-blue-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '68%'}}>68%</div>
              </div>
              <p className="text-gray-800 py-1 ">AngularJS</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-red-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '35%'}}>35%</div>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image priority src={backend} width={100} height={100} alt="Hero" />
              <h3 className="text-xl pt-8 pb-2 font-bold">
                Backend
              </h3>
             
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>

              <p className="text-gray-800 py-1 ">SQL & MySQL</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-gray-400 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{width: '90%'}}>90%</div>
              </div>

              <p className="text-gray-800 py-1 ">PHP & PhpMyAdmin</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-indigo-300 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '83%'}}>83%</div>
              </div>

              <p className="text-gray-800 py-1 ">NodeJS</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-lime-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '68%'}}>68%</div>
              </div>

              <p className="text-gray-800 py-1 ">Python & Jupyter Notebook</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-yellow-400 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{width: '68%'}}>68%</div>
              </div>

              <p className="text-gray-800 py-1 ">C#</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-purple-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '39%'}}>39%</div>
              </div>

              <p className="text-gray-800 py-1 ">C++</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-red-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '39%'}}>37%</div>
              </div>

              <p className="text-gray-800 py-1 ">ASP.NET</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-blue-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '35%'}}>35%</div>
              </div>

              <p className="text-gray-800 py-1 ">Java</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-orange-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '34%'}}>34%</div>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={more} width={100} height={100} />
              <h3 className="text-xl pt-8 pb-2 font-bold">
                More
              </h3>           

              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1 ">Visual Studio Code & Visual Studio</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-blue-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '95%'}}>95%</div>
              </div>

              <p className="text-gray-800 py-1 ">Adobe Photoshop</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '90%'}}>90%</div>
              </div>
              
              <p className="text-gray-800 py-1 ">Adobe Illustrator</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-orange-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '86%'}}>86%</div>
              </div>   
              
              <p className="text-gray-800 py-1 ">PhpStorm</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-purple-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '85%'}}>85%</div>
              </div>

              <p className="text-gray-800 py-1 ">Figma</p>
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-red-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: '83%'}}>83%</div>
              </div>           
 
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl md:text-5xl font-semibold py-1 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600 ">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <Portfolio />
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <Link href="https://www.linkedin.com/in/jawonmwinbush/"><AiFillLinkedin className="hover:cursor-pointer"/></Link>
              <Link href="https://www.github.com/jwinbush/"><AiFillGithub className="hover:cursor-pointer" /></Link>
          </div>
        </section>
      </m.main>
    </div>
  );
}
