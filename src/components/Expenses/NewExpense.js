import { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import Cards from "../UI/Cards";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function NewExpense(props) {
  const [filteredYear, setFilteredYear] = useState("2019");

  const selectYearHandler = (selectedYear) => {
    const year = selectedYear;
    console.log(year);
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter((exp) => {
    return exp.date.getFullYear().toString() === filteredYear;
  });
  let jsxExpense = <p>Nothing here</p>;
  if (filteredExpenses.length > 0) {
    jsxExpense = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <Cards className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onSelectYear={selectYearHandler}
        />
        {jsxExpense}
      </Cards>
    </div>
  );
}

export default NewExpense;
