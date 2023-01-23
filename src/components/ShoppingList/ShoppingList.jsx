import { useContext, useEffect } from 'react';
import { getShoppingListItems } from '../../services/shopping-list-items';
import { Context } from '../ShoppingListProvider';
import ListItem from './ListItem';

export default function ShoppingList({ shoppingList, dispatch }) {
  return (
    <ol>
      {shoppingList.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          description={item.description}
          isEditing={item.isEditing}
          dispatch={dispatch}
        />
      ))}
    </ol>
  );
}
