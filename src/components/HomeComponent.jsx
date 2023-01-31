import { useEffect, useState } from 'react';
import useScript from '../hooks/useScript';
import { Link } from 'react-router-dom';
import { getRentalsByType, getRentalsHomePage } from '../api/RentalApiService';
import { getAreasHomePage } from '../api/AreaApiService';

import propertyImage1 from '../assets/images/property1.jpg';
import propertyImage2 from '../assets/images/property2.jpg';
import propertyImage3 from '../assets/images/property3.jpg';
import propertyImage4 from '../assets/images/property4.jpg';
import propertyImage5 from '../assets/images/property5.jpg';

export default function HomeComponent() {

    // useEffect(() => {
    //     getPropertiesHomePage()
    //         .then(response => {
    //             setProperties(response.data);
    //         })
    //         .catch(error => console.log(error));
    // })

    // const properties = [
    //     { id: 1, title: "property title 1", imagePath: "/assets/images/slide1.jpg", description: "property description 1", monthlyRent: 1200, numberOfBeds: 3, numberOfBaths: 3, squareFeet: 240 },
    //     { id: 2, title: "property title 2", imagePath: "/assets/images/slide2.jpg", description: "property description 2", monthlyRent: 1200, numberOfBeds: 3, numberOfBaths: 3, squareFeet: 240 },
    //     { id: 3, title: "property title 3", imagePath: "/assets/images/property1.jpg", description: "property description 3", monthlyRent: 1200, numberOfBeds: 3, numberOfBaths: 3, squareFeet: 240 },
    //     { id: 4, title: "property title 4", imagePath: "/assets/images/property2.jpg", description: "property description 4", monthlyRent: 1200, numberOfBeds: 3, numberOfBaths: 3, squareFeet: 240 },
    //     { id: 5, title: "property title 5", imagePath: "/assets/images/property3.jpg", description: "property description 5", monthlyRent: 1200, numberOfBeds: 3, numberOfBaths: 3, squareFeet: 240 },
    //     { id: 6, title: "property title 6", imagePath: "/assets/images/property4.jpg", description: "property description 6", monthlyRent: 1200, numberOfBeds: 3, numberOfBaths: 3, squareFeet: 240 },
    //     { id: 7, title: "property title 7", imagePath: "/assets/images/property5.jpg", description: "property description 7", monthlyRent: 1200, numberOfBeds: 3, numberOfBaths: 3, squareFeet: 240 }
    // ];

    // const areas = [
    //     {id: 1, name: "New Jersey", descriptiomot: "Perfect City!", numberOfProperties: 8},
    //     {id: 2, name: "Paris", descriptiomot: "Best Place to live", numberOfProperties: 8},
    //     {id: 3, name: "London", descriptiomot: "Perfect City!", numberOfProperties: 15},
    //     {id: 4, name: "Japan", descriptiomot: "Best Place to live", numberOfProperties: 28},
    //     {id: 5, name: "France", descriptiomot: "Perfect City!", numberOfProperties: 12}
    // ]

    function getRandomPropertyImage() {
        var list = [propertyImage1, propertyImage2, propertyImage3, propertyImage4, propertyImage5];
        return list[Math.floor(Math.random() * 5)];
    }

    const [rentals, setRentals] = useState([]);
    const [areaSection1, setAreaSection1] = useState([]);
    const [areaSection2, setAreaSection2] = useState([]);

    var arr = Array.apply(0, new Array(5)).map(function(_, i) { return i + 1 });
    for (var i = 0; i < arr.length; i++) {
        var randomNum = Math.floor(Math.random() * arr.length);
        if (randomNum != i) {
            var temp = arr[i];
            arr[i] = arr[randomNum];
            arr[randomNum] = temp;
        }
    }

    const [apartments, setApartments] = useState([]);
    const [condos, setCondos] = useState([]);
    const [houses, setHouses] = useState([]);
    const [townhouses, setTownhouses] = useState([]);
    const [villas, setVillas] = useState([]);
        
    useEffect(() => {
        getRentalsHomePage()
            .then(response => {
                setRentals(response.data);
            })
            .catch(error => console.log(error));
        getAreasHomePage()
            .then(response => {
                setAreaSection1([[arr[0], response.data[0]], [arr[1], response.data[1]]]);
                setAreaSection2([[arr[2], response.data[2]], [arr[3], response.data[3]], [arr[4], response.data[4]]]);
            })
            .catch(error => console.log(error));
        getRentalsByType("Apartment")
            .then(response => {
                setApartments(response.data);
            })
            .catch(error => console.log(error));
        getRentalsByType("Condo")
        .then(response => {
            setCondos(response.data);
        })
        .catch(error => console.log(error));
        getRentalsByType("House")
        .then(response => {
            setHouses(response.data);
        })
        .catch(error => console.log(error));
        getRentalsByType("Townhouse")
        .then(response => {
            setTownhouses(response.data);
        })
        .catch(error => console.log(error));
        getRentalsByType("Villa")
        .then(response => {
            setVillas(response.data);
        })
        .catch(error => console.log(error));
    }, []);


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
                                                    <Link to="/properties" className="btn button-style">Get Started</Link>
                                                    <Link to="/contact" className="btn button-style1">Contact us</Link>
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
                                                    <Link to="/properties" className="btn button-style">Get Started</Link>
                                                    <Link to="/contact" className="btn button-style1">Contact us</Link>
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
                                                    <Link to="/properties" className="btn button-style">Get Started</Link>
                                                    <Link to="/contact" className="btn button-style1">Contact us</Link>
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
                                rentals.map(
                                    rental => (
                                        <div className="item" key={rental.rentalId}>
                                            <div className="grids4-info">
                                                <Link to={"/properties/detail?id=" + rental.rentalId}><img src={getRandomPropertyImage()} alt="" /></Link>
                                                <div className="info-bg">
                                                    <h5><Link to={"/properties/detail/?id=" + rental.rentalId}>{rental.propertyType == "Villa" ? "Luxury Villa" : rental.propertyType} for rent</Link></h5>
                                                    <span className="price">$ {rental.rentalDetail.monthlyRent} / month</span>
                                                    <p>{rental.rentalDetail.description.substring(0,100) + "..."}</p>
                                                    <ul>
                                                        <li><span className="fa fa-bed"></span> {rental.rentalDetail.numberOfBedrooms}</li>
                                                        <li><span className="fa fa-bath"></span> {rental.rentalDetail.numberOfBaths}</li>
                                                        <li><span className="fa fa-share-square-o"></span> {rental.rentalDetail.squareFeet} sq ft</li>
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
                            {
                                areaSection1.map(
                                    function(data, i) {
                                        return (
                                            <div className={"left-grid-ele-9 grid-bg" + (data[0])} key={data[1].areaId}>
                                                <div className="sub-wid-grid-9">
                                                    <h4 className="text-grid-9"><Link to={"/properties?location=" + data[1].place.replace(/\s+/g, '')}>{data[1].place}</Link></h4>
                                                    <p className="sub-para">{data[1].description}</p>
                                                    <span>{data[1].rentals.length} properties</span>
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                        <div className="d-grid grid-col-3 grid-element-9 margin-top">
                            {
                                areaSection2.map(
                                    (data, i) => {
                                        return (
                                            <div className={"left-grid-ele-9 grid-bg" + (data[0])} key={data[1].areaId}>
                                                <div className="sub-wid-grid-9">
                                                    <h4 className="text-grid-9"><Link to={"/properties?location=" + data[1].place.replace(/\s+/g, '')}>{data[1].place}</Link></h4>
                                                    <p className="sub-para">{data[1].description}</p>
                                                    <span>{data[1].rentals.length} properties</span>
                                                </div>
                                            </div>
                                        );
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>

            <div className="w3l-products-4">
                <div id="products4-block" className="text-center">

                    <h3 className="heading-title">Our Properties</h3>
                    <div className="wrapper">

                        <input id="tab1" type="radio" name="tabs" defaultChecked />
                        <label className="tabtle" for="tab1">Apartments</label>

                        <input id="tab2" type="radio" name="tabs" />
                        <label className="tabtle" for="tab2">Condos</label>

                        <input id="tab3" type="radio" name="tabs" />
                        <label className="tabtle" for="tab3">Houses</label>

                        <input id="tab4" type="radio" name="tabs" />
                        <label className="tabtle" for="tab4">Townhouses</label>

                        <input id="tab5" type="radio" name="tabs" />
                        <label className="tabtle" for="tab5">Villas</label>


                        <section id="content1" className="tab-content text-left">
                            <div className="d-grid grid-col-3">
                                {
                                    apartments.map(
                                        rental => (
                                            <div className="product" key={rental.rentalId}>
                                                <Link to={"/properties/detail?id=" + rental.rentalId}><img src={propertyImage2} className="img-responsive" alt="" /></Link>
                                                <div className="info-bg">
                                                    <h5><Link to={"/properties/detail/?id=" + rental.rentalId}>{rental.propertyType == "Villa" ? "Luxury Villa" : rental.propertyType} for rent</Link></h5>
                                                    <span className="price">$ {rental.rentalDetail.monthlyRent} / month</span>
                                                    <p>{rental.rentalDetail.description.substring(0,100) + "..."}</p>
                                                    <ul>
                                                        <li><span className="fa fa-bed"></span> {rental.rentalDetail.numberOfBedrooms}</li>
                                                        <li><span className="fa fa-bath"></span> {rental.rentalDetail.numberOfBaths}</li>
                                                        <li><span className="fa fa-share-square-o"></span> {rental.rentalDetail.squareFeet} sq ft</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        </section>

                        <section id="content2" className="tab-content text-left">
                            <div className="d-grid grid-col-3">
                                {
                                    condos.map(
                                        rental => (
                                            <div className="product" key={rental.rentalId}>
                                                <Link to={"/properties/detail?id=" + rental.rentalId}><img src={propertyImage4} className="img-responsive" alt="" /></Link>
                                                <div className="info-bg">
                                                    <h5><Link to={"/properties/detail/?id=" + rental.rentalId}>{rental.propertyType == "Villa" ? "Luxury Villa" : rental.propertyType} for rent</Link></h5>
                                                    <span className="price">$ {rental.rentalDetail.monthlyRent} / month</span>
                                                    <p>{rental.rentalDetail.description.substring(0,100) + "..."}</p>
                                                    <ul>
                                                        <li><span className="fa fa-bed"></span> {rental.rentalDetail.numberOfBedrooms}</li>
                                                        <li><span className="fa fa-bath"></span> {rental.rentalDetail.numberOfBaths}</li>
                                                        <li><span className="fa fa-share-square-o"></span> {rental.rentalDetail.squareFeet} sq ft</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        </section>

                        <section id="content3" className="tab-content text-left">
                            <div className="d-grid grid-col-3">
                                {
                                    houses.map(
                                        rental => (
                                            <div className="product" key={rental.rentalId}>
                                                <Link to={"/properties/detail?id=" + rental.rentalId}><img src={propertyImage3} className="img-responsive" alt="" /></Link>
                                                <div className="info-bg">
                                                    <h5><Link to={"/properties/detail/?id=" + rental.rentalId}>{rental.propertyType == "Villa" ? "Luxury Villa" : rental.propertyType} for rent</Link></h5>
                                                    <span className="price">$ {rental.rentalDetail.monthlyRent} / month</span>
                                                    <p>{rental.rentalDetail.description.substring(0,100) + "..."}</p>
                                                    <ul>
                                                        <li><span className="fa fa-bed"></span> {rental.rentalDetail.numberOfBedrooms}</li>
                                                        <li><span className="fa fa-bath"></span> {rental.rentalDetail.numberOfBaths}</li>
                                                        <li><span className="fa fa-share-square-o"></span> {rental.rentalDetail.squareFeet} sq ft</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        </section>

                        <section id="content4" className="tab-content text-left">
                            <div className="d-grid grid-col-3">
                                {
                                    townhouses.map(
                                        rental => (
                                            <div className="product" key={rental.rentalId}>
                                                <Link to={"/properties/detail?id=" + rental.rentalId}><img src={propertyImage5} className="img-responsive" alt="" /></Link>
                                                <div className="info-bg">
                                                    <h5><Link to={"/properties/detail/?id=" + rental.rentalId}>{rental.propertyType == "Villa" ? "Luxury Villa" : rental.propertyType} for rent</Link></h5>
                                                    <span className="price">$ {rental.rentalDetail.monthlyRent} / month</span>
                                                    <p>{rental.rentalDetail.description.substring(0,100) + "..."}</p>
                                                    <ul>
                                                        <li><span className="fa fa-bed"></span> {rental.rentalDetail.numberOfBedrooms}</li>
                                                        <li><span className="fa fa-bath"></span> {rental.rentalDetail.numberOfBaths}</li>
                                                        <li><span className="fa fa-share-square-o"></span> {rental.rentalDetail.squareFeet} sq ft</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        </section>

                        <section id="content5" className="tab-content text-left">
                            <div className="d-grid grid-col-3">
                                {
                                    villas.map(
                                        rental => (
                                            <div className="product" key={rental.rentalId}>
                                                <Link to={"/properties/detail?id=" + rental.rentalId}><img src={propertyImage1} className="img-responsive" alt="" /></Link>
                                                <div className="info-bg">
                                                    <h5><Link to={"/properties/detail/?id=" + rental.rentalId}>{rental.propertyType == "Villa" ? "Luxury Villa" : rental.propertyType} for rent</Link></h5>
                                                    <span className="price">$ {rental.rentalDetail.monthlyRent} / month</span>
                                                    <p>{rental.rentalDetail.description.substring(0,100) + "..."}</p>
                                                    <ul>
                                                        <li><span className="fa fa-bed"></span> {rental.rentalDetail.numberOfBedrooms}</li>
                                                        <li><span className="fa fa-bath"></span> {rental.rentalDetail.numberOfBaths}</li>
                                                        <li><span className="fa fa-share-square-o"></span> {rental.rentalDetail.squareFeet} sq ft</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )
                                    )
                                }
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