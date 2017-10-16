import * as React from 'react';
import { Category } from '../../types/index';

export interface Props {
  id: any;
  category?: Category;
}

function CategoryDetails({
  id,
  category
}: Props) {
  let categoryDetails;
  if (category) {
    categoryDetails = (
      <div>
      Nimi:
      {category.name} <br /><br />
      Kuvaus:
      {category.description} <br /><br /></div>
    );
  } else {
    categoryDetails = 'Kategoriaa ei ole olemassa';
  }
  return (
    <div className="hello">
      {categoryDetails}
    </div>
  );
}

export default CategoryDetails;
