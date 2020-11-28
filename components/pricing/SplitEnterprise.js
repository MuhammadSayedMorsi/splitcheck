import React from 'react'
import { Card } from 'react-bootstrap';
import styled from 'styled-components'



const Eneterprise = styled.div`
  overflow: hidden;
  margin-top: 10px;
  .__hash-wrapper-card {
  margin: 50px auto 22px auto;
  width: 830px;
  border: none;
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  .__title {
    font-size: 24px;
    font-weight: 500;
    color: #35558F;
    margin: 50px auto;
    width: 640px;
    text-align: center;
    @media (max-width: 992px) {
        font-size: 20px;
      }
    h4 {
      font-size: 40px;
      color: #35558F;
      @media (max-width: 992px) {
        font-size: 24px;
      }
    }

    p {
      color: #0B0212;
      font-size: 22px;
      font-weight: normal;

      .__colored {
        font-family: "Neue Haas Grotesk Display Pro Medium", sans-serif;
      }
    }
  }

  .__upgrade {
    background: #fff;
    width: 285px;
    height: 48px;
    margin: 0;
    display: block;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 18px;
    color: #35558F;
    border: 1px solid #35558F;
    margin-bottom: 131px;
    font-weight: 500;

    &:hover {
      transition: all 0.4s ease-in-out;
      background-color: #35558F;
      color: #fff;
    }
  }

  .__row {
    display: flex;
    align-items: center;
    margin-bottom: 62px;

    .__hold-content {
      width: 612px;
      margin-left: 60px;
      p .__colored {
        font-family: "Neue Haas Grotesk Display Pro Medium", sans-serif;
      }
    }
  }
}

@media (max-width: 992px) {
  .__hash-wrapper-card {
    width: 100%;
  }
}

@media (max-width: 992px) {
  .__hash-wrapper-card .__title {
    width: 100%;
  }
}

@media (max-width: 767px) {
  .__hash-wrapper-card .__row {
    flex-direction: column;

    .__hold-img {
      margin-bottom: 40px;
    }
  }
}

@media (max-width: 992px) {
  .__hash-wrapper-card .__row .__hold-content {
    width: 100%;
    margin-left: 0;
    h4 {
      text-align: center;
    }
  }
}
`
export default function SplitEnterprise () {
  return (
    <Eneterprise>
    <Card no-body className="__hash-wrapper-card container">
        <div className="__title">
          <h4>SplitChek Enterprise</h4>
          <p>
            SplitChek Enterprise gives you more control of your stores, products
            and ads placements. You get everything from the Plus plan without
            limits.
          </p>
        </div>
        <div className="__title">What can you do with the Enterprise plan?</div>
        <div className="__row">
          <div className="__hold-img">
            <img src="/images/pricing/add-to-cart-bro.svg" alt="" />
          </div>
          <div className="__hold-content">
            <h4>Create custom ads</h4>
            <p>
              SplitChek makes money by allowing stores to promote their products
              to shoppers. Also, SplitChek may recommend related products to
              shoppers browsing your products. The Enterprise plan allows you to
              create your ads targeting your stores and products within
              SplitChek - eliminating competition. For your ads to appear
              correctly, you must understand how Splitchek display products to
              shoppers.
            </p>
          </div>
        </div>

        <div className="__row">
          <div className="__hold-img">
            <img src="/images/pricing/online-shoping.svg" alt="" />
          </div>
          <div className="__hold-content">
            <h4>Unlimited products</h4>
            <p>
              You can sell as many products as you want. Furthermore, you can
              create as many virtual stores as you want. A store can have
              multiple virtual stores linked to it. Virtual stores can help
              expose your business within the shopper's geographic location.
            </p>
          </div>
        </div>

        <div className="__row">
          <div className="__hold-img">
            <img
              src="/images/pricing/black-firday-bro.svg"
              alt=""
            />
          </div>
          <div className="__hold-content">
            <h4>Unlimited Custom Grouping</h4>
            <p>
              You can create unlimited custom categories, brands and seasonal
              categories. Seasonal types may include; new arrivals, top sellers,
              discounted products and deals of the week
            </p>
          </div>
        </div>

        <div className="__row">
          <div className="__hold-img">
            <img src="/images/pricing/influencer-bro.svg" alt="" />
          </div>
          <div className="__hold-content">
            <h4>2 HasTags</h4>
            Hashtags are a shortcut to your store or any service you offer. When
            shoppers search using your Hashtag, they will be taken straight to
            your landing page no competition for the top spot in the search
            result page. These Hashtags are not reserved. To protect your
            keywords, see protecting your brand.
          </div>
        </div>
        <button className="__upgrade" type="button">Contact SplitCheck for pricing</button>
      </Card>
    </Eneterprise>
  )
}