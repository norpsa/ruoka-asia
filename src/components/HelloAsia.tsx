import * as React from 'react';

import Hello from '../containers/Hello';
import AddCategory from '../containers/Category/AddCategory';
import Foo from '../containers/Foo';

const HelloAsia = () => (
  <div className="hello-asia">
    <AddCategory />
    <Hello />
    <Foo />
    <Hello />
  </div>
);

export default HelloAsia;
