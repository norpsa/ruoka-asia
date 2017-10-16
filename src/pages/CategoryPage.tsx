import * as React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import CategoryDetails from '../containers/Category/CategoryDetails';
import AddRecipe from '../containers/Category/AddRecipe';
import ListRecipes from '../containers/Category/ListRecipes';

import { NavLink } from 'react-router-dom';

const CategoryPage = (params: any) => (
  <div>
    <Header />
    <CategoryDetails id={params.match.params.id} />
    <ListRecipes />
    <AddRecipe id={params.match.params.id} />
    <NavLink to="/">Etusivu</NavLink>
    <Footer />
  </div>
);

export default CategoryPage;
