import * as React from 'react';
import './Hello.css';

export interface Props {
  fooEnthusiasmLevel?: number;
  onFooIncrement?: () => void;
  onFooDecrement?: () => void;
  barEnthusiasmLevel?: number;
  onBarIncrement?: () => void;
  onBarDecrement?: () => void;
}

function Hello({
  fooEnthusiasmLevel = 1,
  onFooIncrement,
  onFooDecrement,
  barEnthusiasmLevel = 1,
  onBarIncrement,
  onBarDecrement }: Props) {
  if (fooEnthusiasmLevel <= 0 || barEnthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Foo {getExclamationMarks(fooEnthusiasmLevel)}
        Bar {getExclamationMarks(barEnthusiasmLevel)}
      </div>
      <div>
        <button onClick={onFooDecrement}>-</button>
        <button onClick={onFooIncrement}>+</button>
      </div>
      <div>
        <button onClick={onBarDecrement}>-</button>
        <button onClick={onBarIncrement}>+</button>
      </div>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
