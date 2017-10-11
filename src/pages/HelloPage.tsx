import * as React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HelloAsia from '../components/HelloAsia';

import { NavLink } from 'react-router-dom';

const HelloPage = () => (
  <div className="hello">
    <Header />
    <NavLink to="/about">About</NavLink>
    <HelloAsia />
    <Footer />
  </div>
);

export default HelloPage;
