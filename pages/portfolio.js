// import atomicGaming from "../public/atomiccapture.png";
import phpRental from "../public/oddrent.png";
import reactMovie from "../public/cinefilms.png";
import nextSpotify from "../public/nextSpotify.jpg";
import HoverVideoPlayer from "react-hover-video-player";

import Image from "next/image";
import { AiFillGithub, AiFillHome } from "react-icons/ai";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      video:
        "https://cdn-cf-east.streamable.com/video/mp4/4gooer.mp4?Expires=1675018491191&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=Lhi8~QEHjxlA0R1znKukmXekmJtdXLG3JMUbPZBlpCapDDKZdH6d3EpFNexScBBsZVGQjZumrNkCfU0Uo8~fhtsTHJ06ot0c-UFitCZwSra362yw0tn-VwELN8FOtdeLGYCgRk0yo6VopsR2CcoV-~yoBKqTdgyKybO3LF4RExOh2Gxyak~ctYB9lcrR9aNJmuX0PEi~c86MAqNd~935RupZqD4PXGq1le7kVBVDuF1L2QM5SFF6ClznivW5Mfta-irl9R91dZe2XhsUXt-LN5OOwhlcfoJzR2WlDqcK~pHGV-4DYpda8njTeesvqatM9SXt9wV93Acz63O0nEp8zw__",
      imageSrc: reactMovie,
      url: "https://github.com/jwinbush/movie",
      demo: "https://cinefilm.vercel.app",
    },
    {
      id: 2,
      video:
        "https://cdn-cf-east.streamable.com/video/mp4/euq4g0.mp4?Expires=1675018491185&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=DFmYyWlYqvSjU3IPF-QX2KX0N-7oFD501~huj4M332nu0H10W6Vk~tYSVzaeC7aZBM44~SGyHjY5jT8gaXJ6bX3CFC~hud8gHSrKPpI3L-Ciu60PQpIv8fG2zP6om-~ZWr6Rg~MPaCZIOzyurZogb0E747TQuSCFZyvQSnE3UVXV9hJLO9KjoDzXhUVS9UiKpUZP9K3Y1rre0tABBWok1EEp-5KENaaZUBFkaMfuxiVk3tgBMg~giY8x8~WF5TMMXjkjlfGyjF7HAd834xVrd6aFmWJOTuetLpHNLvzHcehnLTJDi~W8MrCtp2sohAP3UYmzRfzVQY9puNdMt1vjxA__",
      imageSrc: nextSpotify,
      url: "https://github.com/jwinbush/spotify",
      demo: "https://www.jawonwinbush.com/login",
    },
    {
      id: 3,
      video:
        "https://cdn-cf-east.streamable.com/video/mp4/jcljj3.mp4?Expires=1675018491180&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ&Signature=QUbD3RYqYV4cYT~T-U8FyElunKAS0-yAVnfxr4sDGJGwI8NCv4Tg3AXHSlbTnwvttsnSn9tVR2ZqrKdAZQ4mMC9t6y5D~xy4M-kOqUv9goO4GiJlNhHQG9S~hYtS-jhqKoUomOO9uZgiJNj0XlDM~f5K64RTBZXjpPmazQhp86WgdHal5jeHusYo6ZQIKL~-rLsVTm-2u1L5xDagaSMCwDWrv1bqS4G4OD-HhOWkZeJeVdp5qkd6xtr4QxR7xM~Ze0wSsBKj9mDheu2qLeVbL43T0-oNBMhds3W~91HdLqmEOszsFJoscAc3uTBF25F6mZKJd6Zwo5WzHV7nygrXYg__",
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
