import React, { useState } from "react";
import Expenseform from "./Expenseform";
import "./NewInput.css";
function NewInput(props) {
  const [addNewexpense, setAddNewExpense] = useState(false);
  const saveExpenseItemHandler = (enteredExpenseData) => {
    const expense = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expense);
    props.onSubmitExpenseForm(expense);
    setAddNewExpense(false);
  };

  const cancelExpenseHandler = () => {
    setAddNewExpense(false);
  };

  const addNewListener = () => {
    setAddNewExpense(true);
  };

  return (
    <div className="new-expense">
      {!addNewexpense ? (
        <button onClick={addNewListener}>Add New Expense</button>
      ) : (
        <Expenseform
          onSaveExpenseItem={saveExpenseItemHandler}
          onCancelExpense={cancelExpenseHandler}
        />
      )}
    </div>
  );
}

export default NewInput;
