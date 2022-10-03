import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>Seems like that page can not be found</p>
            <Link to='/'>Let's go back to the homepage</Link>
        </div>
     );
}
 
export default NotFound;