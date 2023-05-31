
export const initialState = {};

export default (state = initialState, action) => {
  console.log("Redux action",action)
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
  