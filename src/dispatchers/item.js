// import {
//   itemCandidateCreateStartAction,
//   itemCandidateCreateSuccessAction,
// } from '../actions/list-actions';
// import { createShoppingListItem } from '../services/shopping-list-items';

import {
  editItemInputAction,
  submitItemAction,
} from '../actions/list-actions';

// export const onCreateItem = async (dispatch, user, body) => {
//     dispatch(itemCandidateCreateStartAction());
//     try {
//         await createShoppingListItem(user, body);
//         dispatch(itemCandidateCreateSuccessAction(user, body));
//         await
//     }
// }

export const submitItemHandler = (dispatch) =>
  dispatch(submitItemAction());

export const editInputHandler = (dispatch, body) =>
  dispatch(editItemInputAction(body));
