import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import AddPage from '../components/AddPage.js';
import EditPage from '../components/EditPage.js';
import HelpPage from '../components/HelpPage.js';
import NotFoundPage from '../components/NotFoundPage.js'
import Header from '../components/Header.js'
    
    
console.log("working ");
    const AppRouter = ()=>(
        <BrowserRouter>
        <div>
        <Header/>
        <Switch>
         <Route path="/" component={ExpenseDashboardPage} exact={true}/>
         <Route path="/create" component={AddPage}/>
         <Route path="/edit/:id" component={EditPage} exact={true}/>
         <Route path="/help" component={HelpPage} exact={true}/>
         <Route  component={NotFoundPage}/>
        </Switch>
        </div>
        </BrowserRouter>
    );

    export default AppRouter;
    