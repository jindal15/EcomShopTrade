import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateCart } from "../../reducers/shopTrade";
import "./product.scss";
import { displayOptions } from "../../helpers/utils";

const Product = (props) => {
  const [options, showOptions] = useState();
  const [size, setSize] = useState();
  const [onOptionSelectItem, setOnOptionSelectItem] = useState();
  const onSelectOption = (option, index) => {
    setSize(option);
    setOnOptionSelectItem(index);
  };
  const onAddToCart = (item) => {
    item.size = size;
    props.updateCart(item);
  };

  const imageHeight = (i) => {
    if (options === false) {
      return "";
    } else if (onOptionSelectItem === i && options === i) {
      return "350px";
    } else if (options === i) {
      return "314px";
    }
  };
  console.log("options", options);

  return (
    <Fragment>
      <div className="row px-3">
        {props.productDetails &&
          props.productDetails.map((item, index) => {
            const actualPrice = Number(item.price) * 2;
            return (
              <div className="column">
                <div
                  id={index}
                  key={index}
                  className=""
                  // style={{ width: "17rem" }}
                  onMouseEnter={(e) => showOptions(Number(e.currentTarget.id))}
                  onMouseLeave={() => showOptions(false)}
                >
                  <img
                    className="card-img-top"
                    src={item.image_src}
                    alt="Card cap"
                    height={imageHeight(index)}
                  />
                  <div className="card-body">
                    <div className="card-text">
                      {options === index ? (
                        <Fragment>
                          {onOptionSelectItem === index ? (
                            <button
                              className="cart-button py-1 fs-14 fw-500 mt-1 mb-2"
                              type="button"
                              onClick={() => onAddToCart(item)}
                            >
                              {/* ? "Added, Go to Cart" */}
                              ADD TO CART
                            </button>
                          ) : (
                            <Fragment>
                              <span className="d-block fs-12 fw-500 mb-1">
                                Select size
                              </span>
                              <div className="d-flex mb-3 mt-2">
                                {item.options.map((opt) => {
                                  return (
                                    <div
                                      className="option mx-1 fs-14 fw-500"
                                      onClick={() =>
                                        onSelectOption(opt.value, index)
                                      }
                                    >
                                      <span>
                                        {displayOptions(
                                          opt.value,
                                          "select"
                                        ).toUpperCase()}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            </Fragment>
                          )}

                          <span className="d-block fs-14 fc-light fw-300">
                            Size:{" "}
                            {item.options
                              .map((e) => displayOptions(e.value).toUpperCase())
                              .join(",")}
                          </span>
                        </Fragment>
                      ) : (
                        <Fragment>
                          <span className="d-block">
                            <b>{item.vendor}</b>
                          </span>
                          <span className="d-block fc-light fs-14">
                            {item.name}
                          </span>
                        </Fragment>
                      )}
                      <div className="d-block">
                        <span className="fs-14">
                          <b>{`$${item.price}`}</b>
                        </span>
                        <span className="fs-12 fc-light">
                          {" "}
                          <strike>{`$${actualPrice}`}</strike>
                        </span>
                        <span className="fs-12 discount"> (50% OFF)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const { cart } = state.shopTrade;
  return {
    cart: cart
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ updateCart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Product);
