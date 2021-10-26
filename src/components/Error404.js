import { Link } from "react-router-dom"
import { error404Dark } from "../images/images"

function Error404() {
    return(
        <div id="error404">
            <h2 className="section-header">Page not Found</h2>
            <img className="error404-img" src={error404Dark} alt="" />
            <p>You didn't break the internet, but we can't find what you are looking for.</p>
            <Link to="/">
                <button className="gohome-btn">Back to home page</button>
            </Link>
        </div>
    )
}

export default Error404