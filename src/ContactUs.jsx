export default function About() {
  function submit() {
    alert("Message sent. We’ll contact you soon.");
  }
  return (
    <>
      <section className="about contact ">
        <div className="container">
          <div className="row">
            <div className="text-about">
              <h2>contact us</h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-5 mb-5">
          <div className="row justify-content-between">
            <div className="col-xl-7">
              <div className="item">
                <h2>We would love to hear from you.</h2>
                <p>
                  If you have any query or any type of suggestion, you can
                  contact us here. We would love to hear from you.
                </p>
                <form action={submit} className="form p-2 m-2">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="name"
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="email"
                  />
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    placeholder="your message"
                    className="form-control"
                    rows="10"
                  ></textarea>
                  <button
                    type="submit"
                    onClick={submit}
                    className="btn btn-cart mt-2"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>
            <div className="col-xl-4">
              <h3>Visit Us</h3>
              <p>UET Lahore, Punjab, Pakistan</p>
              <p>Phone: +923039898987</p>
              <h3>Get In Touch</h3>
              <p>You can get in touch with us on this provided email. </p>
              <p>Email: hmjawad087@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
