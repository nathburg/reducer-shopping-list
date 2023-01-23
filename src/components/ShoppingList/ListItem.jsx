import { useState } from 'react';
import { editItemButtonHandler } from '../../dispatchers/item';

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
    </div>
  );

  return (
    <li>
      {description}
      <button
        onClick={() => {
          editItemButtonHandler(dispatch, id);
          console.log('click received');
        }}
      >
        Edit
      </button>
      {isEditing && editingInput}
    </li>
  );
}
