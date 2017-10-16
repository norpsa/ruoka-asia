import * as React from 'react';
import { Recipe } from '../../types/index';

export interface Props {
  recipes: Recipe[];
}

function ListRecipes({
  recipes
}: Props) {

  const listItems = recipes.map((recipe) => (
    <li key={recipe.id}>
      <a href={recipe.url} target="_blank">{recipe.name}</a>
    </li>
  ));

  return (
    <div className="hello">
      {listItems}
    </div>
  );
}

export default ListRecipes;
