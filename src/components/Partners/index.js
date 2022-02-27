import React from "react";

function Partners({ partners }) {
  return (
    <>
      <section
        id="partners"
        className="section pp-scrollable position-absolute"
      >
        <div className="intro">
          <div className="scroll-wrap">
            <div className="container">
              <h2 className="mb-0">
                <span className="text-primary">Best</span> Partners
              </h2>
              <div className="mt-5 pt-2">
                <div className="row-partners row align-items-center ">
                  {partners.map((partner, index) => (
                    <div
                      key={index}
                      className="col-partner col-9 col-sm-6 col-md-4 col-xl-3"
                    >
                      <img alt="" src={`img/partners/${partner?.image}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partners;
