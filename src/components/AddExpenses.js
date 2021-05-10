import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddExpenses = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: -amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <>
      <h3>Add new expense</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Name of expense</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Expense Name..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter expense value..."
          />
        </div>
        <button className="btn">Add expense</button>
      </form>
    </>
  );
};
