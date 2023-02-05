import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getRentalById, getRentalRegionCount, getRentalsWidget } from "../api/RentalApiService";

import villaImage from '../assets/images/property1.jpg';
import apartmentImage from '../assets/images/property2.jpg';
import houseImage from '../assets/images/property3.jpg';
import condoImage from '../assets/images/property4.jpg';
import townhouseImage from '../assets/images/property5.jpg';

export default function PropertyDetailComponent() {

    const navigate = useNavigate();

    const { id } = useParams();
    const [rentalType, setRentalType] = useState("Apartment");
    const [rentalMonthlyRent, setRentalMonthlyRent] = useState(null);
    const [rentalAddress, setRentalAddress] = useState(null);
    const [rentalDescription, setRentalDescription] = useState(null);
    const [rentalSquareFeet, setRentalSquareFeet] = useState(null);
    const [rentalBedrooms, setRentalBedrooms] = useState(null);
    const [rentalBaths, setRentalBaths] = useState(null);
    const [rentalMaterial, setMaterial] = useState(null);
    const [rentalStructure, setStructure] = useState(null);
    const [rentalGarage, setGarage] = useState(null);
    const [rentalBuiltYear, setBuiltYear] = useState(null);
    const [rentalAvailableFrom, setAvailableFrom] = useState(null);

    const [regionCount, setRegionCount] = useState([]);

    const [ widgetFeatured, setWidgetFeatured ] = useState([]);

    useEffect(() => {
        getRentalById(id)
            .then(response => {
                if (response.data) {
                    setRentalType(response.data.propertyType);
                    setRentalMonthlyRent(response.data.rentalDetail.monthlyRent);
                    setRentalAddress(response.data.rentalDetail.address);
                    setRentalDescription(response.data.rentalDetail.description);
                    setRentalSquareFeet(response.data.rentalDetail.squareFeet);
                    setRentalBedrooms(response.data.rentalDetail.numberOfBedrooms);
                    setRentalBaths(response.data.rentalDetail.numberOfBaths);
                    setMaterial(response.data.rentalDetail.exteriorMaterial);
                    setStructure(response.data.rentalDetail.structureType);
                    setGarage(response.data.rentalDetail.garageSize);
                    setBuiltYear(response.data.rentalDetail.builtYear);
                    setAvailableFrom(response.data.rentalDetail.availableFrom);
                } else {
                    navigate("/pageNotFound");
                }
            })
            .catch(error => {
                navigate("/pageNotFound");
            });
        getRentalRegionCount()
            .then(response => {
                setRegionCount(response.data);
            })
            .catch(error => console.log(error));
        getRentalsWidget()
            .then(response => {
                setWidgetFeatured(response.data);
            })
            .catch(error => console.log(error));
    }, [id]);

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
            <section className="w3l-blog-single">
                <div className="single blog">
                    <div className="wrapper">
                        <div className="d-grid grid-colunm-2">
                            <div className="single-left">
                                <div className="single-left1">
                                    <h5 className="card-title no-margin">{rentalType}s for rent - <span className="price">from ${rentalMonthlyRent}</span></h5>
                                    <p className="address"><span className="fa fa-map-marker"></span> {rentalAddress}</p>
                                    <img src={getPropertyImage(rentalType)} alt=" " className="img-responsive" />
                                    <h5 className="card-title">Description</h5>
                                    <div className="" dangerouslySetInnerHTML={{__html: rentalDescription}} />
                                </div>
                                <div className="social-share">
                                    <h3 className="aside-title">Share this property</h3>
                                    <div className="social-icons-section">
                                        <a className="facebook" href="#team">
                                            <span className="fa fa-facebook"></span>
                                        </a>
                                        <a className="twitter" href="#team">
                                            <span className="fa fa-twitter"></span>
                                        </a>
                                        <a className="instagram" href="#team">
                                            <span className="fa fa-instagram"></span>
                                        </a>
                                        <a className="pinterest" href="#team">
                                            <span className="fa fa-pinterest"></span>
                                        </a>
                                    </div>
                                </div>

                                <div className="single-left1">
                                    <h5 className="card-title">Details</h5>
                                    <ul className="details-list">
                                        <li><strong>Property id :</strong> PRPT{("0000" + id).slice(-5)} </li>
                                        <li><strong>Property size :</strong> {rentalSquareFeet} sqft </li>
                                        <li><strong>Bedrooms :</strong> {rentalBedrooms} </li>
                                        <li><strong>Bathrooms :</strong> {rentalBaths} </li>
                                        <li><strong>Exterior material :</strong> {rentalMaterial} </li>
                                        <li><strong>Structure type :</strong> {rentalStructure} </li>
                                        <li><strong>Garage size :</strong> {rentalGarage} cars </li>
                                        <li><strong>Rental Price :</strong> ${rentalMonthlyRent} / month</li>
                                        <li><strong>Built Year :</strong> {rentalBuiltYear} </li>
                                        <li><strong>Avaiable from :</strong> {rentalAvailableFrom} </li>
                                    </ul>
                                </div>
                                <div className="single-left1">
                                    <h5 className="card-title">Map </h5>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4686815.853469242!2d-7.185058593750004!3d54.99967515853579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2sin!4v1568270144870!5m2!1sen!2sin"></iframe>
                                </div>
                            </div>

                            <div className="right-side-bar">
                                <aside className="posts p-4 border">
                                    <h3 className="aside-title">Featured properties</h3>
                                    {
                                        widgetFeatured.map(
                                            (rental, i) => (
                                                <div className="posts-grid" key={rental.rentalId}>
                                                    <div className="posts-grid-left">
                                                        <Link to={"/properties/" + rental.rentalId}>
                                                            <img src={getPropertyImage(rental.propertyType)} alt=" " className="img-responsive img-thumbnail" />
                                                        </Link>
                                                    </div>
                                                    <div className="posts-grid-right">
                                                        <h4>
                                                            <Link to={"/properties/" + rental.rentalId} className="text-bl">${rental.propertyType} for rent</Link>
                                                        </h4>
                                                        <span className="price"> from ${rental.rentalDetail.monthlyRent} </span>
                                                    </div>
                                                </div>
                                            )
                                        )
                                        
                                    }
                                </aside>

                                <aside className="">
                                    <h3 className="aside-title mb-3">Our listings by region</h3>
                                    <ul className="listings-list">
                                        {
                                            regionCount.map(
                                                (row, i) => (
                                                    <li><Link to={"/properties/location/" + row.place}>{areaStringTransform(row.place)}</Link> ({row.count})</li>
                                                )
                                            )
                                        }
                                    </ul>
                                </aside>

                                {/* <aside className="posts p-4 border">
                                    <h3 className="aside-title">Nearby properties</h3>
                                    {
                                        widgetByLocation.map(
                                            (rental, i) => (
                                                <div className="posts-grid" key={rental.rentalId}>
                                                    <div className="posts-grid-left">
                                                        <Link to={"/properties/" + rental.rentalId}>
                                                            <img src="assets/images/blog-2.jpg" alt=" " className="img-responsive img-thumbnail" />
                                                        </Link>
                                                    </div>
                                                    <div className="posts-grid-right">
                                                        <h4>
                                                            <Link to={"/properties/" + rental.rentalId} className="text-bl">Luxury house in london</Link>
                                                        </h4>
                                                        <span className="price"> from ${rental.rentalDetail.monthlyRent} </span>
                                                    </div>
                                                </div>
                                            )
                                        )
                                    }
                                </aside> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}