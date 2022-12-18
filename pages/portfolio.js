import atomicGaming from "../public/atomicGaming.png";
import phpRental from "../public/OdysseyScreenshot.jpg";
import reactMovie from "../public/InteloHome.png";
import nextSpotify from "../public/nextSpotify.jpg";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "react movie app",
      imageSrc: reactMovie,
      url: "https://github.com/jwinbush/movie",
    },
    {
      id: 2,
      title: "Next Music Website",
      imageSrc: nextSpotify,
      url: "next-spotify",
    },
    {
      id: 3,
      title: "Retro Games Ecommerce Website",
      imageSrc: phpRental,
      url: "retro-games",
      description: "No",
    },
    {
      id: 4,
      title: "react parallax scroll",
      imageSrc: atomicGaming,
      url: "react-parallax",
    },
  ];

  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
                  hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;