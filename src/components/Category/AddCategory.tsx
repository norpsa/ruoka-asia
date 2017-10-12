import * as React from 'react';

export interface Props {
  addCategory?: () => void;
  categoryNameChanged: (event: React.FormEvent<HTMLInputElement>) => void;
  categoryDescriptionChanged: (event: React.FormEvent<HTMLInputElement>) => void;
  categoryName: string;
  categoryDescription: string;
}

function AddCategory({
  addCategory,
  categoryNameChanged,
  categoryDescriptionChanged,
  categoryName,
  categoryDescription
}: Props) {

  return (
    <div className="hello">
      <input type="text" value={categoryName} onChange={(event) => categoryNameChanged(event)} />
      <input type="text" value={categoryDescription} onChange={(event) => categoryDescriptionChanged(event)} />
      <button onClick={addCategory}>Lisää</button>
    </div>
  );
}

export default AddCategory;