import React from "react";
import FlavourCard from "../(components)/flavourCard";

export default function Page() {
  const basePath = "/IqosHeetclassic";

  return (
    <div className="bg-gray-100 pt-6 mx-auto max-w-screen-xl">
      {/* Header Section */}
      <div className="bg-teal-600 text-white shadow-md rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold text-center">
          Heet IQOS CLASSIC
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
            slug: "Silverclassic",
            image: "/classic/silverclassic.jpg",
            flavour: "IQOS Heets SILVER Selection",
            flavourStyle: "text-purple-500 font-bold",
          },
          {
            slug: "TurquoiseClassic",
            image: "/classic/Turquoiseclassic.webp",
            flavour: "IQOS Heets Turquoise Selection",
            flavourStyle: "text-yellow-500 font-bold",
          },
          {
            slug: "Amberclassic",
            image: "/classic/Amberclassic.webp",
            flavour: "IQOS Heets AMBER Selection",
            flavourStyle: "text-purple-500 font-bold",
          },
          {
            slug: "purpleclassic",
            image: "/classic/purplewaveclassic.webp",
            flavour: "IQOS Heets PURPLE WAVE ",
            flavourStyle: "text-blue-400 font-bold",
          },
          {
            slug: "yellowclassic",
            image: "/classic/yellowclassic.webp",
            flavour: "IQOS Heets YELLOW Selection",
            flavourStyle: "text-yellow-400 font-bold",
          },
          {
            slug: "Greenclassic",
            image: "/classic/green-zing.webp",
            flavour: "IQOS Heets GREEN ZING",
            flavourStyle: "text-orange-700 font-bold",
          },
          {
            slug: "Jpanbalancedclassic",
            image: "/classic/japanregularclassic.webp",
            flavour: "IQOS Heets JAPAN BALANCED Regular",
            flavourStyle: "text-pink-500 font-bold",
          },
          {
            slug: "jpanregular",
            image: "/classic/jpanclassic.webp",
            flavour: "IQOS Heets JAPAN Regular",
            flavourStyle: "text-green-500 font-bold",
          },
          {
            slug: "jpansmooth",
            image: "/classic/smoothregular.jpg",
            flavour: "IQOS Heets Japan Smooth Regular ",
            flavourStyle: "text-red-500 font-bold",
          },
                  {
            slug: "jpanmenthol",
            image: "/classic/mentholclassic.webp",
            flavour: "IQOS Heets Japan Menthol",
            flavourStyle: "text-red-500 font-bold",
          },
                      {
            slug: "purpleclassic",
            image: "/classic/ptna-jpeg.webp",
            flavour: "IQOS Heets Japan Purple Menthol",
            flavourStyle: "text-red-500 font-bold",
          },
                      {
            slug: "summerclassic",
            image: "/classic/summerwave.webp",
            flavour: "IQOS Heets Japan Summer Wave",
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
