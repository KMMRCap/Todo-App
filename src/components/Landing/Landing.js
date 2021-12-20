import React from "react";
import { Link } from "react-router-dom";

const Landing = (props) => {
    return (
        <div className="container">
            <div className="row text-center justify-content-center mt-5">
                <h1 className="my-3">Todo App</h1>
                <h2 className="my-3">To use this app, you need to have an account.</h2>
                <h3 className="my-3">Create your account here:</h3>
                <Link to="/signup" className="w-auto">
                    <button className="btn btn-primary my-3">SignUp</button>
                </Link>
                <h3 className="my-3">Already have an account?<br />Log in to your account here:</h3>
                <Link to="/login" className="w-auto">
                    <button className="btn btn-primary my-3">LogIn</button>
                </Link>
            </div>
        </div>
    );
}

export default Landing;