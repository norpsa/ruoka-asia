import * as React from 'react';
import { Category } from '../../types/index';

export interface Props {
  categories: Category[];
}

function ListCategories({
  categories
}: Props) {

  const listItems = categories.map((category) => (
    <li key={category.id}>
      {category.name}
    </li>
  ));

  return (
    <div className="hello">
      {listItems}
    </div>
  );
}

export default ListCategories;
