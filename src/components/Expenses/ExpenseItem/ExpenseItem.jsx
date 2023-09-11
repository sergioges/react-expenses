import Card from "../../UI/Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ expense }) => {
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={expense.date}></ExpenseDate>
                <div className="expense-item__description">
                    <h2>{expense.title}</h2>
                    <div className="expense-item__price">{expense.amount}€</div>
                </div>
            </Card>
        </li>
    );
};

export default ExpenseItem;
