import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{ useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
const star = <FontAwesomeIcon icon={faStar} />;

export default function Product({ addToCart }) {
  
  return (
    <>
      <section className="single-product mt-5">
        <div className="container">
          <div className="row align-items-start justify-content-between">
            <div className="col-xl-6">
              <div className="item">
                <img src={require(".//Assets/single.png")} alt="" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="item">
                <h2>Plain White Shirt</h2>
                <span>
                  <div className="d-flex">
                    <p>{star}</p>
                    <p>{star}</p>
                    <p>{star}(15)</p>
                  </div>
                </span>
                <h3 className="price-product ">
                  <del className="p-2">$69.00 </del>
                  $15
                </h3>
                <p>
                  A classic t-shirt never goes out of style. This is our most
                  premium collection of shirt. This plain white shirt is made up
                  of pure cotton and has a premium finish.
                </p>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>select size</option>
                  <option value="1">sm</option>
                  <option value="2">L</option>
                  <option value="3">xl</option>
                  <option value="4">xll</option>
                </select>
                <button className="btn btn-info btn-cart m-4" onClick={addToCart} >
                  Add To Cart
                </button>
                <div className="text-product">
                  <p>
                    <strong>Category</strong>: Women, Polo, Casual
                  </p>
                  <p>
                    <strong>Tags</strong>: Modern, Design, cotton
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="description">
        <div className="container">
          <div className="row mt-5">
            <p>
              <button
                className="btn btn-primary btn-cart"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Description
              </button>
              <button
                className="btn btn-cart ms-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample1"
                aria-expanded="false"
                aria-controls="collapseExample1"
              >
                Over View
              </button>
            </p>
            <div className="collapse" id="collapseExample1">
              <div className="card card-body">
                Social segregation plays no part through social mediums due to
                lack of face to face communication and information being wide
                spread instead to a selective audience.
              </div>
            </div>
            <div className="collapse" id="collapseExample">
              <div className="card card-body">
                A key objective is engaging digital marketing customers and
                allowing them to interact with the brand through servicing and
                delivery of digital media. Information is easy to access at a
                fast rate through the use of digital communications. Users with
                access to the Internet can use many digital mediums, such as
                Facebook, YouTube, Forums, and Email etc. Through Digital
                communications it creates a Multi-communication channel where
                information can be quickly exchanged around the world by anyone
                without any regard to whom they are.[28] Social segregation
                plays no part through social mediums due to lack of face to face
                communication and information being wide spread instead to a
                selective audience.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
