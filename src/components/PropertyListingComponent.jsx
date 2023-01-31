import useScript from '../hooks/useScript';

export default function PropertyListingComponent() {
    return (
        <>
            <section className="w3l-breadcrumns">
                <div className="wrapper">
                    <ul>    
                        <li><a href="index.html">Home</a> <span className="fa fa-angle-double-right"></span></li>
                        <li>Properties</li>
                    </ul>
                </div>
            </section>

            <div className="w3l-products-4">
                <div id="products4-block" className="text-center">
                    <h3 className="heading-title">All Properties</h3>
                    <div className="wrapper">
                        <section className="text-left">
                            <div className="d-grid grid-col-3">
                                <div className="product">
                                    <a href="properties-single.html"><img src="assets/images/property1.jpg" className="img-responsive" alt="" /></a>
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
                                    <a href="properties-single.html"><img src="assets/images/property2.jpg" className="img-responsive" alt="" /></a>
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
                                    <a href="properties-single.html"> <img src="assets/images/property3.jpg" className="img-responsive" alt="" /></a>
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
                                <div className="product">
                                        <a href="properties-single.html"><img src="assets/images/property4.jpg" className="img-responsive" alt="" /></a>
                                        <div className="info-bg">
                                            <h5><a href="properties-single.html">Home villa for sale</a></h5>
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
                                        <a href="properties-single.html"><img src="assets/images/property5.jpg" className="img-responsive" alt="" /></a>
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
                                        <a href="properties-single.html"> <img src="assets/images/property2.jpg" className="img-responsive" alt="" /></a>
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
                            <div className="item">
                                <div className="grids4-info">
                                    <a href="properties-single.html"><img src="assets/images/p-slide1.jpg" alt="" /></a>
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
                            </div>
                            <div className="item">
                                <div className="grids4-info">
                                    <a href="properties-single.html"><img src="assets/images/p-slide2.jpg" alt="" /></a>
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
                            </div>
                            <div className="item">
                                <div className="grids4-info">
                                    <a href="properties-single.html"><img src="assets/images/p-slide3.jpg" alt="" /></a>
                                        <div className="info-bg">
                                        <h5><a href="properties-single.html"> Home for sale</a></h5>
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
                            <div className="item">
                                <div className="grids4-info">
                                    <a href="properties-single.html"><img src="assets/images/property1.jpg" alt="" /></a>
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
                            </div>
                            <div className="item">
                                <div className="grids4-info">
                                    <a href="properties-single.html"><img src="assets/images/property2.jpg" alt="" /></a>
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
                            <div className="item">
                                <div className="grids4-info">
                                    <a href="properties-single.html"><img src="assets/images/property3.jpg" alt="" /></a>
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
                            </div>
                            <div className="item">
                                <div className="grids4-info">
                                    <a href="properties-single.html"><img src="assets/images/property3.jpg" alt="" /></a>
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
                            <div className="item">
                                <div className="grids4-info">
                                    <a href="properties-single.html"><img src="assets/images/p-slide1.jpg" alt="" /></a>
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
                            </div>
                            <div className="item">
                                <div className="grids4-info">
                                    <a href="properties-single.html"><img src="assets/images/p-slide2.jpg" alt="" /></a>
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
                            </div>
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