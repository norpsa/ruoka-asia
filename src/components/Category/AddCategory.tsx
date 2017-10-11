import * as React from 'react';
import { NewCategoryPayload } from '../../types/index';

export interface Props {
  addCategory: (payload: NewCategoryPayload) => void;
}

function AddCategory({
  addCategory
}: Props) {

  function add() {
    addCategory({name: 'asd', description: 'asd'});
  }

  return (
    <div className="hello">
      <button onClick={add}>+</button>
    </div>
  );
}

export default AddCategory;