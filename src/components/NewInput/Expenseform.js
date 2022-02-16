import React, { useState } from "react";
import "./Expenseform.css";

function Expenseform(props) {
  const [exptitle, setExpTitle] = useState("");
  const [expamount, setAmount] = useState("");
  const [expdate, setDate] = useState("");

  const titleListener = (event) => {
    setExpTitle(event.target.value);
  };

  const amountListener = (event) => {
    setAmount(event.target.value);
  };

  const dateListener = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expense = {
      title: exptitle,
      amount: expamount,
      date: new Date(expdate),
    };
    console.log(expense);
    props.onSaveExpenseItem(expense);
    setExpTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new_expense__control">
          <label>Title</label>
          <input type="text" onChange={titleListener} value={exptitle}></input>
        </div>
        <div className="new_expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountListener}
            value={expamount}
          ></input>
        </div>
        <div className="new_expense__control">
          <label>Date</label>
          <input type="date" onChange={dateListener} value={expdate}></input>
        </div>
      </div>
      <button
        type="button"
        className="new-expense__actions"
        onClick={() => props.onCancelExpense()}
      >
        Cancel
      </button>
      <button type="submit" className="new-expense__actions">
        Submit
      </button>
    </form>
  );
}

export default Expenseform;
