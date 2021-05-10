import React, { useContext } from "react";
import { AddExpenses } from "../components/AddExpenses";
import { Balance } from "../components/Balance";
import { GlobalContext } from "../context/GlobalState";
import "../Expensetracker.css";

export const Expenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  //const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <Balance />
        <h4>Expenses</h4>
        <p className="money-minus">-GH₵{expense}</p>
      </div>
      <AddExpenses />
    </div>
  );
};
export default Expenses;
