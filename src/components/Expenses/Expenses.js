import React, { useState } from 'react';
import ExpenseFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';

const ExpenseItemList = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className='expenses'>
      <ExpenseFilter
        selectedYear={filteredYear}
        onChangeYearFilter={filterHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default ExpenseItemList;
