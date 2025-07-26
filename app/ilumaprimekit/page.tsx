import FlavourCard from "../(components)/flavourCard"
import ProductCard from "../(components)/productcard/productcard";

export default function page() {
    const basePath = "/ilumaprimekit";
  return (
    <div className="max-w-screen-lg mx-auto">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-6">
        {[
          {
            slug: "ilumaobsidian",
            image: "/classic/silverclassic.jpg",
            flavour: "IQOS ILUMA PRIME Kit Obsidian Black",
            flavourStyle: "text-purple-500 font-bold text-lg",
          },
          {
            slug: "PrimeOasis",
            image: "/classic/Turquoiseclassic.webp",
            flavour: "IQOS ILUMA PRIME Oasis ",
            flavourStyle: "text-yellow-500 font-bold text-lg",
          },
          {
            slug: "PrimeKhaki",
            image: "/classic/Amberclassic.webp",
            flavour: "IQOS ILUMA PRIME Kit Golden Khaki",
            flavourStyle: "text-purple-500 font-bold text-lg",
          },
          {
            slug: "Bronzetaupe",
            image: "/classic/purplewaveclassic.webp",
            flavour: "IQOS ILUMA PRIME Kit Bronze Taupe",
            flavourStyle: "text-blue-400 font-bold text-lg",
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
            brand="IQOS ILUMA PRIME"
          />
        ))}
      </div>
      <ProductCard
        imageUrl="/iluma/primeoasis.png"
        productName="IQOS ILUMA Prime Oasis"
        flavor="IQOS ILUMA Prime Oasis"
        price="Dhs. 220.00"
        originalPrice="Dhs. 300.00"
        discount="26% off"
        slug="iqos-iluma-prime-oasis"
      />
    </div>
  )
}
