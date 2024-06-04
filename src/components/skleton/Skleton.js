import React from 'react'
import './Skleton.css'

const Skleton = () => {
  return (
    <div className="skleton__container" >
            <div className="skleton_img_wrapper skleton">
            </div>
            <div className="skleton__info">
            <div className="skleton__category">
                  <p className="skleton"></p>
                  <p className="skleton"></p>
                </div>
              <p className="skleton__title" >
                <p className="skleton"></p>
                <p className="skleton"></p>
                
              </p>
              <div className="skleton__description">
                <p className="skleton"></p>
                <p className="skleton"></p>
                <p className="skleton"></p>
              </div>
            </div>
          </div>
  )
}

export default Skleton
