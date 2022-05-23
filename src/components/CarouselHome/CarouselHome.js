import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./CarouselHome.css"

const CarouselHome = () => {
    return (
        <>
        <Carousel>
            <Carousel.Item interval={1000}>
                <div className="img-wrapper-carousel">
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt="First slide"
                    />
                </div>
                <Carousel.Caption>
                <h3>Volá por el mundo!</h3>
                <p>Disfrutá las mejores ofertas y cuotas sin interés!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <div className="img-wrapper-carousel">
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1470214203634-e436a8848e23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1033&q=80"
                    alt="Second slide"
                    />
                </div>
                <Carousel.Caption className="captionEsp">
                <h3>Alojate en los mejores Hoteles, cabañas y más!</h3>
                <p>El mundo es tu hogar</p>
                </Carousel.Caption>
            </Carousel.Item> 
            <Carousel.Item>
                <div className="img-wrapper-carousel">
                    <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1516817153573-7b617832a471?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt="Third slide"
                    />
                </div>
                <Carousel.Caption className="captionEsp2">
                <h3>Las mejores actividades para disfrutar en familia</h3>
                <p>Asistencia al viajero las 24hs</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel> 
    
        </>
    )
}

export default CarouselHome

