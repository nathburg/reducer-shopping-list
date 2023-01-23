import { useState } from 'react';
import {
  editItemButtonHandler,
  editItemSubmitHandler,
} from '../../dispatchers/item';

export default function ListItem({
  id,
  description,
  isEditing,
  dispatch,
}) {
  const [newText, setNewText] = useState('');

  const editingInput = (
    <div className="editing-input">
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      ></input>
      <button
        onClick={() => {
          editItemSubmitHandler(dispatch, id, newText);
          setNewText('');
        }}
      >
        Submit Change
      </button>
    </div>
  );

  return (
    <li>
      {description}
      <button
        onClick={() => {
          editItemButtonHandler(dispatch, id);
        }}
      >
        Edit
      </button>
      {isEditing && editingInput}
    </li>
  );
}
