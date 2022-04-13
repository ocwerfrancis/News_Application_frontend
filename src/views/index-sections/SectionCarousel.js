
import React from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

// core components


function SectionCarousel(props) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const items = [
      {
        src: props.image,
        altText: "Somewhere",
        caption: "Somewhere",
      }
    ];

  return (
    <>
      <div style={{ marginBottom: '0px', paddingBottom: '0px' }}  id="carousel">
        <Container>
            <h2 style={{ 
                  color : 'black', 
                  fontWeight: "800",
                  // marginRight: "320px", 
                  marginBottom: "8px" 
              }} className="presentation-subtitle text-center">
              {props.title}
            </h2>
          <Row >
            <Col className="ml-auto mr-auto" md="8">
              <Card className="page-carousel">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map((item) => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                        />
                      </CarouselItem>
                    );
                  })}
                </Carousel>
              </Card>
              <p style={{ 
                    color : 'black', 
                    fontWeight: "200",
                    fontSize: "20px",
                    // marginRight: "330px", 
                    marginBottom: "8px" 
                }} className="presentation-subtitle text-center">
                {props.description.toString().substring(0, 300)}{"..."}
              </p>
            </Col>
          </Row>
          
        </Container>
      </div>
    </>
  );
}

export default SectionCarousel;
