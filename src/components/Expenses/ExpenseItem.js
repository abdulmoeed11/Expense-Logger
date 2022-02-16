import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clicks = () => {
    setTitle("Updated");
    console.log(title);
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clicks}>Try</button>
    </div>
  );
}

export default ExpenseItem;
