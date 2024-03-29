
// import React from 'react'
import { useState } from 'react'
import './ImageGallery.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons'


// function PortraitItem({image}) {

//     if (!image) {
//         return;
//       }


//     return (



//             <img className='photo' src={image} alt='image'/>



//     )

// }

import React from 'react'

const ImageGallery = ({ galleryImages }) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  

  const handleCloseModal = () => {
    setOpenModal(false)

  }

  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1) 
    : setSlideNumber( slideNumber - 1)
    
  }

  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
    ? setSlideNumber(0)
    : setSlideNumber(slideNumber + 1)
    
  }

  return (

    <div>

      {openModal &&
        <div className='sliderWrap'>
          <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}/>
          <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide}/>
          <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide}/>
          <div className='fullScreenImage'>
            <img src={galleryImages[slideNumber].image} alt='' />
            </div>
        </div>

      }

      {/* <br />
      Current slide number: {slideNumber}
      <br />
      Total Slides: {galleryImages.length}
      <br /> */}
      
      <br />
      
      <div className='galleryWrap'>
        {
          galleryImages && galleryImages.map((slide, index) => {

            return (
              <div
                className='single'
                key={index}
                onClick={() => handleOpenModal(index)}
              >

                <img src={slide.image} alt='' />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default ImageGallery
