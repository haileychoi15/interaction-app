import {HashRouter, Route, Switch} from "react-router-dom";
import Navigation from "./Navigation";
import Home from "../routes/Home";
import React from "react";
import InfiniteScroll from "../routes/InfiniteScroll";
import Ocean from "../routes/Ocean";

function Router() {
    return (
        <HashRouter>
            <Navigation />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/sky">
                    <InfiniteScroll />
                </Route>
                <Route path="/ocean">
                    <Ocean />
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default Router;