
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader(props) {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">{props.title}</h1>
            </div>
            <h2 className="presentation-subtitle text-center">
              All your global news in one place
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              "url(" + require("assets/img/clouds.png").default + ")",
          }}
        />
        <h4 onClick={(e) => console.log(e)} className="category category-absolute">
          <a style={{ fontWeight: '500'}}>Get Started</a>
        </h4>
      </div>
    </>
  );
}

export default IndexHeader;
