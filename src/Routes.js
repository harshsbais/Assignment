import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Employee from './components/Employee'
import AddEmployee from './components/AddEmployee'
import EditEmployee from './components/EditEmployee'
function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Employee} />
                <Route exact path="/add" component={AddEmployee} />
                <Route exact path="/edit/:id" component={EditEmployee} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes