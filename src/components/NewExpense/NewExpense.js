import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExense.css';

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const hideForm = () => {
    setDisplayForm(false);
  };

  const showForm = () => {
    setDisplayForm(true);
  };

  const expenseForm = displayForm ? (
    <ExpenseForm
      onSaveExpenseDate={saveExpenseDateHandler}
      hideForm={hideForm}
    />
  ) : (
    <div className='button-wrapper'>
      <button type='button' onClick={showForm}>
        Add New Expense
      </button>
    </div>
  );

  return <div className='new-expense'>{expenseForm}</div>;
};

export default NewExpense;
