import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faQuoteLeft} from  "@fortawesome/free-solid-svg-icons";
const element=<FontAwesomeIcon icon={faQuoteLeft} />
export default function About() {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="text-about">
              <h2>About Northstar</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="about-img">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-6">
              <div className="item">
                <img src={require("../src/Assets/about1-img.png")} alt="" />
                <button className="btn btn-cold btn-about">buy now</button>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="item">
                <img src={require("../src/Assets/about2-img.png")} alt="" />
                <button className="btn  btn-about">buy now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="founders">
        <div className="container">
          <div className="row text-center">
            <h2>The Founders</h2>
            <div className="col-xl-3">
              <div className="item">
                <img src={require("../src/Assets/person1.png")} alt="" />
                <h5>HM Jawad</h5>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="item">
                <img src={require("../src/Assets/person2.png")} alt="" />
                <h5>Furqan Abid</h5>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="item">
                <img src={require("../src/Assets/person3.png")} alt="" />
                <h5>Abdullah Ah</h5>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="item">
                <img src={require("../src/Assets/person4.png")} alt="" />
                <h5>Abrar Khan</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="container">
          <div className="row justify-content-center">
            <div className="text-test text-center">
              <h2>Testimonials</h2>
            </div>
            <div className="col-xl-8">
              <div className="item">
                <div className="d-flex">
                  <img src={require("../src/Assets/comment2.png")} alt="" />
                  <div className="text-comment">
                    <span>{element}</span>
                    <p>
                      Once we ordered some accessories items and we got the
                      products delivered in our doorstep, the customer support
                      was super helpful and they answered all my queries.
                    </p>
                    <p>Stacy</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="item">
                <div className="d-flex">
                  <img src={require("../src/Assets/comment1.png")} alt="" />
                  <div className="text-comment">
                    <span>{element}</span>
                    <p>
                      I ordered 5 shirts from them and received them in no time.
                      The customer support was awesome!
                    </p>
                    <p>Tiffany</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="item">
                <div className="d-flex">
                  <img src={require("../src/Assets/comment3.png")} alt="" />
                  <div className="text-comment">
                    <span>{element}</span>
                    <p>
                      I got a wrong shirt so I contacted them and they happily
                      offered me a refund. I will surely shop from them again.
                    </p>
                    <p>James</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
