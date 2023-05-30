import React, { createContext, useReducer } from 'react';
import { ORDER_SET_TYPE } from './constants';

export const Store = createContext();

const initialState = {
  order: {
    orderType: 'Eat in',
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case ORDER_SET_TYPE:
      return {
        ...state,
        order: { ...state.order, orderType: action.payload },
      };
    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
