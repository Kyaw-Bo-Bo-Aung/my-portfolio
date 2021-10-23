import Home from "./Home"
import { Switch, Route } from "react-router-dom"
import Portfolio from "./Portfolio"

function MainContent() {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/portfolio">
                    <Portfolio />
                </Route>
                <Route path="/contact">
                    <div>contact</div>
                </Route>
            </Switch>
        </main>
    )
}

export default MainContent