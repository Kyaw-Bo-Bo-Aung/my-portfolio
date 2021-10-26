import Home from "./Home"
import { Switch, Route } from "react-router-dom"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Error404 from "./Error404"

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
                <Route path="*">
                    <Error404 />
                </Route>
            </Switch>
        </main>
    )
}

export default MainContent