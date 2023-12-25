import React from 'react'
import { Link } from 'react-router-dom'

export default function Candidates() {
  return (
<main className="main">
  <section className="section-box-2">
    <div className="container">
      <div className="banner-hero banner-company">
        <div className="block-banner text-center">
          <h3 className="wow animate__animated animate__fadeInUp">Browse Candidates</h3>
          <div className="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, <br className="d-none d-xl-block" />atque delectus molestias quis?</div>
          <div className="box-list-character">
            <ul>
              <li><Link className="active" to="#">A</Link></li>
              <li><Link to="#">B</Link></li>
              <li><Link to="#">C</Link></li>
              <li><Link to="#">D</Link></li>
              <li><Link to="#">E</Link></li>
              <li><Link to="#">F</Link></li>
              <li><Link to="#">G</Link></li>
              <li><Link to="#">H</Link></li>
              <li><Link to="#">I</Link></li>
              <li><Link to="#">J</Link></li>
              <li><Link to="#">K</Link></li>
              <li><Link to="#">L</Link></li>
              <li><Link to="#">M</Link></li>
              <li><Link to="#">N</Link></li>
              <li><Link to="#">O</Link></li>
              <li><Link to="#">P</Link></li>
              <li><Link to="#">Q</Link></li>
              <li><Link to="#">R</Link></li>
              <li><Link to="#">S</Link></li>
              <li><Link to="#">T</Link></li>
              <li><Link to="#">U</Link></li>
              <li><Link to="#">V</Link></li>
              <li><Link to="#">W</Link></li>
              <li><Link to="#">X</Link></li>
              <li><Link to="#">Y</Link></li>
              <li><Link to="#">Z</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-box mt-30">
    <div className="container">           
      <div className="content-page">
        <div className="box-filters-job">
          <div className="row">
            <div className="col-xl-6 col-lg-5"><span className="text-small text-showing">Showing <strong>41-60 </strong>of <strong>944 </strong>jobs</span></div>
            <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
              <div className="display-flex2">
                <div className="box-border mr-10"><span className="text-sortby">Show:</span>
                  <div className="dropdown dropdown-sort">
                    <button className="btn dropdown-toggle" id="dropdownSort" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"><span>12</span><i className="fi-rr-angle-small-down" /></button>
                    <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort">
                      <li><Link className="dropdown-item active" to="#">10</Link></li>
                      <li><Link className="dropdown-item" to="#">12</Link></li>
                      <li><Link className="dropdown-item" to="#">20</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="box-border"><span className="text-sortby">Sort by:</span>
                  <div className="dropdown dropdown-sort">
                    <button className="btn dropdown-toggle" id="dropdownSort2" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"><span>Newest Post</span><i className="fi-rr-angle-small-down" /></button>
                    <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort2">
                      <li><Link className="dropdown-item active" to="#">Newest Post</Link></li>
                      <li><Link className="dropdown-item" to="#">Oldest Post</Link></li>
                      <li><Link className="dropdown-item" to="#">Rating Post</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="box-view-type"><Link className="view-type" to="jobs-list.html"><img src="assets/imgs/template/icons/icon-list.svg" alt="jobBox" /></Link><Link className="view-type" to="jobs-grid.html"><img src="assets/imgs/template/icons/icon-grid-hover.svg" alt="jobBox" /></Link></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><Link to="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user1.png" /></figure></Link></div>
                <div className="card-profile pt-10"><Link to="candidate-details.html">
                    <h5>Robert Fox</h5></Link><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Figma</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Adobe XD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">PSD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">App</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Digital</Link>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center"><i className="fi-rr-clock mr-5" /><span className="font-sm color-brand-1">$45 / hour</span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><Link to="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user2.png" /></figure></Link></div>
                <div className="card-profile pt-10"><Link to="candidate-details.html">
                    <h5>Cody Fisher</h5></Link><span className="font-xs color-text-mutted">Python developer</span>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Figma</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Adobe XD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">PSD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">App</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Digital</Link>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center"><i className="fi-rr-clock mr-5" /><span className="font-sm color-brand-1">$45 / hour</span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><Link to="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user3.png" /></figure></Link></div>
                <div className="card-profile pt-10"><Link to="candidate-details.html">
                    <h5>Jerome Bell</h5></Link><span className="font-xs color-text-mutted">Content Manager</span>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Figma</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Adobe XD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">PSD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">App</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Digital</Link>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center"><i className="fi-rr-clock mr-5" /><span className="font-sm color-brand-1">$45 / hour</span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><Link to="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user4.png" /></figure></Link></div>
                <div className="card-profile pt-10"><Link to="candidate-details.html">
                    <h5>Jane Cooper</h5></Link><span className="font-xs color-text-mutted">Network</span>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Figma</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Adobe XD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">PSD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">App</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Digital</Link>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center"><i className="fi-rr-clock mr-5" /><span className="font-sm color-brand-1">$45 / hour</span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><Link to="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user5.png" /></figure></Link></div>
                <div className="card-profile pt-10"><Link to="candidate-details.html">
                    <h5>Floyd Miles</h5></Link><span className="font-xs color-text-mutted">Photo Editing</span>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Figma</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Adobe XD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">PSD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">App</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Digital</Link>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center"><i className="fi-rr-clock mr-5" /><span className="font-sm color-brand-1">$45 / hour</span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><Link to="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user6.png" /></figure></Link></div>
                <div className="card-profile pt-10"><Link to="candidate-details.html">
                    <h5>Devon Lane</h5></Link><span className="font-xs color-text-mutted">Online Marketing</span>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Figma</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Adobe XD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">PSD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">App</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Digital</Link>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center"><i className="fi-rr-clock mr-5" /><span className="font-sm color-brand-1">$45 / hour</span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><Link to="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user7.png" /></figure></Link></div>
                <div className="card-profile pt-10"><Link to="candidate-details.html">
                    <h5>Jerome Bell</h5></Link><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Figma</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Adobe XD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">PSD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">App</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Digital</Link>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center"><i className="fi-rr-clock mr-5" /><span className="font-sm color-brand-1">$45 / hour</span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><Link to="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user8.png" /></figure></Link></div>
                <div className="card-profile pt-10"><Link to="candidate-details.html">
                    <h5>Eleanor</h5></Link><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Figma</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Adobe XD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">PSD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">App</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Digital</Link>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center"><i className="fi-rr-clock mr-5" /><span className="font-sm color-brand-1">$45 / hour</span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><Link to="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user9.png" /></figure></Link></div>
                <div className="card-profile pt-10"><Link to="candidate-details.html">
                    <h5>Theresa</h5></Link><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Figma</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Adobe XD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">PSD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">App</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Digital</Link>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center"><i className="fi-rr-clock mr-5" /><span className="font-sm color-brand-1">$45 / hour</span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><Link to="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user10.png" /></figure></Link></div>
                <div className="card-profile pt-10"><Link to="candidate-details.html">
                    <h5>Robert Fox</h5></Link><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Figma</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Adobe XD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">PSD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">App</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Digital</Link>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center"><i className="fi-rr-clock mr-5" /><span className="font-sm color-brand-1">$45 / hour</span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><Link to="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user11.png" /></figure></Link></div>
                <div className="card-profile pt-10"><Link to="candidate-details.html">
                    <h5>Cameron</h5></Link><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Figma</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Adobe XD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">PSD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">App</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Digital</Link>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center"><i className="fi-rr-clock mr-5" /><span className="font-sm color-brand-1">$45 / hour</span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><Link to="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user12.png" /></figure></Link></div>
                <div className="card-profile pt-10"><Link to="candidate-details.html">
                    <h5>Jacob Jones</h5></Link><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Figma</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Adobe XD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">PSD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">App</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Digital</Link>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center"><i className="fi-rr-clock mr-5" /><span className="font-sm color-brand-1">$45 / hour</span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><Link to="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user13.png" /></figure></Link></div>
                <div className="card-profile pt-10"><Link to="candidate-details.html">
                    <h5>Court Henry</h5></Link><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Figma</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Adobe XD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">PSD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">App</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Digital</Link>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center"><i className="fi-rr-clock mr-5" /><span className="font-sm color-brand-1">$45 / hour</span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><Link to="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user14.png" /></figure></Link></div>
                <div className="card-profile pt-10"><Link to="candidate-details.html">
                    <h5>Hawkins</h5></Link><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Figma</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Adobe XD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">PSD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">App</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Digital</Link>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center"><i className="fi-rr-clock mr-5" /><span className="font-sm color-brand-1">$45 / hour</span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><Link to="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user15.png" /></figure></Link></div>
                <div className="card-profile pt-10"><Link to="candidate-details.html">
                    <h5>Howard</h5></Link><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Figma</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Adobe XD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">PSD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">App</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Digital</Link>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center"><i className="fi-rr-clock mr-5" /><span className="font-sm color-brand-1">$45 / hour</span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="card-grid-2 hover-up">
              <div className="card-grid-2-image-left">
                <div className="card-grid-2-image-rd online"><Link to="candidate-details.html">
                    <figure><img alt="jobBox" src="assets/imgs/page/candidates/user1.png" /></figure></Link></div>
                <div className="card-profile pt-10"><Link to="candidate-details.html">
                    <h5> Alexander</h5></Link><span className="font-xs color-text-mutted">UI/UX Designer</span>
                  <div className="rate-reviews-small pt-5"><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span><img src="assets/imgs/template/icons/star.svg" alt="jobBox" /></span><span className="ml-10 color-text-mutted font-xs">(65)</span></div>
                </div>
              </div>
              <div className="card-block-info">
                <p className="font-xs color-text-paragraph-2">| Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?</p>
                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                  <div className="text-start"><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Figma</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Adobe XD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">PSD</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">App</Link><Link className="btn btn-tags-sm mb-10 mr-5" to="jobs-grid.html">Digital</Link>
                  </div>
                </div>
                <div className="employers-info align-items-center justify-content-center mt-15">
                  <div className="row">
                    <div className="col-6"><span className="d-flex align-items-center"><i className="fi-rr-marker mr-5 ml-0" /><span className="font-sm color-text-mutted">Chicago, US</span></span></div>
                    <div className="col-6"><span className="d-flex justify-content-end align-items-center"><i className="fi-rr-clock mr-5" /><span className="font-sm color-brand-1">$45 / hour</span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="paginations">
        <ul className="pager">
          <li><Link className="pager-prev" to="#" /></li>
          <li><Link className="pager-number" to="#">1</Link></li>
          <li><Link className="pager-number" to="#">2</Link></li>
          <li><Link className="pager-number" to="#">3</Link></li>
          <li><Link className="pager-number" to="#">4</Link></li>
          <li><Link className="pager-number" to="#">5</Link></li>
          <li><Link className="pager-number active" to="#">6</Link></li>
          <li><Link className="pager-number" to="#">7</Link></li>
          <li><Link className="pager-next" to="#" /></li>
        </ul>
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
