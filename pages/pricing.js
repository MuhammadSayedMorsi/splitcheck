import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../components/pricing/Hero';
import BHeader from '../components/Header/BusinessHeader';
import PricingCards from '../components/pricing/pricingCards';
import SplitEnterprise from '../components/pricing/SplitEnterprise'

export default function pricing() {
  return (
    <>
      <BHeader />
      <div>
        <Hero />
        <PricingCards />
        <SplitEnterprise />
      </div>
    </>
  );
}
