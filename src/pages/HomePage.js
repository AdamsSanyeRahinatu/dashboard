import React, { useContext } from "react";
import { Balance } from "../components/Balance";
import { TransactionList } from "../components/TransactionList";
import { GlobalContext } from "../context/GlobalState";
import "../Expensetracker.css";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  //const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <>
      <div className="inc-exp-container">
        <Balance />
        <div>
          <h4>Income</h4>
          <p className="money-plus">+GH₵{income}</p>
        </div>
        <div>
          <h4>Expenses</h4>
          <p className="money-minus">-GH₵{expense}</p>
        </div>
        <TransactionList />
      </div>
    </>
  );
};

export default IncomeExpenses;
