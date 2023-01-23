import { useContext, useEffect } from 'react';
import { getShoppingListItems } from '../../services/shopping-list-items';
import { Context } from '../ShoppingListProvider';
import ListItem from './ListItem';

export default function ShoppingList({ shoppingList }) {
  return (
    <ol>
      {shoppingList.map((item) => (
        <ListItem key={item.id} description={item.description} />
      ))}
    </ol>
  );
}
