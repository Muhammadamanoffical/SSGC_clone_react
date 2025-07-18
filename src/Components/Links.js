function Links() {
  return (
    <>
      {/* Links Section */}
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-6 d-flex">
            <img
              src="https://img.icons8.com/fluency/48/document.png"
              className="me-3"
              alt="View Bill Icon"
              width={48}
              height={48}
            />
            <div>
              <h4 className="fw-bold">View Bill</h4>
              <p className="text-muted mb-1">
                View and download your monthly gas bill in PDF format. Requires
                Adobe Acrobat Reader.
              </p>
              <a href="#" className="text-primary text-decoration-underline">
                View Bill…
              </a>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <img
              src="https://img.icons8.com/fluency/48/money.png"
              className="me-3"
              alt="Bill Payment Icon"
              width={48}
              height={48}
            />
            <div>
              <h4 className="fw-bold">Bill Payment Options</h4>
              <p className="text-muted mb-1">
                A number of convenient payment options are available for bill
                payment. Click for more details.
              </p>
              <a href="#" className="text-primary text-decoration-underline">
                Bill Payment Options…
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Links