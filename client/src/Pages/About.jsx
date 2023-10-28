import React from "react";
import Layout from "./../Components/Layout/Layout";

const About = () => {
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

                {/*====== ABOUT PART START ======*/}
                <section id="about-page" className="pt-70 pb-110">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="section-title mt-50">
                                    <h5>About us</h5>
                                    <h2>Welcome to DCC CSE </h2>
                                </div>
                                {/* section title */}
                                <div className="about-cont">
                                    <p>
                                        Dhaka Commerce College (DCC), an
                                        esteemed institution in Bangladesh, has
                                        consistently excelled in providing
                                        quality education since its
                                        establishment in 1989. Under the
                                        leadership of Professor Dr. Shafiq Ahmed
                                        Siddique, the Chairman of the Governing
                                        Body, DCC introduced the Computer
                                        Science and Engineering (CSE) Program in
                                        2016, aiming to produce skilled
                                        professionals. The program is supported
                                        by a dedicated faculty, state-of-the-art
                                        facilities, and a strong emphasis on
                                        holistic learning through various
                                        extracurricular activities.
                                    </p>
                                </div>
                            </div>
                            {/* about cont */}
                            <div className="col-lg-7">
                                <div className="about-image mt-50">
                                    <img
                                        src="assets/images/about/about-2.jpg"
                                        alt="About"
                                    />
                                </div>
                                {/* about imag */}
                            </div>
                        </div>
                        {/* row */}
                        <div className="about-items pt-60">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-10">
                                    <div className="about-singel-items mt-30">
                                        <span>01</span>
                                        <h4>Why Choose us</h4>
                                        <p>
                                            Enrolling in the B.Sc. (Honours) in
                                            Computer Science and Engineering
                                            program at DCC promises an enriching
                                            educational experience. With a
                                            distinguished faculty, cutting-edge
                                            curriculum, and modern facilities,
                                            students are equipped to navigate
                                            the fast-paced tech industry.
                                            Hands-on labs, competitive events,
                                            and industry collaborations further
                                            enhance practical skills, ensuring
                                            graduates are well-prepared for the
                                            demands of the field.
                                        </p>
                                    </div>
                                    {/* about singel */}
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-10">
                                    <div className="about-singel-items mt-30">
                                        <span>02</span>
                                        <h4>Our Mission</h4>
                                        <p>
                                            Empower students with high-quality
                                            education and industry-relevant
                                            training to excel as proficient IT
                                            professionals. Instill adaptability,
                                            effective communication, and a
                                            strong sense of social and
                                            environmental responsibility for
                                            holistic growth and ethical
                                            engagement in the field.
                                        </p>
                                    </div>
                                    {/* about singel */}
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-10">
                                    <div className="about-singel-items mt-30">
                                        <span>03</span>
                                        <h4>Our vision</h4>
                                        <p>
                                            To be a global hub of cutting-edge
                                            research and education in Computer
                                            Science and Engineering. Producing
                                            innovators and leaders, shaping the
                                            future of technology and industry.
                                        </p>
                                    </div>
                                    {/* about singel */}
                                </div>
                            </div>
                            {/* row */}
                        </div>
                        {/* about items */}
                    </div>
                    {/* container */}
                </section>
                {/*====== ABOUT PART ENDS ======*/}
                {/*====== COUNTER PART START ======*/}
                <div
                    id="counter-part"
                    className="bg_cover pt-65 pb-110"
                    data-overlay={8}
                    style={{ backgroundImage: "url(assets/images/bg-2.jpg)" }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="singel-counter text-center mt-40">
                                    <span>
                                        <span className="counter">350</span>+
                                    </span>
                                    <p>Students enrolled</p>
                                </div>
                                {/* singel counter */}
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="singel-counter text-center mt-40">
                                    <span>
                                        <span className="counter">1</span>
                                    </span>
                                    <p>Professional Program</p>
                                </div>
                                {/* singel counter */}
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="singel-counter text-center mt-40">
                                    <span>
                                        <span className="counter">50</span>+
                                    </span>
                                    <p>People certified</p>
                                </div>
                                {/* singel counter */}
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="singel-counter text-center mt-40">
                                    <span>
                                        <span className="counter">15</span>+
                                    </span>
                                    <p>Teachers</p>
                                </div>
                                {/* singel counter */}
                            </div>
                        </div>
                        {/* row */}
                    </div>
                    {/* container */}
                </div>
                {/*====== COUNTER PART ENDS ======*/}
                {/*====== TEACHERS PART START ======*/}
                <section id="teachers-part" className="pt-65 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="section-title mt-50 pb-35">
                                    <h5>Featured Teachers</h5>
                                    <h2>Meet Our teachers</h2>
                                </div>
                                {/* section title */}
                            </div>
                        </div>
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="singel-teachers mt-30 text-center">
                                    <div className="image">
                                        <img
                                            src="assets/images/teachers/t-1.jpg"
                                            alt="Teachers"
                                        />
                                    </div>
                                    <div className="cont">
                                        <a href="/teacher-profile">
                                            <h6>Md. Abdur Rahman</h6>
                                        </a>
                                        <span>Associate Professor</span>
                                    </div>
                                </div>
                                {/* singel teachers */}
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="singel-teachers mt-30 text-center">
                                    <div className="image">
                                        <img
                                            src="assets/images/teachers/t-2.jpg"
                                            alt="Teachers"
                                        />
                                    </div>
                                    <div className="cont">
                                        <a href="/teacher-profile">
                                            <h6>
                                                Prof. Dr. Md. Miraj Ali Akand
                                            </h6>
                                        </a>
                                        <span>Professor</span>
                                    </div>
                                </div>
                                {/* singel teachers */}
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="singel-teachers mt-30 text-center">
                                    <div className="image">
                                        <img
                                            src="assets/images/teachers/t-3.jpg"
                                            alt="Teachers"
                                        />
                                    </div>
                                    <div className="cont">
                                        <a href="/teacher-profile">
                                            <h6>Anupam Debnath</h6>
                                        </a>
                                        <span>Associate Professor</span>
                                    </div>
                                </div>
                                {/* singel teachers */}
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="singel-teachers mt-30 text-center">
                                    <div className="image">
                                        <img
                                            src="assets/images/teachers/t-4.jpg"
                                            alt="Teachers"
                                        />
                                    </div>
                                    <div className="cont">
                                        <a href="/teacher-profile">
                                            <h6>Narpis Hydar</h6>
                                        </a>
                                        <span>Assistant Professor</span>
                                    </div>
                                </div>
                                {/* singel teachers */}
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="singel-teachers mt-30 text-center">
                                    <div className="image">
                                        <img
                                            src="assets/images/teachers/t-5.jpg"
                                            alt="Teachers"
                                        />
                                    </div>
                                    <div className="cont">
                                        <a href="/teacher-profile">
                                            <h6>Md. Shoaiebur Rahman</h6>
                                        </a>
                                        <span>Assistant Professor</span>
                                    </div>
                                </div>
                                {/* singel teachers */}
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="singel-teachers mt-30 text-center">
                                    <div className="image">
                                        <img
                                            src="assets/images/teachers/t-6.jpg"
                                            alt="Teachers"
                                        />
                                    </div>
                                    <div className="cont">
                                        <a href="/teacher-profile">
                                            <h6>Nazma Akter</h6>
                                        </a>
                                        <span>Assistant Professor</span>
                                    </div>
                                </div>
                                {/* singel teachers */}
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="singel-teachers mt-30 text-center">
                                    <div className="image">
                                        <img
                                            src="assets/images/teachers/t-7.jpg"
                                            alt="Teachers"
                                        />
                                    </div>
                                    <div className="cont">
                                        <a href="/teacher-profile">
                                            <h6>Farzana Akter Ripa</h6>
                                        </a>
                                        <span>Assistant Professor</span>
                                    </div>
                                </div>
                                {/* singel teachers */}
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="singel-teachers mt-30 text-center">
                                    <div className="image">
                                        <img
                                            src="assets/images/teachers/t-8.jpg"
                                            alt="Teachers"
                                        />
                                    </div>
                                    <div className="cont">
                                        <a href="/teacher-profile">
                                            <h6>Mst. Alema Khatun</h6>
                                        </a>
                                        <span>Assistant Professor</span>
                                    </div>
                                </div>
                                {/* singel teachers */}
                            </div>
                        </div>
                        {/* row */}
                    </div>
                    {/* container */}
                </section>
                {/*====== TEACHERS PART ENDS ======*/}
                {/*====== TEASTIMONIAL PART START ======*/}
                <section
                    id="testimonial"
                    className="bg_cover pt-115 pb-120"
                    data-overlay={8}
                    style={{ backgroundImage: "url(assets/images/bg-2.jpg)" }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title pb-40">
                                    <h5>Testimonial</h5>
                                    <h2>What they say</h2>
                                </div>
                                {/* section title */}
                            </div>
                        </div>
                        {/* row */}
                        <div className="row testimonial-slied mt-40">
                            <div className="col-lg-6">
                                <div className="singel-testimonial">
                                    <div className="testimonial-thum">
                                        <img
                                            src="assets/images/testimonial/t-1.jpg"
                                            alt="Testimonial"
                                        />
                                        <div className="quote">
                                            <i className="fa fa-quote-right" />
                                        </div>
                                    </div>
                                    <div className="testimonial-cont">
                                        <p>
                                            Ei khapura! Cinema Koro? ... Ek kg
                                            chaaler bhaat khas? Ongko paros na!
                                        </p>
                                        <h6>Prof. Dr. Md. Miraj Ali Akand</h6>
                                        <span>
                                            Professor, Department of CSE
                                        </span>
                                    </div>
                                </div>
                                {/* singel testimonial */}
                            </div>
                            <div className="col-lg-6">
                                <div className="singel-testimonial">
                                    <div className="testimonial-thum">
                                        <img
                                            src="assets/images/testimonial/t-2.jpg"
                                            alt="Testimonial"
                                        />
                                        <div className="quote">
                                            <i className="fa fa-quote-right" />
                                        </div>
                                    </div>
                                    <div className="testimonial-cont">
                                        <p>Tsk! </p>
                                        <h6>Md. Abdur Rahman</h6>
                                        <span>
                                            Chairman, Associate Professor,
                                            Department of CSE
                                        </span>
                                    </div>
                                </div>
                                {/* singel testimonial */}
                            </div>
                            <div className="col-lg-6">
                                <div className="singel-testimonial">
                                    <div className="testimonial-thum">
                                        <img
                                            src="assets/images/testimonial/t-3.jpg"
                                            alt="Testimonial"
                                        />
                                        <div className="quote">
                                            <i className="fa fa-quote-right" />
                                        </div>
                                    </div>
                                    <div className="testimonial-cont">
                                        <p>
                                            Aliquetn sollicitudirem quibibendum
                                            auci elit cons equat ipsutis sem
                                            nibh id elit. Duis sed odio sit amet
                                            sem nibh id elit sollicitudirem
                                        </p>
                                        <h6>Rubina Helen</h6>
                                        <span>Bsc, Engineering</span>
                                    </div>
                                </div>
                                {/* singel testimonial */}
                            </div>
                        </div>
                        {/* testimonial slied */}
                    </div>
                    {/* container */}
                </section>
                {/*====== TEASTIMONIAL PART ENDS ======*/}

                {/*====== BACK TO TOP PART START ======*/}
                <a href="#" className="back-to-top">
                    <i className="fa fa-angle-up" />
                </a>
                {/*====== BACK TO TOP PART ENDS ======*/}
            </div>
        </Layout>
    );
};

export default About;
