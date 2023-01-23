// export const itemCandidateCreateSuccessAction = () => {
//   return {
//     type: 'item-candidate-create-success',
//   };
// };

// export const itemCandidateCreateStartAction = () => {
//   return {
//     type: 'item-candidate-create-start',
//   };
// };

// export const itemsLoadStartAction = () => {
//   return {
//     type: 'items-load-start',
//   };
// };

// export const itemsLoadSuccessAction = (items) => {
//   return {
//     items,
//     type: 'items-load-success',
//   };
// };

// export const itemsUpdatePostErrorAction = (itemId, error) => {
//   return {
//     itemId,
//     error,
//     type: 'items-update-post-error',
//   };
// };

export const editItemInputAction = (body) => {
  return {
    type: 'edit-item-input',
    body,
  };
};

export const submitItemAction = () => {
  return {
    type: 'submit-item',
  };
};
