import { Link } from "react-router-dom";
import header from "./Header.css";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faShop } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faUser} />
const element2 = <FontAwesomeIcon icon={faShop} />
export default function Header() {
  function HandleLogOut() {
    window.localStorage.removeItem("email");
    window.location.pathname = "/";
  }
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg ">
          <div className="container ">
            <Link className="navbar-brand logo" to="/">
              <h2>
              NorthStar
              </h2>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav justify-content-between align-items-center">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="About">
                    about
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="ContactUs">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <form className="d-flex " role="search">   
              {!window.localStorage.getItem("email") ? (
                <>
                  <Link to="/Register" className="btn btn-dark me-2" type="submit">
                    Register
                  </Link>
                  <Link to="/SignIn" className="btn btn-info" type="submit">
                    SignIn
                  </Link>
                </>
              ) : (
                <>
                  <div className="d-flex ">
                    <span>
                      <Link>
                      
                      {element}
                      </Link>
                    </span>
                    <span>
                     <Link to={"./Cart"}>
                     {element2}
                     </Link>
                    </span>
                  <Link
                    to="/LogOut"
                    className="btn btn-danger"
                    onClick={HandleLogOut}
                  >
                    LogOut
                  </Link>
                  </div>
                </>
              )}
            </form>
          </div>
        </nav>
      </header>
    </>
  );
}
