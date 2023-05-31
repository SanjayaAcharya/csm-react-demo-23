import { store } from "./appProvider";

const productListAPIURL = "https://dummyjson.com/products";

export const ACTION_GET_PROD_LIST = "products/GET_PROD_LIST";
export const ACTION_PROD_DEL_LOADING = "products/DEL_PROD_LIST_LOADING";
export const ACTION_PROD_DEL_SUCCESS = "products/DEL_PROD_LIST_SUCCESS";
export const ACTION_PROD_DEL_ERROR = "products/DEL_PROD_LIST_ERROR";

export const getProductList = async (productsDispatch, id) => {
    return fetch(`${productListAPIURL}?id=${id}`)
    // return fetch(productListAPIURL)
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        productsDispatch({type:ACTION_GET_PROD_LIST, data:json.products })
        store.dispatch({type:"products/GET_PROD_LIST", data:json.products })
    }
    );
    
}
export const callSaveFormDataAPI = async (formData, productsDispatch) => {
    return fetch(productListAPIURL, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(formData), // body data type must match "Content-Type" header
    })
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        productsDispatch({type:ACTION_GET_PROD_LIST, data:json.products })
    }
    );
    
}

export const delProd = (productsDispatch) => {
    productsDispatch({type:ACTION_PROD_DEL_LOADING});
    const timer = setTimeout(() => {
        if(true){
            productsDispatch({type:ACTION_PROD_DEL_SUCCESS, data: {msg:"Delete Success"} });
        }else{
            productsDispatch({type:ACTION_PROD_DEL_ERROR });
        }
      }, 4000);
      return () => clearTimeout(timer);
    

}