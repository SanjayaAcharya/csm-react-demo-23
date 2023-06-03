
export const initialState = {productCount:0};

export default (state = initialState, action) => {
    switch (action.type) {
      case "products/GET_PROD_LIST": {
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
  