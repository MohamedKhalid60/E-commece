 import footer from "./Footer.css"
export default function Footer(){
    return(<>
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-xl-3">
                    <div className="item">
                        <h4>
                        Company info
                        </h4>
                        <ul>
                            <li>
                                About Us
                            </li>
                            <li>Latest POSTS</li>
                            <li>Contact Us</li>
                            <li>Shop</li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="item">
                        <h4>
                        help links
                        </h4>
                        <ul>
                            <li>
                            Tracking
                            </li>
                            <li>Order Status</li>
                            <li>Delivery</li>
                            <li>Shipping Info</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="item">
                        <h4>
                        useful links
                        </h4>
                        <ul>
                            <li>
                            Special Offers
                            </li>
                            <li>Gift Cards</li>
                            <li>Advetising</li>
                            <li>Terms of Use</li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-3">
                    <div className="item">
                        <h4>
                        get in the know
                        </h4>
                        <form action="" method="post">

                            <input type="text" className="form-control" placeholder="Enter Email..." />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </footer>
    </>)
    
}