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
      video: "https://cdn-cf-east.streamable.com/video/mp4/4gooer.mp4?Expires=1674013860&Signature=lV8ZUP1~mAoyU9D65iPZ9SiHRRoNrwnV8Vc9~fEkUxHS1VQwJFMtQ-YQwAbZCNosiY9SP08xZ65zleY2UUeT8PmSsEMWn6gn4c8SR7Pd~mSHB-A5PlqWpiLAYYHLtrfPDobB1ej73yfGGwKmK~MgOojcUIWfxj2VPNhXEpivVNDnO7~1bTuu0r6pm046qCrDwszP~lL1RFGmrf37YCLU6yVB88aV22wT8erFzYp2EnqyVeBeIw8MbGswIrB-0ofE01ulRibTWJrV9uMgqTfJobiChZUbZ06BFkQFn84byTYD6LAygyHcWSVHrKVfOYmP~J~OaShsC6zSxRAQt~rD~w__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
      imageSrc: reactMovie,
      url: "https://github.com/jwinbush/movie",
      demo: "https://intelo.vercel.app",
    },
    {
      id: 2,
      video: "https://cdn-cf-east.streamable.com/video/mp4/euq4g0.mp4?Expires=1674013860&Signature=emXbBVv4AzHKVYj86qTb44pmPfsWeO-Ej2iZ~7aV3u4ENbUREqTlPzxIoQKGiCRlwtyskV-khcvGV7qbgeG8Vuy3YWeRsjwQ1s8~WtNv0bZTnl217~GZ5KMwv3c0~CM91rOz802YW6xfV8uqmu0E7uM3zzii0QVrNG2j5bSaWvGdJCjGxBsOFmYocvFQRIFzG3ozmSKcCFS0uG12Rx5gfaVEUuAVA8ko8phoxucQ7m7j0D7AT5gunf4p7o0uumbGt5ddieEXfcCK2ijKgB0vZ1j4--69dkIqtWKHokEnQOivqEU1UsFZEyJA4E7dLxH6i~W4k2SweguGvwnBUSn8gQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
      imageSrc: nextSpotify,
      url: "https://github.com/jwinbush/spotify",
      demo: "https://www.jawonwinbush.com/login",
    },
    {
      id: 3,
      video: "https://cdn-cf-east.streamable.com/video/mp4/jcljj3.mp4?Expires=1674013860&Signature=fvHBgK5axYpsS7fII8c9z8-z3gIBkLEioBEQKhskTJqKNefkFE1ogoDaNWN2QYRF~2jBu9-fD8K0lgcSTGAnlivxuUBmrhL7-1bOxrn2G~BcIwQdo9PBsc1dFayUh8Ss3WPrRwgS-N~8I2ZdKlBaQ4t1apo~LpRx8eKGkvWJtvqxBvFpEtJeuT1RZqyK0ObJubvFxfbEAv4Y-FW4fDNWn3bDACtLpU19IFciKz1AnZhdof~fsrwM19HT6khpd0BxgjOJwb4p4RiUX3FSSkLRdsNVCYPdCmEKOjhqmdlS4oInUt8TzKSsl-Rwkba9UMbUxYEvkNEvN7Sd3RaABavIZA__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
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
