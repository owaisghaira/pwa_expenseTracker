import React, { useState } from "react";
// import { GlobalContext } from '../ContextStore/GlobalState'

const AddTransaction: React.FC = () => {
  // const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  // const onSubmit = e => {
  //     e.preventDefault();

  //     const newTrans = {
  //         id: Math.floor(Math.random() * 10),
  //         text,
  //         amount: +amount
  //     }
  //     addTransaction(newTrans)
  //     clear()
  // }
  const clear = () => {
      setAmount(0)
      setText('')
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label>
            {" "}
            Enter Description <br />
          </label>

          <input
            type="text"
            required
            value={text}
            onChange={(e:any) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label>
            Amount <br />
            (negative - expense, positive - income) <br />
          </label>
          <input
            type="number"
            required
            value={amount}
            onChange={(e: any) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <input className="btn" type="submit" value="Add transaction" />
      </form>
    </>
  );
};

export default AddTransaction;
