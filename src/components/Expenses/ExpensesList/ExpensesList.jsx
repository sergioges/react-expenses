import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ filteredExpenses }) => {
    let expensesContent = (
        <h2 className="expenses-list__fallback">Found no expenses</h2>
    );
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((item, index) => (
            <ExpenseItem key={index} expense={item}></ExpenseItem>
        ));
    }

    return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
