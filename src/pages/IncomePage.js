import React, { useContext } from "react";
import "../Expensetracker.css";
import { Balance } from "../components/Balance";
import { GlobalContext } from "../context/GlobalState";
import { AddTransaction } from "../components/AddTransaction";

const Income = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  //const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <Balance />
      <div>
        <h4>Income</h4>
        <p className="money-plus">+GH₵{income}</p>
      </div>
      <AddTransaction />
    </div>
  );
};

export default Income;
