import React from 'react'
import Carousel from 'react-multi-carousel';




function Image() {
    return (
<Carousel
  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={1}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  customTransition="all 1s linear"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
  transitionDuration={1000}
>
  
 
</Carousel>

    )
}
export default Image;
