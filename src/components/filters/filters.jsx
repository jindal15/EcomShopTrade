import React, { Fragment } from "react";
import "./filters.scss";
import { isMobile, isDesktop } from "../../helpers/utils";
import { filtersArr, sortByArr } from "../../helpers/dropdowns";

const Filters = (props) => {
  return (
    <div className="d-flex my-3 px-2 filters">
      {isDesktop() && (
        <Fragment>
          <div className="fs-16 fw-700 align-self-center">FILTERS:</div>
          {filtersArr.map((e, i) => {
            return (
              <div
                name={e.name}
                role="button"
                className={
                  e.name === props.filters
                    ? "filter_btn fs-12 ml-3 active px-4 py-2"
                    : "filter_btn fs-12 ml-3 px-4 py-2"
                }
                key={i}
                tabIndex={0}
                onClick={() => props.filterProducts(e)}
              >
                {e.name}
              </div>
            );
          })}
        </Fragment>
      )}
      {isMobile() && (
        <div className="dropdown">
          <button
            className="mr-auto filter_btn active fs-12 px-4 py-2 dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            <span className="fc-light">Filters:</span> {props.filters}
            <span className="caret"></span>
          </button>
          <div className="dropdown-menu">
            {filtersArr.map((e, i) => {
              return (
                <div
                  name={e.name}
                  role="button"
                  className="dropdown-item"
                  key={i}
                  tabIndex={0}
                  onClick={() => props.filterProducts(e)}
                >
                  {e.name}
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="dropdown ml-auto">
        <button
          className="mr-auto filter_btn active fs-12 px-4 py-2 dropdown-toggle"
          type="button"
          data-toggle="dropdown"
        >
          <span className="fc-light">Sort By:</span> {props.sortBy}
          <span className="caret"></span>
        </button>
        <div className="dropdown-menu">
          {sortByArr.map((e, i) => {
            return (
              <div
                name={e}
                role="button"
                className="dropdown-item"
                key={i}
                tabIndex={0}
                onClick={() => props.sortProducts(e)}
              >
                {e}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Filters;
