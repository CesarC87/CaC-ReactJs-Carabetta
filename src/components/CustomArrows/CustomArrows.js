import React, { Component } from "react";
import Slider from "react-slick";
import Card from "../Card/Card";
import "./CustomArrows.css"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  
  render(props) {    
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,      
    };     
   
    return (
      <div className="CustomArrowsContainer">
        <h4 className="h4Slider">Elegí tu experiencia</h4>
        <Slider {...settings}>               
        {this.props.data?.map((producto) => {
                return (
                    <div>
                      <Card
                          key={producto.id}
                          title={producto.title}
                          description={producto.description}
                          image={producto.image}
                          productId={producto.id}
                          price={producto.price}                          
                          />
                    </div>                    
                )
            })}   
        </Slider>
      </div>
    );
  }
}

 