import log from "./Image/Untitled.jpg";
import "./News.css"; // Custom styles

function News() {
  return (
    <>
      {/* Company News Section */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="mb-5 border-bottom pb-2 section-title text-center text-primary">
            Company News
          </h2>
          <div className="row g-4">
            {/* News Card 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow news-card">
                <img
                  src="https://www.ssgc.com.pk/web/wp-content/uploads/2024/09/PHOTO-2024-09-08-18-33-04.jpg"
                  className="card-img-top"
                  alt="Media Release"
                  style={{ height: 200, objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-primary">
                    SSGC MEDIA RELEASE
                  </h5>
                  <p className="card-text text-muted">📅 September 8, 2024</p>
                  <a
                    href="#"
                    className="btn btn-sm btn-outline-primary mt-auto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow news-card">
                <img
                  src="https://www.ssgc.com.pk/web/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-04-at-4.50.14-PM.jpeg"
                  className="card-img-top"
                  alt="Gas Disconnections"
                  style={{ height: 200, objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-primary">
                    3,276 Illegal Gas Connections Cut
                  </h5>
                  <p className="card-text text-muted">📅 September 4, 2024</p>
                  <a
                    href="#"
                    className="btn btn-sm btn-outline-primary mt-auto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>

            {/* News Card 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow news-card">
                <img
                  src="https://www.ssgc.com.pk/web/wp-content/uploads/2024/05/Industrial-Closure-JPG.jpg"
                  className="card-img-top"
                  alt="Gas Holiday"
                  style={{ height: 200, objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-primary">
                    24-Hour Gas Holiday for Industries
                  </h5>
                  <p className="card-text text-muted">📅 August 22, 2024</p>
                  <a
                    href="#"
                    className="btn btn-sm btn-outline-primary mt-auto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="text-center mt-5">
            <a href="#" className="btn btn-outline-secondary">
              ← Older Posts
            </a>
          </div>
        </div>
      </div>

     {/* Ad and Map Section */}
<div className="container py-5">
  <div className="row g-4">
    {/* Ad Block */}
    <div className="col-md-6 d-flex flex-column align-items-center">
      <h3 className="section-title mb-3 text-primary">Our Latest Ad</h3>
      <div className="media-box shadow-sm rounded overflow-hidden w-100">
        <img
          src={log}
          className="img-fluid h-100 w-100 object-fit-cover"
          alt="Latest Ad"
        />
      </div>
    </div>

    {/* Map Block */}
    <div className="col-md-6 d-flex flex-column align-items-center">
      <h3 className="section-title mb-3 text-primary">Locate Us</h3>
      <div className="media-box shadow-sm rounded overflow-hidden w-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.56658653832!2d67.00311822167964!3d24.89890560000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eded8bffe2f%3A0x682017baa626d578!2sSui%20Southern%20Gas%20Company%20Ltd.%20(SSGC)!5e0!3m2!1sen!2s!4v1751737169104!5m2!1sen!2s"
          title="Map"
          allowFullScreen
          loading="lazy"
          style={{ border: 0 }}
          className="w-100 h-100"
        />
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default News;
