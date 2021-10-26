import React from "react";
import { GlobalContext } from "../../contextStore/globleState";

const Balance = () => {
  const context = React.useContext(GlobalContext);
  console.log(context);
  // const amount = transaction.map(transaction => transaction.amount)
  // const total = amount.reduce((a, b) => (a += b))
  // console.log(total)
  return (
    <>
      <h2>
        Your Balance <br /> 1,000{" "}
      </h2>
    </>
  );
};

export default Balance;
