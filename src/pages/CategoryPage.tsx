import * as React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import CategoryDetails from '../containers/Category/CategoryDetails';

import { NavLink } from 'react-router-dom';

const CategoryPage = (params: any) => (
  <div>
    <Header />
    <CategoryDetails id={params.match.params.id} />
    <NavLink to="/">Etusivu</NavLink>
    <Footer />
  </div>
);

export default CategoryPage;
