import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  const renderExpenseItem = (value, index) => {
    return (
      <ExpenseItem
        key={index}
        title={value.title}
        amount={value.amount}
        date={value.date}
      />
    );
  };
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }
  return (
    <ul className='expenses-list'>{props.items.map(renderExpenseItem)}</ul>
  );
};

export default ExpensesList;
