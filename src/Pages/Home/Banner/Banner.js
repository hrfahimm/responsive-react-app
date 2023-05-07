import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/homeCarousel/1.jpg";
import banner2 from "../../../images/homeCarousel/2.jpg";
import banner3 from "../../../images/homeCarousel/3.jpg";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div
            style={{
              height: "425px",
              textAign: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <img className="d-block w-100 img-fluid  center" src={banner1} alt="First slide" />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              height: "425px",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <img className="d-block w-100 img-fluid  center" src={banner3} alt="First slide" />
          </div>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              height: "425px",
              textAign: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <img className="d-block w-100 img-fluid  center" src={banner2} alt="First slide" />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
