import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';
const initialState = JSON.parse(localStorage.getItem('transactions')) ||[{"amount":123,"category":"Deposits","type":"Income","date":"2022-07-04","id":"159bf301-b2c6-42b6-9f6d-9082ddf2d11e"},{"amount":100,"category":"Salary","type":"Income","date":"2022-07-11","id":"873483a3-9d65-4fc2-81ac-0ab391705548"}];

export const ExpenseTrackerContext = createContext(initialState);


export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);



  return (
    <ExpenseTrackerContext.Provider value={{
    
      deleteTransaction,
      addTransaction,
      transactions,
      balance
    }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};