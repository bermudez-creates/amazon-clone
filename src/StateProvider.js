import React, { createContext, useContext, useReducer } from 'react';

//prepares data layer
export const StateContext = createContext();

//wraps app + provide data layer to app
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pulls info from data layer
export const useStateValue = () => useContext(StateContext);
  