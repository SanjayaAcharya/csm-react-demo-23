import React, { createContext, useContext, useReducer } from "react"

import ProductListReducer, {initialState as productListInitialState} from './reducer';
import ReduxReducer from './reduxReducer';
import { createStore } from "redux";
import { Provider } from "react-redux";


export const AppContext = createContext();
export const store = createStore(ReduxReducer);

export const AppProvider = ({children}) =>{
    return(
        <AppContext.Provider
            value={{
                products: useReducer(ProductListReducer, productListInitialState),
            }}
        >
            <Provider store={store}>
                {children}
            </Provider>
        </AppContext.Provider>
    )
}

export const useStateValue = () => useContext(AppContext);