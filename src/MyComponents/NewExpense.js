import "./NewExpense.css"
import { useState } from 'react';


function NewExpense(props) {

    const [enteredTitle, settitle] = useState('');
    const [enteredAmount, setamount] = useState('');
    const [enteredDate, setdate] = useState('');
    
    const getExpId = (key) => {
        const data = JSON.parse(localStorage.getItem(key));
        if(data)
            return data.length;
        else return 0;    
    }
    let expID = getExpId("000");

    const titleHandler = (event) => {
        settitle(event.target.value);
    };

    const amountHandler = (event) => {
        setamount(event.target.value);
    };

    const dateHandler = (event) => {
        setdate(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log("Form Submitted")
        const expenseData = {
            'expID' : expID++,
            'title': enteredTitle,
            'date': new Date(enteredDate),
            'amount':Number.isInteger(enteredAmount) ? parseInt(enteredAmount) : parseFloat(enteredAmount)
        };
        props.onAddExpense(expenseData);
        settitle('');
        setamount('');
        setdate('');
    };


    return (
        <div className="new_expense__container">
            <h3 className="new_expense__heading">Add Expense</h3>
            <form onSubmit={formSubmitHandler} className="new_expense__form">
                <div className="new_expense__title">
                    <label htmlFor="title">Title : </label>
                    <input id="title" type="text" value={enteredTitle} onChange={titleHandler} placeholder="Enter title here" required></input>
                </div>

                <div className="new_expense__amount">
                    <label htmlFor="amount">Amount : </label>
                    <input id="amount" type="number" value={enteredAmount} onChange={amountHandler} min="0.1" step="0.001" placeholder="Enter amount in Rupees " required></input>
                </div>

                <div className="new_expense__date">
                    <label htmlFor="date">Date : </label>
                    <input type="date" value={enteredDate} onChange={dateHandler}></input>
                </div>
                <div className="new_expense__submit">
                    <button id="new_expense__btn_submit" type="submit">Add</button>
                </div>
            </form>
        </div>
    );
}

export default NewExpense;