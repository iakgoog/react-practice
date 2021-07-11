import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './ExpenseItemList.css';

function ExpenseItemList(props) {
  const { expenses } = props;
  return (
    <Card className='expenses'>
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
    </Card>
  );
}

export default ExpenseItemList;
