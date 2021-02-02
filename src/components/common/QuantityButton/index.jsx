import React, { useState } from "react";
import { incQuantity, decQuantity } from "../../../reducers/shopTrade";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./quantity.scss";

const Quantity = (props) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    props.incQuantity(props.itemId);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      props.decQuantity(props.itemId);
    }
  };
  return (
    <div className="pt-3">
      <button
        className="qty-button mr-2"
        type="button"
        onClick={() => handleDecrement()}
      >
        -
      </button>
      {count}
      <button
        className="qty-button ml-2"
        type="button"
        onClick={() => handleIncrement()}
      >
        +
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ incQuantity, decQuantity }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Quantity);
