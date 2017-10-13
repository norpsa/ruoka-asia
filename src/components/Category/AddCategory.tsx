import * as React from 'react';
import { Button, Input } from 'antd';
import './Category.css';

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
    <div className="add-category">
      <Input type="text" value={categoryName} addonBefore="Nimi"
        onChange={(event) => categoryNameChanged(event)} />
      <Input type="text" value={categoryDescription} addonBefore="Kuvaus"
        onChange={(event) => categoryDescriptionChanged(event)} />
      <br /><br />
      <Button onClick={addCategory}>Lisää</Button>
    </div>
  );
}

export default AddCategory;
