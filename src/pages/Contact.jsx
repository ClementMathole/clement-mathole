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
                        <p><a href="https://www.facebook.com/share/1AXZXmGeQt/">Facebook</a></p>
                        <p><a href="https://www.linkedin.com/in/clement-mathole-2a5748309">LinkedIn</a></p>
        
                    </div>
                    <div id="general">
                        <div>
                            <h3 className="method">Or send <br /> a quick email</h3>
                            <a href="mailto:clementmathole003@gmail.com">Send Email</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
