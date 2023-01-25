export default function LoginComponent() {
    return (
        <>
            <section className="w3l-form-2">
                <div className="">
                    <div className="header">
                        <a href="index.html" className="brand-logo">Tenant</a>
                        <a href="signup.html" className="signin">Register</a>
                    </div>
                    <div className="wrapper">
                        <div className="text-main">
                            <div className="main1">
                                <div className="tagline">
                                    <p className="form-tagline">Login to your account Now</p>
                                    <h1 className="head-form">The best way to find your home villas</h1>
                                    <p className="form-para1">Integer blandit eget dui in tempor. Pellentesque gravida tortor at eros,
                                        et ullamcorper magna blandit. In id metus id tellus vestibulum feugiat. Aene an et tellus tincidunt, pretium
                                        libero vel, condimentum leo. Sed leo lacus, consectetur vitae fringilla eu, ornare eu augue. Aliquam in
                                        dui, nec mattis velit. Mauris at mauris erat.  </p>
                                </div>
                            </div>
                            <div className="main2">
                                <div className="sign-main">
                                    <p className="signup">Login to your account</p>
                                    <p className="create">Welcome back! login to your account</p>
                                    <form action="#" className="sign-up-form">
                                        <input type="email" className="form-type" placeholder="Your email" required />
                                        <input type="password" className="form-type" placeholder="Your password" required />
                                        <div>
                                            <label className="check-remember container">
                                                <input type="checkbox" className="form-check" />
                                                <span className="checkmark"></span>
                                                <p className="privacy-policy">Keep me logged in</p>
                                            </label>
                                            <div className="clear"></div>
                                        </div>
                                        <button className="create-account">Login account</button>
                                        <p className="account text-center">Don't have an account? Go to <a href="register.html" className="register">Register</a> </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}