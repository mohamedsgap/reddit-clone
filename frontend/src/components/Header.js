import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ title, author }) => (
  <div>
    <nav className="navbar bg-dark">
      <Link className="navbar-brand text-light" to="/">
        {title}
        {""}
        {author}
      </Link>
    </nav>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
