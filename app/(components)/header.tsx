
import ImageCarousel from "./imageCrousel/imageCrousel"
import Navbar from "./Navbar/navbar"
import SearchHeader from "./topbar/topbar";




const images = [
          { src: "/1.jpeg", alt: "Image 1" ,},

          { src: "/3.png", alt: "Image 3" },
          { src: "/4.png", alt: "Image 4" },
          { src: "/5.png", alt: "Image 5" },

        ];

export default function Header() {
  return (
    <div>
      
        <SearchHeader/>
        <Navbar/>
        <ImageCarousel images={images} interval={4000}/>
    </div>
  )
}
