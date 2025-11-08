const Contact = () => {
    return(
        <section id="contact">
            <div id="contact-content">
                <p>Contact</p>
                <h3>Get in <span className="gradient-text">touch</span></h3>
                <p>I’d love to hear from you! Whether it’s a project, collaboration, or just a hello, feel free to reach out.</p>
                <hr />
                <div id="contact-methods">
                    <div id="social">
                        <h3 className="method">Social Media</h3>
                        <p><a href="#">Facebook</a></p>
                        <p><a href="#">LinkedIn</a></p>
                        <p><a href="#">Instagram</a></p>
                    </div>
                    <div id="general">
                        <div>
                            <h3 className="method">Or send <br /> a quick email</h3>
                            <a href="">Send Email</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;