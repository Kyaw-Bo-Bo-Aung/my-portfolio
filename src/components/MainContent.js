import Home from "./Home"
import { Switch, Route } from "react-router-dom"
import Portfolio from "./Portfolio"
import Contact from "./contact"

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
                    <Contact />
                </Route>
            </Switch>
        </main>
    )
}

export default MainContent