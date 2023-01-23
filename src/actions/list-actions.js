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

// export const itemsUpdatePostErrorAction = (itemId, error) => {
//   return {
//     itemId,
//     error,
//     type: 'items-update-post-error',
//   };
// };

export const itemsLoad = (items) => {
  return {
    items,
    type: 'items-load',
  };
};

export const editItemInputAction = (body) => {
  return {
    type: 'edit-item-input',
    body,
  };
};

export const submitItemAction = (body) => {
  return {
    type: 'submit-item',
    body,
  };
};

export const editItemAction = (id) => {
  return {
    type: 'edit-item-state',
    id,
  };
};
