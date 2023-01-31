import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRentalsFooter, getRentalCountFooter } from '../api/RentalApiService';

import rentalImage1 from '../assets/images/blog1.jpg';
import rentalImage2 from '../assets/images/blog2.jpg';
import rentalImage3 from '../assets/images/blog3.jpg';
import rentalImage4 from '../assets/images/blog4.jpg';
import rentalImage5 from '../assets/images/blog5.jpg';
import rentalImage6 from '../assets/images/blog6.jpg';

function FooterComponent() {
    const [apartmentCount, setApartmentCount] = useState(0);
    const [condoCount, setCondoCount] = useState(0);
    const [houseCount, setHouseCount] = useState(0);
    const [townhouseCount, setTownhouseCount] = useState(0);
    const [villaCount, setVillaCount] = useState(0);

    const [popularRentals, setPopularRentals] = useState([]);

    function getRandomImage() {
        var list = [rentalImage1, rentalImage2, rentalImage3, rentalImage4, rentalImage5, rentalImage6];
        return list[Math.floor(Math.random() * 6)];
    }

    useEffect(() => {
        getRentalCountFooter()
            .then(response => {
                response.data.map(value => {
                    switch(value.propertyType) {
                        case "Apartment":
                            setApartmentCount(value.count);
                            break;
                        case "Condo":
                            setCondoCount(value.count);
                            break;
                        case "House":
                            setHouseCount(value.count);
                            break;
                        case "Townhouse":
                            setTownhouseCount(value.count);
                            break;
                        case "Villa":
                            setVillaCount(value.count);
                            break;
                    }
                });
            })
            .catch(error => console.log(error));
        getRentalsFooter()
            .then(response => {
                setPopularRentals(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <section className="w3l-footer-29-main">
                <div className="footer-29">
                    <div className="wrapper">
                        <div className="d-grid grid-col-4 footer-top-29">
                            <div className="footer-list-29 footer-1">
                                <h6 className="footer-title-29">Contact Us</h6>
                                <ul>
                                    <li><p><span className="fa fa-map-marker"></span> 1234 Main Road, British Columbia, Canada</p></li>
                                    <li><a href="tel:123 456 7890"><span className="fa fa-phone"></span> 123 456 7890</a></li>
                                    <li><a href="mailto:mail@example.com" className="mail"><span className="fa fa-envelope-open-o"></span> mail@example.com</a></li>
                                </ul>
                                <div className="main-social-footer-29">
                                    <a href="#facebook" className="facebook"><span className="fa fa-facebook"></span></a>
                                    <a href="#twitter" className="twitter"><span className="fa fa-twitter"></span></a>
                                    <a href="#instagram" className="instagram"><span className="fa fa-instagram"></span></a>
                                    <a href="#google-plus" className="google-plus"><span className="fa fa-google-plus"></span></a>
                                    <a href="#linkedin" className="linkedin"><span className="fa fa-linkedin"></span></a>
                                </div>
                            </div>
                            <div className="footer-list-29 footer-2">
                                <ul>
                                    <h6 className="footer-title-29">Category</h6>
                                    <li><Link to="/properties?type=apartment">Apartments ({apartmentCount})</Link></li>
                                    <li><Link to="/properties?type=condo">Condos ({condoCount})</Link></li>
                                    <li><Link to="/properties?type=house">Houses ({houseCount})</Link></li>
                                    <li><Link to="/properties?type=townhouse">Townhouses ({townhouseCount})</Link></li>
                                    <li><Link to="/properties?type=villa">Villas ({villaCount})</Link></li>
                                </ul>
                            </div>
                            <div className="footer-list-29 footer-3">
                                <div className="properties">
                                    <h6 className="footer-title-29">Latest Properties</h6>
                                    {
                                        popularRentals.map(
                                            rental => (
                                                <Link to={"/properties?id=" + rental.rentalId} key={rental.rentalId}><img src={getRandomImage()} className="img-responsive" alt="" /><p>{rental.rentalDetail.exteriorMaterial} {rental.propertyType.toLowerCase()} for rent<span>${rental.rentalDetail.monthlyRent}</span></p></Link>
                                            )
                                        )
                                    }
                                    {/* <a href="blog-single.html"><img src={blog3} className="img-responsive" alt="" /><p>Park avenue apartment for sale<span>$210</span></p></a>
                                    <a href="blog-single.html"><img src={blog2} className="img-responsive" alt="" /><p>Luxury Villa for rent<span>$450</span></p></a>
                                    <a href="blog-single.html"><img src={blog4} className="img-responsive" alt="" /><p>Apartment for sale<span>$210</span></p></a> */}
                                </div>
                            </div>
                            <div className="footer-list-29 footer-4">
                                <ul>
                                    <h6 className="footer-title-29">Quick Links</h6>
                                    <li><Link to="/about">About company</Link></li>
                                    <li><Link to="/properties?featured=true">Featured properties</Link></li>
                                    <li><a href="team.html">Professional Agents</a></li>
                                    <li><a href="blog.html">Properties Blog</a></li>
                                    <li><Link to="/contact">Get in touch</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-grid grid-col-2 bottom-copies">
                            <p className="copy-footer-29">©2023 Renting. All rights reserved.</p>
                            <ul className="list-btm-29">
                                <li><a href="#link">Privacy policy</a></li>
                                <li><a href="#link">Terms of service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FooterComponent;