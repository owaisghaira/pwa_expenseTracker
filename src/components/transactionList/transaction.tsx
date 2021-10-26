// import { stat } from "fs";
// import React, { useContext } from "react";
// import { GlobalContext } from "../../contextStore/globleState";
// import "../../App.css";

// function Transactions() {
//   const { state, deleteTransaction } = useContext(GlobalContext);
//   return (

//       <div className="outerContainerTransaction">
//         {state.map((items) => {
//           return (
//             <li className="list" key={items.id}>
//               <button
//                 id="delete-btn"
//                 onClick={() => {
//                   deleteTransaction(items.id);
//                 }}
//               >
//                 X
//               </button>
//               <span>
//                 <h3
//                   className={
//                     parseInt(items.amount) < 0
//                       ? "listItemDetailMinus"
//                       : "listItemDetailPlus"
//                   }
//                 >
//                   {items.text} ( ${items.amount} )
//                 </h3>
//               </span>
//             </li>
//           );
//         })}
//       </div>
//   );
// }

// export default Transactions;
import React, { useContext } from "react";
import { GlobalContext } from "../../contextStore/globleState";
import { reducerStateType } from "../types";
const Transaction = () => {
  const { state, deleteTransaction } = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <hr />
      {state.length != 0 ? (
        <ul className="list">
          {state.map((item: reducerStateType , i: number) => (
            <li key={i}>
              {item.text} <span>{item.amount}</span>
              <button
                onClick={() => deleteTransaction(item.id)}
                className="delete-btn"
              >
                x
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Transaction;
