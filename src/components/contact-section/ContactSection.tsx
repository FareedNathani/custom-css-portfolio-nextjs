import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section>
      <div className="contact-container">
        <h2 className="contact-heading">
          Contact{" "}
          <span className="gradient-text">
            Me
          </span>
        </h2>
        <form className="form">
          <div className="form-grid">
            {/* Left Side */}
            <div className="left-side">
              <div>
                <label
                  htmlFor="fullName"
                  className="label"
                >
                  FullName
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Full Name"
                  className="input"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="label"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="input"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="label"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone Number"
                  className="input"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="label"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="input"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="right-side">
              <div>
                <label
                  htmlFor="message"
                  className="label"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Message"
                  className="textarea"
                />
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;