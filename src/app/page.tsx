import React from 'react';
import Header from './components/header';
import Landing from './components/landing';
import Feature from './components/feature';
import FeatureBottom from './components/feature-bottom';
import Footer from './components/footer';



export default function Home() {
  return (
    <div>
      <Header></Header>
      <Landing></Landing>
      <Feature></Feature>
      <FeatureBottom></FeatureBottom>
      <Footer></Footer>
    </div>
  )
}
