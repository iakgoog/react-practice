import ExpenseItem from './ExpenseItem';

function ExpenseItemList(props) {
  const { expenses } = props;
  return (
    <div className='expenses'>
      {expenses.map((value, index) => {
        return (
          <ExpenseItem
            key={index}
            title={value.title}
            amount={value.amount}
            date={value.date}
          />
        );
      })}
    </div>
  );
}

export default ExpenseItemList;
