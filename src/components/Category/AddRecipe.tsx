import * as React from 'react';
import { Button, Input } from 'antd';
import './Category.css';

export interface Props {
  categoryId: number;
  addRecipe: (categoryId: number) => void;
  recipeNameChanged: (event: React.FormEvent<HTMLInputElement>) => void;
  recipeUrlChanged: (event: React.FormEvent<HTMLInputElement>) => void;
  recipeName: string;
  recipeUrl: string;
}

function AddRecipe({
  categoryId,
  addRecipe,
  recipeNameChanged,
  recipeUrlChanged,
  recipeName,
  recipeUrl
}: Props) {

  return (
    <div className="add-category">
      <Input
        type="text"
        value={recipeName}
        addonBefore="Nimi"
        onChange={(event) => recipeNameChanged(event)}
      />
      <Input
        type="url"
        value={recipeUrl}
        addonBefore="Url"
        onChange={(event) => recipeUrlChanged(event)}
      />
      <br /><br />
      <Button onClick={() => addRecipe(categoryId)}>Lisää</Button>
    </div>
  );
}

export default AddRecipe;
