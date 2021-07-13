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
  return (
    <Card className='expenses'>
      <ExpenseFilter
        selectedYear={filteredYear}
        onChangeYearFilter={filterHandler}
      />
      {props.expenses.map(renderExpenseItem)}
    </Card>
  );
};

export default ExpenseItemList;
