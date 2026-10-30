import React from "react";
import {
    Link,
    useLocation,
    useNavigate
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Header_com.css";

function Header_component() {

    const location = useLocation();
    const navigate = useNavigate();

    let currentuser = JSON.parse(
        localStorage.getItem("currentuser") || "null"
    );

    const handleLogout = () => {
        localStorage.removeItem("currentuser");
        navigate("/login");
    };

    const isActive = (path) => {
        return location.pathname === path ? "active" : "";
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar shadow">
            <div className="container">

                {/* Logo / Brand */}
                <Link className="navbar-brand fw-bold" to="/home">
                    <span className="brand-icon">✦</span>
                    TaskManager
                </Link>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarContent"
                >

                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isActive("/home")}`}
                                to="/home"
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isActive("/contact")}`}
                                to="/contact"
                            >
                                Contacts
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className={`nav-link ${isActive("/about")}`}
                                to="/about"
                            >
                                About Us
                            </Link>
                        </li>

                        {/* HR Menu */}
                        {currentuser?.role === "HR" && (
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/assign-task"
                                >
                                    Assign Task
                                </Link>
                            </li>
                        )}

                        {/* Employee Menu */}
                        {currentuser?.role === "EMPLOYEE" && (
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    to="/view-task"
                                >
                                    View Task
                                </Link>
                            </li>
                        )}

                    </ul>

                    {/* Right Side Buttons */}
                    <div className="d-flex flex-column flex-lg-row gap-2">

                        {/* Not Logged In */}
                        {!currentuser && (
                            <>
                                <Link
                                    to="/login"
                                    className="btn login-btn"
                                >
                                    Login
                                </Link>

                                <Link
                                    to="/register"
                                    className="btn register-btn"
                                >
                                    Register
                                </Link>
                            </>
                        )}

                        {/* Logged In */}
                        {currentuser && (
                            <>
                                <span className="user-welcome">
                                    Welcome, {currentuser.username || currentuser.name || "User"}
                                </span>

                                <button
                                    className="btn logout-btn"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </>
                        )}

                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Header_component;