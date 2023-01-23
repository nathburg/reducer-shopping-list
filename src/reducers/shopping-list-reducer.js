export const initialState = () => {
  return {
    itemInput: '',
    shoppingList: [],
  };
};

const postState = (item) => {
  return {
    isEditing: false,
    body: item.body,
    item,
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
        itemInput: '',
        shoppingList: [...state.shoppingList, state.itemInput],
      };

    case 'posts-load-start':
      return {
        ...state,
        loadMode: 'loading',
      };
    case 'posts-load-success':
      return {
        ...state,
        loadMode: 'success',
        postsState: action.posts.map(postState),
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
