import { ACTION_GET_PROD_LIST } from "./action";

export const initialState = {isLoading: false};

export default (state = initialState, action) => {
    console.log("action",action)
    switch (action.type) {
      case ACTION_GET_PROD_LIST: {
        return {
            ...state, 
            productList: action.data,
            productCount: action.data.length
        };
      }
      default:
        return state;
    }
  };
  