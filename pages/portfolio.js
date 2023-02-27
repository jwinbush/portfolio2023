// import atomicGaming from "../public/atomiccapture.png";
import phpRental from "../public/oddrent.png";
import reactMovie from "../public/cinefilms.png";
import netflix from "../public/NetflixTableau.png";
import drugCrisis from "../public/DrugCrisis.png";

import suits from "../public/SharpWear.png";

import nextSpotify from "../public/nextSpotify.jpg";
import HoverVideoPlayer from "react-hover-video-player";

import Image from "next/image";
import { AiFillGithub, AiFillHome } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      video:
        "https://cdn-cf-east.streamable.com/video/mp4/4gooer.mp4?Expires=1675018491191&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=Lhi8~QEHjxlA0R1znKukmXekmJtdXLG3JMUbPZBlpCapDDKZdH6d3EpFNexScBBsZVGQjZumrNkCfU0Uo8~fhtsTHJ06ot0c-UFitCZwSra362yw0tn-VwELN8FOtdeLGYCgRk0yo6VopsR2CcoV-~yoBKqTdgyKybO3LF4RExOh2Gxyak~ctYB9lcrR9aNJmuX0PEi~c86MAqNd~935RupZqD4PXGq1le7kVBVDuF1L2QM5SFF6ClznivW5Mfta-irl9R91dZe2XhsUXt-LN5OOwhlcfoJzR2WlDqcK~pHGV-4DYpda8njTeesvqatM9SXt9wV93Acz63O0nEp8zw__",
      imageSrc: reactMovie,
      url: "https://github.com/jwinbush/movie",
      demo: "https://cinefilm.vercel.app",
      description: "ReactJS | API | SCSS ",
    },
    {
      id: 2,
      video:
        "https://cdn-cf-east.streamable.com/video/mp4/euq4g0.mp4?Expires=1675018491185&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=DFmYyWlYqvSjU3IPF-QX2KX0N-7oFD501~huj4M332nu0H10W6Vk~tYSVzaeC7aZBM44~SGyHjY5jT8gaXJ6bX3CFC~hud8gHSrKPpI3L-Ciu60PQpIv8fG2zP6om-~ZWr6Rg~MPaCZIOzyurZogb0E747TQuSCFZyvQSnE3UVXV9hJLO9KjoDzXhUVS9UiKpUZP9K3Y1rre0tABBWok1EEp-5KENaaZUBFkaMfuxiVk3tgBMg~giY8x8~WF5TMMXjkjlfGyjF7HAd834xVrd6aFmWJOTuetLpHNLvzHcehnLTJDi~W8MrCtp2sohAP3UYmzRfzVQY9puNdMt1vjxA__",
      imageSrc: nextSpotify,
      url: "https://github.com/jwinbush/spotify",
      demo: "https://www.jawonwinbush.com/login",
      description: "NextJS | API | TailwindCSS ",
    },
    {
      id: 3,
      video:
        "https://cdn-cf-east.streamable.com/video/mp4/jcljj3.mp4?Expires=1675018491180&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=QUbD3RYqYV4cYT~T-U8FyElunKAS0-yAVnfxr4sDGJGwI8NCv4Tg3AXHSlbTnwvttsnSn9tVR2ZqrKdAZQ4mMC9t6y5D~xy4M-kOqUv9goO4GiJlNhHQG9S~hYtS-jhqKoUomOO9uZgiJNj0XlDM~f5K64RTBZXjpPmazQhp86WgdHal5jeHusYo6ZQIKL~-rLsVTm-2u1L5xDagaSMCwDWrv1bqS4G4OD-HhOWkZeJeVdp5qkd6xtr4QxR7xM~Ze0wSsBKj9mDheu2qLeVbL43T0-oNBMhds3W~91HdLqmEOszsFJoscAc3uTBF25F6mZKJd6Zwo5WzHV7nygrXYg__",
      imageSrc: phpRental,
      url: "https://github.com/jwinbush/OdysseyRentals",
      demo: "",
      description: "PHP | MySQL | Apache ",
    },
    // {
    //   id: 4,
    //   video:
    //     "https://cdn-cf-east.streamable.com/video/mp4/jcljj3.mp4?Expires=1671960420&Signature=Modic2Z54FCEKEVdY5kFCHtSW3wap5rgDtHWlociaaF9-ks2b67DPRXCA5v9o-anP6-c1rxupC7H2NTscXpKPP~yl7gRYGGH9N~4HZa~y~Fz-2hgzH6bEE0OY4QHGaEt1UKxheG5zF80yrMY4BINTu2Nrn2Wbboo9eWH3Fg11vP40uW7n5ZWGMwb6qPqYHd1s7lW3-sn5wR8cWTS8UoCci-YU6lRZu1-55aRVhS2Oh56Ch4IAcRPNUt~m9VSWupGuRztI-XAVR4w9WdfmFHEEqPgXvCWrK1GaxlxD8SvswLRPe0ItNbhtLuWs9RdEVAy7ConSrkm4jyOdTsQftzJRg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
    //   imageSrc: atomicGaming,
    //   url: "https://github.com/jwinbush/atomicGaming",
    //   demo: "https://atomicgaming.netlify.app/",
    // },
  ];

  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-2xl mx-auto px-8 py-16 text-center md:text-left">
        <div className="max-w-5xl mx-auto grid md:grid-cols-1 gap-12">
          {portfolios.map(({ video, imageSrc, description, url, demo }) => (
            
            <div className="cursor-pointer group shadow-lg overflow-hidden bg-white dark:bg-gray-800">
                 <p className="text-black dark:text-white mb-2 text-center">
                  <small>{description}</small>
                </p>
              <HoverVideoPlayer
                videoSrc={video}
                className=" "
                pausedOverlay={
                  <Image
                    src={imageSrc}
                    className="  duration-300 text-center"
                  />
                }
              />

              <div className="text-2xl flex justify-center gap-16 text-center capitalize my-2 font-light duration-200 underline-offset-4 dark:text-white">
                <a href={`${url}`} target="_blank">
                  <AiFillGithub />
                </a>
                <a href={`${demo}`} target="_blank">
                  <AiFillHome />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <!-- Container for demo purpose --> */}
      <div className="container my-24 px-6 mx-auto">
        {/* <!-- Section: Design Block --> */}
        <section className="mb-32 text-gray-800 dark:text-white text-center">
          <h2 className="md:text-3xl  text-lg font-bold mb-12 text-center dark:text-white">
            What I've been up to lately.
          </h2>

          <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
            <div className="mb-6 lg:mb-0">
              <div>
                <div
                  className="relative overflow-hidden bg-no-repeat bg-cover ripple hover:animate-pulse mb-6"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <Image src={suits} className="w-full h-full" alt="Louvre" />
                  <a href="#!">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </div>

                <h5 className="text-lg font-bold mb-3">Sharp Wear </h5>
                <div className="mb-3 text-black dark:text-white flex items-center justify-center">
                  <a
                    href="https://github.com/jwinbush/suits2023"
                    target="_blank"
                  >
                    {" "}
                    <BsGithub className="text-3xl" />
                  </a>
                </div>
                <p className="text-black dark:text-white mb-6">
                  <small>ReactJS | jQuery | TailwindCSS</small>
                </p>

                <p className="text-black dark:text-white">
                  I really enjoy creating ReactJS web applications, which drove
                  me to begin working on this ecommerce project. The purpose of
                  this website is to give customers the option to rent or buy
                  suits and business casual clothes.
                </p>
              </div>
            </div>

            <div className="mb-6 lg:mb-0">
              <div>
                <div
                  className="relative overflow-hidden bg-no-repeat bg-cover ripple hover:animate-pulse mb-6"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <Image
                    src={drugCrisis}
                    className="w-full h-full"
                    alt="Louvre"
                  />
                  <a href="#!">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </div>

                <h5 className="text-lg font-bold mb-3">
                  The Drug Crisis Throughout the U.S
                </h5>

                <p className="text-black  dark:text-white mb-6">
                  <small>Tableau | Data Visualization</small>
                </p>
                <p className="text-black dark:text-white">
                  Drug cases have grew for many years. I
                  decided to created a visualization dashboard, allowing me to
                  observe the growth of cases throughout the last 7 years. This
                  data visualization dashboard presents the amount of predicted and reported
                  drug cases.
                </p>
              </div>
            </div>

            <div className="mb-0">
              <div>
                <div
                  className="relative overflow-hidden h-full bg-no-repeat bg-cover ripple hover:animate-pulse mb-6"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <Image src={netflix} className="w-full h-full" alt="Louvre" />
                  <a href="#!">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </div>

                <h5 className="text-lg font-bold mb-3">Netflix Viewership</h5>

                <p className="text-black dark:text-white mb-6">
                  <small>Tableau | Data Visualization</small>
                </p>
                <p className="text-black dark:text-white">
                  This is a Netflix dashboard which reveals the popularity of a
                  tv series or movie. When a user selects a title the
                  description is revealed, as well as the location that has the
                  most viewers. The data gathered is from around the world and
                  the dataset is from Kaggle.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Section: Design Block --> */}
      </div>
      {/* <!-- Container for demo purpose --> */}
    </div>
  );
};

export default Portfolio;
