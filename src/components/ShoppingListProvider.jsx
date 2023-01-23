import { createContext, useReducer, useMemo } from 'react';
import {
  initialState,
  reducer,
} from '../reducers/shopping-list-reducer';

export const Context = createContext(
  {
    state: initialState(),
    dispatch: () => undefined,
  },
  []
);

export const ShoppingListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState());
  const contextValue = useMemo(
    () => ({ state, dispatch }),
    [state, dispatch]
  );
  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};
