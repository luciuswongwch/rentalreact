import { Link } from 'react-router-dom';

export default function ErrorComponent() {
    return (
        <>
            <section className="w3l-form-2 notFoundPage">
                <div className="">
                    <div className="wrapper">
                        <div className="text-main">
                            <div className="main1">
                                <div className="tagline">
                                    <p className="form-tagline">Page resource does not exist </p>
                                    <h1 className="head-form">404 Page Not Found</h1>
                                    <p className="form-para1"><Link to="/">Return to home page</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}