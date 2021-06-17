import './App.css';
import { useState } from "react";
import AllExpenses from "./MyComponents/AllExpenses";
import NewExpense from "./MyComponents/NewExpense";

function App() {

  const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
    console.log("Item Saved");
  }

  const getData = (key) => {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  }

  let oldExpenses = [];

  if (getData("000") == null) {
    oldExpenses = [];
  }
  else {
    oldExpenses = getData("000");
  }

  const [expenses, setExpenses] = useState(oldExpenses);


  const addExpenseHandler = (newExpenseData) => {
    const a = [...expenses]
    a.push(newExpenseData)
    setExpenses(a);
    saveData("000", a);
  };

  function findWithAttr(array, attr, value) {
    for (var i = 0; i < array.length; i += 1) {
      if (array[i][attr] === value) {
        return i;
      }
    }
    return -1;
  }

  const deleteExpenseHandler = (item) => {
    const index = findWithAttr(expenses, "expID", item.expID)
    console.log("deleteExpenseHandler() runs");
    console.log("Index to be deleted= ", index);
    const a = [...expenses]
    a.splice(index, 1);
    setExpenses(a);
    saveData("000", a);
  }

  const editExpenseHandler = (expID,attr,value) => {
    const index = findWithAttr(expenses, "expID", expID)
    expenses[index][attr] = value;
    setExpenses(expenses);
    console.log("index = ",index);
    saveData("000", expenses);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <AllExpenses expenses={expenses} editFunc={editExpenseHandler} deleteFun={deleteExpenseHandler}></AllExpenses>
    </div>
  );
}

export default App;
