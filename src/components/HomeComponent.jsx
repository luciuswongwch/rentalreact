import { useEffect, useState } from 'react';
import { getPropertiesHomePage } from '../api/PropertyApiService';
import useScript from '../hooks/useScript';

export default function HomeComponent() {

    // const [properties, setProperties] = useState([]);

    // useEffect(() => {
    //     getPropertiesHomePage()
    //         .then(response => {
    //             setProperties(response.data);
    //         })
    //         .catch(error => console.log(error));
    // })

    const properties = [
        { id: 1, title: "property title 1", imagePath: "/assets/images/slide1.jpg", description: "property description 1", monthlyRent: 1200, numberOfBeds: 3, numberOfBaths: 3, squareFeet: 240 },
        { id: 2, title: "property title 2", imagePath: "/assets/images/slide2.jpg", description: "property description 2", monthlyRent: 1200, numberOfBeds: 3, numberOfBaths: 3, squareFeet: 240 },
        { id: 3, title: "property title 3", imagePath: "/assets/images/property1.jpg", description: "property description 3", monthlyRent: 1200, numberOfBeds: 3, numberOfBaths: 3, squareFeet: 240 },
        { id: 4, title: "property title 4", imagePath: "/assets/images/property2.jpg", description: "property description 4", monthlyRent: 1200, numberOfBeds: 3, numberOfBaths: 3, squareFeet: 240 },
        { id: 5, title: "property title 5", imagePath: "/assets/images/property3.jpg", description: "property description 5", monthlyRent: 1200, numberOfBeds: 3, numberOfBaths: 3, squareFeet: 240 },
        { id: 6, title: "property title 6", imagePath: "/assets/images/property4.jpg", description: "property description 6", monthlyRent: 1200, numberOfBeds: 3, numberOfBaths: 3, squareFeet: 240 },
        { id: 7, title: "property title 7", imagePath: "/assets/images/property5.jpg", description: "property description 7", monthlyRent: 1200, numberOfBeds: 3, numberOfBaths: 3, squareFeet: 240 }
    ];

    // const areas = [
    //     {id: 1, name: "New Jersey", descriptiomot: "Perfect City!", numberOfProperties: 8},
    //     {id: 2, name: "Paris", descriptiomot: "Best Place to live", numberOfProperties: 8},
    //     {id: 3, name: "London", descriptiomot: "Perfect City!", numberOfProperties: 15},
    //     {id: 4, name: "Japan", descriptiomot: "Best Place to live", numberOfProperties: 28},
    //     {id: 5, name: "France", descriptiomot: "Perfect City!", numberOfProperties: 12}
    // ]

    const testimonials = [

    ]

    return (
        <>
            <section className="w3l-covers-4">
                <div id="covers4-block">
                    <div className="main-slider">
                        <div className="csslider infinity" id="slider1">
                            <input type="radio" name="slides" id="slides_1" defaultChecked />
                            <input type="radio" name="slides" id="slides_2" />
                            <input type="radio" name="slides" id="slides_3" />
                            <ul>
                                <li className="slider-bg-1">
                                    <div className="slider-info-wrapper">
                                        <div className="slider-info">
                                            <div className="d-grid slide-two-col">
                                                <div className="slide-left-text">
                                                    <h3>Find your perfect home </h3>
                                                    <h3><span>starting from $ 750</span></h3>
                                                    <p>Aliquam commodo finibus metus et tristique. Suspendisse luctus vel libero id sollicitudin.
                                                        Morbi cursus dolor lacus, quis efficitur justo auctor in. Pellentesque bibendum sit amet ante
                                                        non scelerisque. In faucibus eget odio at commodo.</p>
                                                    <a href="properties.html" className="btn button-style">Get Started</a>
                                                    <a href="contact.html" className="btn button-style1">Contact us</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="slider-bg-2">
                                    <div className="slider-info-wrapper">
                                        <div className="slider-info">
                                            <div className="d-grid slide-two-col">
                                                <div className="slide-left-text">
                                                    <h3>Apartment for sale </h3>
                                                    <h3><span>starting from $ 750</span></h3>
                                                    <p>Aliquam commodo finibus metus et tristique. Suspendisse luctus vel libero id sollicitudin.
                                                        Morbi cursus dolor lacus, quis efficitur justo auctor in. Pellentesque bibendum sit amet ante
                                                        non scelerisque. In faucibus eget odio at commodo.</p>
                                                    <a href="properties.html" className="btn button-style">Get Started</a>
                                                    <a href="contact.html" className="btn button-style1">Contact us</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="slider-bg-3">
                                    <div className="slider-info-wrapper">
                                        <div className="slider-info">
                                            <div className="d-grid slide-two-col">
                                                <div className="slide-left-text">
                                                    <h3>Villa of your dreams</h3>
                                                    <h3><span>starting from $ 750</span></h3>
                                                    <p>Aliquam commodo finibus metus et tristique. Suspendisse luctus vel libero id sollicitudin.
                                                        Morbi cursus dolor lacus, quis efficitur justo auctor in. Pellentesque bibendum sit amet ante
                                                        non scelerisque. In faucibus eget odio at commodo.</p>
                                                    <a href="properties.html" className="btn button-style">Get Started</a>
                                                    <a href="contact.html" className="btn button-style1">Contact us</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="arrows">
                                <label for="slides_1"></label>
                                <label for="slides_2"></label>
                                <label for="slides_3"></label>
                            </div>
                            <div className="navigation">
                                <div>
                                    <label for="slides_1"></label>
                                    <label for="slides_2"></label>
                                    <label for="slides_3"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w3l-feature-8">
                <div className="features-main">
                    <div className="wrapper">
                        <div className="features">
                            <div className="feature-1">
                                <div className="feature-body">
                                    <div className="feature-images">
                                        <span className="fa fa-rebel"></span>
                                    </div>
                                    <div className="feature-info">
                                        <a href="#property">
                                            <h3 className="feature-titel">Design</h3>
                                            <p className="feature-text">Vivamus id tempor nisl. Nulla a nibh sodales, interdum sapien at, sodales
                                                metus. Curabitur aliquam feugiat metus, vel ipsum semper ut.</p></a>
                                    </div>
                                </div>
                            </div>
                            <div className="feature-2">
                                <div className="feature-body">
                                    <div className="feature-images">
                                        <span className="fa fa-line-chart"></span>
                                    </div>
                                    <div className="feature-info">
                                        <a href="#property">
                                            <h3 className="feature-titel">Strategy</h3>
                                            <p className="feature-text">Vivamus id tempor nisl. Nulla a nibh sodales, interdum sapien at, sodales
                                                metus. Curabitur aliquam feugiat metus, vel ipsum semper ut.</p></a>
                                    </div>
                                </div>
                            </div>
                            <div className="feature-3">
                                <div className="feature-body">
                                    <div className="feature-images">
                                        <span className="fa fa-rocket"></span>
                                    </div>
                                    <div className="feature-info">
                                        <a href="#property">
                                            <h3 className="feature-titel">Marketing</h3>
                                            <p className="feature-text">Vivamus id tempor nisl. Nulla a nibh sodales, interdum sapien at, sodales
                                                metus. Curabitur aliquam feugiat metus, vel ipsum semper ut.</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w3l-grids-4">
                <div id="grids4-block">
                    <div className="wrapper">
                        <h3 className="heading-title">Properties available for rent</h3>
                        <div className="owl-carousel owl-theme">
                            {
                                properties.map(
                                    property => (
                                        <div className="item" key={property.id}>
                                            <div className="grids4-info">
                                                <a href="properties-single.html"><img src={property.imagePath} alt="" /></a>
                                                <div className="info-bg">
                                                    <h5><a href="properties-single.html">{property.title}</a></h5>
                                                    <span className="price">$ {property.monthlyRent}/month</span>
                                                    <p>{property.description}</p>
                                                    <ul>
                                                        <li><span className="fa fa-bed"></span> {property.numberOfBeds}</li>
                                                        <li><span className="fa fa-bath"></span> {property.numberOfBaths}</li>
                                                        <li><span className="fa fa-share-square-o"></span> {property.squareFeet} sq ft</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className="w3l-grids-9">
                <div className="grid-top-9">
                    <div className="wrapper">
                        <h3 className="heading-title">Properties by area</h3>
                        <div className="d-grid grid-col-2 grid-element-9">
                            <div className="left-grid-ele-9 grid-bg1">
                                <div className="sub-wid-grid-9">
                                    <h4 className="text-grid-9"><a href="properties-single.html">New Jersy</a></h4>
                                    <p className="sub-para">Perfect City!</p>
                                    <span>8 properties</span>
                                </div>
                            </div>
                            <div className="left-grid-ele-9 grid-bg2">
                                <div className="sub-wid-grid-9">
                                    <h4 className="text-grid-9"><a href="properties-single.html">Paris</a></h4>
                                    <p className="sub-para">Best Place to live</p>
                                    <span>8 properties</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-grid grid-col-3 grid-element-9 margin-top">
                            <div className="left-grid-ele-9 grid-bg3">
                                <div className="sub-wid-grid-9">
                                    <h4 className="text-grid-9"><a href="properties-single.html">London</a></h4>
                                    <p className="sub-para">Perfect City!</p>
                                    <span>15 properties</span>
                                </div>
                            </div>
                            <div className="left-grid-ele-9 grid-bg4">
                                <div className="sub-wid-grid-9">
                                    <h4 className="text-grid-9"><a href="properties-single.html">Japan</a></h4>
                                    <p className="sub-para">Best Place to live</p>
                                    <span>28 properties</span>
                                </div>
                            </div>
                            <div className="left-grid-ele-9 grid-bg5">
                                <div className="sub-wid-grid-9">
                                    <h4 className="text-grid-9"><a href="properties-single.html">France</a></h4>
                                    <p className="sub-para">Best Place to live</p>
                                    <span>12 properties</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w3l-products-4">
                <div id="products4-block" className="text-center">

                    <h3 className="heading-title">Our Properties</h3>
                    <div className="wrapper">

                        <input id="tab1" type="radio" name="tabs" defaultChecked />
                        <label className="tabtle" for="tab1">Rentals</label>

                        <input id="tab2" type="radio" name="tabs" />
                        <label className="tabtle" for="tab2">Sales</label>

                        <input id="tab3" type="radio" name="tabs" />
                        <label className="tabtle" for="tab3">Apartments</label>

                        <input id="tab4" type="radio" name="tabs" />
                        <label className="tabtle" for="tab4">Villas</label>

                        <section id="content1" className="tab-content text-left">
                            <div className="d-grid grid-col-3">
                                <div className="product">
                                    <a href="properties-single.html"><img src="/assets/images/property1.jpg" className="img-responsive" alt="" /></a>
                                    <div className="info-bg">
                                        <h5><a href="properties-single.html">Luxury villa for rent</a></h5>
                                        <span className="price">$ 240/month</span>
                                        <p>Nulla ex nunc, interdum nec egestas nec, dapibus ac mauris. Vivamus id tempor nisl.</p>
                                        <ul>
                                            <li><span className="fa fa-bed"></span> 3</li>
                                            <li><span className="fa fa-bath"></span> 3</li>
                                            <li><span className="fa fa-share-square-o"></span> 1200 sq ft</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product">
                                    <a href="properties-single.html"><img src="/assets/images/property4.jpg" className="img-responsive" alt="" /></a>
                                    <div className="info-bg">
                                        <h5><a href="properties-single.html">Apartment flat for rent</a></h5>
                                        <span className="price">$ 240/month</span>
                                        <p>Nulla ex nunc, interdum nec egestas nec, dapibus ac mauris. Vivamus id tempor nisl.</p>
                                        <ul>
                                            <li><span className="fa fa-bed"></span> 3</li>
                                            <li><span className="fa fa-bath"></span> 3</li>
                                            <li><span className="fa fa-share-square-o"></span> 1200 sq ft</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product">
                                    <a href="properties-single.html"> <img src="/assets/images/p-slide4.jpg" className="img-responsive" alt="" /></a>
                                    <div className="info-bg">
                                        <h5><a href="properties-single.html">luxury flat for rent</a></h5>
                                        <span className="price">$ 240/month</span>
                                        <p>Nulla ex nunc, interdum nec egestas nec, dapibus ac mauris. Vivamus id tempor nisl.</p>
                                        <ul>
                                            <li><span className="fa fa-bed"></span> 3</li>
                                            <li><span className="fa fa-bath"></span> 3</li>
                                            <li><span className="fa fa-share-square-o"></span> 1200 sq ft</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="content2" className="tab-content text-left">
                            <div className="d-grid grid-col-3">
                                <div className="product">
                                    <a href="properties-single.html"><img src="/assets/images/property2.jpg" className="img-responsive" alt="" /></a>
                                    <div className="info-bg">
                                        <h5><a href="properties-single.html">Luxury villa for sale</a></h5>
                                        <span className="price">$ 240/month</span>
                                        <p>Nulla ex nunc, interdum nec egestas nec, dapibus ac mauris. Vivamus id tempor nisl.</p>
                                        <ul>
                                            <li><span className="fa fa-bed"></span> 3</li>
                                            <li><span className="fa fa-bath"></span> 3</li>
                                            <li><span className="fa fa-share-square-o"></span> 1200 sq ft</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product">
                                    <a href="properties-single.html"><img src="/assets/images/property3.jpg" className="img-responsive" alt="" /></a>
                                    <div className="info-bg">
                                        <h5><a href="properties-single.html">Apartment for sale</a></h5>
                                        <span className="price">$ 240/month</span>
                                        <p>Nulla ex nunc, interdum nec egestas nec, dapibus ac mauris. Vivamus id tempor nisl.</p>
                                        <ul>
                                            <li><span className="fa fa-bed"></span> 3</li>
                                            <li><span className="fa fa-bath"></span> 3</li>
                                            <li><span className="fa fa-share-square-o"></span> 1200 sq ft</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product">
                                    <a href="properties-single.html"><img src="/assets/images/p-slide1.jpg" className="img-responsive" alt="" /></a>
                                    <div className="info-bg">
                                        <h5><a href="properties-single.html">Home for sale</a></h5>
                                        <span className="price">$ 240/month</span>
                                        <p>Nulla ex nunc, interdum nec egestas nec, dapibus ac mauris. Vivamus id tempor nisl.</p>
                                        <ul>
                                            <li><span className="fa fa-bed"></span> 3</li>
                                            <li><span className="fa fa-bath"></span> 3</li>
                                            <li><span className="fa fa-share-square-o"></span> 1200 sq ft</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="content3" className="tab-content text-left">
                            <div className="d-grid grid-col-3">
                                <div className="product">
                                    <a href="properties-single.html"><img src="assets/images/property1.jpg" className="img-responsive" alt="" /></a>
                                    <div className="info-bg">
                                        <h5><a href="properties-single.html">Park avenue apartment</a></h5>
                                        <span className="price">$ 240/month</span>
                                        <p>Nulla ex nunc, interdum nec egestas nec, dapibus ac mauris. Vivamus id tempor nisl.</p>
                                        <ul>
                                            <li><span className="fa fa-bed"></span> 3</li>
                                            <li><span className="fa fa-bath"></span> 3</li>
                                            <li><span className="fa fa-share-square-o"></span> 1200 sq ft</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product">
                                    <a href="properties-single.html"><img src="assets/images/property4.jpg" className="img-responsive" alt="" /></a>
                                    <div className="info-bg">
                                        <h5><a href="properties-single.html">Luxury apartment</a></h5>
                                        <span className="price">$ 240/month</span>
                                        <p>Nulla ex nunc, interdum nec egestas nec, dapibus ac mauris. Vivamus id tempor nisl.</p>
                                        <ul>
                                            <li><span className="fa fa-bed"></span> 3</li>
                                            <li><span className="fa fa-bath"></span> 3</li>
                                            <li><span className="fa fa-share-square-o"></span> 1200 sq ft</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product">
                                    <a href="properties-single.html"> <img src="assets/images/p-slide4.jpg" className="img-responsive" alt="" /></a>
                                    <div className="info-bg">
                                        <h5><a href="properties-single.html">Building apartment</a></h5>
                                        <span className="price">$ 240/month</span>
                                        <p>Nulla ex nunc, interdum nec egestas nec, dapibus ac mauris. Vivamus id tempor nisl.</p>
                                        <ul>
                                            <li><span className="fa fa-bed"></span> 3</li>
                                            <li><span className="fa fa-bath"></span> 3</li>
                                            <li><span className="fa fa-share-square-o"></span> 1200 sq ft</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="content4" className="tab-content text-left">
                            <div className="d-grid grid-col-3">
                                <div className="product">
                                    <a href="properties-single.html"><img src="assets/images/property2.jpg" className="img-responsive" alt="" /></a>
                                    <div className="info-bg">
                                        <h5><a href="properties-single.html">Luxury villa</a></h5>
                                        <span className="price">$ 240/month</span>
                                        <p>Nulla ex nunc, interdum nec egestas nec, dapibus ac mauris. Vivamus id tempor nisl.</p>
                                        <ul>
                                            <li><span className="fa fa-bed"></span> 3</li>
                                            <li><span className="fa fa-bath"></span> 3</li>
                                            <li><span className="fa fa-share-square-o"></span> 1200 sq ft</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product">
                                    <a href="properties-single.html"><img src="assets/images/property3.jpg" className="img-responsive" alt="" /></a>
                                    <div className="info-bg">
                                        <h5><a href="properties-single.html">Home villas for you</a></h5>
                                        <span className="price">$ 240/month</span>
                                        <p>Nulla ex nunc, interdum nec egestas nec, dapibus ac mauris. Vivamus id tempor nisl.</p>
                                        <ul>
                                            <li><span className="fa fa-bed"></span> 3</li>
                                            <li><span className="fa fa-bath"></span> 3</li>
                                            <li><span className="fa fa-share-square-o"></span> 1200 sq ft</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product">
                                    <a href="properties-single.html"><img src="assets/images/p-slide1.jpg" className="img-responsive" alt="" /></a>
                                    <div className="info-bg">
                                        <h5><a href="properties-single.html">Rental villas</a></h5>
                                        <span className="price">$ 240/month</span>
                                        <p>Nulla ex nunc, interdum nec egestas nec, dapibus ac mauris. Vivamus id tempor nisl.</p>
                                        <ul>
                                            <li><span className="fa fa-bed"></span> 3</li>
                                            <li><span className="fa fa-bath"></span> 3</li>
                                            <li><span className="fa fa-share-square-o"></span> 1200 sq ft</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            { useScript(['/assets/library/jquery-3.6.3.min.js']) }
            { useScript('/assets/library/owl.carousel.min.js') }
            { useScript('/assets/js/homepage.js') }
        </>
    )
}