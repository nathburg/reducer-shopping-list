// import {
//   itemCandidateCreateStartAction,
//   itemCandidateCreateSuccessAction,
// } from '../actions/list-actions';
// import { createShoppingListItem } from '../services/shopping-list-items';

import {
  editItemInputAction,
  submitItemAction,
} from '../actions/list-actions';
import { createShoppingListItem } from '../services/shopping-list-items';

// export const onCreateItem = async (dispatch, user, body) => {
//     dispatch(itemCandidateCreateStartAction());
//     try {
//         await createShoppingListItem(user, body);
//         dispatch(itemCandidateCreateSuccessAction(user, body));
//         await
//     }
// }

export const submitItemHandler = async (dispatch, input) => {
  const resp = await createShoppingListItem({ item_name: input });
  dispatch(submitItemAction(resp[0]));
};

export const editInputHandler = (dispatch, body) =>
  dispatch(editItemInputAction(body));
