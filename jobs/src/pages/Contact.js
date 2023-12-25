import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
<main className="main">
  <section className="section-box">
    <div className="breacrumb-cover bg-img-about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="mb-10">Contact Us</h2>
            <p className="font-lg color-text-paragraph-2">Get the latest news, updates and tips</p>
          </div>
          <div className="col-lg-6 text-lg-end">
            <ul className="breadcrumbs mt-40">
              <li><Link className="home-icon" to="#">Home</Link></li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-box mt-80">
    <div className="container">
      <div className="box-info-contact">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-30"><Link to="#"><img src="assets/imgs/page/contact/logo.svg" alt="joxBox" /></Link>
            <div className="font-sm color-text-paragraph">205 North Michigan Avenue, Suite 810 Chicago, 60601, USA<br /> Phone: (123) 456-7890<br /> Email: contact@jobbox.com</div><Link className="text-uppercase color-brand-2 link-map" to="#">View map</Link>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
            <h6>London</h6>
            <p className="font-sm color-text-paragraph mb-20">2118 Thornridge Cir. Syracuse,<br className="d-none d-lg-block" /> Connecticut 35624</p>
            <h6>New York</h6>
            <p className="font-sm color-text-paragraph mb-20">4517 Washington Ave.<br className="d-none d-lg-block" /> Manchester, Kentucky 39495</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
            <h6>Chicago</h6>
            <p className="font-sm color-text-paragraph mb-20">3891 Ranchview Dr. Richardson,<br className="d-none d-lg-block" /> California 62639</p>
            <h6>San Francisco</h6>
            <p className="font-sm color-text-paragraph mb-20">4140 Parker Rd. Allentown,<br className="d-none d-lg-block" /> New Mexico 31134</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
            <h6>Sysney</h6>
            <p className="font-sm color-text-paragraph mb-20">3891 Ranchview Dr. Richardson,<br className="d-none d-lg-block" /> California 62639</p>
            <h6>Singapore</h6>
            <p className="font-sm color-text-paragraph mb-20">4140 Parker Rd. Allentown,<br className="d-none d-lg-block" /> New Mexico 31134</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-box mt-70">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mb-40"><span className="font-md color-brand-2 mt-20 d-inline-block">Contact us</span>
          <h2 className="mt-5 mb-10">Get in touch</h2>
          <p className="font-md color-text-paragraph-2">The right move at the right time saves your investment. live<br className="d-none d-lg-block" /> the dream of expanding your business.</p>
          <form className="contact-form-style mt-30" id="contact-form" action="#" method="post">
            <div className="row wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
              <div className="col-lg-6 col-md-6">
                <div className="input-style mb-20">
                  <input className="font-sm color-text-paragraph-2" name="name" placeholder="Enter your name" type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="input-style mb-20">
                  <input className="font-sm color-text-paragraph-2" name="company" placeholder="Comapy (optioanl)" type="text" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="input-style mb-20">
                  <input className="font-sm color-text-paragraph-2" name="email" placeholder="Your email" type="email" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="input-style mb-20">
                  <input className="font-sm color-text-paragraph-2" name="phone" placeholder="Phone number" type="tel" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="textarea-style mb-30">
                  <textarea className="font-sm color-text-paragraph-2" name="message" placeholder="Tell us about yourself" defaultValue={""} />
                </div>
                <button className="submit btn btn-send-message" type="submit">Send message</button>
                <label className="ml-20">
                  <input className="float-start mr-5 mt-6" type="checkbox" /> By clicking contact us button, you agree our terms and policy,
                </label>
              </div>
            </div>
          </form>
          <p className="form-messege" />
        </div>
        <div className="col-lg-4 text-center d-none d-lg-block"><img src="assets/imgs/page/contact/img.png" alt="joxBox" /></div>
      </div>
    </div>
  </section>
  <section className="section-box mt-80">
    <div className="post-loop-grid">
      <div className="container">
        <div className="text-center">
          <h6 className="f-18 color-text-mutted text-uppercase">Our company</h6>
          <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Meet Our Team</h2>
          <p className="font-sm color-text-paragraph w-lg-50 mx-auto wow animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula ante, dictum non aliquet eu, dapibus ac quam. Morbi vel ante viverra orci tincidunt tempor eu id ipsum. Sed consectetur, risus a blandit tempor, velit magna pellentesque risus, at congue tellus dui quis nisl.</p>
        </div>
        <div className="row mt-70">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30">
            <div className="card-grid-4 text-center hover-up">
              <div className="image-top-feature">
                <figure><img alt="jobBox" src="assets/imgs/page/about/team1.png" /></figure>
              </div>
              <div className="card-grid-4-info">
                <h5 className="mt-10">Arlene McCoy</h5>
                <p className="font-xs color-text-paragraph-2 mt-5 mb-5">Frontend Developer</p>
                <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs"><span>(</span><span>65</span><span>)</span></span></div><span className="card-location">New York, US</span>
                <div className="text-center mt-30"><Link className="share-facebook social-share-link" to="#" /><Link className="share-twitter social-share-link" to="#" /><Link className="share-instagram social-share-link" to="#" /><Link className="share-linkedin social-share-link" to="#" /></div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30">
            <div className="card-grid-4 text-center hover-up">
              <div className="image-top-feature">
                <figure><img alt="jobBox" src="assets/imgs/page/about/team2.png" /></figure>
              </div>
              <div className="card-grid-4-info">
                <h5 className="mt-10">Floyd Miles</h5>
                <p className="font-xs color-text-paragraph-2 mt-5 mb-5">UI/UX Designer</p>
                <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs"><span>(</span><span>28</span><span>)</span></span></div><span className="card-location">Chicago, US</span>
                <div className="text-center mt-30"><Link className="share-facebook social-share-link" to="#" /><Link className="share-twitter social-share-link" to="#" /><Link className="share-instagram social-share-link" to="#" /><Link className="share-linkedin social-share-link" to="#" /></div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30">
            <div className="card-grid-4 text-center hover-up">
              <div className="image-top-feature">
                <figure><img alt="jobBox" src="assets/imgs/page/about/team3.png" /></figure>
              </div>
              <div className="card-grid-4-info">
                <h5 className="mt-10">Devon Lane</h5>
                <p className="font-xs color-text-paragraph-2 mt-5 mb-5">Frontend Developer</p>
                <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs"><span>(</span><span>65</span><span>)</span></span></div><span className="card-location">New York, US</span>
                <div className="text-center mt-30"><Link className="share-facebook social-share-link" to="#" /><Link className="share-twitter social-share-link" to="#" /><Link className="share-instagram social-share-link" to="#" /><Link className="share-linkedin social-share-link" to="#" /></div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30">
            <div className="card-grid-4 text-center hover-up">
              <div className="image-top-feature">
                <figure><img alt="jobBox" src="assets/imgs/page/about/team4.png" /></figure>
              </div>
              <div className="card-grid-4-info">
                <h5 className="mt-10">Jerome Bell</h5>
                <p className="font-xs color-text-paragraph-2 mt-5 mb-5">Frontend Developer</p>
                <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs"><span>(</span><span>65</span><span>)</span></span></div><span className="card-location">New York, US</span>
                <div className="text-center mt-30"><Link className="share-facebook social-share-link" to="#" /><Link className="share-twitter social-share-link" to="#" /><Link className="share-instagram social-share-link" to="#" /><Link className="share-linkedin social-share-link" to="#" /></div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30">
            <div className="card-grid-4 text-center hover-up">
              <div className="image-top-feature">
                <figure><img alt="jobBox" src="assets/imgs/page/about/team5.png" /></figure>
              </div>
              <div className="card-grid-4-info">
                <h5 className="mt-10">Theresa</h5>
                <p className="font-xs color-text-paragraph-2 mt-5 mb-5">Frontend Developer</p>
                <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs"><span>(</span><span>65</span><span>)</span></span></div><span className="card-location">New York, US</span>
                <div className="text-center mt-30"><Link className="share-facebook social-share-link" to="#" /><Link className="share-twitter social-share-link" to="#" /><Link className="share-instagram social-share-link" to="#" /><Link className="share-linkedin social-share-link" to="#" /></div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30">
            <div className="card-grid-4 text-center hover-up">
              <div className="image-top-feature">
                <figure><img alt="jobBox" src="assets/imgs/page/about/team6.png" /></figure>
              </div>
              <div className="card-grid-4-info">
                <h5 className="mt-10">Cameron</h5>
                <p className="font-xs color-text-paragraph-2 mt-5 mb-5">Frontend Developer</p>
                <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs"><span>(</span><span>65</span><span>)</span></span></div><span className="card-location">New York, US</span>
                <div className="text-center mt-30"><Link className="share-facebook social-share-link" to="#" /><Link className="share-twitter social-share-link" to="#" /><Link className="share-instagram social-share-link" to="#" /><Link className="share-linkedin social-share-link" to="#" /></div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30">
            <div className="card-grid-4 text-center hover-up">
              <div className="image-top-feature">
                <figure><img alt="jobBox" src="assets/imgs/page/about/team7.png" /></figure>
              </div>
              <div className="card-grid-4-info">
                <h5 className="mt-10">Jacob Jones</h5>
                <p className="font-xs color-text-paragraph-2 mt-5 mb-5">Frontend Developer</p>
                <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs"><span>(</span><span>65</span><span>)</span></span></div><span className="card-location">New York, US</span>
                <div className="text-center mt-30"><Link className="share-facebook social-share-link" to="#" /><Link className="share-twitter social-share-link" to="#" /><Link className="share-instagram social-share-link" to="#" /><Link className="share-linkedin social-share-link" to="#" /></div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30">
            <div className="card-grid-4 text-center hover-up">
              <div className="image-top-feature">
                <figure><img alt="jobBox" src="assets/imgs/page/about/team8.png" /></figure>
              </div>
              <div className="card-grid-4-info">
                <h5 className="mt-10">Court Henry</h5>
                <p className="font-xs color-text-paragraph-2 mt-5 mb-5">Frontend Developer</p>
                <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs"><span>(</span><span>65</span><span>)</span></span></div><span className="card-location">New York, US</span>
                <div className="text-center mt-30"><Link className="share-facebook social-share-link" to="#" /><Link className="share-twitter social-share-link" to="#" /><Link className="share-instagram social-share-link" to="#" /><Link className="share-linkedin social-share-link" to="#" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-box mt-50 mb-50">
    <div className="container">
      <div className="text-start">
        <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">News and Blog</h2>
        <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Get the latest news, updates and tips</p>
      </div>
    </div>
    <div className="container">
      <div className="mt-50">
        <div className="box-swiper style-nav-top">
          <div className="swiper-container swiper-group-3 swiper">
            <div className="swiper-wrapper pb-70 pt-5">
              <div className="swiper-slide">
                <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                  <div className="text-center card-grid-3-image"><Link to="#">
                      <figure><img alt="jobBox" src="assets/imgs/page/homepage1/img-news1.png" /></figure></Link></div>
                  <div className="card-block-info">
                    <div className="tags mb-15"><Link className="btn btn-tag" to="blog-grid.html">News</Link></div>
                    <h5><Link to="blog-details.html">21 Job Interview Tips: How To Make a Great Impression</Link></h5>
                    <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.</p>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-lg-6 col-6">
                          <div className="d-flex"><img className="img-rounded" src="assets/imgs/page/homepage1/user1.png" alt="jobBox" />
                            <div className="info-right-img"><span className="font-sm font-bold color-brand-1 op-70">Sarah Harding</span><br /><span className="font-xs color-text-paragraph-2">06 September</span></div>
                          </div>
                        </div>
                        <div className="col-lg-6 text-end col-6 pt-15"><span className="color-text-paragraph-2 font-xs">8 mins to read</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                  <div className="text-center card-grid-3-image"><Link to="#">
                      <figure><img alt="jobBox" src="assets/imgs/page/homepage1/img-news2.png" /></figure></Link></div>
                  <div className="card-block-info">
                    <div className="tags mb-15"><Link className="btn btn-tag" to="blog-grid.html">Events</Link></div>
                    <h5><Link to="blog-details.html">39 Strengths and Weaknesses To Discuss in a Job Interview</Link></h5>
                    <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.</p>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-lg-6 col-6">
                          <div className="d-flex"><img className="img-rounded" src="assets/imgs/page/homepage1/user2.png" alt="jobBox" />
                            <div className="info-right-img"><span className="font-sm font-bold color-brand-1 op-70">Steven Jobs</span><br /><span className="font-xs color-text-paragraph-2">06 September</span></div>
                          </div>
                        </div>
                        <div className="col-lg-6 text-end col-6 pt-15"><span className="color-text-paragraph-2 font-xs">6 mins to read</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn">
                  <div className="text-center card-grid-3-image"><Link to="#">
                      <figure><img alt="jobBox" src="assets/imgs/page/homepage1/img-news3.png" /></figure></Link></div>
                  <div className="card-block-info">
                    <div className="tags mb-15"><Link className="btn btn-tag" to="blog-grid.html">News</Link></div>
                    <h5><Link to="blog-details.html">Interview Question: Why Dont You Have a Degree?</Link></h5>
                    <p className="mt-10 color-text-paragraph font-sm">Learn how to respond if an interviewer asks you why you dont have a degree, and read example answers that can help you craft</p>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-lg-6 col-6">
                          <div className="d-flex"><img className="img-rounded" src="assets/imgs/page/homepage1/user3.png" alt="jobBox" />
                            <div className="info-right-img"><span className="font-sm font-bold color-brand-1 op-70">Wiliam Kend</span><br /><span className="font-xs color-text-paragraph-2">06 September</span></div>
                          </div>
                        </div>
                        <div className="col-lg-6 text-end col-6 pt-15"><span className="color-text-paragraph-2 font-xs">9 mins to read</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
        <div className="text-center"><Link className="btn btn-brand-1 btn-icon-load mt--30 hover-up" to="blog-grid.html">Load More Posts</Link></div>
      </div>
    </div>
  </section>
  <section className="section-box mt-30 mb-40">
    <div className="container">
      <h2 className="text-center mb-15 wow animate__animated animate__fadeInUp">Our Happy Customer</h2>
      <div className="font-lg color-text-paragraph-2 text-center wow animate__animated animate__fadeInUp">When it comes to choosing the right web hosting provider, we know how easy it<br className="d-none d-lg-block" /> is to get overwhelmed with the number.</div>
      <div className="row mt-50">
        <div className="box-swiper">
          <div className="swiper-container swiper-group-3 swiper">
            <div className="swiper-wrapper pb-70 pt-5">
              <div className="swiper-slide">
                <div className="card-grid-6 hover-up">
                  <div className="card-text-desc mt-10">
                    <p className="font-md color-text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque metus. Vivamus consectetur ultricies commodo. Pellentesque at nisl sit amet neque finibus egestas ut at magna. Cras tincidunt tortor sed eros aliquam eleifend.</p>
                  </div>
                  <div className="card-image">
                    <div className="image">
                      <figure><img alt="jobBox" src="assets/imgs/page/about/user1.png" /></figure>
                    </div>
                    <div className="card-profile">
                      <h6>Mark Adair</h6><span>Businessmen</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card-grid-6 hover-up">
                  <div className="card-text-desc mt-10">
                    <p className="font-md color-text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque metus. Vivamus consectetur ultricies commodo. Pellentesque at nisl sit amet neque finibus egestas ut at magna. Cras tincidunt tortor sed eros aliquam eleifend.</p>
                  </div>
                  <div className="card-image">
                    <div className="image">
                      <figure><img alt="jobBox" src="assets/imgs/page/about/user2.png" /></figure>
                    </div>
                    <div className="card-profile">
                      <h6>Mark Adair</h6><span>Businessmen</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card-grid-6 hover-up">
                  <div className="card-text-desc mt-10">
                    <p className="font-md color-text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae neque metus. Vivamus consectetur ultricies commodo. Pellentesque at nisl sit amet neque finibus egestas ut at magna. Cras tincidunt tortor sed eros aliquam eleifend.</p>
                  </div>
                  <div className="card-image">
                    <div className="image">
                      <figure><img alt="jobBox" src="assets/imgs/page/about/user3.png" /></figure>
                    </div>
                    <div className="card-profile">
                      <h6>Mark Adair</h6><span>Businessmen</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination swiper-pagination3" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-box mt-50 mb-20">
    <div className="container">
      <div className="box-newsletter">
        <div className="row">
          <div className="col-xl-3 col-12 text-center d-none d-xl-block"><img src="assets/imgs/template/newsletter-left.png" alt="joxBox" /></div>
          <div className="col-lg-12 col-xl-6 col-12">
            <h2 className="text-md-newsletter text-center">New Things Will Always<br /> Update Regularly</h2>
            <div className="box-form-newsletter mt-40">
              <form className="form-newsletter">
                <input className="input-newsletter" type="text" defaultValue placeholder="Enter your email here" />
                <button className="btn btn-default font-heading icon-send-letter">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="col-xl-3 col-12 text-center d-none d-xl-block"><img src="assets/imgs/template/newsletter-right.png" alt="joxBox" /></div>
        </div>
      </div>
    </div>
  </section>
</main>

  )
}
