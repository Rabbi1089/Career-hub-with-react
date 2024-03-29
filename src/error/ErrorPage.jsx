import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1>oops</h1>
            <Link to="/">
            <button className="btn btn-primary">Go BAck To Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;