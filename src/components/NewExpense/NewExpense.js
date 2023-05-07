import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const editingToggle = () => {
    setIsEditing((prevState => !prevState))
  }

  return <div className="new-expense">
    {isEditing ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={editingToggle}/> : <button onClick={editingToggle}>Add New Expense</button> }
  </div>
}

export default NewExpense;