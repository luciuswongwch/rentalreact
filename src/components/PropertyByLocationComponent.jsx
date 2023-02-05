import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useScript from '../hooks/useScript';

import villaImage from '../assets/images/property1.jpg';
import apartmentImage from '../assets/images/property2.jpg';
import houseImage from '../assets/images/property3.jpg';
import condoImage from '../assets/images/property4.jpg';
import townhouseImage from '../assets/images/property5.jpg';
import { getRegionByLocation } from '../api/LocationApiService';
import { getRentalsCarousel } from '../api/RentalApiService';

export default function PropertyByLocationComponent() {

    const { location } = useParams();
    const [ properties, setProperties ] = useState([]);
    const [ propertyCarousel, setPropertyCarousel ] = useState([]);

    useEffect(() => {
        getRegionByLocation(location)
            .then(response => {
                setProperties(response.data.rentals);
            })
            .catch(error => console.log(error));
        getRentalsCarousel()
            .then(response => {
                setPropertyCarousel(response.data);
            })
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

    function areaStringTransform(string) {
        const words = string.split("_");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        return words.join(" ");
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
                    <h3 className="heading-title">Properties in {areaStringTransform(location)}</h3>
                    <div className="wrapper">
                        <section className="text-left">
                            <div className="d-grid grid-col-3">
                            {
                                properties.map(
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
                                                <Link to={"/properties/" + property.rentalId}><img src={getPropertyImage(property.propertyType)} alt="" /></Link>
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