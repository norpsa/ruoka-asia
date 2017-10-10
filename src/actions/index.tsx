import { Actions as FooActions } from './foo';
import { Actions as BarActions } from './bar';

export type RootAction =
  | FooActions[keyof FooActions]
  | BarActions[keyof BarActions];
