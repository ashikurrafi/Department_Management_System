import React from "react";
import Layout from "./../Components/Layout/Layout";

const HomePage = () => {
    return (
        <Layout>
            <div>
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
                    {/*====== SLIDER PART START ======*/}
                    <section id="slider-part" className="slider-active">
                        {/* single slider */}
                        <div
                            className="single-slider bg_cover pt-150"
                            style={{
                                backgroundImage:
                                    "url(assets/images/slider/s-3.jpg)",
                            }}
                            data-overlay={4}
                        >
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-7 col-lg-9">
                                        <div className="slider-cont">
                                            <h1
                                                data-animation="bounceInLeft"
                                                data-delay="1s"
                                            >
                                                Choose the right theme for
                                                education
                                            </h1>
                                            <p
                                                data-animation="fadeInUp"
                                                data-delay="1.3s"
                                            >
                                                Donec vitae sapien ut libearo
                                                venenatis faucibus. Nullam quis
                                                ante. Etiam sit amet orci eget
                                                eros faucibus tincidunt Sed
                                                fringilla mauri amet nibh.
                                            </p>
                                            <ul>
                                                <li>
                                                    <a
                                                        data-animation="fadeInUp"
                                                        data-delay="1.6s"
                                                        className="main-btn"
                                                        href="#"
                                                    >
                                                        Read More
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        data-animation="fadeInUp"
                                                        data-delay="1.9s"
                                                        className="main-btn main-btn-2"
                                                        href="#"
                                                    >
                                                        Get Started
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* row */}
                            </div>
                            {/* container */}
                        </div>
                        {/* single slider */}
                    </section>
                    {/*====== SLIDER PART ENDS ======*/}

                    {/*====== ABOUT PART START ======*/}
                    <section id="about-part" className="pt-65">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="section-title mt-50">
                                        <h5>About us</h5>
                                        <h2>Welcome to Edubin </h2>
                                    </div>
                                    {/* section title */}
                                    <div className="about-cont">
                                        <p>
                                            Lorem ipsum gravida nibh vel velit
                                            auctor aliquetn sollicitudirem
                                            quibibendum auci elit cons equat
                                            ipsutis sem nibh id elit. Duis sed
                                            odio sit amet nibh vulputate cursus
                                            a sit amet . Morbi accumsan ipsum
                                            velit. Nam nec tellus a odio
                                            tincidunt mauris. <br /> <br /> auci
                                            elit cons equat ipsutis sem nibh id
                                            elit. Duis sed odio sit amet nibh
                                            vulputate cursus a sit amet . Morbi
                                            accumsan ipsum velit. Nam nec tellus
                                            a odio tincidunt mauris
                                        </p>
                                        <a href="#" className="main-btn mt-55">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                                {/* about cont */}
                                <div className="col-lg-6 offset-lg-1">
                                    <div className="about-event mt-50">
                                        <div className="event-title">
                                            <h3>Upcoming events</h3>
                                        </div>
                                        {/* event title */}
                                        <ul>
                                            <li>
                                                <div className="singel-event">
                                                    <span>
                                                        <i className="fa fa-calendar" />
                                                        2 December 2018
                                                    </span>
                                                    <a href="events-singel.html">
                                                        <h4>
                                                            Campus clean
                                                            workshop
                                                        </h4>
                                                    </a>
                                                    <span>
                                                        <i className="fa fa-clock-o" />
                                                        10:00 Am - 3:00 Pm
                                                    </span>
                                                    <span>
                                                        <i className="fa fa-map-marker" />
                                                        Rc Auditorim
                                                    </span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="singel-event">
                                                    <span>
                                                        <i className="fa fa-calendar" />
                                                        2 December 2018
                                                    </span>
                                                    <a href="events-singel.html">
                                                        <h4>Tech Summit</h4>
                                                    </a>
                                                    <span>
                                                        <i className="fa fa-clock-o" />
                                                        10:00 Am - 3:00 Pm
                                                    </span>
                                                    <span>
                                                        <i className="fa fa-map-marker" />
                                                        Rc Auditorim
                                                    </span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="singel-event">
                                                    <span>
                                                        <i className="fa fa-calendar" />
                                                        2 December 2018
                                                    </span>
                                                    <a href="events-singel.html">
                                                        <h4>
                                                            Enviroement
                                                            conference
                                                        </h4>
                                                    </a>
                                                    <span>
                                                        <i className="fa fa-clock-o" />
                                                        10:00 Am - 3:00 Pm
                                                    </span>
                                                    <span>
                                                        <i className="fa fa-map-marker" />
                                                        Rc Auditorim
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* about event */}
                                </div>
                            </div>
                            {/* row */}
                        </div>
                        {/* container */}
                        <div className="about-bg">
                            <img
                                src="assets/images/about/bg-1.png"
                                alt="About"
                            />
                        </div>
                    </section>
                    {/*====== ABOUT PART ENDS ======*/}
                    {/*====== APPLY PART START ======*/}
                    <section id="apply-aprt" className="pb-120">
                        <div className="container">
                            <div className="apply">
                                <div className="row no-gutters">
                                    <div className="col-lg-6">
                                        <div className="apply-cont apply-color-1">
                                            <h3>Apply for fall 2019</h3>
                                            <p>
                                                Gravida nibh vel velit auctor
                                                aliquetn sollicitudirem sem
                                                quibibendum auci elit cons equat
                                                ipsutis sem nibh id elituis sed
                                                odio sit amet nibh vulputate
                                                cursus equat ipsutis.
                                            </p>
                                            <a href="#" className="main-btn">
                                                Apply Now
                                            </a>
                                        </div>
                                        {/* apply cont */}
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="apply-cont apply-color-2">
                                            <h3>Apply for scholarship</h3>
                                            <p>
                                                Gravida nibh vel velit auctor
                                                aliquetn sollicitudirem sem
                                                quibibendum auci elit cons equat
                                                ipsutis sem nibh id elituis sed
                                                odio sit amet nibh vulputate
                                                cursus equat ipsutis.
                                            </p>
                                            <a href="#" className="main-btn">
                                                Apply Now
                                            </a>
                                        </div>
                                        {/* apply cont */}
                                    </div>
                                </div>
                            </div>
                            {/* row */}
                        </div>
                        {/* container */}
                    </section>
                    {/*====== APPLY PART ENDS ======*/}

                    {/*====== VIDEO FEATURE PART START ======*/}
                    <section
                        id="video-feature"
                        className="bg_cover pt-60 pb-110"
                        style={{
                            backgroundImage: "url(assets/images/bg-1.jpg)",
                        }}
                    >
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-last order-lg-first">
                                    <div className="video text-lg-left text-center pt-50">
                                        <a
                                            className="Video-popup"
                                            href="https://www.youtube.com/watch?v=bRRtdzJH1oE"
                                        >
                                            <i className="fa fa-play" />
                                        </a>
                                    </div>
                                    {/* row */}
                                </div>
                                <div className="col-lg-5 offset-lg-1 order-first order-lg-last">
                                    <div className="feature pt-50">
                                        <div className="feature-title">
                                            <h3>Our Facilities</h3>
                                        </div>
                                        <ul>
                                            <li>
                                                <div className="singel-feature">
                                                    <div className="icon">
                                                        <img
                                                            src="assets/images/all-icon/f-1.png"
                                                            alt="icon"
                                                        />
                                                    </div>
                                                    <div className="cont">
                                                        <h4>
                                                            Global Certificate
                                                        </h4>
                                                        <p>
                                                            Gravida nibh vel
                                                            velit auctor
                                                            aliquetn auci elit
                                                            cons
                                                            solliazcitudirem sem
                                                            quibibendum sem
                                                            nibhutis.
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* singel feature */}
                                            </li>
                                            <li>
                                                <div className="singel-feature">
                                                    <div className="icon">
                                                        <img
                                                            src="assets/images/all-icon/f-2.png"
                                                            alt="icon"
                                                        />
                                                    </div>
                                                    <div className="cont">
                                                        <h4>Alumni Support</h4>
                                                        <p>
                                                            Gravida nibh vel
                                                            velit auctor
                                                            aliquetn auci elit
                                                            cons
                                                            solliazcitudirem sem
                                                            quibibendum sem
                                                            nibhutis.
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* singel feature */}
                                            </li>
                                            <li>
                                                <div className="singel-feature">
                                                    <div className="icon">
                                                        <img
                                                            src="assets/images/all-icon/f-3.png"
                                                            alt="icon"
                                                        />
                                                    </div>
                                                    <div className="cont">
                                                        <h4>
                                                            Books &amp; Library
                                                        </h4>
                                                        <p>
                                                            Gravida nibh vel
                                                            velit auctor
                                                            aliquetn auci elit
                                                            cons
                                                            solliazcitudirem sem
                                                            quibibendum sem
                                                            nibhutis.
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* singel feature */}
                                            </li>
                                        </ul>
                                    </div>
                                    {/* feature */}
                                </div>
                            </div>
                            {/* row */}
                        </div>
                        {/* container */}
                        <div className="feature-bg" /> {/* feature bg */}
                    </section>
                    {/*====== VIDEO FEATURE PART ENDS ======*/}
                    {/*====== TEACHERS PART START ======*/}
                    <section id="teachers-part" className="pt-70 pb-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="section-title mt-50">
                                        <h5>Featured Teachers</h5>
                                        <h2>Meet Our teachers</h2>
                                    </div>
                                    {/* section title */}
                                    <div className="teachers-cont">
                                        <p>
                                            Lorem ipsum gravida nibh vel velit
                                            auctor aliquetn sollicitudirem
                                            quibibendum auci elit cons equat
                                            ipsutis sem nibh id elit. Duis sed
                                            odio sit amet nibh vulputate cursus
                                            a sit amet . Morbi accumsan ipsum
                                            velit. Nam nec tellus a odio
                                            tincidunt mauris. <br /> <br /> auci
                                            elit cons equat ipsutis sem nibh id
                                            elit. Duis sed odio sit amet nibh
                                            vulputate cursus a sit amet . Morbi
                                            accumsan ipsum velit. Nam nec tellus
                                            a odio tincidunt mauris
                                        </p>
                                        <a href="#" className="main-btn mt-55">
                                            Career with us
                                        </a>
                                    </div>
                                    {/* teachers cont */}
                                </div>
                                <div className="col-lg-6 offset-lg-1">
                                    <div className="teachers mt-20">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="singel-teachers mt-30 text-center">
                                                    <div className="image">
                                                        <img
                                                            src="assets/images/teacher/t-1.jpg"
                                                            alt="Teachers"
                                                        />
                                                    </div>
                                                    <div className="cont">
                                                        <a href="/teacher-profile">
                                                            <h6>Mark alen</h6>
                                                        </a>
                                                        <span>
                                                            Vice chencelor
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* singel teachers */}
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="singel-teachers mt-30 text-center">
                                                    <div className="image">
                                                        <img
                                                            src="assets/images/teacher/t-2.jpg"
                                                            alt="Teachers"
                                                        />
                                                    </div>
                                                    <div className="cont">
                                                        <a href="/teacher-profile">
                                                            <h6>David card</h6>
                                                        </a>
                                                        <span>
                                                            Pro chencelor
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* singel teachers */}
                                            </div>
                                            <div className="col-sm-6">
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
                                                        <span>
                                                            Pro chencelor
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* singel teachers */}
                                            </div>
                                            <div className="col-sm-6">
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
                                                        <span>
                                                            Aerobics head
                                                        </span>
                                                    </div>
                                                </div>
                                                {/* singel teachers */}
                                            </div>
                                        </div>
                                        {/* row */}
                                    </div>
                                    {/* teachers */}
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
                        className="bg_cover pt-115 pb-115"
                        data-overlay={8}
                        style={{
                            backgroundImage: "url(assets/images/bg-2.jpg)",
                        }}
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
                                                Aliquetn sollicitudirem
                                                quibibendum auci elit cons equat
                                                ipsutis sem nibh id elit. Duis
                                                sed odio sit amet sem nibh id
                                                elit sollicitudirem
                                            </p>
                                            <h6>Rubina Helen</h6>
                                            <span>Bsc, Engineering</span>
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
                                            <p>
                                                Aliquetn sollicitudirem
                                                quibibendum auci elit cons equat
                                                ipsutis sem nibh id elit. Duis
                                                sed odio sit amet sem nibh id
                                                elit sollicitudirem
                                            </p>
                                            <h6>Rubina Helen</h6>
                                            <span>Bsc, Engineering</span>
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
                                                Aliquetn sollicitudirem
                                                quibibendum auci elit cons equat
                                                ipsutis sem nibh id elit. Duis
                                                sed odio sit amet sem nibh id
                                                elit sollicitudirem
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
                    {/*====== NEWS PART START ======*/}
                    <section id="news-part" className="pt-115 pb-110">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="section-title pb-50">
                                        <h5>Latest News</h5>
                                        <h2>From the news</h2>
                                    </div>
                                    {/* section title */}
                                </div>
                            </div>
                            {/* row */}
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="singel-news mt-30">
                                        <div className="news-thum pb-25">
                                            <img
                                                src="assets/images/news/n-1.jpg"
                                                alt="News"
                                            />
                                        </div>
                                        <div className="news-cont">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-calendar" />
                                                        2 December 2018
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <span>By</span> Adam
                                                        linn
                                                    </a>
                                                </li>
                                            </ul>
                                            <a href="/single-blog">
                                                <h3>
                                                    Tips to grade high cgpa in
                                                    university life
                                                </h3>
                                            </a>
                                            <p>
                                                Lorem ipsum gravida nibh vel
                                                velit auctor aliquetn
                                                sollicitudirem quibibendum auci
                                                elit cons equat ipsutis sem nibh
                                                id elit. Duis sed odio sit amet
                                                nibh vulputate cursus a sit amet
                                                mauris. Morbi accumsan ipsum
                                                velit. Nam nec tellus a odio
                                                tincidunt .
                                            </p>
                                        </div>
                                    </div>
                                    {/* singel news */}
                                </div>
                                <div className="col-lg-6">
                                    <div className="singel-news news-list">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="news-thum mt-30">
                                                    <img
                                                        src="assets/images/news/ns-1.jpg"
                                                        alt="News"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="news-cont mt-30">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa fa-calendar" />
                                                                2 December 2018
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span>By</span>
                                                                Adam linn
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a href="/single-blog">
                                                        <h3>
                                                            Intellectual
                                                            communication
                                                        </h3>
                                                    </a>
                                                    <p>
                                                        Gravida nibh vel velit
                                                        auctor aliquetn
                                                        sollicitudirem
                                                        quibibendum auci elit
                                                        cons vel.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* row */}
                                    </div>
                                    {/* singel news */}
                                    <div className="singel-news news-list">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="news-thum mt-30">
                                                    <img
                                                        src="assets/images/news/ns-2.jpg"
                                                        alt="News"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="news-cont mt-30">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa fa-calendar" />
                                                                2 December 2018
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span>By</span>
                                                                Adam linn
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a href="/single-blog">
                                                        <h3>
                                                            Study makes you
                                                            perfect
                                                        </h3>
                                                    </a>
                                                    <p>
                                                        Gravida nibh vel velit
                                                        auctor aliquetn
                                                        sollicitudirem
                                                        quibibendum auci elit
                                                        cons vel.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* row */}
                                    </div>
                                    {/* singel news */}
                                    <div className="singel-news news-list">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="news-thum mt-30">
                                                    <img
                                                        src="assets/images/news/ns-3.jpg"
                                                        alt="News"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="news-cont mt-30">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="fa fa-calendar" />
                                                                2 December 2018
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span>By</span>
                                                                Adam linn
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <a href="/single-blog">
                                                        <h3>
                                                            Technology edcution
                                                            is now....
                                                        </h3>
                                                    </a>
                                                    <p>
                                                        Gravida nibh vel velit
                                                        auctor aliquetn
                                                        sollicitudirem
                                                        quibibendum auci elit
                                                        cons vel.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* row */}
                                    </div>
                                    {/* singel news */}
                                </div>
                            </div>
                            {/* row */}
                        </div>
                        {/* container */}
                    </section>
                    {/*====== NEWS PART ENDS ======*/}

                    {/*====== BACK TO TP PART START ======*/}
                    <a href="#" className="back-to-top">
                        <i className="fa fa-angle-up" />
                    </a>
                    {/*====== BACK TO TP PART ENDS ======*/}
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
