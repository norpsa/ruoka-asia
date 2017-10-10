import * as React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HelloAsia from '../components/HelloAsia';

const HelloPage = () => (
  <div className="hello">
    <Header />
    <HelloAsia />
    <Footer />
  </div>
);

export default HelloPage;
