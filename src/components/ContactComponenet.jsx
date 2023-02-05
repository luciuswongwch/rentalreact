import { ErrorMessage, Field, Form, Formik } from "formik";

export default function ContactComponent() {
    function onSumbit(values) {

    }

    function validate(values) {
        let errors = {};
        if (values.title.length < 5) {
            errors.title = "Please enter a title with at least 5 characters";
        }
        if (values.message.length < 5) {
            errors.message = "Please enter a message with at least 5 characters";
        }
        return errors;
    }

    return (
        <>
            <section className="w3l-breadcrumns">
                <div className="wrapper">
                    <ul>
                        <li><a href="index.html">Home</a> <span className="fa fa-angle-double-right"></span></li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </section>
            <section className="w3l-contacts-2">
                <div className="wrapper ">
                    <h3 className="heading-title">Get in touch with us</h3>
                    <div className="contact-main">
                        <div className="grid grid-column-2">
                            <div className="column">
                                <h3 className="header">We are here for you</h3>
                                <p className="head-main">Donec eu lorem et nulla eleifend convallis non dapibus est. Morbi erat nibh, sollicitudin
                                    vel est ut, egestas sollicitudin metus. Mauris et mi et scelerisque, ultricies orci vitae, dignissim lacus.
                                    Sed dapibus urna condimentum, et maximus lectus dapibus mattis.</p>
                            </div>
                            <div className="column2">
                                <p><span className="fa fa-envelope-open"> </span><a href="mailto:mail@example.com">mail@example.com</a></p>
                                <p><span className="fa fa-phone"></span> <a href="tel:123-456-7890">123-456-7890</a></p>
                                <p className="contact-para"><span className="fa fa-map-marker"></span> Estate Business, UK</p>
                                <p> #32841 block, #221DRS Real estate business building, UK.</p>
                            </div>
                            <div className="column3">
                                <h3 className="header">Follow us </h3>
                                <a href="#facebook" className="facebook"><span className="fa fa-facebook"></span></a>
                                <a href="#twitter" className="twitter"><span className="fa fa-twitter"></span></a>
                                <a href="#linkedin" className="linkedin"><span className="fa fa-linkedin"></span></a>
                                <a href="#instagram" className="instagram"><span className="fa fa-instagram"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w3l-contacts-12">
                <div className="wrapper">
                    <div className="contacts12-main">
                        <h3 className="contact-head">we want to here from you</h3>
                        <p className="contact-para">It is important to realize that by their very definition, prototypes will represent some compromise from the final design</p>
                        <Formik initialValues={{}}
                            enableReinitialize={true}
                            onSubmit={onSumbit}
                            validate={validate}
                            validateOnChange={false}
                            validateOnBlur={false}>
                            {
                                (props) => (
                                    <Form>
                                        <ErrorMessage name="title" component="div" className="alert alert-warning" />
                                        <ErrorMessage name="message" component="div" className="alert alert-warning" />
                                        <div className="main-input">
                                            <Field type="text" name="name" placeholder="Your name" className="contact-input" required />
                                            <Field type="email" name="email" placeholder="Your email id" className="contact-input" required />
                                            <Field type="text" name="title" placeholder="Subject" className="contact-input" required />
                                        </div>
                                        <textarea className="contact-textarea" name="message" placeholder="Your message goes here" required></textarea>
                                        <button className="actionbg btn">Submit</button>
                                    </Form>
                                )
                            }
                        </Formik>
                    </div>
                </div>
            </section>
        </>
    )
}