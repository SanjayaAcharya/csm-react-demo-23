import { ACTION_GET_PROD_LIST, ACTION_PROD_DEL_ERROR, ACTION_PROD_DEL_LOADING, ACTION_PROD_DEL_SUCCESS } from "./action";

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
      case ACTION_PROD_DEL_LOADING: {
        return{
          ...state, 
        prodDelLoading: true,
        prodDelSuccess: false,
        prodDelError: false
        }
      }
      case ACTION_PROD_DEL_SUCCESS: {
        return{
        ...state, 
        prodDelLoading: false,
        prodDelSuccess: true,
        prodDelError: false,
        prodDelMsg: action.data.msg
        }
      }
      case ACTION_PROD_DEL_ERROR: {  
        return{
          ...state, 
        prodDelLoading: false,
        prodDelSuccess: false,
        prodDelError: false,
      }
      }
      default:
        return state;
    }
  };
  