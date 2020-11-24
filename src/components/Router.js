import {HashRouter, Route, Switch} from "react-router-dom";
import Navigation from "./Navigation";
import Home from "../routes/Home";
import React from "react";
import Sky from "../routes/Sky";
import Sky2 from "../routes/Sky2";
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
                    <Sky />
                </Route>
                <Route path="/sky2">
                    <Sky2 />
                </Route>
                <Route path="/ocean">
                    <Ocean />
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default Router;