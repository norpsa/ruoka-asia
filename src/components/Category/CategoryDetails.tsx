import * as React from 'react';

export interface Props {
  id: any;
}

function ListCategories({
  id
}: Props) {
  return (
    <div className="hello">
      {id}
    </div>
  );
}

export default ListCategories;
