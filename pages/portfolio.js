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
      video: "https://cdn-cf-east.streamable.com/video/mp4/4gooer.mp4?Expires=1674274260&Signature=Flm1e~zHVqeAkDDDdYBAug8b8GV4skb6a0l4ywgnzbX1vGtizlvYirZzgdYQaWB3PCwEVrPseT6Bg456mQzzdDNn8abewrGemW~~zO75zBdsJ1l18YohkeXlpREDOzoP9n7YQb3SxMK4qgo0LORBgzsZSREABzOTOGPIqod4oFg~MhMVcwK3Ize~Jz8w04OZe3JFt9bmVR7zKPQrqVogaGpXsDn-w3ZwC9DRpSFb-W3yXnzOvGYUxNpnMPpJfkb0ay2psMYMYVNEbrfBF1lqpACMwv-FxmEAuodrQ3hjYsGMIW-5S62n-TBLa6fBZ-LSKqJvmnWJVwsV8SK4yog8nQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
      imageSrc: reactMovie,
      url: "https://github.com/jwinbush/movie",
      demo: "https://intelo.vercel.app",
    },
    {
      id: 2,
      video: "https://cdn-cf-east.streamable.com/video/mp4/euq4g0.mp4?Expires=1674274260&Signature=Y8hgZB3j7BFuV3dK~RqW1JBfpd9nhV4TfMBqVmr1wkF9a0zDbzLJ85UcNK5YGQa37sFes7Tthbyurg2iQr5cVzY0PsShEu2ag1wZESFsuPOdqkvKou0QqAWWT7K8TPZrV~RKJ4QSQ6~4kfW7PL~F7LrxYfdii12rps3YapTR-9MEMinrujSzKaSTiE1ZbYPFaD94iQ38DQAggOJ~ONgVacrSdswV15NSlr45NgG4nrsx24Fj49ICfocNlIiEkoHP8wv18PRLnFLXdlGaVTWotK9G-xuMu0-8PyWLN2Ubi2fmolnPq8rQZqcGYxS1BV3bgLp99zRHWKblpK1BV4uwYA__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
      imageSrc: nextSpotify,
      url: "https://github.com/jwinbush/spotify",
      demo: "https://www.jawonwinbush.com/login",
    },
    {
      id: 3,
      video: "https://cdn-cf-east.streamable.com/video/mp4/jcljj3.mp4?Expires=1674274260&Signature=O3OTnkaofaZIYT2CUsUai3TlNN45NC27agPvJvfUQSVF9ogvO8pIaWDkopy6r9oDLvdH4I9Gj2HAL9rIJD6Vk7FCLa0CbQC0ti6M3kkhDirTkAdTF4XDSzUIS3iWMTbFM1f3VAR84I1TTpj5JIEX8rzUn4b0ROdhFNyVSG~EXCa~0JoEo6GMeJJAMEsNW~du3MNhGqb2nUxM4zo2EAN4JcATMVpz119FOD0KhKozvGTtNAMCBoEhEnbj8S0W4XxHYWyPXmDq7fPDwj7pnYcfxE4fRdqQvtmw9CXE1KwcVjgbZHwrfjnTYh7bT2koNUla05bLHa27ZcBY5OXTlUIetg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
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
