export interface FooState {
  languageName: string;
  enthusiasmLevel: number;
}

export interface BarState {
  languageName: string;
  enthusiasmLevel: number;
}

export interface RootState {
  foo: FooState;
  bar: BarState;
}
