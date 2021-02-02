import React from "react";
import { connect } from "react-redux";
import QuantityButton from "../common/QuantityButton/index";
import { removeCart } from "../../reducers/shopTrade";
import { bindActionCreators } from "redux";
import "./cart.scss";
import { isMobile } from "../../helpers/utils";

const Cart = (props) => {
  const onRemoveProduct = (item) => {
    props.removeCart(item);
  };
  let addedItems = props.items.length ? (
    props.items.map((item) => {
      return (
        <div className="row">
          <div className="col-12 py-3">
            <li className="d-flex pb-4" key={item.id}>
              <div className="col-3">
                <img
                  src={item.image_src}
                  alt={item.image_src}
                  className=""
                  width="100%"
                  height="100%"
                />
              </div>
              <div className={`py-5 ${isMobile() ? "col-4" : "col-5"}`}>
                <div className="title">{item.vendor}</div>
                <div className="title">{item.name}</div>
                <span>
                  <p>Size: {item.size}</p>
                </span>
                <button
                  className="remove-btn"
                  onClick={() => onRemoveProduct(item)}
                >
                  Remove
                </button>
              </div>
              <div className={`py-5 ${isMobile() ? "col-2" : "col-2 p-0"}`}>
                <p>
                  <b>
                    <div className="pb-2">Price </div>
                    <div className="pt-2">$ {item.price * item.quantity}</div>
                  </b>
                </p>
              </div>
              <div className={`py-5 ${isMobile() ? "col-3" : "col-2"}`}>
                <p>
                  <b className="p-2">
                    Quantity <QuantityButton itemId={item.id} />
                  </b>
                </p>
              </div>
            </li>
            <hr />
          </div>
        </div>
      );
    })
  ) : (
    <div className="d-flex justify-content-center fs-20">
      There is no item in your cart
    </div>
  );
  return (
    <div>
      <hr className="m-0" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h3 className="d-flex justify-content-center py-4">
              SHOPPING CART
            </h3>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className={isMobile() ? "col-12" : "col-8"}>
            <div className="card">
              <div className="card-body">
                <ul className="collection pl-0 ">{addedItems}</ul>
              </div>
            </div>
          </div>
          <div className={isMobile() ? "col-12 pt-4" : "col-4"}>
            <div className="card">
              <div className="cart card-body">
                <p className="fs-25"> Total Amount </p>
                <ul className="list-group list-group-flush">
                  <li className="d-flex justify-content-between py-2 fs-20">
                    Total price
                    <span>$ {props.total}</span>
                  </li>
                  <li className="d-flex justify-content-between py-2 fs-20">
                    <span> Shipping </span>
                    <span>N/A</span>
                  </li>
                  <div className="line">
                    <hr />
                  </div>
                  <li className="d-flex justify-content-between fs-20">
                    <div className="mb-3">
                      <strong>Net Total (including VAT)</strong>
                    </div>
                    <span>
                      <strong>$ {props.total}</strong>
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="btn btn-primary btn-block waves-effect waves-light"
                >
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { cart, total } = state.shopTrade;
  return {
    items: cart,
    total: total
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ removeCart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
