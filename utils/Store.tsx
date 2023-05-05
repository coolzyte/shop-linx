import React, { createContext, useReducer, ReactNode } from 'react';

export interface IState {
  cart: { cartItems: any[] };
  state?: any;
  dispatch?: any;
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IState = {
  cart: { cartItems: [] },
};

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item.slug === newItem.slug
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}

interface IProps {
  children: ReactNode;
}

export const Store = createContext<IState>({ ...initialState });

export function StoreProvider({ children }: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch, cart: state.cart }; // include cart property in value object
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
