import "./ExpenseItem.css";
import { useEffect, useState } from "react";

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.expense.title);
    // const [date, setDate] = useState(new Date(props.expense.date));
    const date = new Date(props.expense.date);
    const [amount, setAmount] = useState(props.expense.amount);

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    useEffect(() => {
        console.log("effect()");
    }, [])

    // const onEditClick = (attr) => {
    //     const newValue = prompt("Enter new " + attr);
    //     if (newValue) {
    //         if (attr === "title")
    //             setTitle(newValue);
    //         else if (attr === "amount")
    //             setAmount(newValue);
    //         props.editFun(props.expense.expID, attr, newValue);
    //     }
    // };

    const onEditClick = () => {
        const newTitle = prompt("Enter new title");
        if (newTitle) {
                setTitle(newTitle)
                props.editFun(props.expense.expID, "title", newTitle);
        }

        const newAmount = prompt("Enter new amount");
        if (newAmount) {
                setAmount(newAmount)
                props.editFun(props.expense.expID, "amount", newAmount);
        }
    };

    const onDeleteClick = (event) => {
        const confirmToDelete = window.confirm("Are you sure, you want to delete?")
        if (confirmToDelete) {
            props.deleteFun(props.expense);
        }
        else
            console.log("Not Deleted");
    }

    return (
        <div className="expenseitem__container">
            <div className="expenseitem__date">
                <div className="expenseitem__date_month">{month}</div>
                <div className="expenseitem__date_day">{day}</div>
                <div className="expenseitem__date_year">{year}</div>
            </div>
            <div className="expenseitem__title">{title}</div>
            <div className="expenseitem__amount">{"₹ " + amount}</div>
            <div className="expenseitem__modify">
                <div className="expenseitem__edit" onClick={onEditClick}>Edit</div>
                {/* <select className="expenseitem__edit" onChange={handleChange}>
                    <option value="" selected disabled hidden>Edit</option>
                    <option value="title">Title</option>
                    <option value="amount">Amount</option>
                </select> */}
                <div className="expenseitem__delete" onClick={onDeleteClick}>Delete</div>
            </div>
        </div>
    );
}

export default ExpenseItem;