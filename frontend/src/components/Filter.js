import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { getAllCategories, getPostsByCategory } from "../store/actions";

const btnWidth = { width: "100px" };
const defaultStyle = "btn btn-outline-secondary mr-2";
const activeStyle = "btn btn-danger mr-2";

export default function Filter(props) {
  const filters = useSelector((state) => state.categories);

  const [active, setActive] = useState(props.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    if (filters && filters.length > 0) {
      filters.forEach((filter) => {
        dispatch(getPostsByCategory(filter));
      });
    }
  }, [filters[0]]);

  const styleSelector = (filter) =>
    active === filter ? activeStyle : defaultStyle;

  const clickHandler = (filter) => {
    setActive(filter);
  };

  const renderLinks = filters.map((filter) => (
    <Link
      className={styleSelector(filter)}
      to={`/${filter}`}
      key={filter}
      style={btnWidth}
      onClick={() => clickHandler(filter)}
    >
      {_.capitalize(filter)}
    </Link>
  ));

  return (
    <div className="d-flex justify-content-start align-items-center">
      <Link
        className={styleSelector("all")}
        to="/"
        style={btnWidth}
        onClick={() => clickHandler("all")}
      >
        All
      </Link>
      {renderLinks}
    </div>
  );
}

Filter.defaultProps = {
  filter: "all",
};

Filter.propTypes = {
  filters: PropTypes.array.isRequired,
  filter: PropTypes.string,
  getAllCategories: PropTypes.func.isRequired,
  getPostsByCategory: PropTypes.func.isRequired,
};
