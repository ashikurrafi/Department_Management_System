import React from "react";
import Layout from "../Components/Layout/Layout";

const Teacher = () => {
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
                    className="pt-105 pb-110 bg_cover"
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
                <section id="teachers-page" className="pt-90 pb-120 gray-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="singel-teachers mt-30 text-center">
                                    <div className="image">
                                        <img
                                            src="assets/images/teacher/t-1.jpg"
                                            alt="Teachers"
                                        />
                                    </div>
                                    <div className="cont">
                                        <a href="#">
                                            <h6>MarkMark alen</h6>
                                        </a>
                                        <span>Vice chencelor</span>
                                    </div>
                                </div>
                                {/* singel teachers */}
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="singel-teachers mt-30 text-center">
                                    <div className="image">
                                        <img
                                            src="assets/images/teacher/t-2.jpg"
                                            alt="Teachers"
                                        />
                                    </div>
                                    <div className="cont">
                                        <a href="/teacher-profile">
                                            <h6>David card </h6>
                                        </a>
                                        <span>Pro chencelor</span>
                                    </div>
                                </div>
                                {/* singel teachers */}
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="singel-teachers mt-30 text-center">
                                    <div className="image">
                                        <img
                                            src="assets/images/teacher/t-3.jpg"
                                            alt="Teachers"
                                        />
                                    </div>
                                    <div className="cont">
                                        <a href="/teacher-profile">
                                            <h6>Rebeka alig</h6>
                                        </a>
                                        <span>Pro chencelor</span>
                                    </div>
                                </div>
                                {/* singel teachers */}
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="singel-teachers mt-30 text-center">
                                    <div className="image">
                                        <img
                                            src="assets/images/teacher/t-4.jpg"
                                            alt="Teachers"
                                        />
                                    </div>
                                    <div className="cont">
                                        <a href="/teacher-profile">
                                            <h6>Hanna bein</h6>
                                        </a>
                                        <span>Aerobics head</span>
                                    </div>
                                </div>
                                {/* singel teachers */}
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="singel-teachers mt-30 text-center">
                                    <div className="image">
                                        <img
                                            src="assets/images/teacher/t-5.jpg"
                                            alt="Teachers"
                                        />
                                    </div>
                                    <div className="cont">
                                        <a href="/teacher-profile">
                                            <h6>David card </h6>
                                        </a>
                                        <span>Pro chencelor</span>
                                    </div>
                                </div>
                                {/* singel teachers */}
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="singel-teachers mt-30 text-center">
                                    <div className="image">
                                        <img
                                            src="assets/images/teacher/t-6.jpg"
                                            alt="Teachers"
                                        />
                                    </div>
                                    <div className="cont">
                                        <a href="/teacher-profile">
                                            <h6>Mark alen</h6>
                                        </a>
                                        <span>Vice chencelor</span>
                                    </div>
                                </div>
                                {/* singel teachers */}
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="singel-teachers mt-30 text-center">
                                    <div className="image">
                                        <img
                                            src="assets/images/teacher/t-7.jpg"
                                            alt="Teachers"
                                        />
                                    </div>
                                    <div className="cont">
                                        <a href="/teacher-profile">
                                            <h6>Rebeka alig</h6>
                                        </a>
                                        <span>Pro chencelor</span>
                                    </div>
                                </div>
                                {/* singel teachers */}
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="singel-teachers mt-30 text-center">
                                    <div className="image">
                                        <img
                                            src="assets/images/teacher/t-8.jpg"
                                            alt="Teachers"
                                        />
                                    </div>
                                    <div className="cont">
                                        <a href="/teacher-profile">
                                            <h6>Hanna bein</h6>
                                        </a>
                                        <span>Aerobics head</span>
                                    </div>
                                </div>
                                {/* singel teachers */}
                            </div>
                        </div>
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="courses-pagination mt-50">
                                    <ul className="pagination justify-content-center">
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
                        </div>
                        {/* row */}
                    </div>
                    {/* container */}
                </section>
                {/*====== TEACHERS PART ENDS ======*/}
                {/*====== BACK TO TP PART START ======*/}
                <a href="#" className="back-to-top">
                    <i className="fa fa-angle-up" />
                </a>
                {/*====== BACK TO TP PART ENDS ======*/}
            </div>
        </Layout>
    );
};

export default Teacher;
