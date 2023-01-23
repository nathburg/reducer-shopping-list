import { useContext, useEffect } from 'react';
import { itemsLoadDispatch } from '../../dispatchers/items';
import ShoppingList from '../ShoppingList/ShoppingList';
import ShoppingListForm from '../ShoppingList/ShoppingListForm';
import { Context } from '../ShoppingListProvider';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    itemsLoadDispatch(dispatch);
  }, []);

  return (
    <section>
      <h1>My Shopping List</h1>
      <ShoppingListForm input={state.itemInput} dispatch={dispatch} />
      <ShoppingList
        shoppingList={state.shoppingList}
        dispatch={dispatch}
      />
    </section>
  );
}
