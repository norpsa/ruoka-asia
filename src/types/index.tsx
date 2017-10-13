import { RouterState } from 'react-router-redux';

export interface FooState {
  languageName: string;
  enthusiasmLevel: number;
}

export interface BarState {
  languageName: string;
  enthusiasmLevel: number;
}

export interface Recipe {
  id: number;
  name: string;
  description: string;
  categoryId: number;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface OwnProps {
  id: number;
}

export interface RecipeState {
  categories: Category[];
  recipes: Recipe[];
  nextCategoryId: number;
  nextRecipeId: number;
  newCategoryName: string;
  newCategoryDescription: string;
}

export interface RootState {
  foo: FooState;
  bar: BarState;
  recipes: RecipeState;
  routing: RouterState;
}
