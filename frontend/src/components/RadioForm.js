import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import RadioButton from "./RadioButton";
import { getAllCategories } from "../store/actions";

export default function RadioForm(props) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const { label, handleChange, checkedVal, disabled } = props;

  const renderRadioBtn = disabled ? (
    <RadioButton
      key={checkedVal}
      evtName="category"
      val={checkedVal}
      handleChange={handleChange}
      checked
      disabled
    />
  ) : (
    categories.map((category) => (
      <RadioButton
        key={category}
        evtName="category"
        val={category}
        handleChange={handleChange}
        checked={checkedVal === category}
        disabled={disabled}
      />
    ))
  );

  return (
    <div>
      <div>{label}</div>
      <div className="btn-group btn-group-toggle mb-4" data-toggle="buttons">
        {renderRadioBtn}
      </div>
    </div>
  );
}

RadioForm.defaultProps = {
  disabled: false,
};

RadioForm.propTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  checkedVal: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  getAllCategories: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
