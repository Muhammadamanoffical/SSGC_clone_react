function Footer(){
    return(
        <>
  {/* Footer Section */}
  <footer className="bg-dark text-light pt-5 pb-3">
    <div className="container">
      <div className="row g-4">
        {/* Address */}
        <div className="col-md-4">
          <h5 className="text-uppercase fw-bold mb-3">
            <i className="bi bi-geo-alt-fill me-2 " />
            Our Address
          </h5>
          <p className="mb-1">
            <i className="bi bi-geo-alt text-light me-2" />
            ST-4/B, Block 14, Sir Shah Suleman Road, Gulshan-e-Iqbal, Karachi.
          </p>
          <p className="mb-1">
            <i className="bi bi-telephone text-light me-2" />
            (+9221) 9902 1000
          </p>
          <p className="mb-1">
            <i className="bi bi-envelope text-light me-2" />
            <a
              href="mailto:info@ssgc.com.pk"
              className="text-decoration-none text-light"
            >
              info@ssgc.com.pk
            </a>
          </p>
          <p className="mb-0">
            <i className="bi bi-globe text-light me-2" />
            <a
              href="https://www.ssgc.com.pk"
              target="_blank"
              className="text-decoration-none text-light"
            >
              www.ssgc.com.pk
            </a>
          </p>
        </div>
        {/* Useful Links */}
        <div className="col-md-4">
          <h5 className="text-uppercase fw-bold mb-3">
            <i className="bi bi-link-45deg me-2 " />
            Useful Links
          </h5>
          <ul className="list-unstyled">
            <li>
              <a
                href="#"
                className="text-decoration-none text-light d-block mb-1"
              >
                <i className="bi bi-chevron-right  me-2" />
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-decoration-none text-light d-block mb-1"
              >
                <i className="bi bi-chevron-right  me-2" />
                Financial Highlights
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-decoration-none text-light d-block mb-1"
              >
                <i className="bi bi-chevron-right  me-2" />
                Infrastructure
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-decoration-none text-light d-block mb-1"
              >
                <i className="bi bi-chevron-right  me-2" />
                Customer Management
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-decoration-none text-light d-block mb-1"
              >
                <i className="bi bi-chevron-right  me-2" />
                Bill Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none text-light d-block">
                <i className="bi bi-chevron-right  me-2" />
                Complaints / Feedback
              </a>
            </li>
          </ul>
        </div>
        {/* News Highlights */}
        <div className="col-md-4">
          <h5 className="text-uppercase fw-bold mb-3">
            <i className="bi bi-megaphone-fill me-2 " />
            Recent News
          </h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <i className="bi bi-newspaper  me-2" />
              SSGC MEDIA RELEASE
            </li>
            <li className="mb-2">
              <i className="bi bi-plug-fill  me-2" />
              SSGC Disconnects 3,276 Illegal Gas Connections in Sindh and
              Balochistan
            </li>
            <li className="mb-2">
              <i className="bi bi-clock-history  me-2" />
              24-hours Gas Holiday for All Industries and CNG Stations in Sindh
            </li>
            <li>
              <i className="bi bi-person-arrest  me-2" />1 Arrested for Gas
              Theft, 809 Disconnections Made
            </li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom */}
      <hr className="border-light mt-4" />
      <div className="text-center">
        <small className="text-light">
          © 2025 Sui Southern Gas Company Limited. All Rights Reserved.
        </small>
      </div>
    </div>
  </footer>
  {/* arrow button */}
  <a
    href="#top"
    className="btn btn-warning position-fixed rounded-circle shadow"
    style={{
      bottom: 30,
      right: 30,
      zIndex: 999,
      width: 50,
      height: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <i className="bi bi-arrow-up fs-4 text-white" />
  </a>
</>

    )
}
export default Footer