import { useContext, useEffect } from 'react';
import {
  editInputHandler,
  submitItemHandler,
} from '../../dispatchers/item';
import ShoppingList from '../ShoppingList/ShoppingList';
import ShoppingListForm from '../ShoppingList/ShoppingListForm';
import { Context } from '../ShoppingListProvider';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  useEffect(
    () => console.log('list update ', state.shoppingList),
    [state.shoppingList]
  );
  return (
    <section>
      <h1>My Shopping List</h1>
      <ShoppingListForm input={state.itemInput} dispatch={dispatch} />
      <ShoppingList shoppingList={state.shoppingList} />
    </section>
  );
}
