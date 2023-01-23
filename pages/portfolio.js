import atomicGaming from "../public/atomiccapture.png";
import phpRental from "../public/oddrent.png";
import reactMovie from "../public/InteloHome.png";
import nextSpotify from "../public/nextSpotify.jpg";
import HoverVideoPlayer from "react-hover-video-player";

import Image from "next/image";
import { AiFillGithub, AiFillHome } from "react-icons/ai";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      video:
        "https://cdn-cf-east.streamable.com/video/mp4/4gooer.mp4?Expires=1674721500&Signature=EvZh~UArq8wskvvQdGg~ab4fJSyzw7sM0W6UX43BDhtIxkSQhubc75b27J5DXecqBsbWREe7h3VYI5ov64YBPWoEgs-uNXyCpZIwdgkuCsETClfX7cyHrEUMtb1NLG9H1kYxFN9uCwoToQXws4XVwyMJfeZUV~OFs1vuBWny3bEbG~JrLxsrycq5VdG2fWJBtzVGGAWfYf3cVkX0e2vOs0TRrETA7F11KjCV1d5FkmcPTCQGeuKBsF5jMOfdVAu09VQr3VYZajG2jLz6l2jF3FQoE9aeD3jA4tsW~aF3NVKkmw8ZXFZZ6OLghS1zJIJoJsiLHXKmHejB~FC2fJbK4Q__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
      imageSrc: reactMovie,
      url: "https://github.com/jwinbush/movie",
      demo: "https://cinefilm.vercel.app",
    },
    {
      id: 2,
      video:
        "https://cdn-cf-east.streamable.com/video/mp4/euq4g0.mp4?Expires=1674721500&Signature=QdLyEj087kc-mA20LHHPsxh2Bah1i2mD7ll~DT5P0rnu2Z9R3jjjq7PKebL1Jrwkmn~w0Zo6YNyflMKFBhG8lc55u-PanoXdgrAx3zHsgUcbukh8UF~qRAGxD6wLD-eOtmqf~a35p49I8fRUDhn0n~ArZyyvIxlVBRoO4MsU~kWoRGUvELjadN~~o16Or46F0D8LCwhLdgDZ6VgjdUsKwRfYGNZNGsBAN1zldUkNFJwjD3xBr2ZhizuXMIBifOVz8zLMtrPSuw~1JtIjiaJV62rzobuA6bD-m5rbyFEw-zeYvH67nMuH90CQWPBnApJljXH~hV7dQHLJU8QjDZ-vrg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
      imageSrc: nextSpotify,
      url: "https://github.com/jwinbush/spotify",
      demo: "https://www.jawonwinbush.com/login",
    },
    {
      id: 3,
      video:
        "https://cdn-cf-east.streamable.com/video/mp4/jcljj3.mp4?Expires=1674721440&Signature=nK9s5XI4JrPe98rrjAy5KOkfhx~6uM4h4EsqH6kqwnhxV5fWsAvH6Hp~CoinvN8nYzQaD0ksG56rK1zh-wPRDORLAWRouQEZF32V-J3gADCuWgmp5NdZhJgb2A6622TCSwjDRI2CHbgOy259Kh6T1yOgy1VQ7of~iCRgKWbnBW6M38H3MTua43bx~jQT0q39jKxUl0dY3AxuoHqGVa~72v1Drxn5jBI~tVSSSFcnWLh1CGXMPpZ~5hunsZIBf0oUkIszIqYNhTGYRDraSFWx7Q-29UOQDhvOCsqMU-DhZ3nWJ5SyLnL~vE4lLXwG5~2j-jYcnVk-sfBcxUNHm-pxDw__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
      imageSrc: phpRental,
      url: "https://github.com/jwinbush/OdysseyRentals",
      demo: "",
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
          {portfolios.map(({ video, imageSrc, url, demo }) => (
            <div className="cursor-pointer group shadow-lg overflow-hidden rounded-md bg-white dark:bg-gray-800">
              <HoverVideoPlayer
                videoSrc={video}
                className="rounded"
                pausedOverlay={
                  <Image
                    src={imageSrc}
                    className="rounded duration-300 text-center"
                  />
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
