import { Actiontypes } from "../constants/ActionTypes";

export const setProducts = (products) => {
  return {
    type: Actiontypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProducts = (product) => {
  return {
    type: Actiontypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProducts = () => {
  return {
    type: Actiontypes.REMOVE_SELECTED_PRODUCT,
  };
};
