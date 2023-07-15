import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slidebar: React.FC = () => {
  let settings = {
    autoplay:true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    
  };
  return (
   
    <div className='slider' >
      <div className='container' style={{paddingBlock:'30px'}}>
        <div className='slider-content'>
          <Slider {...settings}>
            <div className='slider-item' >
             <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Lower_Manhattan_from_Jersey_City_November_2014_panorama_1.jpg/1024px-Lower_Manhattan_from_Jersey_City_November_2014_panorama_1.jpg'style={{height:'307px'}} />
            </div>
            <div className='slider-item'>
              <img src ='https://www.visittheusa.de/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-04/7010d1e88b80578f3d4e6fc09c2a2379.jpeg?h=84c61102&itok=7s_epXAP'style={{height:'307px'}} alt = "" />
            </div>
            <div className='slider-item'>
              <img src ='https://imgcap.capturetheatlas.com/wp-content/uploads/2020/04/Weehawken-Best-place-to-stay-in-NYC-1415x540.jpg'style={{height:'307px'}} alt = "" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  
  )
}

export default Slidebar