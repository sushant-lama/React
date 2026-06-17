import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/shop3.png'

import React from 'react'

const MyCarousel = () => {
  return (
      <>
        <Carousel>
                <div>
                    <img src="./dog 1.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="./nd 1.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    {/* <img src="../assests/shop3 1.png" /> */}
                    <img src= {img1} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
      </>
  )
}

export default MyCarousel