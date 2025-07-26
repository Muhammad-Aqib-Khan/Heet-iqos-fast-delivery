import Banner from "./(components)/Banner";
import Header from "./(components)/header";
import { TbTruckDelivery } from "react-icons/tb";
import { BsPersonLinesFill } from "react-icons/bs";
import { GrCurrency } from "react-icons/gr";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import ProductCard from "./(components)/productcard/productcard";
import InfoSection from "./(components)/infosection";
import Button from "./(components)/button";
import ProductBanner from "./(components)/productBanner/productbanner";
import ProductShowcase from "./(components)/ProductShowcase";


const cardsData = [
  {
    image: '/icons/icon1.svg',
    quantity: '90+',
    title: 'Icons',
  },
  {
    image: '/icons/icon2.svg',
    quantity: '70+',
    title: 'Illustrations',
  },
  {
    image: '/icons/icon3.svg',
    quantity: '150+',
    title: 'Components',
  },
  {
    image: '/icons/icon4.svg',
    quantity: '30+',
    title: 'Animations',
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <Banner
        cards={[
          { icon: <TbTruckDelivery />, heading: 'Free Shipping', text: 'Above $5 Only' },
          { icon: <BsPersonLinesFill />, heading: 'Certified Organic', text: '100% Guarantee' },
          { icon: <GrCurrency />, heading: 'Huge Savings', text: 'At Lowest Price' },
          { icon: <HiMiniArrowPathRoundedSquare />, heading: 'Easy Returns', text: 'No Questions Asked' },
        ]}
      />

      <InfoSection
        heading1="IQOS TEREA Kazakhstan"
        heading2="Top Selling Flavours"
        paragraphs={[
          { text: "Discover TEREA, exclusively for IQOS ILUMA. its ingenious SMARTCORE INDUCTION SYSTEM brings you improved draw, taste consistency from stick to stick", color: "text-gray-600" },
          { text: "IQOS ILUMA is designed to be used only with TEREA STICKS. DON'T use IQOS ILUMA and TEREA sticks with previous IQOS generation", color: "text-gray-600" },
          { text: "All Flavours of IQOS TEREA Kazakhstan are available at a 40% discount", color: "text-red-600" },
        ]}
      />

      <div className="flex justify-center mt-0 mb-6">
        <Button
          text="CheckOut IQOS"
          className="font-bold bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 hover:scale-110 transition duration-300"
        />
      </div>

      {/* Kazakhstan Products */}
      <div className="bg-gray-200 ml-5 mr-5 rounded-lg">
        <div className="bg-gray-100 px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 px-4 max-w-[1300px] mx-auto">
            <ProductCard imageUrl="/silver1.png" productName="IQOS TEREA Kazakhstan" flavor="IQOS Silver" price="Dhs. 130.00" originalPrice="Dhs. 220.00" discount="40% off" slug="iqos-terea-silver-kazakhstan" />
            <ProductCard imageUrl="/amber1.webp" productName="IQOS TEREA Kazakhstan" flavor="IQOS Amber" price="Dhs. 130.00" originalPrice="Dhs. 220.00" discount="40% off" slug="iqos-terea-amber-kazakhstan" />
            <ProductCard imageUrl="/Bronze1.webp" productName="IQOS TEREA Kazakhstan" flavor="IQOS Bronze" price="Dhs. 130.00" originalPrice="Dhs. 220.00" discount="40% off" slug="iqos-terea-Bronze-kazakhstan" />
            <ProductCard imageUrl="/purple2.jpeg" productName="IQOS TEREA Kazakhstan" flavor="IQOS Purple" price="Dhs. 130.00" originalPrice="Dhs. 220.00" discount="40% off" slug="iqos-terea-purple-kazakhstan" />
          </div>

          <div className="flex justify-center mt-8">
            <Button text="View More Flavours" href="/IqosKazakhstan" className="bg-red-400 p-4 pl-6 pr-6 rounded-lg text-lg text-white hover:bg-red-600 hover:scale-110 transition duration-300" />
          </div>
        </div>
      </div>

      {/* Indonesia Products */}
      <div>
        <div className="max-w-screen-xl mx-auto text-white pt-4 shadow-md rounded-lg mb-2">
          <InfoSection heading1="IQOS TEREA FROM INDONESIA" heading2="IQOS Top selling from Indonesia" />
        </div>

        <div className="min-h-screen bg-teal-100 px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 px-4 max-w-[1300px] mx-auto">
            <ProductCard imageUrl="/indonesia/apricity-indonesia.webp" productName="IQOS Indonesia" flavor="IQOS TEREA Apricity" price="Dhs. 130.00" originalPrice="Dhs. 220.00" discount="40% off" slug="iqos-terea-apricity-indonesia" />
            <ProductCard imageUrl="/indonesia/yugen-indonesia.webp" productName="IQOS Indonesia" flavor="IQOS TEREA Yugen" price="Dhs. 130.00" originalPrice="Dhs. 220.00" discount="40% off" slug="iqos-terea-yugen-indonesia" />
            <ProductCard imageUrl="/indonesia/sienna.webp" productName="IQOS Indonesia" flavor="IQOS TEREA Sienna" price="Dhs. 130.00" originalPrice="Dhs. 220.00" discount="40% off" slug="iqos-terea-sienna-indonesia" />
            <ProductCard imageUrl="/indonesia/Terea-Blue.jpg" productName="IQOS Indonesia" flavor="IQOS TEREA Blue" price="Dhs. 130.00" originalPrice="Dhs. 220.00" discount="40% off" slug="iqos-terea-blue-indonesia" />
          </div>

          {/* Centered last two Indonesian cards */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6 px-4">
            <div className="w-full sm:w-[300px] lg:w-[270px]">
              <ProductCard imageUrl="/indonesia/image.jpg" productName="IQOS Indonesia" flavor="IQOS TEREA Purple" price="Dhs. 130.00" originalPrice="Dhs. 220.00" discount="40% off" slug="iqos-terea-purple-indonesia-1" />
            </div>
            <div className="w-full sm:w-[300px] lg:w-[270px]">
              <ProductCard imageUrl="/indonesia/green.jpeg" productName="IQOS Indonesia" flavor="IQOS TEREA Purple" price="Dhs. 130.00" originalPrice="Dhs. 220.00" discount="40% off" slug="iqos-terea-purple-indonesia-2" />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button text="View More Flavours" href="/IqosHeetclassic" className="bg-red-300 p-4 pl-6 pr-6 rounded-lg text-lg text-white hover:bg-red-600 hover:scale-110 transition duration-300" />
          </div>
        </div>
      </div>

      {/* Top Rated Products */}
      <div className="max-w-screen-2xl mx-auto text-white pt-4 shadow-md rounded-lg mb-2">bg
              {/* Product Banner Section */}
      <ProductBanner
        mainImages={[
              { src: '/banner2/classic.jpeg', alt: 'First Image' },
              { src: '/banner2/Heets for Iqos.jpeg', alt: 'Second Image' },
              { src: '/banner2/Iqos.jpeg', alt: 'Third Image' },
              { src: '/banner2/IQOS Heet.jpeg', alt: 'Third Image' },
            ]}
        title="IQOS HEETS CLASSIC"
        description="Experience the smooth, full-bodied taste of real tobacco without combustion. Designed exclusively for IQOS heating devices, HEETS Classic delivers authentic tobacco notes and satisfying warmth in a sleek, smoke‑free format. Each pack of 20 heated tobacco sticks offers a cleaner, more refined alternative to cigarettes—no ash, reduced odor, and consistent enjoyment."
        buttonText="Check out classic flavours"
        ringImages={[
          { src: "/banner2/classic.jpeg", alt: "iqosclassic" },
          { src: "/banner2/Heets for Iqos.jpeg", alt: "Ring 2" },
          { src: "/banner2/Iqos.jpeg", alt: "Ring 3" },
        ]}
      />
      </div>


  
<ProductShowcase
  mainProduct={{
    src: "/iluma/primeoasis.png",
    alt: "Premium Wireless Headphones",
    name: "Premium Wireless Headphones",
    originalPrice: 299.99,
    discountedPrice: 199.99,
  }}
  detailProducts={[
    {
      src: "/iluma/prime-oasis-limited-edition.jpeg",
      alt: "Headphones Side View",
      originalPrice: 299.99,
      discountedPrice: 199.99,
    },
    {
      src: "/iluma/primebright.png",
      alt: "Headphones Case",
      originalPrice: 49.99,
      discountedPrice: 29.99,
    },
    {
      src: "/iluma/ilumaprime.png ",
      alt: "Headphones Controls",
      originalPrice: 19.99,
      discountedPrice: 12.99,
    },
  ]}
  rating={5.0}
  reviewCount={250}
  testimonial="Quote client's testimonial here. Write your text here. This is a place for your text."
  reviewer="John Doe"
/>
    </div>
  );
}
