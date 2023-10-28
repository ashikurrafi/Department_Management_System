import React from "react";
import Layout from "./../Components/Layout/Layout";

const SingleBlog = () => {
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
                        backgroundImage: "url(assets/images/page-banner-4.jpg)",
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-banner-cont">
                                    <h2>Few tips for get better</h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="#">Home</a>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <a href="#">Blog</a>
                                            </li>
                                            <li
                                                className="breadcrumb-item active"
                                                aria-current="page"
                                            >
                                                Few tips for get better
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
                {/*====== BLOG PART START ======*/}
                <section id="blog-singel" className="pt-90 pb-120 gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="blog-details mt-30">
                                    <div className="thum">
                                        <img
                                            src="assets/images/blog/b-1.jpg"
                                            alt="Blog Details"
                                        />
                                    </div>
                                    <div className="cont">
                                        <h3>
                                            Few tips for get better results in
                                            examination
                                        </h3>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-calendar" />
                                                    25 Dec 2018
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-user" />
                                                    Mark anthem
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-tags" />
                                                    Education
                                                </a>
                                            </li>
                                        </ul>
                                        <p>
                                            Lorem ipsum gravida nibh vel velit
                                            auctor aliquetn sollicitudirem
                                            quibibendum auci elit cons equat
                                            ipsutis sem nibh id elit. Duis sed
                                            odio sit amet nibh vulputate cursus
                                            a sit amet mauris. Morbi accumsan
                                            ipsum velit. Nam nec tellus .
                                            <br />
                                            <br />
                                            gravida nibh vel velit auctor
                                            aliquetn sollicitudirem quibibendum
                                            auci elit cons equat ipsutis sem
                                            nibh id elit. Duis sed odio sit amet
                                            nibh vulputate cursus a sit amet
                                            mauris. Morbi accumsan ipsum velit.
                                            Nam nec tellus .
                                            <br />
                                            <br />
                                            gravida nibh vel velit auctor
                                            aliquetn sollicitudirem quibibendum
                                            auci elit cons equat ipsutis sem
                                            nibh id elit. Duis sed odio sit amet
                                            nibh vulputate cursus a sit amet
                                            mauris. Morbi accumsan ipsum velit.
                                            Nam nec tellus .
                                        </p>
                                        <ul className="share">
                                            <li className="title">Share :</li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-google-plus" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-linkedin" />
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="blog-comment pt-45">
                                            <div className="title pb-15">
                                                <h3>Comment (3)</h3>
                                            </div>
                                            {/* title */}
                                            <ul>
                                                <li>
                                                    <div className="comment">
                                                        <div className="comment-author">
                                                            <div className="author-thum">
                                                                <img
                                                                    src="assets/images/review/r-1.jpg"
                                                                    alt="Reviews"
                                                                />
                                                            </div>
                                                            <div className="comment-name">
                                                                <h6>
                                                                    Bobby Aktar
                                                                </h6>
                                                                <span>
                                                                    April 03,
                                                                    2019
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="comment-description pt-20">
                                                            <p>
                                                                There are many
                                                                variations of
                                                                passages of
                                                                Lorem Ipsum
                                                                available, but
                                                                the majority
                                                                have suffered
                                                                alteration in
                                                                some form, by
                                                                injected humour,
                                                                or randomised
                                                                words which.
                                                            </p>
                                                        </div>
                                                        <div className="comment-replay">
                                                            <a href="#">
                                                                Reply
                                                            </a>
                                                        </div>
                                                    </div>
                                                    {/* comment */}
                                                    <ul className="replay">
                                                        <li>
                                                            <div className="comment">
                                                                <div className="comment-author">
                                                                    <div className="author-thum">
                                                                        <img
                                                                            src="assets/images/review/r-2.jpg"
                                                                            alt="Reviews"
                                                                        />
                                                                    </div>
                                                                    <div className="comment-name">
                                                                        <h6>
                                                                            Humayun
                                                                            Ahmed
                                                                        </h6>
                                                                        <span>
                                                                            April
                                                                            03,
                                                                            2019
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-description pt-20">
                                                                    <p>
                                                                        There
                                                                        are many
                                                                        variations
                                                                        of
                                                                        passages
                                                                        of Lorem
                                                                        Ipsum
                                                                        available,
                                                                        but the
                                                                        majority
                                                                        have
                                                                        suffered
                                                                        alteration
                                                                        in some
                                                                        form.
                                                                    </p>
                                                                </div>
                                                                <div className="comment-replay">
                                                                    <a href="#">
                                                                        Reply
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            {/* comment */}
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="comment">
                                                        <div className="comment-author">
                                                            <div className="author-thum">
                                                                <img
                                                                    src="assets/images/review/r-3.jpg"
                                                                    alt="Reviews"
                                                                />
                                                            </div>
                                                            <div className="comment-name">
                                                                <h6>
                                                                    Bobby Aktar
                                                                </h6>
                                                                <span>
                                                                    April 03,
                                                                    2019
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="comment-description pt-20">
                                                            <p>
                                                                There are many
                                                                variations of
                                                                passages of
                                                                Lorem Ipsum
                                                                available, but
                                                                the majority
                                                                have suffered
                                                                alteration in
                                                                some form, by
                                                                injected humour,
                                                                or randomised
                                                                words which.
                                                            </p>
                                                        </div>
                                                        <div className="comment-replay">
                                                            <a href="#">
                                                                Reply
                                                            </a>
                                                        </div>
                                                    </div>
                                                    {/* comment */}
                                                </li>
                                            </ul>
                                            <div className="title pt-45 pb-25">
                                                <h3>Leave a comment</h3>
                                            </div>
                                            {/* title */}
                                            <div className="comment-form">
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-singel">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Name"
                                                                />
                                                            </div>
                                                            {/* form singel */}
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-singel">
                                                                <input
                                                                    type="email"
                                                                    placeholder="email"
                                                                />
                                                            </div>
                                                            {/* form singel */}
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-singel">
                                                                <textarea
                                                                    placeholder="Comment"
                                                                    defaultValue={
                                                                        ""
                                                                    }
                                                                />
                                                            </div>
                                                            {/* form singel */}
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-singel">
                                                                <button className="main-btn">
                                                                    Submit
                                                                </button>
                                                            </div>
                                                            {/* form singel */}
                                                        </div>
                                                    </div>
                                                    {/* row */}
                                                </form>
                                            </div>
                                            {/* comment-form */}
                                        </div>
                                        {/* blog comment */}
                                    </div>
                                    {/* cont */}
                                </div>
                                {/* blog details */}
                            </div>
                            <div className="col-lg-4">
                                <div className="saidbar">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6">
                                            <div className="saidbar-search mt-30">
                                                <form action="#">
                                                    <input
                                                        type="text"
                                                        placeholder="Search"
                                                    />
                                                    <button type="button">
                                                        <i className="fa fa-search" />
                                                    </button>
                                                </form>
                                            </div>
                                            {/* saidbar search */}
                                            <div className="categories mt-30">
                                                <h4>Categories</h4>
                                                <ul>
                                                    <li>
                                                        <a href="#">Fronted</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Backend</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Photography
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Teachnology
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">GMET</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Language</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Science</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Accounting
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* categories */}
                                        <div className="col-lg-12 col-md-6">
                                            <div className="saidbar-post mt-30">
                                                <h4>Popular Posts</h4>
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <div className="singel-post">
                                                                <div className="thum">
                                                                    <img
                                                                        src="assets/images/blog/blog-post/bp-1.jpg"
                                                                        alt="Blog"
                                                                    />
                                                                </div>
                                                                <div className="cont">
                                                                    <h6>
                                                                        Introduction
                                                                        to
                                                                        languages
                                                                    </h6>
                                                                    <span>
                                                                        20 Dec
                                                                        2018
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {/* singel post */}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div className="singel-post">
                                                                <div className="thum">
                                                                    <img
                                                                        src="assets/images/blog/blog-post/bp-2.jpg"
                                                                        alt="Blog"
                                                                    />
                                                                </div>
                                                                <div className="cont">
                                                                    <h6>
                                                                        How to
                                                                        build a
                                                                        game
                                                                        with
                                                                        java
                                                                    </h6>
                                                                    <span>
                                                                        10 Dec
                                                                        2018
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {/* singel post */}
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <div className="singel-post">
                                                                <div className="thum">
                                                                    <img
                                                                        src="assets/images/blog/blog-post/bp-1.jpg"
                                                                        alt="Blog"
                                                                    />
                                                                </div>
                                                                <div className="cont">
                                                                    <h6>
                                                                        Basic
                                                                        accounting
                                                                        from
                                                                        primary
                                                                    </h6>
                                                                    <span>
                                                                        07 Dec
                                                                        2018
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            {/* singel post */}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* saidbar post */}
                                        </div>
                                    </div>
                                    {/* row */}
                                </div>
                                {/* saidbar */}
                            </div>
                        </div>
                        {/* row */}
                    </div>
                    {/* container */}
                </section>
                {/*====== BLOG PART ENDS ======*/}
                {/*====== BACK TO TP PART START ======*/}
                <a href="#" className="back-to-top">
                    <i className="fa fa-angle-up" />
                </a>
                {/*====== BACK TO TP PART ENDS ======*/}
            </div>
        </Layout>
    );
};

export default SingleBlog;
