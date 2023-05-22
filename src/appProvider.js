import React, { createContext, useContext, useReducer } from "react"

import ProductListReducer, {initialState as productListInitialState} from './reducer';
export const AppContext = createContext();
export const AppProvider = ({children}) =>{
    return(
        <AppContext.Provider
            value={{
                products: useReducer(ProductListReducer, productListInitialState),
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useStateValue = () => useContext(AppContext);