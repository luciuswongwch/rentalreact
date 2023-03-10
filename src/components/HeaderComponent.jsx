import { Link } from 'react-router-dom';

function HeaderComponent() {
    return (
        <>
            <section className="w3l-top-menu-4">
                <header className="top-menu4">
                    <div className="wrapper">
                        <div className="d-grid align-topmenu4">
                            <div className="top-menu4-left d-grid align-items-menu4">
                                <ul className="social-icons">
                                    <li className="facebook"><a href="#facebook"><span className="fa fa-facebook"></span></a></li>
                                    <li className="twitter"><a href="#twitter"><span className="fa fa-twitter"></span></a></li>
                                    <li className="instagram"><a href="#instagram"><span className="fa fa-instagram"></span></a></li>
                                    <li className="google-plus"><a href="#google-plus"><span className="fa fa-google-plus"></span></a></li>
                                    <li className="linkedin"><a href="#linkedin"><span className="fa fa-linkedin"></span></a></li>
                                </ul>
                            </div>
                            <div className="top-menu4-right">
                                <ul className="top-menu-right">
                                    <li><a href="tel: 123 456 7890"> <span className="fa fa-phone"> </span>123 456 7890</a> <span>Call us today</span> </li>
                                    <li><a href="mailto:mail@example.com"> <span className="fa fa-envelope-open-o"> </span>mail@example.com</a> <span>Email us at</span> </li>
                                    <li><p> <span className="fa fa-clock-o"> </span>09am - 12pm</p> <span>Open everyday</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </section>

            <section className="w3l-header-4">
                <header id="headers4-block">
                    <div className="wrapper">
                        <div className="d-grid nav-mobile-block header-align">
                            <div className="logo">
                                <Link className="brand-logo" to="/"><span>Tenant</span></Link>
                            </div>
                            <input type="checkbox" id="nav" />
                            <label className="nav" htmlFor="nav"></label>
                            <nav>
                                <label htmlFor="drop" className="toggle">Menu</label>
                                <input type="checkbox" id="drop" />
                                    <ul className="menu">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/services">Services</Link></li>
                                        <li><Link to="/pricing">Pricing</Link></li>
                                        <li>
                                            <label htmlFor="drop-5" className="toggle toogle-5">Rental properties <span className="angle-dropdown"
                                                aria-hidden="true"></span>
                                            </label>
                                            <a href="#shop">Rental properties<span className="angle-dropdown" aria-hidden="true"></span></a>
                                            <input type="checkbox" id="drop-5" />
                                                <ul>
                                                    <li><Link to="/properties" className="drop-text">All properties</Link></li>
                                                    <li><Link to="/properties?type=apartment" className="drop-text">Apartments</Link></li>
                                                    <li><Link to="/properties?type=condo" className="drop-text">Condos</Link></li>
                                                    <li><Link to="/properties?type=house" className="drop-text">Houses</Link></li>
                                                    <li><Link to="/properties?type=townhouse" className="drop-text">Townhouses</Link></li>
                                                    <li><Link to="/properties?type=villa" className="drop-text">Villas</Link></li>
                                                </ul>
                                        </li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>
                            </nav>
                        </div>
                    </div>
                </header>
            </section>
        </>
    )
}

export default HeaderComponent;