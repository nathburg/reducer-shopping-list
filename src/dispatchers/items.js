import { itemsLoad } from '../actions/list-actions';

import { getShoppingListItems } from '../services/shopping-list-items';

export const itemsLoadDispatch = async (dispatch) => {
  const items = await getShoppingListItems();
  dispatch(itemsLoad(items));
};
