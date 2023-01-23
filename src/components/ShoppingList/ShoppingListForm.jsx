import React from 'react';
import {
  editInputHandler,
  submitItemHandler,
} from '../../dispatchers/item';

export default function ShoppingListForm({ input, dispatch }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitItemHandler(dispatch, input);
      }}
    >
      <input
        value={input}
        onChange={(e) => editInputHandler(dispatch, e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
