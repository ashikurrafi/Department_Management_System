import React from "react";
import Layout from "../Components/Layout/Layout";

const TeacherProfile = () => {
    return (
        <Layout>
            <div>
                {/*====== SEARCH BOX PART START ======*/}
                <div className="search-box">
                    <div className="serach-form">
                        <div className="closebtn">
                            <span />
                            <span />
                        </div>
                        <form action="#">
                            <input
                                type="text"
                                placeholder="Search by keyword"
                            />
                            <button>
                                <i className="fa fa-search" />
                            </button>
                        </form>
                    </div>
                    {/* serach form */}
                </div>
                {/*====== SEARCH BOX PART ENDS ======*/}
                {/*====== PAGE BANNER PART START ======*/}
                <section
                    id="page-banner"
                    className="pt-105 pb-130 bg_cover"
                    data-overlay={8}
                    style={{
                        backgroundImage: "url(assets/images/page-banner-3.jpg)",
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-banner-cont">
                                    <h2>Teachers</h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="#">Home</a>
                                            </li>
                                            <li
                                                className="breadcrumb-item active"
                                                aria-current="page"
                                            >
                                                Teachers
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                                {/* page banner cont */}
                            </div>
                        </div>
                        {/* row */}
                    </div>
                    {/* container */}
                </section>
                {/*====== PAGE BANNER PART ENDS ======*/}
                {/*====== TEACHERS PART START ======*/}
                <section id="teachers-singel" className="pt-70 pb-120 gray-bg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-8">
                                <div className="teachers-left mt-50">
                                    <div className="hero">
                                        <img
                                            src="assets/images/teacher/t-1.jpg"
                                            alt="Teachers"
                                        />
                                    </div>
                                    <div className="name">
                                        <h6>Mark alen</h6>
                                        <span>Vice chencelor</span>
                                    </div>
                                    <div className="social">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-facebook-square" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-twitter-square" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-google-plus-square" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-linkedin-square" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="description">
                                        <p>
                                            Gravida nibh vel velit auctor
                                            aliquetn sollicitudirem quibibendum
                                            auci elit cons equat ipsutis sem
                                            nibh id elit. Duis sed odio sit amet
                                            nibh vulputate..
                                        </p>
                                    </div>
                                </div>
                                {/* teachers left */}
                            </div>
                            <div className="col-lg-8">
                                <div className="teachers-right mt-50">
                                    <ul
                                        className="nav nav-justified"
                                        id="myTab"
                                        role="tablist"
                                    >
                                        <li className="nav-item">
                                            <a
                                                className="active"
                                                id="dashboard-tab"
                                                data-toggle="tab"
                                                href="#dashboard"
                                                role="tab"
                                                aria-controls="dashboard"
                                                aria-selected="true"
                                            >
                                                Dashboard
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                id="courses-tab"
                                                data-toggle="tab"
                                                href="#courses"
                                                role="tab"
                                                aria-controls="courses"
                                                aria-selected="false"
                                            >
                                                Courses
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                id="reviews-tab"
                                                data-toggle="tab"
                                                href="#reviews"
                                                role="tab"
                                                aria-controls="reviews"
                                                aria-selected="false"
                                            >
                                                Reviews
                                            </a>
                                        </li>
                                    </ul>
                                    {/* nav */}
                                    <div
                                        className="tab-content"
                                        id="myTabContent"
                                    >
                                        <div
                                            className="tab-pane fade show active"
                                            id="dashboard"
                                            role="tabpanel"
                                            aria-labelledby="dashboard-tab"
                                        >
                                            <div className="dashboard-cont">
                                                <div className="singel-dashboard pt-40">
                                                    <h5>About</h5>
                                                    <p>
                                                        Lorem ipsum gravida nibh
                                                        vel velit auctor
                                                        aliquetn sollicitudirem
                                                        quibibendum auci elit
                                                        cons equat ipsutis sem
                                                        nibh id elit. Duis sed
                                                        odio sit amet nibh
                                                        vulputate cursus a sit
                                                        amet mauris. Morbi
                                                        accumsan ipsum velit.
                                                        Nam nec tellus .
                                                    </p>
                                                </div>
                                                {/* singel dashboard */}
                                                <div className="singel-dashboard pt-40">
                                                    <h5>Acchivments</h5>
                                                    <p>
                                                        Lorem ipsum gravida nibh
                                                        vel velit auctor
                                                        aliquetn sollicitudirem
                                                        quibibendum auci elit
                                                        cons equat ipsutis sem
                                                        nibh id elit. Duis sed
                                                        odio sit amet nibh
                                                        vulputate cursus a sit
                                                        amet mauris. Morbi
                                                        accumsan ipsum velit.
                                                        Nam nec tellus .
                                                    </p>
                                                </div>
                                                {/* singel dashboard */}
                                                <div className="singel-dashboard pt-40">
                                                    <h5>My Objective</h5>
                                                    <p>
                                                        Lorem ipsum gravida nibh
                                                        vel velit auctor
                                                        aliquetn sollicitudirem
                                                        quibibendum auci elit
                                                        cons equat ipsutis sem
                                                        nibh id elit. Duis sed
                                                        odio sit amet nibh
                                                        vulputate cursus a sit
                                                        amet mauris. Morbi
                                                        accumsan ipsum velit.
                                                        Nam nec tellus .
                                                    </p>
                                                </div>
                                                {/* singel dashboard */}
                                            </div>
                                            {/* dashboard cont */}
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="courses"
                                            role="tabpanel"
                                            aria-labelledby="courses-tab"
                                        >
                                            <div className="courses-cont pt-20">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="singel-course mt-30">
                                                            <div className="thum">
                                                                <div className="image">
                                                                    <img
                                                                        src="assets/images/course/cu-2.jpg"
                                                                        alt="Course"
                                                                    />
                                                                </div>
                                                                <div className="price">
                                                                    <span>
                                                                        $10
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="cont border">
                                                                <ul>
                                                                    <li>
                                                                        <i className="fa fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fa fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fa fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fa fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fa fa-star" />
                                                                    </li>
                                                                </ul>
                                                                <span>
                                                                    (20 Reviws)
                                                                </span>
                                                                <a href="#">
                                                                    <h4>
                                                                        Learn
                                                                        basis
                                                                        javascirpt
                                                                        from
                                                                        start
                                                                        for
                                                                        beginner
                                                                    </h4>
                                                                </a>
                                                                <div className="course-teacher">
                                                                    <div className="thum">
                                                                        <a href="#">
                                                                            <img
                                                                                src="assets/images/course/teacher/t-2.jpg"
                                                                                alt="teacher"
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                    <div className="name">
                                                                        <a href="#">
                                                                            <h6>
                                                                                Mark
                                                                                anthem
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="admin">
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <i className="fa fa-user" />
                                                                                    <span>
                                                                                        31
                                                                                    </span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <i className="fa fa-heart" />
                                                                                    <span>
                                                                                        10
                                                                                    </span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* singel course */}
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="singel-course mt-30">
                                                            <div className="thum">
                                                                <div className="image">
                                                                    <img
                                                                        src="assets/images/course/cu-3.jpg"
                                                                        alt="Course"
                                                                    />
                                                                </div>
                                                                <div className="price">
                                                                    <span>
                                                                        $30
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="cont border">
                                                                <ul>
                                                                    <li>
                                                                        <i className="fa fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fa fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fa fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fa fa-star" />
                                                                    </li>
                                                                    <li>
                                                                        <i className="fa fa-star" />
                                                                    </li>
                                                                </ul>
                                                                <span>
                                                                    (20 Reviws)
                                                                </span>
                                                                <a href="#">
                                                                    <h4>
                                                                        Learn
                                                                        basis
                                                                        javascirpt
                                                                        from
                                                                        start
                                                                        for
                                                                        beginner
                                                                    </h4>
                                                                </a>
                                                                <div className="course-teacher">
                                                                    <div className="thum">
                                                                        <a href="#">
                                                                            <img
                                                                                src="assets/images/course/teacher/t-2.jpg"
                                                                                alt="teacher"
                                                                            />
                                                                        </a>
                                                                    </div>
                                                                    <div className="name">
                                                                        <a href="#">
                                                                            <h6>
                                                                                Mark
                                                                                anthem
                                                                            </h6>
                                                                        </a>
                                                                    </div>
                                                                    <div className="admin">
                                                                        <ul>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <i className="fa fa-user" />
                                                                                    <span>
                                                                                        31
                                                                                    </span>
                                                                                </a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">
                                                                                    <i className="fa fa-heart" />
                                                                                    <span>
                                                                                        10
                                                                                    </span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* singel course */}
                                                    </div>
                                                </div>
                                                {/* row */}
                                            </div>
                                            {/* courses cont */}
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="reviews"
                                            role="tabpanel"
                                            aria-labelledby="reviews-tab"
                                        >
                                            <div className="reviews-cont">
                                                <div className="title">
                                                    <h6>Student Reviews</h6>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <div className="singel-reviews">
                                                            <div className="reviews-author">
                                                                <div className="author-thum">
                                                                    <img
                                                                        src="assets/images/review/r-1.jpg"
                                                                        alt="Reviews"
                                                                    />
                                                                </div>
                                                                <div className="author-name">
                                                                    <h6>
                                                                        Bobby
                                                                        Aktar
                                                                    </h6>
                                                                    <span>
                                                                        April
                                                                        03, 2019
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="reviews-description pt-20">
                                                                <p>
                                                                    There are
                                                                    many
                                                                    variations
                                                                    of passages
                                                                    of Lorem
                                                                    Ipsum
                                                                    available,
                                                                    but the
                                                                    majority
                                                                    have
                                                                    suffered
                                                                    alteration
                                                                    in some
                                                                    form, by
                                                                    injected
                                                                    humour, or
                                                                    randomised
                                                                    words which.
                                                                </p>
                                                                <div className="rating">
                                                                    <ul>
                                                                        <li>
                                                                            <i className="fa fa-star" />
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-star" />
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-star" />
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-star" />
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-star" />
                                                                        </li>
                                                                    </ul>
                                                                    <span>
                                                                        / 5 Star
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* singel reviews */}
                                                    </li>
                                                    <li>
                                                        <div className="singel-reviews">
                                                            <div className="reviews-author">
                                                                <div className="author-thum">
                                                                    <img
                                                                        src="assets/images/review/r-2.jpg"
                                                                        alt="Reviews"
                                                                    />
                                                                </div>
                                                                <div className="author-name">
                                                                    <h6>
                                                                        Humayun
                                                                        Ahmed
                                                                    </h6>
                                                                    <span>
                                                                        April
                                                                        13, 2019
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="reviews-description pt-20">
                                                                <p>
                                                                    There are
                                                                    many
                                                                    variations
                                                                    of passages
                                                                    of Lorem
                                                                    Ipsum
                                                                    available,
                                                                    but the
                                                                    majority
                                                                    have
                                                                    suffered
                                                                    alteration
                                                                    in some
                                                                    form, by
                                                                    injected
                                                                    humour, or
                                                                    randomised
                                                                    words which.
                                                                </p>
                                                                <div className="rating">
                                                                    <ul>
                                                                        <li>
                                                                            <i className="fa fa-star" />
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-star" />
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-star" />
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-star" />
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-star" />
                                                                        </li>
                                                                    </ul>
                                                                    <span>
                                                                        / 5 Star
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* singel reviews */}
                                                    </li>
                                                    <li>
                                                        <div className="singel-reviews">
                                                            <div className="reviews-author">
                                                                <div className="author-thum">
                                                                    <img
                                                                        src="assets/images/review/r-3.jpg"
                                                                        alt="Reviews"
                                                                    />
                                                                </div>
                                                                <div className="author-name">
                                                                    <h6>
                                                                        Tania
                                                                        Aktar
                                                                    </h6>
                                                                    <span>
                                                                        April
                                                                        20, 2019
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="reviews-description pt-20">
                                                                <p>
                                                                    There are
                                                                    many
                                                                    variations
                                                                    of passages
                                                                    of Lorem
                                                                    Ipsum
                                                                    available,
                                                                    but the
                                                                    majority
                                                                    have
                                                                    suffered
                                                                    alteration
                                                                    in some
                                                                    form, by
                                                                    injected
                                                                    humour, or
                                                                    randomised
                                                                    words which.
                                                                </p>
                                                                <div className="rating">
                                                                    <ul>
                                                                        <li>
                                                                            <i className="fa fa-star" />
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-star" />
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-star" />
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-star" />
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-star" />
                                                                        </li>
                                                                    </ul>
                                                                    <span>
                                                                        / 5 Star
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* singel reviews */}
                                                    </li>
                                                </ul>
                                                <div className="title pt-15">
                                                    <h6>Leave A Comment</h6>
                                                </div>
                                                <div className="reviews-form">
                                                    <form action="#">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="form-singel">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Fast name"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="form-singel">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Last Name"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="form-singel">
                                                                    <div className="rate-wrapper">
                                                                        <div className="rate-label">
                                                                            Your
                                                                            Rating:
                                                                        </div>
                                                                        <div className="rate">
                                                                            <div className="rate-item">
                                                                                <i
                                                                                    className="fa fa-star"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </div>
                                                                            <div className="rate-item">
                                                                                <i
                                                                                    className="fa fa-star"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </div>
                                                                            <div className="rate-item">
                                                                                <i
                                                                                    className="fa fa-star"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </div>
                                                                            <div className="rate-item">
                                                                                <i
                                                                                    className="fa fa-star"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </div>
                                                                            <div className="rate-item">
                                                                                <i
                                                                                    className="fa fa-star"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="form-singel">
                                                                    <textarea
                                                                        placeholder="Comment"
                                                                        defaultValue={
                                                                            ""
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="form-singel">
                                                                    <button
                                                                        type="button"
                                                                        className="main-btn"
                                                                    >
                                                                        Post
                                                                        Comment
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* row */}
                                                    </form>
                                                </div>
                                            </div>
                                            {/* reviews cont */}
                                        </div>
                                    </div>
                                    {/* tab content */}
                                </div>
                                {/* teachers right */}
                            </div>
                        </div>
                        {/* row */}
                    </div>
                    {/* container */}
                </section>
                {/*====== EVENTS PART ENDS ======*/}
                {/*====== BACK TO TP PART START ======*/}
                <a href="#" className="back-to-top">
                    <i className="fa fa-angle-up" />
                </a>
                {/*====== BACK TO TP PART ENDS ======*/}
            </div>
        </Layout>
    );
};

export default TeacherProfile;
