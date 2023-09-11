import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props)  => {
  const saveExpenseDataHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.floor(Math.random() * 90 + 10).toString()
    };
    props.onNewExpenseAdded(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} ></ExpenseForm>
    </div>
  )
};

export default NewExpense;