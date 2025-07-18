function Focal_Person() {
  return (
    <>
      {/* Section 1 - Investor Queries */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-uppercase fw-bold mb-5 ">
            Focal Persons for Investor Queries/Grievances
          </h2>
          <div className="row g-4 justify-content-center">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-5">
              <div className="card clean-card text-center">
                <div className="card-header bg-primary">
                  <h5>Mr. Altaf Jatoi</h5>
                  <b>
                    <small>Manager, Board Secretariat</small>
                  </b>
                </div>
                <div className="card-body">
                  <p>
                    <i className="bi bi-envelope-fill" />
                    <a
                      href="mailto:altaf.jatoi@ssgc.com.pk"
                      className="text-decoration-none text-dark"
                    >
                      altaf.jatoi@ssgc.com.pk
                    </a>
                  </p>
                  <p>
                    <i className="bi bi-telephone-fill" />
                    021-99021743
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-6 col-lg-5">
              <div className="card clean-card text-center">
                <div className="card-header bg-primary">
                  <h5>Syed Atif Sarwat</h5>
                  <b>
                    <small>Manager, Company Secretariat</small>
                  </b>
                </div>
                <div className="card-body">
                  <p>
                    <i className="bi bi-envelope-fill" />
                    <a
                      href="mailto:atif.sarwat@ssgc.com.pk"
                      className="text-decoration-none text-dark"
                    >
                      atif.sarwat@ssgc.com.pk
                    </a>
                  </p>
                  <p>
                    <i className="bi bi-telephone-fill" />
                    021-99021021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 - PMDU Info */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center text-uppercase fw-bold mb-5 ">
            Focal Person as per Right of Access to Information Act 2017 &amp;
            PMDU
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card clean-card text-center">
                <div className="card-header bg-primary">
                  <h5>Mr. Amir Mumtaz Khan</h5>
                  <b>
                    <small>General Manager (Coordination)</small>
                  </b>
                </div>
                <div className="card-body">
                  <p>
                    <i className="bi bi-building" /> Sui Southern Gas Co. Ltd.
                  </p>
                  <p>
                    <i className="bi bi-geo-alt-fill" />
                    Sir Shah Suleman Road, Gulshan-e-Iqbal, Karachi
                  </p>
                  <p>
                    <i className="bi bi-telephone-fill" />
                    +9221-99224713
                  </p>
                  <p>
                    <i className="bi bi-envelope-fill" />
                    <a
                      href="mailto:amir.mumtaz@ssgc.com.pk"
                      className="text-decoration-none text-dark"
                    >
                      amir.mumtaz@ssgc.com.pk
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Focal_Person;
