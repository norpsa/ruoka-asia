import * as React from 'react';

export interface Props {
  languageName: string;
  fooEnthusiasmLevel?: number;
}

function Foo({
  fooEnthusiasmLevel = 1,
  languageName = 'foo'}: Props) {

  return (
    <div className="hello">
      <div className="greeting">
        {languageName} {getExclamationMarks(fooEnthusiasmLevel)}
      </div>
    </div>
  );
}

export default Foo;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
