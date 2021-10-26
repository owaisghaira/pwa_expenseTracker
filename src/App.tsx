import React from "react";
import "./App.css";
import {
  AddTransaction,
  Balance,
  Header,
  IncomeExpense,
  Transactions,
} from "./components";
import { GlobalProvider } from "./contextStore/globleState";
const App = () => {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpense />
        <Transactions />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
