import ExpenseItem from "./ExpenseItem";
import "./AllExpenses.css";

function AllExpenses(props) {
    const expensesList = props.expenses;
    if (expensesList == null)
        return (
            <div>
                <p>No expense item to see!</p>
            </div>
        );
    return (
        <div>
            {
                expensesList.map((expense) => {
                    return <ExpenseItem key={expense.expID} expense={expense} editFun={props.editFunc} deleteFun={props.deleteFun}></ExpenseItem>;
                })
            }
        </div>
    );
}

export default AllExpenses;