function Top_Header()
{
return(
    <>
  {/* Top Header */}
  <div className="container py-3 border-bottom" id="top">
    <div className="row align-items-center gy-3">
      {/* Left: Logo */}
      <div className="col-12 col-md-6 text-center text-md-start">
        <a href="https://www.ssgc.com.pk/web/" className="d-inline-block">
          <img
            src="https://www.ssgc.com.pk/web/wp-content/uploads/2019/10/web_logo_2019.png"
            alt="SSGC Logo"
            className="img-fluid"
          />
        </a>
      </div>
      {/* Middle: Contact Info */}
      <div className="col-12 col-md-3 text-center text-md-start">
        <div className="d-flex flex-column align-items-center align-items-md-start gap-1">
          <div className="small text-dark fw-semibold">
            <i className="bi bi-telephone-fill me-1 text-primary" />{" "}
            +9221-99021000
          </div>
          <div className="small text-dark fw-semibold">
            <a
              href="mailto:info@ssgc.com.pk"
              className="text-decoration-none text-dark"
            >
              <i className="bi bi-envelope-fill me-1 text-primary" />{" "}
              info@ssgc.com.pk
            </a>
          </div>
        </div>
      </div>
      {/* Right: Social, Button, Language */}
      <div className="col-12 col-md-3">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-end gap-3">
          {/* Social Icons */}
          <div className="d-flex gap-2">
            <a
              href="#"
              className="d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm"
              style={{ width: 36, height: 36, backgroundColor: "#e9f5ff" }}
            >
              <i className="bi bi-facebook text-primary" />
            </a>
            <a
              href="#"
              className="d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm"
              style={{ width: 36, height: 36, backgroundColor: "#e8f7fa" }}
            >
              <i className="bi bi-twitter-x text-info" />
            </a>
            <a
              href="#"
              className="d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm"
              style={{ width: 36, height: 36, backgroundColor: "#ffeaea" }}
            >
              <i className="bi bi-youtube text-danger" />
            </a>
          </div>
          {/* Order LPG Button */}
          <div className="d-flex flex-wrap gap-2">
            {/* Order LPG Button */}
            <a
              href="#"
              className="btn btn-warning btn-sm fw-semibold rounded-pill shadow-sm d-flex align-items-center"
            >
              <i className="bi bi-lightning-fill me-1" /> Order LPG
            </a>
            {/* Language Button */}
            <a
              href="#"
              className="btn btn-light btn-sm fw-semibold rounded-pill shadow-sm"
            >
              English / <span className="text-dark">اردو</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
)
}
export default Top_Header