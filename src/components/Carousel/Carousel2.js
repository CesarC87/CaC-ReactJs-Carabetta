import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./Carousel2.css"

const Carousel2 = () => {
    return (
        <>
        <Carousel>
            <Carousel.Item interval={1000}>
                <div className="img-wrapper-carousel">
                    <img
                    className="d-block w-100"
                    src="https://media.istockphoto.com/photos/serene-young-man-watching-plane-before-departure-picture-id619394704?b=1&k=20&m=619394704&s=170667a&w=0&h=uIWCqUwzR4WRxTa3FNqoN24egoK1FMg0AysHC4WfG1c="
                    alt="First slide"
                    />
                </div>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <div className="img-wrapper-carousel">
                    <img
                    className="d-block w-100"
                    src="https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=170667a&w=0&h=tDEC2-p91cZiNU5C19sVhB9L08PmaH5wIijCvRDalCI="
                    alt="Second slide"
                    />
                </div>
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="img-wrapper-carousel">
                    <img
                    className="d-block w-100"
                    src="https://media.istockphoto.com/photos/medical-mask-suitcase-with-sun-hat-camera-passport-airplane-ticket-picture-id1251305801?b=1&k=20&m=1251305801&s=170667a&w=0&h=3tnrNbghQ0ZB8aRMyL63SiAmNZJvPTWIUtnCMCAsfLo="
                    alt="Third slide"
                    />
                </div>
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    
        </>
    )
}

export default Carousel2