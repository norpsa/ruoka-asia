import { Actions as FooActions } from './foo';
import { Actions as BarActions } from './bar';
import { Actions as RecipeActions } from './recipe';

export type RootAction =
  | FooActions[keyof FooActions]
  | BarActions[keyof BarActions]
  | RecipeActions[keyof RecipeActions];
