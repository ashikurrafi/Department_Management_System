import React from "react";
import Layout from "./../Components/Layout/Layout";

const Blog = () => {
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
                                    <h2>Blog</h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="#">Home</a>
                                            </li>
                                            <li
                                                className="breadcrumb-item active"
                                                aria-current="page"
                                            >
                                                Blog
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
                <section id="blog-page" className="pt-90 pb-120 gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="singel-blog mt-30">
                                    <div className="blog-thum">
                                        <img
                                            src="assets/images/blog/b-1.jpg"
                                            alt="Blog"
                                        />
                                    </div>
                                    <div className="blog-cont">
                                        <a href="/single-blog">
                                            <h3>
                                                Few tips for get better results
                                                in examination
                                            </h3>
                                        </a>
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
                                        </p>
                                    </div>
                                </div>
                                {/* singel blog */}
                                <div className="singel-blog mt-30">
                                    <div className="blog-thum">
                                        <img
                                            src="assets/images/blog/b-2.jpg"
                                            alt="Blog"
                                        />
                                    </div>
                                    <div className="blog-cont">
                                        <a href="/single-blog">
                                            <h3>
                                                Few tips for get better results
                                                in examination
                                            </h3>
                                        </a>
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
                                        </p>
                                    </div>
                                </div>
                                {/* singel blog */}
                                <nav className="courses-pagination mt-50">
                                    <ul className="pagination justify-content-lg-end justify-content-center">
                                        <li className="page-item">
                                            <a href="#" aria-label="Previous">
                                                <i className="fa fa-angle-left" />
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="active" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#">3</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#" aria-label="Next">
                                                <i className="fa fa-angle-right" />
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                {/* courses pagination */}
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
                {/*====== BACK TO TOP PART START ======*/}
                <a href="#" className="back-to-top">
                    <i className="fa fa-angle-up" />
                </a>
                {/*====== BACK TO TOP PART ENDS ======*/}
            </div>
        </Layout>
    );
};

export default Blog;
