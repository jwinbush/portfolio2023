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
      video: "https://cdn-cf-east.streamable.com/video/mp4/4gooer.mp4?Expires=1672268640&Signature=DB6LZIBWScBsEtx-mZAXnMgqqqiD2PFWeW3NqeEFWQfpPKFzHiHUL5kpiFJj5IOBhDXIq3C2SHB4egt6~4NtWjbZYUXmAaA58IAPQGjKZ3lI9B1GiXJWEcUT5~sTfpsHgEUCCz2BoPXDWBzxbGpkSdbbwYyZfH6U~Stvu0vOY~wLuNKdTP36ckIK9~cyD0JsOKc-nR31j7qqfAZ4H2iXKJWCSzluuEKlWH~Ys7CLhkI4zIn8a8aLkWftQ8B4sb8EGN98n~flxTZARXt4yrsbxCxZU--yvAKgRjnBE~FB0uyRizpe3pRL4KMtV0xg1twuEK2KmXLUb2Obhr8LWMKQ2g__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
      imageSrc: reactMovie,
      url: "https://github.com/jwinbush/movie",
      demo: "https://intelo.vercel.app",
    },
    {
      id: 2,
      video: "https://cdn-cf-east.streamable.com/video/mp4/euq4g0.mp4?Expires=1672268640&Signature=Y8JBxaVoIgZlDlvp~~BZNkVYVJYbaeWw8ypL~eFRu36lYZJWVM8cjjMzPr8ExBBt0oW6sWzJFFYj~QGNKX5eNNWNgTf5dKHTsthiVLOYFokMS8zjXcC3LUZdK0QLw-NS213PgymxyU3v5hTIyL51RfSMk-8qmfsIZNgWtWyZZMh-O6kmX20pwC5IYG1dlV6PHL7Xn1raaC8SzAfi1-eDJOsQKoiFmHh3psj5EfBixT0IHyoTtyui28rwKj4pScANM0be1lrYlSXqdVecTfsK3sigl4hRnupMcyt9VlUM1hVyHp~M558JFjikccUQox0My9qvZX75t1D-K193HypSBA__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
      imageSrc: nextSpotify,
      url: "https://github.com/jwinbush/spotify",
      demo: "https://www.jawonwinbush.com/login",
    },
    {
      id: 3,
      video: "https://cdn-cf-east.streamable.com/video/mp4/jcljj3.mp4?Expires=1672268640&Signature=Yx74v62KA~h34AKBGHQW65YgfAn5aGIyApDjBsoMaIrzxoYAf9EMASjefhZ4xsPzhOoH6EqTAU2ixWweoaLifDCn0VLh65zO8FPpLrgehAa8fGNARkAGgj9GSIGKD-OFxrXacYPyE6P9WPp~f~bfLS1vwBkeT7xh2o2sIrXJ6rVpxHuMh~wjsDv0HFRrSqoRMmZb9wA1BneiyjIT0XZPkfvJuKLL30jSy16SwjjPJPfC6XQMLovdcraJSbUecw0bm-Q75H5CDLFAnVdjXIq~c72ezdTSnrCAlDrPU1x9su8b541q5xzVZBXiR1XZml3iziM6m9r4ZfR69-fHKgvBlw__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ",
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
