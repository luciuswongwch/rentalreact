import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../security/AuthContext';

export default function LoginComponent() {
    const authContext = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginFailed, setLoginFailed] = useState(false);

    async function handleSubmit() {
        if (await authContext.login(username, password)) {
            navigate("/");
        } else {
            setLoginFailed(true);
        }
    }

    return (
        <>
            <section className="w3l-form-2">
                <div className="">
                    <div className="header">
                        <Link to="/" className="brand-logo">Tenant</Link>
                        <Link to="/register" className="signin">Register</Link>
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
                                {loginFailed && <div style={{color: "red"}}>Login attempt failed. Please make sure you have used the correct credentials.</div>}
                                <div className="sign-main">
                                    <p className="signup">Login to your account</p>
                                    <p className="create">Welcome back! Login to your account</p>
                                    <div className="sign-up-form">
                                        <input type="username" className="form-type" placeholder="Your username" required onChange={(event) => {setUsername(event.target.value)}} />
                                        <input type="password" className="form-type" placeholder="Your password" required onChange={(event) => {setPassword(event.target.value)}} />
                                        <div>
                                            <label className="check-remember container">
                                                <input type="checkbox" className="form-check" />
                                                <span className="checkmark"></span>
                                                <p className="privacy-policy">Keep me logged in</p>
                                            </label>
                                            <div className="clear"></div>
                                        </div>
                                        <button className="create-account" onClick={handleSubmit}>Login account</button>
                                        <p className="account text-center">Don't have an account? Go to <Link to="/register" className="register">Register</Link> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}