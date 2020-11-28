import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
// import AllContent from "/data/data";
// import { congrats } from "../../assets/data/data.js";
// import IMG from "/images/congrats/congrats.svg";

const CardWrapper = styled.div`
  margin: 100px;
  width: 640px;
  height: 382px;
  border: none;
  background: #ffffff;
  box-shadow: 0px 15px 50px 15px rgba(11, 2, 18, 0.04);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
  @media (max-width: 992px) {
    width: 100%;
    height: 436px;
  }
  .card {
    border: none;
    width: 100%;
    height: 100%;
    /* @media (max-width: 992px) {
      width: 100%;
    } */
  }
  .__text {
    padding-top: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 992px) {
      padding-top: 44px;
    }
    h1 {
      margin-bottom: 25px;
      @media (max-width: 992px) {
        margin-bottom: 11px;
      }
    }
    p {
      margin-bottom: 42px;
    }
  }
  .__close-modal {
    top: 15px;
    right: 25px;
    position: absolute;
    cursor: pointer
  }
`;

export default function Error() {
  return (
    <CardWrapper>
      <Card>
        <div className="__text">
          <h1>Congrats!</h1>
          <p>Your payment was successful</p>
          <img src="/images/congrats/congrats.svg" alt="ok-pro" />
        </div>
        <div className="__close-modal">
          <img src="/images/congrats/close.svg" alt="" />
        </div>
      </Card>
    </CardWrapper>
  );
}
