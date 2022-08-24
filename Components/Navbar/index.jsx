import React from "react";
import { PersonCircle, PersonFill, StarFill } from "react-bootstrap-icons";

function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <button
                className="navbar-toggler col-auto m-1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon "></span>
              </button>
              <b className="fs-2 p-3 m-1">testometrika</b>
            </a>
            <form className="d-flex ">
              <input
                className="form-control w-100 me-2"
                type="search"
                placeholder="Search among 272 tests..."
                aria-label="Search"
              />
              <PersonFill className="fs-1" />
            </form>
          </div>
        </nav>
      </div>
      <div className="bg-primary " style={{ height: "5px" }}></div>
    </>
  );
}

export default Navbar;
