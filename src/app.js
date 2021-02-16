import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/style.scss";


const ExpenseDashboardPage = () => (
    <div>
    This is from my dashboard component
    </div>
);
const AddExpensePage = () => (
    <div>
    This is to add an expense.
    </div>
);

const routes = (
    <BrowserRouter>
    <div>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} />
    </div>
    </BrowserRouter>

);

ReactDOM.render(routes, document.getElementById('app'));
