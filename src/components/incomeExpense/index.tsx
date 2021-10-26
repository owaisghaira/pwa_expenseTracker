import React, { useContext } from "react";
import { GlobalContext } from "../../contextStore/globleState";
import  Balance  from "../balance/index";
const IncomeExpense = () => {
  let income = 0;
  let expense = 0;
  const { state } = useContext(GlobalContext);
  state.map((val) => {
    if (parseInt(val.amount) > 0) {
      income = income + parseInt(val.amount);
    }

    if (parseInt(val.amount) < 0) {
      expense = expense + Math.abs(parseInt(val.amount));
    }

    return null;
  });

  return (
    <>
    <Balance total={income-expense}/>
    <div className="inc-exp-container">
      <div>
        <h3>
          Income <br /> ${income}{" "}
        </h3>
      </div>
      <div>
        <h3>
          Expense <br /> -${expense}{" "}
        </h3>
      </div>
    </div>
    </>
  );
};

export default IncomeExpense;
