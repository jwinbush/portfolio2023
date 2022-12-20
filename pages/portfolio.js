import atomicGaming from "../public/atomicGaming.png";
import phpRental from "../public/OdysseyScreenshot.jpg";
import reactMovie from "../public/InteloHome.png";
import nextSpotify from "../public/nextSpotify.jpg";
import HoverVideoPlayer from "react-hover-video-player";
import Link from "next/link";
import Image from "next/image";
import {
    AiFillGithub,
    AiFillHome,
  } from "react-icons/ai";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      video: "https://streamable.com/l/4gooer/mp4.mp4",
      imageSrc: reactMovie,
      url: "https://github.com/jwinbush/movie",
      demo: "https://intelo.vercel.app",
    },
    {
      id: 2,
      video: "https://streamable.com/l/euq4g0/mp4.mp4",
      imageSrc: nextSpotify,
      url: "https://github.com/jwinbush/spotify",
      demo: "https://www.jawonwinbush.com/login",
    },
    {
      id: 3,
      video: "https://streamable.com/l/4gooer/mp4.mp4",
      imageSrc: phpRental,
      url: "https://github.com/jwinbush/OdysseyRentals",
      demo: "",
    },
    {
      id: 4,
      video: "https://streamable.com/l/4gooer/mp4.mp4",
      imageSrc: atomicGaming,
      url: "https://github.com/jwinbush/atomicGaming",
      demo: "",
    },
  ];

  const bigBuckBunnySrc =
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-2xl mx-auto px-8 py-16 text-center md:text-left">
        <div className="max-w-5xl mx-auto grid md:grid-cols-1 gap-12">
          {portfolios.map(({ id, video, imageSrc, url, demo }) => (
            <div className="cursor-pointer group shadow-lg overflow-hidden rounded-md bg-white dark:bg-gray-800">
              <HoverVideoPlayer 
                videoSrc={video}
                className="rounded"
                pausedOverlay={
                  <Image
                    src={imageSrc}
                    className="rounded duration-300 text-center"/>
                }
              />
                
                 
                <div className="text-2xl flex justify-center gap-16 text-center capitalize my-2 font-light duration-200 underline-offset-4 dark:text-white">
                    <Link href={`${url}`} target="_blank">
                        <AiFillGithub className="hover:" />
                    </Link>
                    <Link href={`${demo}`} target="_blank">
                      <AiFillHome />        
                    </Link>
                </div>
                
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
