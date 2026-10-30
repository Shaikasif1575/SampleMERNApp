import React from "react";
import "./Footer.css";

function Footer_components() {
    return (
        <footer className="custom-footer">
            <div className="container">
                <div className="row align-items-center text-center">

                    {/* Brand */}
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h5 className="footer-brand">
                            ✦ TaskManager
                        </h5>
                        <p className="footer-text">
                            Manage your tasks efficiently.
                        </p>
                    </div>

                    {/* Copyright */}
                    <div className="col-md-4 mb-3 mb-md-0">
                        <p className="copyright-text mb-0">
                            © 2026 Sathya. All Rights Reserved.
                        </p>
                    </div>

                    {/* Footer Links */}
                    <div className="col-md-4">
                        <div className="footer-links">
                            <a href="/home">Home</a>
                            <a href="/about">About</a>
                            <a href="/contact">Contact</a>
                        </div>
                    </div>

                </div>

                <hr className="footer-divider" />

                <p className="footer-bottom mb-0">
                    Designed by ASIF
                </p>
            </div>
        </footer>
    );
}

export default Footer_components;