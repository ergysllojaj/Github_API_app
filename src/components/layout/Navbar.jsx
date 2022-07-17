import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto flex justify-center">
        <div className="flex-none py-5">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold">
            {title}
          </Link>
        </div>

        <div className="flex-1 py-5 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};
