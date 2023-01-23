import { useContext } from 'react';
import { Context } from '../ShoppingListProvider';
import ListItem from './ListItem';

export default function ShoppingList({ shoppingList }) {
  return (
    <ol>
      {shoppingList.map((item) => (
        <ListItem
          key={shoppingList.indexOf(item)}
          description={item}
        />
      ))}
    </ol>
  );
}
