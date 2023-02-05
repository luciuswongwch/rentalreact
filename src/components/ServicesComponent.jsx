import { Link } from 'react-router-dom';

import blogImage6 from '../assets/images/blog6.jpg';

export default function ServicesComponent() {
    return (
        <>
            <section className="w3l-breadcrumns">
                <div className="wrapper">
                    <ul>
                        <li><Link href="/">Home</Link> <span className="fa fa-angle-double-right"></span></li>
                        <li>Services</li>
                    </ul>
                </div>
            </section>
            <section className="w3l-features-12">
                <div className="wrapper">
                    <h3 className="heading-title">services we offer</h3>
                    <div className="feature12">
                        <div className="column">
                            <a href="#feature1">
                                <div>
                                    <span className="fa fa-renren"></span>
                                    <h6 className="feature-heading">Properties for rent</h6>
                                    <p className="feature-para">Nullam odio augue, pulvinar non porttitor et, finibus a orci. Mauris at tellus vitae nibh posuere. Cras est ac est semper. Cras mattis est ac est hendrerit semper.</p>
                                </div>
                            </a>
                        </div>
                        <div className="column">
                            <a href="#feature2">
                                <div>
                                    <span className="fa fa-home"></span>
                                    <h6 className="feature-heading">Luxury villas</h6>
                                    <p className="feature-para">Nullam odio augue, pulvinar non porttitor et, finibus a orci. Mauris at tellus vitae nibh posuere. Cras est ac est semper. Cras mattis est ac est hendrerit semper.</p>
                                </div>
                            </a>
                        </div>
                        <div className="column">
                            <a href="#feature3">
                                <div>
                                    <span className="fa fa-building-o"></span>
                                    <h6 className="feature-heading">Estates for sale</h6>
                                    <p className="feature-para">Nullam odio augue, pulvinar non porttitor et, finibus a orci. Mauris at tellus vitae nibh posuere. Cras est ac est semper. Cras mattis est ac est hendrerit semper.</p>
                                </div>
                            </a>
                        </div>
                        <div className="column">
                            <a href="#feature4">
                                <div>
                                    <span className="fa fa-building"></span>
                                    <h6 className="feature-heading">Apartments for sale</h6>
                                    <p className="feature-para">Nullam odio augue, pulvinar non porttitor et, finibus a orci. Mauris at tellus vitae nibh posuere. Cras est ac est semper. Cras mattis est ac est hendrerit semper.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section >

            <section className="w3l-features-with-photo-8">
                <div className="features-with-photo">
                    <div className="wrapper">
                        <div className="features-with-top">
                            <div className="features-with-right">
                                <div className="features-with-right-tp">
                                    <div className="features-with-left1">
                                        <span className="fa fa-renren"></span>
                                    </div>
                                    <div className="features-with-left2">
                                        <a href="#property">
                                            <h6>For sellers</h6>
                                        </a>
                                        <p>Nullam odio augue, pulvinar non porttitor et, finibus a orci. Mauris at posuere duis nec est.</p>
                                    </div>
                                </div>
                                <div className="features-with-right-tp">
                                    <div className="features-with-left1">
                                        <span className="fa fa-ravelry"></span>
                                    </div>
                                    <div className="features-with-left2">
                                        <a href="#property">
                                            <h6>For rentals</h6>
                                        </a>
                                        <p>Nullam odio augue, pulvinar non porttitor et, finibus a orci. Mauris at posuere duis nec est.</p>
                                    </div>
                                </div>
                                <div className="features-with-right-tp">
                                    <div className="features-with-left1">
                                        <span className="fa fa-cubes"></span>
                                    </div>
                                    <div className="features-with-left2">
                                        <a href="#property">
                                            <h6>For Developers</h6>
                                        </a>
                                        <p>Nullam odio augue, pulvinar non porttitor et, finibus a orci. Mauris at posuere duis nec est.</p>
                                    </div>
                                </div>
                                <div className="features-with-right-tp">
                                    <div className="features-with-left1">
                                        <span className="fa fa-life-saver"></span>
                                    </div>
                                    <div className="features-with-left2">
                                        <a href="#property">
                                            <h6>For Properties </h6>
                                        </a>
                                        <p>Nullam odio augue, pulvinar non porttitor et, finibus a orci. Mauris at posuere duis nec est.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="features-with-leftr">
                                <img src={blogImage6} className="img-responsive" alt="ss" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}