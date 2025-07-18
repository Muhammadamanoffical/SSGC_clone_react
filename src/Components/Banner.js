function Banner() {
  return (
    <>
      {/* images */}
      <center>
        <div className="container">
          <img
            src="https://www.ssgc.com.pk/web/wp-content/uploads/2025/04/ad_2025.png"
            className="img-fluid"
            alt="..."
          />
          <img
            src="https://www.ssgc.com.pk/web/wp-content/uploads/2023/01/pmdu-2.jpg"
            className="img-fluid"
            alt="..."
          />
        </div>
      </center>
      {/* Banner Section */}
      <div
        className="position-relative  text-white overflow-hidden py-5"
        style={{ backgroundColor: "#0058a9" }}
      >
        <div className="container position-relative z-2">
          <div className="row align-items-center">
            {/* Text Section */}
            <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold">REGISTER KARIEN</h2>
              <p className="fs-4">LIFE KARIEN ASAAN</p>
              <button className="btn btn-warning text-white fw-semibold">
                Register Now
              </button>
            </div>
            {/* Image Section */}
            <div className="col-lg-6 text-center">
              <img
                src="https://www.ssgc.com.pk/web/wp-content/uploads/2023/04/ebilling23jan.jpg"
                alt="E-Bill Banner"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner
