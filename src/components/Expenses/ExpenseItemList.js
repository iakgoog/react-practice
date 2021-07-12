import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import './ExpenseItemList.css';

const ExpenseItemList = (props) => {
  const { expenses } = props;
  const getFilteredExpenseByYear = (year) =>
    expenses.filter((item) => item.date.getFullYear().toString() === year);
  const [filteredYear, setFilteredYear] = useState('2020');
  const [expenseList, setExpenseList] = useState(
    getFilteredExpenseByYear(filteredYear)
  );
  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    setExpenseList(getFilteredExpenseByYear(selectedYear));
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
      {expenseList.map(renderExpenseItem)}
    </Card>
  );
};

export default ExpenseItemList;
