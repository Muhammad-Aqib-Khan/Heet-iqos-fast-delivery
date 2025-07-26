import React from "react";
import FlavourCard from "../(components)/flavourCard";

export default function Page() {
  const basePath = "/IqosKazakhstan";

  return (
    <div className="bg-gray-100 pt-6 mx-auto max-w-screen-xl">
      {/* Header Section */}
      <div className="bg-teal-600 text-white shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold text-center">
          IQOS TEREA KAZAKHSTAN
        </h1>
        <p className="text-center text-white text-sm mt-2">
          Explore our exclusive range of IQOS TEREA flavours available in
          Kazakhstan.
        </p>
      </div>

      {/* Grid of Flavour Cards */}
      <div className="max-w-screen-2xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-6">
        {[
          {
            slug: "kazakhstan-silver",
            image: "/kazakhstan/silver.webp",
            flavour: "IQOS SILVER",
            flavourStyle: "text-purple-500 font-bold",
          },
          {
            slug: "kazakhstan-amber",
            image: "/kazakhstan/amber.webp",
            flavour: "IQOS AMBER",
            flavourStyle: "text-yellow-500 font-bold",
          },
          {
            slug: "kazakhstan-purplewave",
            image: "/kazakhstan/purple.webp",
            flavour: "IQOS PURPLE WAVE",
            flavourStyle: "text-purple-500 font-bold",
          },
          {
            slug: "kazakhstan-turquoise",
            image: "/kazakhstan/turquoise.webp",
            flavour: "IQOS TURQUOISE",
            flavourStyle: "text-blue-400 font-bold",
          },
          {
            slug: "kazakhstan-yellow",
            image: "/kazakhstan/yellow.webp",
            flavour: "IQOS YELLOW",
            flavourStyle: "text-yellow-400 font-bold",
          },
          {
            slug: "kazakhstan-bronze",
            image: "/kazakhstan/bronze.webp",
            flavour: "IQOS BRONZE",
            flavourStyle: "text-orange-700 font-bold",
          },
          {
            slug: "kazakhstan-summerwave",
            image: "/kazakhstan/summerwave.webp",
            flavour: "IQOS SUMMER WAVE",
            flavourStyle: "text-pink-500 font-bold",
          },
          {
            slug: "kazakhstan-greenzing",
            image: "/kazakhstan/greenzing.webp",
            flavour: "IQOS GREEN ZING",
            flavourStyle: "text-green-500 font-bold",
          },
          {
            slug: "kazakhstan-rubyfuse",
            image: "/kazakhstan/rubyfuse.webp",
            flavour: "IQOS RUBY FUSE",
            flavourStyle: "text-red-500 font-bold",
          },
        ].map((item, index) => (
          <FlavourCard
            key={index}
            basePath={basePath}
            slug={item.slug}
            image={item.image}
            flavour={item.flavour}
            flavourStyle={item.flavourStyle}
            price={130}
            cutPrice={220}
            brand="IQOS TEREA KAZAKHSTAN"
          />
        ))}
      </div>
    </div>
  );
}
