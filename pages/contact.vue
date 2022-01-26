<template>
  <div>
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>

    <section class="contact-area ptb-60">
      <div class="container">
        <div class="section-title">
          <h2><span class="dot"></span> Contact Us</h2>
        </div>

        <div class="row">
          <div class="col-lg-5 col-md-12">
            <div class="contact-info">
              <h3>Here to Help</h3>
              <!-- <p>Have a question? You may find an answer in our FAQs. But you can also contact us.</p> -->
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                laboriosam? Nostrum quas,
              </p>
              <ul class="contact-list">
                <li>
                  <i class="fas fa-map-marker-alt"></i> Location: Lorem Ipsum is
                  simply dummy text
                </li>
                <li>
                  <i class="fas fa-phone"></i> Call Us:
                  <a href="/">(+123) 000-0000</a>
                </li>
                <li>
                  <i class="far fa-envelope"></i> Email Us:
                  <a href="#">imran@betafinancialservices.com </a>
                </li>
                <li><i class="fas fa-fax"></i> Fax: <a href="#">+123456</a></li>
              </ul>

              <!-- <h3>Opening Hours:</h3>
                            <ul class="opening-hours">
                                <li><span>Monday:</span> 8AM - 6AM</li>
                                <li><span>Tuesday:</span> 8AM - 6AM</li>
                                <li><span>Wednesday:</span> 8AM - 6AM</li>
                                <li><span>Thursday - Friday:</span> 8AM - 6AM</li>
                                <li><span>Sunday:</span> Closed</li>
                            </ul> -->

              <h3>Follow Us:</h3>
              <ul class="social">
                <li>
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-behance"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-skype"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-pinterest-p"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-youtube"></i></a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-7 col-md-12">
            <div class="contact-form">
              <h3>Drop Us A Line</h3>
              <p>
                n publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without
              </p>

              <form id="contactForm">
                <div class="row">
                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <label>Name <span>(required)*</span></label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        class="form-control"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <label>Email <span>(required)*</span></label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="form-control"
                        placeholder="Enter your Email Address"
                      />
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <label>Phone Number <span>(required)*</span></label>
                      <input
                        type="text"
                        name="phone_number"
                        id="phone_number"
                        class="form-control"
                        placeholder="Enter your Phone Number"
                      />
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <label>Your Message <span>(required)*</span></label>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="8"
                        class="form-control"
                        placeholder="Enter your Message"
                      ></textarea>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12">
                    <button type="submit" class="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
