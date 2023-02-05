import { Link } from 'react-router-dom';

import aboutImage1 from '../assets/images/about1.jpg';
import aboutImage2 from '../assets/images/about2.jpg';
import aboutImage3 from '../assets/images/about3.jpg';
import aboutImage4 from '../assets/images/about4.jpg';
import testimonialImage1 from '../assets/images/testimonial1.jpg';
import testimonialImage2 from '../assets/images/testimonial2.jpg';
import testimonialImage3 from '../assets/images/testimonial3.jpg';

export default function AboutComponent() {
    return (
        <>
            <section className="w3l-breadcrumns">
                <div className="wrapper">
                    <ul>
                        <li><Link to="/">Home</Link> <span className="fa fa-angle-double-right"></span></li>
                        <li>About us</li>
                    </ul>
                </div>
            </section>
            <section className="w3l-content-23">
                <div id="content23-block">
                    <div className="wrapper">
                        <div className="content23-head text-center">
                            <h3>We provide comprehensive services to property investors.</h3>
                            <p>Nullam risus libero, euismod non nisi a, lacinia facilisis odio. Integer eleifend, leo vitae gravida iaculis,
                                leo dolor venenatis libero, nec faucibus risus mi quis dolor. In interdum iaculis convallis.
                                Aenean in porttitor erat. Donec non tincidunt ligula. </p>
                        </div>
                        <div className="d-grid content23-col-2 text-center">
                            <div className="content23-grid">
                                <h4><a href="#">Fantastic Homes</a></h4>
                                <p>Nullam risus libero, euismod non nisi a, lacinia facilisis odio. Integer eleifend, leo vitae gravida. </p>
                            </div>
                            <div className="content23-grid1">
                                <h4><a href="#">luxurious Apartments</a></h4>
                                <p>Nullam risus libero, euismod non nisi a, lacinia facilisis odio. Integer eleifend, leo vitae gravida. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w3l-content-photo-7">
                <div className="content-photo_sur">
                    <div className="wrapper">
                        <h3 className="heading-title">Special Deals</h3>
                        <div className="content-photo-1 d-grid">
                            <div className="content-photo-left_sur">
                                <h4>Park avenue apartment for rent</h4>
                                <span className="price">$ 2400 / month</span>
                                <p>Donec vestibulum metus ut eros condimentum, sit amet maximus felis sed et porttitor. Nullam risus libero,
                                    euismod non nisi a, lacinia facilisis odio. Integer eleifend, leo vitae gravida iaculis, leo dolor
                                    venenatis libero, nec faucibus risus mi quis dolor. In interdum iaculis convallis. Aenean in
                                    porttitor erat. Donec non tincidunt ligula leo vitae gravida iaculis ipsum dolor. </p>
                                <a href="properties-single.html">Get this deal</a>
                            </div>
                            <div className="content-photo-right_sur">
                                <div className="csslider infinity" id="slider1">
                                    <input type="radio" name="slides" id="slides_1" defaultChecked />
                                    <input type="radio" name="slides" id="slides_2" />
                                    <input type="radio" name="slides" id="slides_3" />
                                    <input type="radio" name="slides" id="slides_4" />
                                    <ul className="banner_slide_bg">
                                        <li>
                                            <img className="img" src={aboutImage1} alt="" />
                                        </li>
                                        <li>
                                            <img className="img" src={aboutImage2} alt="" />
                                        </li>
                                        <li>
                                            <img className="img" src={aboutImage3} alt="" />
                                        </li>
                                        <li>
                                            <img className="img" src={aboutImage4} alt="" />
                                        </li>
                                    </ul>
                                    <div className="arrows">
                                        <label for="slides_1"></label>
                                        <label for="slides_2"></label>
                                        <label for="slides_3"></label>
                                        <label for="slides_4"></label>
                                    </div>
                                    <div className="navigation">
                                        <div>
                                            <label for="slides_1"></label>
                                            <label for="slides_2"></label>
                                            <label for="slides_3"></label>
                                            <label for="slides_4"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w3l-customers-8">
                <div className="customers-main">
                    <div className="wrapper">
                        <h3 className="heading-title">Testimonials</h3>
                        <div className="customer">
                            <div className="card">
                                <img className="card-img-top" src={testimonialImage1} alt="card image" />
                                    <div className="card-body">
                                        <a href="#" className="customer-link">
                                            <h3 className="card-title">Paul Walkner</h3>
                                        </a>
                                        <p>Customer of estate</p>
                                        <p className="card-text">Nam non enim nisi. Suspendie et potenti. Cras leaeget blandit mi, eu ultrices metus.
                                            pellentes que habitant morbi tristique ut senectus et netus et malesuada fames ac turpis egestas
                                            dolor sit amet.</p>
                                    </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src={testimonialImage2} alt="card image" />
                                    <div className="card-body">
                                        <a href="#" className="customer-link">
                                            <h3 className="card-title">Alexander Smith</h3>
                                        </a>
                                        <p>Customer of estate</p>
                                        <p className="card-text">Nam non enim nisi. Suspendie et potenti. Cras leaeget blandit mi, eu ultrices metus.
                                            pellentes que habitant morbi tristique ut senectus et netus et malesuada fames ac turpis egestas
                                            dolor sit amet.</p>
                                    </div>
                            </div>
                            <div className="card">
                                <img className="card-img-top" src={testimonialImage3} alt="card image" />
                                    <div className="card-body">
                                        <a href="#" className="customer-link">
                                            <h3 className="card-title">Johnson Laura</h3>
                                        </a>
                                        <p>Customer of estate</p>
                                        <p className="card-text">Nam non enim nisi. Suspendie et potenti. Cras leaeget blandit mi, eu ultrices metus.
                                            pellentes que habitant morbi tristique ut senectus et netus et malesuada fames ac turpis egestas
                                            dolor sit amet.</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w3l-specifications-9">
                <div className="main-w3">
                    <div className="wrapper">
                        <div className="d-flex main-cont-wthree-fea">
                            <div className="grids-speci">
                                <h3 className="title-spe">13+</h3>
                                <p>Years of experience</p>
                            </div>
                            <div className="grids-speci midd-eff-spe">
                                <h3 className="title-spe">558</h3>
                                <p>Trusted clients</p>
                            </div>
                            <div className="grids-speci">
                                <h3 className="title-spe">200+</h3>
                                <p>Rented flats in Uk</p>
                            </div>
                            <div className="grids-speci">
                                <h3 className="title-spe">120</h3>
                                <p>Homes owned by customers</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="w3l-content-18">
                <div className="content-main">
                    <div className="wrapper">
                        <div className="content-info">
                            <h3 className="content-title">If you want to know more about company, Contact us</h3>
                            <Link to="/contact" className="contact">Contact us</Link>
                            <Link to="/services" className="read">Read more</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}