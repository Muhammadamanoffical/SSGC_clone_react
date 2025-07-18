import "./BussinessPartner.css";
function Bussiness_Partner()
{
    return(
        <>
  {/* Our Business Partners */}
  <section className="partner-slider-section py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4 text-primary fw-bold">Our Business Partners</h2>
      <div className="partner-slider">
        <div className="partner-track">
          {[...Array(2)].map((_, i) => (
            <>
              {[
                "logo_bankislami",
                "logo_albaraka_slider",
                "logo_ublomni",
                "logo_ubl",
                "logo_ubank",
                "logo_timepey",
                "logo_standardchartered",
                "logo_mcb",
                "logo_hmb",
                "logo_hblexpress",
                "logo_hbl",
                "logo_faysalbank",
                "logo_easypaisa",
                "logo_bankalhabib",
                "logo_bankalfalah",
                "logo_abl",
                "Jazz-cash-logo24",
                "logo_askaribank",
              ].map((logo, index) => (
                <img
                  key={`${logo}-${i}-${index}`}
                  src={`https://www.ssgc.com.pk/web/wp-content/uploads/2013/07/${logo}.png`}
                  alt={`Partner ${index + 1}`}
                  className="partner-logo"
                />
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  </section>
</>

    )
}
export default Bussiness_Partner