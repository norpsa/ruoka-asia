import * as React from 'react';
import { Category } from '../../types/index';
import { NavLink } from 'react-router-dom';

export interface Props {
  categories: Category[];
}

function ListCategories({
  categories
}: Props) {

  const listItems = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={'/category/' + category.id}>{category.name}</NavLink>
    </li>
  ));

  return (
    <div className="hello">
      {listItems}
    </div>
  );
}

export default ListCategories;
