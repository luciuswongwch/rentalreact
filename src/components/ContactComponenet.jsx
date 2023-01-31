export default function ContactComponent() {
    return (
        <>
            <section class="w3l-breadcrumns">
                <div class="wrapper">
                    <ul>
                        <li><a href="index.html">Home</a> <span class="fa fa-angle-double-right"></span></li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </section>
            <section class="w3l-contacts-2">
                <div class="wrapper ">
                    <h3 class="heading-title">Get in touch with us</h3>
                    <div class="contact-main">
                        <div class="grid grid-column-2">
                            <div class="column">
                                <h3 class="header">We are here for you</h3>
                                <p class="head-main">Donec eu lorem et nulla eleifend convallis non dapibus est. Morbi erat nibh, sollicitudin
                                    vel est ut, egestas sollicitudin metus. Mauris et mi et scelerisque, ultricies orci vitae, dignissim lacus.
                                    Sed dapibus urna condimentum, et maximus lectus dapibus mattis.</p>
                            </div>
                            <div class="column2">
                                <p><span class="fa fa-envelope-open"> </span><a href="mailto:mail@example.com">mail@example.com</a></p>
                                <p><span class="fa fa-phone"></span> <a href="tel:123-456-7890">123-456-7890</a></p>
                                <p class="contact-para"><span class="fa fa-map-marker"></span> Estate Business, UK</p>
                                <p> #32841 block, #221DRS Real estate business building, UK.</p>
                            </div>
                            <div class="column3">
                                <h3 class="header">Follow us </h3>
                                <a href="#facebook" class="facebook"><span class="fa fa-facebook"></span></a>
                                <a href="#twitter" class="twitter"><span class="fa fa-twitter"></span></a>
                                <a href="#linkedin" class="linkedin"><span class="fa fa-linkedin"></span></a>
                                <a href="#instagram" class="instagram"><span class="fa fa-instagram"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="w3l-contacts-12">
                <div class="wrapper">
                    <div class="contacts12-main">
                        <h3 class="contact-head">we want to here from you</h3>
                        <p class="contact-para">It is important to realize that by their very definition, prototypes will represent some compromise from the final design</p>
                        <form action="https://sendmail.w3layouts.com/submitForm" method="post">
                            <div class="main-input">
                                <input type="text" name="name" placeholder="Your name" class="contact-input" required />
                                <input type="email" name="email" placeholder="Your email id" class="contact-input" required />
                                <input type="text" name="title" placeholder="Subject" class="contact-input" required />
                            </div>
                            <textarea class="contact-textarea" name="message" placeholder="Your message goes here" required></textarea>
                            <button class="actionbg btn">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}