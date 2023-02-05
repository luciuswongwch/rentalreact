import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import useScript from '../hooks/useScript';

import villaImage from '../assets/images/property1.jpg';
import apartmentImage from '../assets/images/property2.jpg';
import houseImage from '../assets/images/property3.jpg';
import condoImage from '../assets/images/property4.jpg';
import townhouseImage from '../assets/images/property5.jpg';
import { getRentalsByType, getRentalsCarousel, getRentalsPropertiesPage } from '../api/RentalApiService';

export default function PropertyByTsypeComponent() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [typeString, setTypeString] = useState();

    const [allProperties, setAllProperties] = useState([]);
    const [apartments, setApartments] = useState([]);
    const [condos, setCondos] = useState([]);
    const [houses, setHouses] = useState([]);
    const [townhouses, setTownhouses] = useState([]);
    const [villas, setVillas] = useState([]);
    const [propertyCarousel, setPropertyCarousel] = useState([]);

    useEffect(() => {
        if (searchParams.has("type")) {
            setTypeString(searchParams.get("type"));
        }
    }, [searchParams]);

    useEffect(() => {
        getRentalsPropertiesPage()
            .then(response => { setAllProperties(response.data); })
            .catch(error => console.log(error));
        getRentalsByType("Apartment")
            .then(response => { setApartments(response.data); })
            .catch(error => console.log(error));
        getRentalsByType("Condo")
            .then(response => { setCondos(response.data); })
            .catch(error => console.log(error));
        getRentalsByType("House")
            .then(response => { setHouses(response.data); })
            .catch(error => console.log(error));
        getRentalsByType("Townhouse")
            .then(response => { setTownhouses(response.data); })
            .catch(error => console.log(error));
        getRentalsByType("Villa")
            .then(response => { setVillas(response.data); })
            .catch(error => console.log(error));
        getRentalsCarousel()
            .then(response => { setPropertyCarousel(response.data); })
            .catch(error => console.log(error));
    }, []);

    function getPropertyImage(type) {
        switch(type) {
            case "Apartment":
                return apartmentImage;
            case "Condo":
                return condoImage;
            case "House":
                return houseImage;
            case "Townhouse":
                return townhouseImage;
            case "Villa":
                return villaImage;
        }
    }

    return (
        <>
            <section className="w3l-breadcrumns">
                <div className="wrapper">
                    <ul>    
                        <li><Link to="/">Home</Link> <span className="fa fa-angle-double-right"></span></li>
                        <li>Properties</li>
                    </ul>
                </div>
            </section>

            <div className="w3l-products-4">
                <div id="products4-block" className="text-center">
                    <h3 className="heading-title">All Properties</h3>
                    <div className="wrapper">
                        <input id="tab1" type="radio" name="tabs" defaultChecked={typeString==null} />
                        <label className="tabtle" for="tab1">All properties</label>
                        
                        <input id="tab2" type="radio" name="tabs" defaultChecked={typeString=="apartment"} />
                        <label className="tabtle" for="tab2">Apartments</label>

                        <input id="tab3" type="radio" name="tabs" defaultChecked={typeString=="condo"} />
                        <label className="tabtle" for="tab3">Condos</label>

                        <input id="tab4" type="radio" name="tabs" defaultChecked={typeString=="house"} />
                        <label className="tabtle" for="tab4">Houses</label>

                        <input id="tab5" type="radio" name="tabs" defaultChecked={typeString=="townhouse"} />
                        <label className="tabtle" for="tab5">Townhouses</label>

                        <input id="tab6" type="radio" name="tabs" defaultChecked={typeString=="villa"} />
                        <label className="tabtle" for="tab6">Villas</label>

                        <section id="content1" className="tab-content text-left">
                            <div className="d-grid grid-col-3">
                            {
                                allProperties.map(
                                    (rental, i) => (
                                        <div className="product" key={i}>
                                            <Link to={"/properties/" + rental.rentalId}><img src={getPropertyImage(rental.propertyType)} className="img-responsive" alt="" /></Link>
                                            <div className="info-bg">
                                                <h5><Link to={"/properties/" + rental.rentalId}>{rental.propertyType == "Villa" ? "Luxury Villa" : rental.propertyType} for rent</Link></h5>
                                                <span className="price">$ {rental.rentalDetail.monthlyRent} / month</span>
                                                <p>{rental.rentalDetail.description.replace(/<\/?[^>]+(>|$)/g, "").substring(0,100) + "..."}</p>
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
                                    apartments.map(
                                        (rental, i) => (
                                            <div className="product" key={i}>
                                                <Link to={"/properties/" + rental.rentalId}><img src={apartmentImage} className="img-responsive" alt="" /></Link>
                                                <div className="info-bg">
                                                    <h5><Link to={"/properties/" + rental.rentalId}>{rental.propertyType == "Villa" ? "Luxury Villa" : rental.propertyType} for rent</Link></h5>
                                                    <span className="price">$ {rental.rentalDetail.monthlyRent} / month</span>
                                                    <p>{rental.rentalDetail.description.replace(/<\/?[^>]+(>|$)/g, "").substring(0,100) + "..."}</p>
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
                                    condos.map(
                                        (rental, i) => (
                                            <div className="product" key={i}>
                                                <Link to={"/properties/" + rental.rentalId}><img src={condoImage} className="img-responsive" alt="" /></Link>
                                                <div className="info-bg">
                                                    <h5><Link to={"/properties/" + rental.rentalId}>{rental.propertyType == "Villa" ? "Luxury Villa" : rental.propertyType} for rent</Link></h5>
                                                    <span className="price">$ {rental.rentalDetail.monthlyRent} / month</span>
                                                    <p>{rental.rentalDetail.description.replace(/<\/?[^>]+(>|$)/g, "").substring(0,100) + "..."}</p>
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
                                    houses.map(
                                        (rental, i) => (
                                            <div className="product" key={i}>
                                                <Link to={"/properties/" + rental.rentalId}><img src={houseImage} className="img-responsive" alt="" /></Link>
                                                <div className="info-bg">
                                                    <h5><Link to={"/properties/" + rental.rentalId}>{rental.propertyType == "Villa" ? "Luxury Villa" : rental.propertyType} for rent</Link></h5>
                                                    <span className="price">$ {rental.rentalDetail.monthlyRent} / month</span>
                                                    <p>{rental.rentalDetail.description.replace(/<\/?[^>]+(>|$)/g, "").substring(0,100) + "..."}</p>
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
                                    townhouses.map(
                                        (rental, i) => (
                                            <div className="product" key={i}>
                                                <Link to={"/properties/" + rental.rentalId}><img src={townhouseImage} className="img-responsive" alt="" /></Link>
                                                <div className="info-bg">
                                                    <h5><Link to={"/properties/" + rental.rentalId}>{rental.propertyType == "Villa" ? "Luxury Villa" : rental.propertyType} for rent</Link></h5>
                                                    <span className="price">$ {rental.rentalDetail.monthlyRent} / month</span>
                                                    <p>{rental.rentalDetail.description.replace(/<\/?[^>]+(>|$)/g, "").substring(0,100) + "..."}</p>
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

                        <section id="content6" className="tab-content text-left">
                            <div className="d-grid grid-col-3">
                                {
                                    villas.map(
                                        (rental, i) => (
                                            <div className="product" key={i}>
                                                <Link to={"/properties/" + rental.rentalId}><img src={villaImage} className="img-responsive" alt="" /></Link>
                                                <div className="info-bg">
                                                    <h5><Link to={"/properties/" + rental.rentalId}>{rental.propertyType == "Villa" ? "Luxury Villa" : rental.propertyType} for rent</Link></h5>
                                                    <span className="price">$ {rental.rentalDetail.monthlyRent} / month</span>
                                                    <p>{rental.rentalDetail.description.replace(/<\/?[^>]+(>|$)/g, "").substring(0,100) + "..."}</p>
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

            <section className="w3l-grids-4">
                <div id="grids4-block">
                    <div className="wrapper">
                        <h3 className="heading-title">Properties available for rent</h3>
                        <div className="owl-carousel owl-theme">
                            {
                                propertyCarousel.map(
                                    (property, i) => (
                                        <div className="item" key={i}>
                                            <div className="grids4-info">
                                                <a href={"/properties/" + property.rentalId}><img src={getPropertyImage(property.propertyType)} alt="" /></a>
                                                <div className="info-bg">
                                                    <h5><Link to={"/properties/" + property.rentalId}>{property.propertyType} for rent</Link></h5>
                                                    <span className="price">$ {property.rentalDetail.monthlyRent} / month</span>
                                                    <p>{property.rentalDetail.description.replace(/<\/?[^>]+(>|$)/g, "").substring(0,100) + "..."}</p>
                                                    <ul>
                                                        <li><span className="fa fa-bed"></span> {property.rentalDetail.numberOfBedrooms}</li>
                                                        <li><span className="fa fa-bath"></span> {property.rentalDetail.numberOfBaths}</li>
                                                        <li><span className="fa fa-share-square-o"></span> {property.rentalDetail.squareFeet} sq ft</li>
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
            { useScript(['/assets/library/jquery-3.6.3.min.js']) }
            { useScript('/assets/library/owl.carousel.min.js') }
            { useScript('/assets/js/homepage.js') }
        </>
    )
}