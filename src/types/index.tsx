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
  url: string;
  categoryId: number;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface AddRecipePayload {
  categoryId: number;
}

export interface OwnProps {
  id: number;
}

export interface RecipeState {
  categories: Category[];
  recipes: Recipe[];
  nextCategoryId: number;
  newCategoryName: string;
  newCategoryDescription: string;
  nextRecipeId: number;
  newRecipeName: string;
  newRecipeUrl: string;
}

export interface RootState {
  foo: FooState;
  bar: BarState;
  recipes: RecipeState;
  routing: RouterState;
}
