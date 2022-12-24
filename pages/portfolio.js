import atomicGaming from "../public/atomiccapture.png";
import phpRental from "../public/oddrent.png";
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
      video: "https://cdn-cf-east.streamable.com/video/mp4/4gooer.mp4?Expires=1671959340&Signature=Rfq3nqaWPXx15E98U4h10k6~vhxrAMcZ4CB7yR4RFdeCyDWNpHMby2G8xcGydRnm7NFgcRlLtCrscYsE0usX37S24nC33sT8O1132By~OouL9VOQgj~vZRPzuzwnywgvCAmhlcRPXAH4kwtu81V0-Awp6HodjiyF1LF7I9ar4zaP2sweiO3ty4wd48ZZAF2dc8E88ITgn7mexATo7Lqcpz0ED5kP0Z9yV6VcbJb0C0bWphvl0m0jc4FDmuTU5KlNe60eDfLte6rTvn-vLrItXaCNB-X0Wgr5oTciCPWUIBUC1uM-5ZEj3xrE--6gKdY8NiklmpZfwnf0vHGbOkAyaA__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
      imageSrc: reactMovie,
      url: "https://github.com/jwinbush/movie",
      demo: "https://intelo.vercel.app",
    },
    {
      id: 2,
      video: "https://cdn-cf-east.streamable.com/video/mp4/euq4g0.mp4?Expires=1671959340&Signature=W6USbUzPeyafAM4XULK3-KfBICczVfIoTHFkfp9KhcsybMHI3qCStbSDIUJdQSxAMuVhVBCTDNDETOxyMGddBGXDxe9tFgqbdXUBfTTw6Rlm5Ku~ST1PB8iXe5ZrhA-g~QIsIl-D5A6W7Lalrm5aqaqD11se9yehBsoJY5Q9yP2VbuaFVpCUjUucNp~EndgEq6qg3q5K3DmnCA7RCsu-G4m~qafAKMcPtQshJkx-fL3yfIV1FzH5ktaU1gTlNJzJYfyXBXJDsv92fdZnO1TaKWOgsu-Dg4-g7iVdl5Xt4iaLebqlT5lhXHv6wnsdp5J9v3ve8gEfZlNsICpB9x~0Qw__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
      imageSrc: nextSpotify,
      url: "https://github.com/jwinbush/spotify",
      demo: "https://www.jawonwinbush.com/login",
    },
    {
      id: 3,
      video: "https://cdn-cf-east.streamable.com/video/mp4/jcljj3.mp4?Expires=1671960420&Signature=Modic2Z54FCEKEVdY5kFCHtSW3wap5rgDtHWlociaaF9-ks2b67DPRXCA5v9o-anP6-c1rxupC7H2NTscXpKPP~yl7gRYGGH9N~4HZa~y~Fz-2hgzH6bEE0OY4QHGaEt1UKxheG5zF80yrMY4BINTu2Nrn2Wbboo9eWH3Fg11vP40uW7n5ZWGMwb6qPqYHd1s7lW3-sn5wR8cWTS8UoCci-YU6lRZu1-55aRVhS2Oh56Ch4IAcRPNUt~m9VSWupGuRztI-XAVR4w9WdfmFHEEqPgXvCWrK1GaxlxD8SvswLRPe0ItNbhtLuWs9RdEVAy7ConSrkm4jyOdTsQftzJRg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
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
