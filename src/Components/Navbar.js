import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        {/* 🔽 Mobile: Search + Toggle in same row */}
        <div className="d-flex d-lg-none w-100 justify-content-between align-items-center mb-2">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Sui Gas Company"
            style={{ maxWidth: "75%" }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* 🔽 Desktop Brand (Optional) */}
        {/* <a className="navbar-brand fw-bold d-none d-lg-block" href="#">SSGC</a> */}

        {/* 🔽 Main Navbar Menu */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto text-center">
            {[
              { label: "Home", link: "#" },
              { label: "About Us", link: "#" },
              {
                label: (
                  <>
                    Financial
                    <br />
                    <small>Highlights</small>
                  </>
                ),
                link: "#",
              },
              {
                label: (
                  <>
                    Customer
                    <br />
                    <small>Management</small>
                  </>
                ),
                link: "#",
              },
              {
                label: (
                  <>
                    Investor
                    <br />
                    <small>Information</small>
                  </>
                ),
                link: "#",
              },
              {
                label: (
                  <>
                    New
                    <br />
                    <small>Connection</small>
                  </>
                ),
                link: "#",
              },
              { label: "Tenders", link: "#" },
              {
                label: (
                  <>
                    Media
                    <br />
                    <small>Center</small>
                  </>
                ),
                link: "./news.html",
              },
              {
                label: (
                  <>
                    Helpline
                    <br />
                    <small>& Complaints</small>
                  </>
                ),
                link: "#",
              },
              {
                label: (
                  <>
                    R&amp;D
                    <br />
                    <small>Department</small>
                  </>
                ),
                link: "#",
              },
            ].map((item, index) => (
              <li className="nav-item px-2" key={index}>
                <a className="nav-link" href={item.link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* 🔍 Search Button (Desktop only) */}
          <div className="d-none d-lg-block">
            <a
              href="#"
              className="btn btn-dark btn-search px-3 py-2 rounded-pill"
            >
              <i className="fas fa-search text-white"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
