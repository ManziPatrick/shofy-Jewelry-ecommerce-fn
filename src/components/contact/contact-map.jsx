import React from 'react';

const ContactMap = () => {
  return (
    <>
      <section className="tp-map-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-map-wrapper">
                <div className="tp-map-hotspot">
                  <span className="tp-hotspot tp-pulse-border">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="6" cy="6" r="6" fill="#821F40" />
                    </svg>
                  </span>
                </div>
                <div className="tp-map-iframe">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5267.796849796218!2d30.075008913526606!3d-1.9925694593180958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca603c1194199%3A0x9417fa1da84d8!2sRebero%2C%20Kigali!5e0!3m2!1sen!2srw!4v1734630147466!5m2!1sen!2srw"></iframe>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMap;