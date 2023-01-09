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
      video: "https://cdn-cf-east.streamable.com/video/mp4/4gooer.mp4?Expires=1673419380&Signature=EEsro8zF-HHy3Ujeg0uJ-JhZQzsd6HZgGmV2a7bfUJjd-G60iOAt1ik-~X2PI~9rInlP~40kyq9hAGb3y9Zn-pjBzrdUR2MvkgqC7Fp7XMIPui7pYLMWOGUlX9UOm5F0umFtT8JRqbo3aJB~-vcJs8iulRmzQ0sdWtyMUTMQ3uJxWK7AZq3wbUe9RgxUPgNifPrIiiN0HjnjJjWEnmdjGpzd5gLOVgdnn8RlfwU5kJ5~~WIrmZ5DmWbO~aYET8LsC3l9juyOtAhE52EgcmpBf~xCU-uyUk-V5vsZWM3mxDD16smZjfpaHg4g46TyzKi2Scn6ns9ETHjJRDo24cejpw__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
      imageSrc: reactMovie,
      url: "https://github.com/jwinbush/movie",
      demo: "https://intelo.vercel.app",
    },
    {
      id: 2,
      video: "https://cdn-cf-east.streamable.com/video/mp4/euq4g0.mp4?Expires=1673419380&Signature=YugBnOJTIkP74vtEn38VpIo8TdOs-TNFc6KCMN7Fcyf7bWAOQDklV9Ign4t2LSTA-MbC-ZXRQdhfqw5TqMrjaquQja5A~eFfmxHcgwWgqGtuRtguKTutQ-HAbNFRwy6qK53nO-V39fVirf12JrQ3jRw2kzkt4rcum-uS1skwWJDtJR8Y6rExr3iIl1e0o2tjg378GO8Sr3M-ea~NtxHlt0JLNyCvL-qoyelikAdZQr0XziVS2qsnP8aF4bEsKU2eig56km~ZcLOHTdfmfM6JfI6c3JE5lLCqQ4Zvvt8Ye4fgLVAPV6qWdok7fafc9jCmLbS4wtJ3Ke8I-fnEEioVfg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
      imageSrc: nextSpotify,
      url: "https://github.com/jwinbush/spotify",
      demo: "https://www.jawonwinbush.com/login",
    },
    {
      id: 3,
      video: "https://cdn-cf-east.streamable.com/video/mp4/jcljj3.mp4?Expires=1673419380&Signature=QcEXKSHQCas6BNzg5VgmJNtAxzkvVb5aOkN8RC1Y7ibMHBeJn2Fu5FS1tZnqJg-P5kRrjpEzbO6LyMGHdkobQSCRD1b6ToaKJm4o1BtyLuuxgQZFUm4fE1wFZiuACGBEEPUcG7xP~ybLWg3cBSZ4kGY9JFTCvzMHbZDIvwYt9lja8Grrg5FC9B-JWlbI6nbS5hAjOAaerN4zG8W2h6EUGZ27B9LI82h3MOEF4Ec4Vae6LFlv1YhZbfH1TNuEFb1Jgtbrt2KuIk9qGlOXKFPPNOGhVFhab2GYIQRwGDvtwxEKz2R1RyGI1XvwXQyZGpdd3UjvM8BErd3YXTntshv26g__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
      imageSrc: phpRental,
      url: "https://github.com/jwinbush/OdysseyRentals",
      demo: "",
    },
    {
      id: 4,
      video: "https://cdn-cf-east.streamable.com/video/mp4/jcljj3.mp4?Expires=1671960420&Signature=Modic2Z54FCEKEVdY5kFCHtSW3wap5rgDtHWlociaaF9-ks2b67DPRXCA5v9o-anP6-c1rxupC7H2NTscXpKPP~yl7gRYGGH9N~4HZa~y~Fz-2hgzH6bEE0OY4QHGaEt1UKxheG5zF80yrMY4BINTu2Nrn2Wbboo9eWH3Fg11vP40uW7n5ZWGMwb6qPqYHd1s7lW3-sn5wR8cWTS8UoCci-YU6lRZu1-55aRVhS2Oh56Ch4IAcRPNUt~m9VSWupGuRztI-XAVR4w9WdfmFHEEqPgXvCWrK1GaxlxD8SvswLRPe0ItNbhtLuWs9RdEVAy7ConSrkm4jyOdTsQftzJRg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
      imageSrc: atomicGaming,
      url: "https://github.com/jwinbush/atomicGaming",
      demo: "https://atomicgaming.netlify.app/",
    },
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
