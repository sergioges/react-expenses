import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [expense, setExpense] = useState({
        title: "",
        amount: "",
        date: "",
    });

    const inputChangeHandler = (identifier, value) => {
        setExpense((prevState) => {
            return { ...prevState, [identifier]: value };
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            ...expense,
            amount: +expense.amount,
            date: new Date(expense.date),
        };
        // props y llamas al evento creado en el componente donde se utiliza y pasas los parámetros
        props.onSaveExpenseData(expenseData);
        setExpense({
            title: "",
            amount: "",
            date: "",
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={expense.title}
                        onChange={(event) =>
                            inputChangeHandler("title", event.target.value)
                        }
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        value={expense.amount}
                        onChange={(event) =>
                            inputChangeHandler("amount", event.target.value)
                        }
                        min="0.05"
                        step="0.05"
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        value={expense.date}
                        onChange={(event) =>
                            inputChangeHandler("date", event.target.value)
                        }
                        min="2019-01-01"
                        max="2023-12-31"
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
