import React, { createContext, useReducer } from "react";
import AppReducer from "./appReducer";
import {
  contextAPIType,
  reducerStateType,
  reducerActionType,
} from "../components/types";
// const initialState = {
//   transaction: [
//     { id: 1, text: "Flower", amount: -20 },
//     { id: 2, text: "Salary", amount: 300 },
//   ],
// };

// create context
const initialState: contextAPIType = {
  state: [],
  deleteTransaction() {},
  addTransaction() {},
};

export const GlobalContext = createContext(initialState);
const InitialStateReducer: reducerStateType[] = [];
// create provider
export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, InitialStateReducer);

  // Actions
  function addTransaction(transaction: reducerStateType) {
    dispatch({
      type: "ADD",
      payload: transaction,
    });
  }

  function deleteTransaction(id: number) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider value={{ state, deleteTransaction, addTransaction }}>
      {children}
    </GlobalContext.Provider>
  );
};
