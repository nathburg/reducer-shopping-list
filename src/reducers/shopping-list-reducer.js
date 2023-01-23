export const initialState = () => {
  return {
    itemInput: '',
    shoppingList: [],
  };
};

const postState = (item) => {
  return {
    isEditing: false,
    description: item.item_name,
    id: item.id,
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'edit-item-input':
      return {
        ...state,
        itemInput: action.body,
      };
    case 'submit-item':
      return {
        ...state,
        itemInput: '',
        shoppingList: [postState(action.body), ...state.shoppingList],
      };

    case 'items-load':
      console.log('action.items ', action.items);
      return {
        ...state,
        shoppingList: action.items.map((item) => postState(item)),
      };
    case 'posts-load-start':
      return {
        ...state,
        loadMode: 'loading',
      };
    case 'posts-load-error':
      return {
        ...state,
        loadMode: 'error',
        error: action.error,
      };
    default:
      console.error(
        `Action type not supported ${action.type}.`,
        action
      );
      return state;
  }
};
