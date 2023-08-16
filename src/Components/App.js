import { useState } from "react";

const ImageURL = [
  {
    imageURL: "../pexels-photo-3836292.jpeg",
    alt: "Pictures of nature"
  },
  {
    imageURL: "../pexels-photo-1166209.jpeg",
    alt: "Pictures of nature"
  },
  {
    imageURL: "../download.jpeg",
    alt: "Pictures of nature"
  },
]

export default function App() {
  return (
    <>
      <div className="app">
        <h1>Carousel</h1>
        <Slider />
      </div>
    </>
  )
}


function Slider() {
  const [counter , setCounter] = useState(0)
  const [image, setImage] = useState(ImageURL[0]); 

  function handleNextImage() {
    setCounter(c => c+1)
    if(counter === ImageURL.length-1) {
     setCounter(0)
    }
    setImage(ImageURL[counter])
  }

  function handlePrevImage() {
    setCounter(c => c - 1)
    if (counter === 0) {
      setCounter(ImageURL.length-1)
    }
    setImage(ImageURL[counter])
  }

  return (
    <div className="slider-container">

      <div className="arrows">
        <button className="prev-btn" onClick={handlePrevImage} >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
          </svg>
        </button>

        <button onClick={handleNextImage}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </button>
      </div>

      <Image image={image}/>
    </div>
  )
}


function Image ({image}) {
 return(
  <div className="images">
    <img src={image.imageURL} alt={image.alt} />
  </div>
 )
}