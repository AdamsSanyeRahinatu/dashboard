import React, { useState } from "react";
import products from "../data/products";
import { Container, Row } from "react-bootstrap";
import Product from "../components/Product";
import { Carousel } from "react-bootstrap";
import banner from "../images/banner.png";
import bannera from "../images/bannera.png";
import bannerb from "../images/bannerb.png";
import bannerc from "../images/bannerc.png";

const HomePage = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="home">
      <div
        className="w-100 d-flex m-0 flex-column justify-content-center align-items-center banner"
        style={{ height: "80vh", width: "100%" }}
      >
        <img src={banner} alt="" />
      </div>
      <div>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="carousel"
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Carousel.Item>
            <img
              className="d-block "
              style={{
                width: "600px",
              }}
              src={bannera}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>24/7 Service</h3>
              <p>Always Open Marketplace No Closing Hours</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              style={{ width: "600px" }}
              src={bannerb}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 style={{ color: "white" }}>FOR EXPORT</h3>
              <p>All kinds of baverages market place</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              style={{ width: "600px" }}
              src={bannerc}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Convert Your Products to Cash</h3>
              <p style={{ color: "#000" }}>
                Marching potential sellers to potential buyers
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Container>
        <h3 className="m-4 text-center">FRESH E-FAMP PRODUCTS</h3>
        <Row>
          {products.map((p, i) => (
            <Product name={p.name} price={p.price} img={p.img} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HomePage;
