import * as React from 'react';
import AddCategory from '../containers/Category/AddCategory';
import ListCategories from '../containers/Category/ListCategories';

const HelloAsia = () => (
  <div className="hello-asia">
    <ListCategories />
    <AddCategory />
  </div>
);

export default HelloAsia;
