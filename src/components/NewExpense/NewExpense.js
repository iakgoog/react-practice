import React from 'react';

import ExpenseForm from './ExpenseFrom';
import './NewExense.css';

const NewExpense = (props) => {
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
