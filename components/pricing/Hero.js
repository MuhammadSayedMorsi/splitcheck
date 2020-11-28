import React from 'react';
import styled from 'styled-components';
// import IMG from "/images/hashtag/girlstand";
const HeroWrap = styled.div`
  position: relative;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    /* background-color: #f9fbff; */
    background-color: pink;
    height: 480px;
    width: 100vw;
    z-index: -1;
    @media (max-width: 992px) {
      height: 100%;
    }
  }
  .__protect-brand {
    height: 585px;
    z-index: 1;
    padding-top: 67px;

    .__first-row {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .__content {
        width: 560px;

        .__text {
          width: 100%;
        }

        h3 {
          font-size: 48px;
          font-weight: 500;
          color: #335491;
          margin-bottom: 17px;
          font-family: Neue Haas Grotesk Display Pro;
          font-weight: normal;

          .__colored {
            font-family: 'Neue Haas Grotesk Display Pro Medium', sans-serif;
            color: #335491;
          }
        }

        p {
          font-size: 22px;
          color: #0b0212;
          padding-top: 18px;
          font-family: 'Neue Haas Grotesk Display Pro', sans-serif;

          .__colored {
            color: #0b0212;
            font-family: 'Neue Haas Grotesk Display Pro Medium', sans-serif;
          }
        }
      }

      .__img {
        width: 477px;
      }
    }
  }

  @media (max-width: 992px) {
    .__protect-brand {
      padding-top: 0;
      height: 735px;
      padding-top: 35px;
    }
  }

  @media (max-width: 400px) {
    .__protect-brand {
      height: 570px;
    }
  }

  @media (max-width: 992px) {
    .__protect-brand .__first-row {
      flex-direction: column;
    }
  }

  @media (max-width: 992px) {
    .__protect-brand .__first-row .__content {
      width: 100%;
    }
  }

  @media (max-width: 992px) {
    .__protect-brand .__first-row .__content .__text {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 992px) and (max-width: 992px) {
    .__protect-brand .__first-row .__content .__text {
      display: flex;
      img {
        width: 100%;
        margin-top: 16px;
      }
    }
  }

  @media (max-width: 992px) {
    .__protect-brand .__first-row .__content h3 {
      margin-bottom: 0;
    }
  }

  @media (max-width: 992px) {
    .__protect-brand .__first-row .__content h3 {
      font-size: 32px;
    }
  }

  @media (max-width: 992px) {
    .__protect-brand .__first-row .__content p {
      font-size: 18px;
    }
  }

  @media (max-width: 992px) {
    .__protect-brand .__first-row .__img {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    .__protect-brand .__first-row .__img img {
      width: 100%;
    }
  }
`;

export default function PricingHero() {
  return (
    <HeroWrap>
      <div className="__protect-brand container">
        <div className="__first-row">
          <div className="__content">
            <div className="__text">
              <h3>
                Sell your first <span className="__colored">100</span>
                products for free
              </h3>
              <p>
                When you have less than 100 SKUs, you can sell them on SplitChek
                for free. SplitChek only charges up to 7.5% per transaction. It
                gets cheaper based on your paid plan.
              </p>
            </div>
          </div>
          <div className="__img">
            <img src="/images/hashtag/girlstand.svg" alt="" />
          </div>
        </div>
      </div>
    </HeroWrap>
  );
}
