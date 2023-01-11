import atomicGaming from "../public/atomiccapture.png";
import phpRental from "../public/oddrent.png";
import reactMovie from "../public/InteloHome.png";
import nextSpotify from "../public/nextSpotify.jpg";
import HoverVideoPlayer from "react-hover-video-player";

import Image from "next/image";
import {
    AiFillGithub,
    AiFillHome,
  } from "react-icons/ai";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      video: "https://cdn-cf-east.streamable.com/video/mp4/4gooer.mp4?Expires=1673682840&Signature=iucEBvXoEqUoR~J2qH7wx4PazMGc0NgSV5dRdVJoSGz99uZe81m4dmyHQvWrCouP284AMt2AucD-Hhf-1EMY7ID5r9~nIIi12HseZFyGgnCY-4xCRruvWSyLqYjj4BgX2AmIJSXXNu90dTFyoKSZqevTIyBqEZsdcWoV3D~2A5rXdkT0lyC4SeZbLP54kU64iYNX8hr6vwumN~Ev3-hrMGdLtY7aodFUysyV7lfWKuw6TBeL2adfVsCYt-eVYNb0NhKpd-ghmaCjvDV8qBHXvGhASteRnTJypW1HUL~Tmqf79fexEUBva57fM3NI9cJXL90R1ofYK2lTYWCCCK91FQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
      imageSrc: reactMovie,
      url: "https://github.com/jwinbush/movie",
      demo: "https://intelo.vercel.app",
    },
    {
      id: 2,
      video: "https://cdn-cf-east.streamable.com/video/mp4/euq4g0.mp4?Expires=1673682840&Signature=jw~DaJfrBFJWD809D~TMxvgB6Zx6T5h~VYd4t7MuRNuhUVE49y0GWw8kBjiUvvYkx7r~94lRbXu7ZztI0JEE~IGSK8VH2NKnHgfwfrH02qTHchS1g1lQktJZbOAug2ztnmgjJqDgC5kHHMTsMLifUF66eM3d-J6Ntq-eznTOtzSEKEwa9NFVE0Ohim4D9XUt7dfB4a2gvZLrjSYu5kKhuaxnJJTPJ-Hj6W05BsLGxjr7Ee6W6YIcFRNrGsSM-VIoB2TeVR3dlo4raoJFu5jMLtiPMla1vmH8OxJD0yOB-bNcG4UXjM7tQNApxLMPQgkTEr9RFyKEmbcS9JJY6SYJDw__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
      imageSrc: nextSpotify,
      url: "https://github.com/jwinbush/spotify",
      demo: "https://www.jawonwinbush.com/login",
    },
    {
      id: 3,
      video: "https://cdn-cf-east.streamable.com/video/mp4/jcljj3.mp4?Expires=1673682840&Signature=KnzgMjNCIhghfGmnokjmBPFGVQAdbXQjUvGPQMDrs0AxG7mB5ZYUUUMA2FT1~dKm6~dBW5GyRRS621VuT2yVq9UxGTt7qYfSyUhrOtK980dUNKHIzTR~mJawSa-1F~vMTCFc2DDceBWVfV4cv~jyUibGKjOtNOsyhni8fvqcGFHo1KcfmxRWWTET0MOYqgBzWPKXQLiBeGLLoRtLkFmXZgJNcGlaAk~cf5XfrAoPwYqIa4DcI4DMP1hVXMBVO6ZqSq42LDk5AXwcpcg6qANMP3KAx3Sj4OCTBTDITKX8dKr9-YCMTm8zpYfd3ePEAKSdVaM6FNLMcfbOZwkR5JlUCA__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
      imageSrc: phpRental,
      url: "https://github.com/jwinbush/OdysseyRentals",
      demo: "",
    },
    // {
    //   id: 4,
    //   video: "https://cdn-cf-east.streamable.com/video/mp4/jcljj3.mp4?Expires=1671960420&Signature=Modic2Z54FCEKEVdY5kFCHtSW3wap5rgDtHWlociaaF9-ks2b67DPRXCA5v9o-anP6-c1rxupC7H2NTscXpKPP~yl7gRYGGH9N~4HZa~y~Fz-2hgzH6bEE0OY4QHGaEt1UKxheG5zF80yrMY4BINTu2Nrn2Wbboo9eWH3Fg11vP40uW7n5ZWGMwb6qPqYHd1s7lW3-sn5wR8cWTS8UoCci-YU6lRZu1-55aRVhS2Oh56Ch4IAcRPNUt~m9VSWupGuRztI-XAVR4w9WdfmFHEEqPgXvCWrK1GaxlxD8SvswLRPe0ItNbhtLuWs9RdEVAy7ConSrkm4jyOdTsQftzJRg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
    //   imageSrc: atomicGaming,
    //   url: "https://github.com/jwinbush/atomicGaming",
    //   demo: "https://atomicgaming.netlify.app/",
    // },
  ];

  const bigBuckBunnySrc =
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-2xl mx-auto px-8 py-16 text-center md:text-left">
        <div className="max-w-5xl mx-auto grid md:grid-cols-1 gap-12">
          {portfolios.map(({ video, imageSrc, url, demo }) => (
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
                    <a href={`${url}`} target="_blank">
                        <AiFillGithub className="hover:" />
                    </a>
                    <a href={`${demo}`} target="_blank">
                      <AiFillHome />        
                    </a>
                </div>
                
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
