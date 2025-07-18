import logo from "./Image/image.png";
function Image_Slider(){
    return(
<>
  {/* Image Slider */}
  <div
    id="carouselExampleAutoplaying"
    className="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="500"
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="https://www.ssgc.com.pk/web/wp-content/uploads/2013/05/000.jpg"
          className="d-block w-100"
          alt="..."
        />
      </div>
      <div className="carousel-item">
        <img src={logo} className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img
          src="https://www.ssgc.com.pk/web/wp-content/uploads/2013/07/img_slider_05.jpg"
          className="d-block w-100"
          alt="..."
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://www.ssgc.com.pk/web/wp-content/uploads/2014/02/img_slider_02A.jpg"
          className="d-block w-100"
          alt="..."
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://www.ssgc.com.pk/web/wp-content/uploads/2014/02/img_slider_03A.jpg"
          className="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</>

    )
}
export default Image_Slider