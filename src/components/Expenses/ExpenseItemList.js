import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './ExpenseItemList.css';

const ExpenseItemList = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
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
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  let expensesContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(renderExpenseItem);
  }
  return (
    <Card className='expenses'>
      <ExpenseFilter
        selectedYear={filteredYear}
        onChangeYearFilter={filterHandler}
      />
      {expensesContent}
    </Card>
  );
};

export default ExpenseItemList;
