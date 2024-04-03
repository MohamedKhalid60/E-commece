import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faTicket,
  faRotateLeft,
  faFingerprint,
} from "@fortawesome/free-solid-svg-icons";
const element = <FontAwesomeIcon icon={faTruckFast} />;
const element2 = <FontAwesomeIcon icon={faTicket} />;
const element3 = <FontAwesomeIcon icon={faRotateLeft} />;
const element4 = <FontAwesomeIcon icon={faFingerprint} />;

export default function Home() {
  const repeat = [1, 2, 3, 4, 5, 6, 7, 8];
  const repeatserv = [1, 2, 3, 4];
  return (
    <>
      <section className="home">
        <div className="container ">
          <div className="text-home ">
            <h2>stylist picks beat the heat</h2>
            <button className="btn btn-home">SHOP NOW</button>
            <Link className="btn btn-home" to={"/Dashboard"}>
              Dashboard
            </Link>
          </div>
        </div>
      </section>
      <section className="product">
        <div className="container">
          <div className="row">
            <div className="text-product text-center">
              <h3>Discover NEW Arrivals</h3>
              <p>Recently added shirts!</p>
            </div>
            <div className="col-xl-3">
              <div className="card">
                <img
                  src={require("./Assets/unsplash_KjRkxQ2NNXA.png")}
                  alt=""
                />
                <div className="card-text text-center">
                  <h5>Plain White Shirt</h5>
                  <p>$29.00</p>
                  <Link className="btn btn-cart m-2" to="./Product">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card">
                <img src={require("./Assets/Rectangle 1-1.png")} alt="" />
                <div className="card-text text-center">
                  <h5>Plain White Shirt</h5>
                  <p>$29.00</p>
                  <Link className="btn btn-cart m-2" to="./Product">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card">
                <img src={require("./Assets/Rectangle 1-2.png")} alt="" />
                <div className="card-text text-center">
                  <h5>Plain White Shirt</h5>
                  <p>$29.00</p>
                  <Link className="btn btn-cart m-2" to="./Product">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card">
                <img src={require("./Assets/Rectangle 1-3.png")} alt="" />
                <div className="card-text text-center">
                  <h5>Plain White Shirt</h5>
                  <p>$29.00</p>
                  <Link className="btn btn-cart m-2" to="./Product">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card">
                <img src={require("./Assets/Rectangle 1.png")} alt="" />
                <div className="card-text text-center">
                  <h5>Plain White Shirt</h5>
                  <p>$29.00</p>
                  <Link className="btn btn-cart m-2" to="./Product">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card">
                <img src={require("./Assets/Rectangle 1-4.png")} alt="" />
                <div className="card-text text-center">
                  <h5>Plain White Shirt</h5>
                  <p>$29.00</p>
                  <Link className="btn btn-cart m-2" to="./Product">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card">
                <img src={require("./Assets/Rectangle 1-5.png")} alt="" />
                <div className="card-text text-center">
                  <h5>Plain White Shirt</h5>
                  <p>$29.00</p>
                  <Link className="btn btn-cart m-2" to="./Product">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card">
                <img src={require("./Assets/Rectangle 1.png")} alt="" />
                <div className="card-text text-center">
                  <h5>Plain White Shirt</h5>
                  <p>$29.00</p>
                  <Link className="btn btn-cart m-2" to="./Product">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="card d-flex ">
                <div className="text-serve text-center">
                  <h4>
                    <span>{element}</span>Free Shipping
                  </h4>
                  <p>Enjoy free shipping on all orders above $100</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card d-flex ">
                <div className="text-serve text-center">
                  <h4>
                    <span>{element2}</span>SUPPORT 24/7
                  </h4>
                  <p>Our support team is there to help you for queries</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card d-flex ">
                <div className="text-serve text-center">
                  <h4>
                    <span>{element3}</span>30 DAYS RETURN
                  </h4>
                  <p>Simply return it within 30 days for an exchange.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card d-flex ">
                <div className="text-serve text-center">
                  <h4>
                    <span>{element4}</span>100% PAYMENT SECURE
                  </h4>
                  <p>Our payments are secured with 256 bit encryption</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="offer">
        <div className="container-fluid">
          <div className="row justify-content-center ">
            <div className="col-xl-6">
              <div className="item text-center">
                <div className="offer-text">
                  <h3>peace of mind</h3>
                  <p>
                    A one-stop platform for all your fashion needs, hassle-free.
                    Buy with a peace of mind.
                  </p>
                  <button className="btn btn-offer">BUY NOW</button>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="item text-center">
                <div className="offer-text">
                  <h3>Buy 2 Get 1 Free</h3>
                  <p>
                    End of season sale. Buy any 2 items of your choice and get 1
                    free.
                  </p>
                  <button className="btn btn-offer">BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product">
        <div className="container text-center">
          <div className="row">
            <div className="text-product text-center">
              <h3>Top Sellers</h3>
              <p>Browse our top-selling products</p>
            </div>
            <div className="col-xl-3">
              <div className="card">
                <img src={require("./Assets/Rectangle 1.png")} alt="" />
                <div className="card-text text-center">
                  <h5>Plain White Shirt</h5>
                  <p>$70.00</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card">
                <img src={require("./Assets/Rectangle 1-3.png")} alt="" />
                <div className="card-text text-center">
                  <h5>Plain White Shirt</h5>
                  <p>$50.00</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card">
                <img src={require("./Assets/Rectangle 1-2.png")} alt="" />
                <div className="card-text text-center">
                  <h5>Plain White Shirt</h5>
                  <p>$29.00</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="card">
                <img src={require("./Assets/Rectangle 1-1.png")} alt="" />
                <div className="card-text text-center">
                  <h5>Plain White Shirt</h5>
                  <p>$29.00</p>
                </div>
              </div>
            </div>
          </div>
          <Link className="btn btn-seller" to={"./Shop"}>
            SHOP NOW
          </Link>
        </div>
      </section>
    </>
  );
}
