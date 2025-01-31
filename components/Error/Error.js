import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
// import AllContent from "/data/data";
// import { congrats } from "../../assets/data/data.js";
// import IMG from "/images/congrats/congrats.svg";

const CardWrapper = styled.div`
  width: 640px;
  height: 442px;
  background: #ffffff;
  box-shadow: 0px 15px 50px 15px rgba(11, 2, 18, 0.04);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 50px auto;
  @media (max-width: 992px) {
    width: 100%;
    height: 529px;
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
      font-size: 32px;
      font-weight: bold;
      color: #0B0212;
      margin-bottom: 25px;
      @media (max-width: 992px) {
        margin-bottom: 11px;
      }
    }
    p {
      font-size: 18px;
      color: #0B0212;
      margin-bottom: 27px;
      width: 480px;
      text-align: center;
      @media (max-width: 768px) {
        width: 100%
      }
    }
  }
  .__close-modal {
    top: 15px;
    right: 25px;
    position: absolute;
    cursor: pointer;
  }
`;
const TryAgain = styled.button`
  background-color: #35558f;
  width: 240px;
  height: 48px;
  margin: 20px auto 40px auto;
  display: block;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 18px;
  color: #fff;
  font-family: "Neue Haas Grotesk Display Pro Medium", sans-serif;
  position: relative;
  &:before {
    transition: 0.3s;
    opacity: 0;
    content: "";
    position: absolute;
    border-radius: 6px;
    top: -3px;
    right: -3px;
    bottom: -3px;
    left: -3px;
    border: 1px solid #35558f;
  }
  &:hover:before {
    opacity: 1;
  }
`;

export default function Error() {
  return (
    <CardWrapper>
      <Card>
        <div className="__text">
          <h1>Error occurred</h1>
          <p>
            Bank having trouble with your payment. You can check your card limit
            or other settings and try again
          </p>
          <img
            src="/images/error-occurred/error-occurred.svg"
            alt="error-orccurred"
          />
        </div>
        <TryAgain>Try again</TryAgain>
        <div className="__close-modal">
          <img src="/images/congrats/close.svg" alt="" />
        </div>
      </Card>
    </CardWrapper>
  );
}
