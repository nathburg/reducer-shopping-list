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

const indexById = (array, id) =>
  array.findIndex((element) => element.id === id);

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
      return {
        ...state,
        shoppingList: action.items.map((item) => postState(item)),
      };

    case 'edit-item-state':
      return {
        ...state,
        shoppingList: state.shoppingList.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              isEditing:
                !state.shoppingList[
                  indexById(state.shoppingList, action.id)
                ].isEditing,
            };
          } else {
            return item;
          }
        }),
      };

    case 'edit-item-submit':
      return {
        ...state,
        shoppingList: state.shoppingList.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              isEditing: false,
              description: action.newText,
            };
          } else {
            return item;
          }
        }),
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
