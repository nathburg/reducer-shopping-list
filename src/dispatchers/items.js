import {
  itemsLoadStartAction,
  itemsLoadSuccessAction,
  itemsUpdatePostErrorAction,
} from '../actions/post-list-actions';
import {
  getShoppingListItem,
  getShoppingListItems,
  updateShoppingItem,
} from '../services/shopping-list-items';

export const itemsLoad = async (dispatch) => {
  try {
    dispatch(itemsLoadStartAction());
    const items = await getShoppingListItems();
    dispatch(itemsLoadSuccessAction(items));
  } catch (e) {
    dispatch(itemsUpdatePostErrorAction);
  }
};
