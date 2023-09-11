import { useState } from "react";
import Card from "./components/UI/Card/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/Expenses/ExpenseFilter/ExpenseFilter";
import ExpensesList from "./components/Expenses/ExpensesList/ExpensesList";
import ExpensesChart from "./components/Chart/ExpensesChart";

const MOCK_EXPENSES = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: "e2",
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function App() {
    const [expenses, setExpenses] = useState(MOCK_EXPENSES);
    const [filteredYear, setFilteredYear] = useState("all");

    let filterInfoText = "";
    switch (filteredYear) {
        case "2020":
            filterInfoText = "2021, 2022 & 2023";
            break;
        case "2021":
            filterInfoText = "2020, 2022 & 2023";
            break;
        case "2022":
            filterInfoText = "2020, 2021 & 2023";
            break;
        case "2023":
            filterInfoText = "2020, 2021 & 2022";
            break;
        default:
            filterInfoText = "";
            break;
    }

    const yearSeletedHandler = (year) => {
        setFilteredYear(year);
    };

    const addNewExpenseHandler = (newExpense) => {
        setExpenses((prevExpenses) => {
            return [newExpense, ...prevExpenses];
        });
    };

    const filteredExpenses = expenses.filter((expense) => {
        return filteredYear === "all"
            ? expenses
            : expense.date.getFullYear().toString() === filteredYear;
    });

    let yearsFilterContent = null;
    if (filteredYear !== "all") {
        yearsFilterContent = (
            <p style={{ color: "white" }}>
                Data for years {filterInfoText} is hidden.
            </p>
        );
    }

    return (
        <div>
            <NewExpense onNewExpenseAdded={addNewExpenseHandler}></NewExpense>
            <Card className="expenses">
                <ExpenseFilter
                    selected={filteredYear}
                    onSelectFilter={yearSeletedHandler}
                ></ExpenseFilter>
                {yearsFilterContent}
                <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
                <ExpensesList
                    filteredExpenses={filteredExpenses}
                ></ExpensesList>
            </Card>
        </div>
    );
}

export default App;
