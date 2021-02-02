import React from "react";
import "./header.scss";
import logo from "../../../assets/logo.svg";
import cartIcon from "../../../assets/cartIcon.svg";
import searchIcon from "../../../assets/searchIcon.svg";
import userIcon from "../../../assets/userIcon.svg";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { isMobile } from "../../../helpers/utils";
const Header = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-0">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className={`col-3 ${isMobile() ? "p-0" : "px-2"}`}>
              <a className="navbar-brand" href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className={`col-9 ${isMobile() ? "p-0" : ""}`}>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <div className="col-8 p-0">
                  <ul className="navbar-nav d-flex justify-content-center">
                    <li className="nav-item dropdown px-1">
                      <a
                        className="nav-link dropdown-toggle"
                        href="##"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Shop
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <a className="dropdown-item" href="#a">
                          Action
                        </a>
                        <a className="dropdown-item" href="#a">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#s">
                          Something else here
                        </a>
                      </div>
                    </li>
                    <li className="nav-item px-1">
                      <a className="nav-link" href="/about">
                        About us
                      </a>
                    </li>
                    <li className="nav-item px-1">
                      <a className="nav-link" href="/features">
                        Our Stores
                      </a>
                    </li>
                    <li className="nav-item px-1">
                      <a className="nav-link" href="/contact">
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={isMobile() ? "" : "col-4 p-0"}>
                  <div
                    className={
                      isMobile() ? "left-icon" : "left-icon float-right"
                    }
                  >
                    <img src={searchIcon} alt="search" />
                    <img src={userIcon} alt="user" />
                    <Link to="/cart">
                      <img className="cart-img" src={cartIcon} alt="cart" />
                    </Link>
                    {props.cartQuantity > 0 && (
                      <span className="cart-quantity fs-12 fw-300 text-center">
                        <span className="quantity-text">
                          {props.cartQuantity}
                        </span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  const { cart } = state.shopTrade;
  return {
    cartQuantity: cart.length
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Header);
