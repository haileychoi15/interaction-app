import {HashRouter, Route, Switch} from "react-router-dom";
import Navigation from "./Navigation";
import Home from "../routes/Home";
import Percentage from "../routes/Percentage";
import React from "react";
import InfiniteScroll from "../routes/InfiniteScroll";

function Router() {
    return (
        <HashRouter>
            <Navigation />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/a">
                    <Percentage />
                </Route>
                <Route path="/b">
                    <InfiniteScroll />
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default Router;