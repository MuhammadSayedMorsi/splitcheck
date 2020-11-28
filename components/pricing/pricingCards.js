import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import styled from 'styled-components';

const PricingWrap = styled.div`
  /* background-color: pink; */
  margin-top: 45px;
  @media (max-width: 768px) {
    margin-top: 79px;
  }
  .__basic-hashtag {
    .register-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .content {
        width: 704px;
        text-align: center;
        margin-bottom: 72px;

        h4 {
          font-size: 40px;
          color: #35558f;
        }

        p {
          font-size: 22px;
          color: #0b0212;

          .__colored {
            font-family: 'Neue Haas Grotesk Display Pro Medium', sans-serif;
          }
        }
      }

      .__card-wrapper {
        /* width: 100%; */
        justify-content: space-between;
        width: 960px;
        margin: 0 auto;
        @media (max-width: 992px) {
          width: 100%;
        }
      }

      .card {
        border: none;
        box-shadow: none;
        width: 288px;
        max-width: 288px;
        border-radius: 8px;
        /* margin: 20px; */
        /* margin-right: 60px; */
        position: relative;
        &:before {
          content: '';
          position: absolute;
          background: #e6eefc;
          filter: blur(46.2108px);
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .__price-card-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          height: 704px;
          .__details {
            padding-top: 38px;
          }

          .__pre {
            color: #35558f;
            font-weight: 600;
          }

          .__add-dollar-sign {
            position: relative;

            &:before {
              position: absolute;
              top: -7px;
              left: 50px;
              content: '$';
              font-size: 16px;
              font-weight: normal;
            }

            &:after {
              position: absolute;
              top: -7px;
              right: 109px;
              content: '95';
              font-size: 16px;
              font-weight: 500;
            }
          }

          .__how-much {
            text-align: center;
            font-size: 48px;
            font-weight: 900;
            margin-bottom: 30px;

            span {
              font-size: 16px;
              font-weight: normal;
            }
          }

          .__info {
            padding: 0;
            margin: 0;
            list-style: none;

            li {
              width: 240px;
              height: 35px;
              font-size: 16px;
              line-height: 35px;
              border-bottom: 1px solid #ccd4e3;

              .__colored {
                font-weight: 500;
              }
            }
          }

          .__dash {
            text-align: center;
            padding: 0;
            margin: 0;
            list-style: none;

            li {
              font-size: 26px;
              margin: 0 auto;
              width: 6px;
              color: #0b0212;
            }
          }

          .__upgrade {
            background: #fff;
            width: 240px;
            height: 48px;
            margin-bottom: 24px;
            display: block;
            border: none;
            outline: none;
            border-radius: 5px;
            font-size: 18px;
            color: #35558f;
            border: 1px solid #35558f;
            font-family: 'Neue Haas Grotesk Display Pro Medium', sans-serif;
            position: relative;

            &:hover {
              transition: all 0.4s ease-in-out;
              background-color: #35558f;
              color: #fff;
            }
          }

          .__pre-btn {
            background: #35558f;
            border: none;
            color: #fff;

            &:before {
              transition: 0.3s;
              opacity: 0;
              content: '';
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
          }
        }
      }
      .__name {
        font-size: 18px;
        color: #0b0212;
        text-align: center;
        margin-bottom: 9px;
      }
    }
  }
  @media (max-width: 767px) {
    .__basic-hashtag .register-wrap .content {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    .__basic-hashtag .register-wrap .content h4 {
      font-size: 24px;
    }
  }

  @media (max-width: 992px) {
    .__basic-hashtag .register-wrap .__card-wrapper {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 747px) {
    .__basic-hashtag .register-wrap .card {
      width: 100%;
    }
  }
`;

const Hold = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function pricingCard() {
  return (
    <PricingWrap>
      <div className="__basic-hashtag container">
        <div className="register-wrap">
          <div className="content">
            <h4>
              Is selling 100 SKUs
              <span className="__colored">not enough?</span> Try SplitChek's
              paid plans
            </h4>
          </div>

          <CardGroup deck className="__card-wrapper">
            <Hold>
              <div className="__name">Basic</div>
              <Card>
                <div className="__price-card-details">
                  <div className="__details">
                    <div className="__how-much">
                      Free
                      <span>/forever</span>
                    </div>
                    <ul className="__info">
                      <li>
                        Up to <span className="__colored">100</span> SKUs
                      </li>
                      <li>
                        Up to <span className="__colored">2</span> landing pages
                      </li>
                      <li>
                        Up to <span className="__colored">2</span> seasonal
                        category
                      </li>
                      <li>
                        <span className="__colored">100</span> blogs
                      </li>
                      <li>Click&Collect enabled</li>
                      <li>Free chat with shoppers</li>
                      <li>
                        <span className="__colored">7.5%</span> per transaction
                      </li>
                    </ul>
                    <ul className="__dash">
                      <li>-</li>
                      <li>-</li>
                      <li>-</li>
                      <li>-</li>
                      <li>-</li>
                    </ul>
                  </div>
                  <button className="__upgrade" type="button">
                    Upgrade to Plus
                  </button>
                </div>
              </Card>
            </Hold>

            <Hold>
              <div className="__name __pre">Premium</div>
              <Card>
                <div className="__price-card-details __with-bg">
                  <div className="__details">
                    <div className="__how-much __add-dollar-sign">
                      89
                      <span>/month</span>
                    </div>
                    <ul className="__info">
                      <li>
                        Up to <span className="__colored">250</span> SKUs
                      </li>
                      <li>
                        Up to <span className="__colored">10</span> landing
                        pages
                      </li>
                      <li>
                        Up to <span className="__colored">4</span> seasonal
                        category
                      </li>
                      <li>
                        <span className="__colored">200</span> blogs
                      </li>
                      <li>Click&Collect enabled</li>
                      <li>Free chat with shoppers</li>
                      <li>
                        <span className="__colored">6.5%</span> per transaction
                      </li>
                      <li>
                        <span className="__colored">200</span> product videos
                      </li>
                      <li>Preorder allowed</li>
                    </ul>
                    <ul className="__dash">
                      <li>-</li>
                      <li>-</li>
                      <li>-</li>
                    </ul>
                  </div>
                  <button className="__upgrade __pre-btn" type="button">
                    Upgrade to Premium
                  </button>
                </div>
              </Card>
            </Hold>
            <Hold>
              <div className="__name">Plus</div>
              <Card>
                <div className="__price-card-details">
                  <div className="__details">
                    <div className="__how-much __add-dollar-sign">
                      249
                      <span>/month</span>
                    </div>
                    <ul className="__info">
                      <li>
                        Up to <span className="__colored">7500</span> SKUs
                      </li>

                      <li>
                        Up to <span className="__colored">100</span> landing
                        pages
                      </li>

                      <li>
                        Up to<span className="__colored">8</span> seasonal
                        category
                      </li>

                      <li>
                        <span className="__colored">Unlimited</span>blogging
                      </li>

                      <li>Click&Collect enabled</li>
                      <li>Free chat with shoppers</li>
                      <li>
                        <span className="__colored">5.5%</span> per transaction
                      </li>
                      <li>
                        <span className="__colored">1000</span> product videos
                      </li>

                      <li>Preorder allowed</li>

                      <li>1Hashtag</li>
                      <li>Unlimited custom categories</li>
                      <li>Unlimited custom brands</li>
                    </ul>
                  </div>
                  <button className="__upgrade" type="button">
                    Upgrade to Plus
                  </button>
                </div>
              </Card>
            </Hold>
          </CardGroup>
        </div>
      </div>
    </PricingWrap>
  );
}
