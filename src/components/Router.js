import {HashRouter, Route, Switch} from "react-router-dom";
import Navigation from "./Navigation";
import Home from "../routes/Home";
import React from "react";
import InfiniteScroll from "../routes/InfiniteScroll";
import MotionGraphic from "../routes/MotionGraphic";

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
                    <MotionGraphic />
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default Router;