import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header id="header-part">
                <div className="header-top d-none d-lg-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="header-contact text-lg-left text-center">
                                    <ul>
                                        <li>
                                            <img
                                                src="assets/images/all-icon/map.png"
                                                alt="icon"
                                            />
                                            <span>
                                                Dhaka Commerce College Road,
                                                Mirpur, Dhaka-1216
                                            </span>
                                        </li>
                                        <li>
                                            <img
                                                src="assets/images/all-icon/email.png"
                                                alt="icon"
                                            />
                                            <span>dcc.cse16@gmail.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="header-opening-time text-lg-right text-center">
                                    <p>
                                        Opening Hours : Sunday to Thursday - 8
                                        AM to 5 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* row */}
                    </div>
                    {/* container */}
                </div>
                {/* header top */}
                <div className="header-logo-support pt-30 pb-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="logo">
                                    <a href="/">
                                        <img
                                            src="assets/images/logo.png"
                                            alt="Logo"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <div className="support-button float-right d-none d-md-block">
                                    <div className="support float-left">
                                        <div className="icon">
                                            <img
                                                src="assets/images/all-icon/support.png"
                                                alt="icon"
                                            />
                                        </div>
                                        <div className="cont">
                                            <p>Need Help? call us free</p>
                                            <span>+88-02-48033903</span>
                                        </div>
                                    </div>
                                    <div className="button float-left">
                                        <a href="#" className="main-btn">
                                            Apply Now
                                        </a>
                                    </div>
                                    <div className="button float-left">
                                        {/* <NavLink to="#" className="main-btn"> */}
                                        <a href="#" className="main-btn">
                                            Login
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row */}
                    </div>
                    {/* container */}
                </div>
                {/* header logo support */}
                <div className="navigation">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-md-10 col-sm-9 col-8">
                                <nav className="navbar navbar-expand-lg">
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                    {/* <div
                                        className="collapse navbar-collapse sub-menu-bar"
                                        id="navbarSupportedContent"
                                    >
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item">
                                                <a className="active" href="/">
                                                    Home
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a
                                                            className="active"
                                                            href="/"
                                                        >
                                                            Home 01
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">Home 02</a>
                                                    </li>
                                                    <li>
                                                        <a href="/">Home 03</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/about">About us</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="courses.html">
                                                    Courses
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="courses.html">
                                                            Courses
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="courses-singel.html">
                                                            Course Singel
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="events.html">Events</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="events.html">
                                                            Events
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="events-singel.html">
                                                            Event Singel
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/teacher">
                                                    Our teachers
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="/teacher">
                                                            teachers
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/teacher-profile">
                                                            teacher Singel
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/blog">Blog</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="/blog">Blog</a>
                                                    </li>
                                                    <li>
                                                        <a href="/single-blog">
                                                            Blog Singel
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="shop.html">Shop</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="shop.html">
                                                            Shop
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="shop-singel.html">
                                                            Shop Singel
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/contact">Contact</a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="/contact">
                                                            Contact Us
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/contact">
                                                            Contact Us 2
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div> */}
                                    <div
                                        className="collapse navbar-collapse sub-menu-bar"
                                        id="navbarSupportedContent"
                                    >
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item">
                                                <NavLink
                                                    activeClassName="active"
                                                    to="/"
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/about">
                                                    About
                                                </NavLink>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <NavLink to="/about">
                                                            CSE at a glance
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/about">
                                                            Our mission
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="courses-singel.html">
                                                            Our vision
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="courses-singel.html">
                                                            Why us
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/program">
                                                    Program
                                                </NavLink>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <NavLink to="courses.html">
                                                            B.Sc. CSE
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="courses-singel.html">
                                                            M.Sc. CSE
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/notice">
                                                    Notice
                                                </NavLink>
                                                {/* <ul className="sub-menu">
                                                    <li>
                                                        <NavLink to="events.html">
                                                            Events
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="events-singel.html">
                                                            Event Singel
                                                        </NavLink>
                                                    </li>
                                                </ul> */}
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/teacher">
                                                    Our teachers
                                                </NavLink>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <NavLink to="/teacher">
                                                            Departmental teacher
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/teacher">
                                                            non departmental
                                                            teacher
                                                        </NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/routine">
                                                    Routine
                                                </NavLink>
                                                {/* <ul className="sub-menu">
                                                    <li>
                                                        <NavLink to="shop.html">
                                                            Shop
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="shop-singel.html">
                                                            Shop Singel
                                                        </NavLink>
                                                    </li>
                                                </ul> */}
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/blog">
                                                    Blog
                                                </NavLink>
                                                {/* <ul className="sub-menu">
                                                    <li>
                                                        <NavLink to="/blog">
                                                            Blog
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="blog-singel.html">
                                                            Blog Singel
                                                        </NavLink>
                                                    </li>
                                                </ul> */}
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/alumni">
                                                    Alumni
                                                </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="/contact">
                                                    Contact
                                                </NavLink>
                                                {/* <ul className="sub-menu">
                                                    <li>
                                                        <NavLink to="/contact">
                                                            Contact Us
                                                        </NavLink>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/contact">
                                                            Contact Us 2
                                                        </NavLink>
                                                    </li>
                                                </ul> */}
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                {/* nav */}
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-3 col-4">
                                <div className="right-icon text-right">
                                    <ul>
                                        <li>
                                            <a href="#" id="search">
                                                <i className="fa fa-search" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-shopping-bag" />
                                                <span>0</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* right icon */}
                            </div>
                        </div>
                        {/* row */}
                    </div>
                    {/* container */}
                </div>
            </header>
        </div>
    );
};

export default Header;
