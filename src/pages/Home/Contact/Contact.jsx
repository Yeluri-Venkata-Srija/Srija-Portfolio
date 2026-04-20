import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">

        {/* Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Email: yelurivenkatasrija@gmail.com</p>
          <p>Location: India</p>
        </div>

        {/* Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}

export default Contact;