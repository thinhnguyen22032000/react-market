import React from 'react'
import { Carousel } from 'react-bootstrap'


const SliderTop = () => {
  return (
    <Carousel variant="dark" style={{marginBottom: '20px'}}>
        <Carousel.Item>
            <img
            className="d-block"
            src="https://picsum.photos/1296/300/?blur"
            alt="First slide"
            />
            <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>   
    </Carousel>
  )
}

export default SliderTop