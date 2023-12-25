import React from 'react'
import { Link } from 'react-router-dom'

export default function Companies() {
  return (
<main className="main">
  <section className="section-box-2">
    <div className="container">
      <div className="banner-hero banner-company">
        <div className="block-banner text-center">
          <h3 className="wow animate__animated animate__fadeInUp">Browse Companies</h3>
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
      <div className="row flex-row-reverse">
        <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
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
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                  <div className="image-box"><Link to="company-details.html"><img src="assets/imgs/brands/brand-1.png" alt="jobBox" /></Link></div>
                  <div className="info-text mt-10">
                    <h5 className="font-bold"><Link to="company-details.html">Car Toys</Link></h5>
                    <div className="mt-5"><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>66</span><span>)</span></span></div><span className="card-location">New York, US</span>
                    <div className="mt-30"><Link className="btn btn-grey-big" to="jobs-grid.html"><span>12</span><span> Jobs Open</span></Link></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                  <div className="image-box"><Link to="company-details.html"><img src="assets/imgs/brands/brand-2.png" alt="jobBox" /></Link></div>
                  <div className="info-text mt-10">
                    <h5 className="font-bold"><Link to="company-details.html">Carols Daughter</Link></h5>
                    <div className="mt-5"><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>18</span><span>)</span></span></div><span className="card-location">London, UK</span>
                    <div className="mt-30"><Link className="btn btn-grey-big" to="jobs-grid.html"><span>25</span><span> Jobs Open</span></Link></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                  <div className="image-box"><Link to="company-details.html"><img src="assets/imgs/brands/brand-3.png" alt="jobBox" /></Link></div>
                  <div className="info-text mt-10">
                    <h5 className="font-bold"><Link to="company-details.html">Amazon</Link></h5>
                    <div className="mt-5"><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>52</span><span>)</span></span></div><span className="card-location">Tokyo,Japan</span>
                    <div className="mt-30"><Link className="btn btn-grey-big" to="jobs-grid.html"><span>54</span><span> Jobs Open</span></Link></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                  <div className="image-box"><Link to="company-details.html"><img src="assets/imgs/brands/brand-4.png" alt="jobBox" /></Link></div>
                  <div className="info-text mt-10">
                    <h5 className="font-bold"><Link to="company-details.html">Baseball Savings</Link></h5>
                    <div className="mt-5"><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>85</span><span>)</span></span></div><span className="card-location">Chicago, US</span>
                    <div className="mt-30"><Link className="btn btn-grey-big" to="jobs-grid.html"><span>6</span><span> Jobs Open</span></Link></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                  <div className="image-box"><Link to="company-details.html"><img src="assets/imgs/brands/brand-5.png" alt="jobBox" /></Link></div>
                  <div className="info-text mt-10">
                    <h5 className="font-bold"><Link to="company-details.html">Ashford</Link></h5>
                    <div className="mt-5"><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>25</span><span>)</span></span></div><span className="card-location">Toronto, Italia</span>
                    <div className="mt-30"><Link className="btn btn-grey-big" to="jobs-grid.html"><span>67</span><span> Jobs Open</span></Link></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                  <div className="image-box"><Link to="company-details.html"><img src="assets/imgs/brands/brand-6.png" alt="jobBox" /></Link></div>
                  <div className="info-text mt-10">
                    <h5 className="font-bold"><Link to="company-details.html">Callaway Golf</Link></h5>
                    <div className="mt-5"><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>34</span><span>)</span></span></div><span className="card-location">San Francisco, US</span>
                    <div className="mt-30"><Link className="btn btn-grey-big" to="jobs-grid.html"><span>45</span><span> Jobs Open</span></Link></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                  <div className="image-box"><Link to="company-details.html"><img src="assets/imgs/brands/brand-7.png" alt="jobBox" /></Link></div>
                  <div className="info-text mt-10">
                    <h5 className="font-bold"><Link to="company-details.html">Percepta</Link></h5>
                    <div className="mt-5"><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>97</span><span>)</span></span></div><span className="card-location">Chinatown, Singpore</span>
                    <div className="mt-30"><Link className="btn btn-grey-big" to="jobs-grid.html"><span>64</span><span> Jobs Open</span></Link></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                  <div className="image-box"><Link to="company-details.html"><img src="assets/imgs/brands/brand-8.png" alt="jobBox" /></Link></div>
                  <div className="info-text mt-10">
                    <h5 className="font-bold"><Link to="company-details.html">Exela Movers</Link></h5>
                    <div className="mt-5"><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>67</span><span>)</span></span></div><span className="card-location">New York, US</span>
                    <div className="mt-30"><Link className="btn btn-grey-big" to="jobs-grid.html"><span>87</span><span> Jobs Open</span></Link></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                  <div className="image-box"><Link to="company-details.html"><img src="assets/imgs/brands/brand-9.png" alt="jobBox" /></Link></div>
                  <div className="info-text mt-10">
                    <h5 className="font-bold"><Link to="company-details.html">Ibotta, Inc</Link></h5>
                    <div className="mt-5"><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>45</span><span>)</span></span></div><span className="card-location">New York, US</span>
                    <div className="mt-30"><Link className="btn btn-grey-big" to="jobs-grid.html"><span>23</span><span> Jobs Open</span></Link></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                  <div className="image-box"><Link to="company-details.html"><img src="assets/imgs/brands/brand-1.png" alt="jobBox" /></Link></div>
                  <div className="info-text mt-10">
                    <h5 className="font-bold"><Link to="company-details.html">Wanderu </Link></h5>
                    <div className="mt-5"><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>08</span><span>)</span></span></div><span className="card-location">New York, US</span>
                    <div className="mt-30"><Link className="btn btn-grey-big" to="jobs-grid.html"><span>45</span><span> Jobs Open</span></Link></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                  <div className="image-box"><Link to="company-details.html"><img src="assets/imgs/brands/brand-2.png" alt="jobBox" /></Link></div>
                  <div className="info-text mt-10">
                    <h5 className="font-bold"><Link to="company-details.html">Aceable, Inc.</Link></h5>
                    <div className="mt-5"><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>54</span><span>)</span></span></div><span className="card-location">New York, US</span>
                    <div className="mt-30"><Link className="btn btn-grey-big" to="jobs-grid.html"><span>67</span><span> Jobs Open</span></Link></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                  <div className="image-box"><Link to="company-details.html"><img src="assets/imgs/brands/brand-3.png" alt="jobBox" /></Link></div>
                  <div className="info-text mt-10">
                    <h5 className="font-bold"><Link to="company-details.html">Intrepid Travel</Link></h5>
                    <div className="mt-5"><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>123</span><span>)</span></span></div><span className="card-location">New York, US</span>
                    <div className="mt-30"><Link className="btn btn-grey-big" to="jobs-grid.html"><span>53</span><span> Jobs Open</span></Link></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                  <div className="image-box"><Link to="company-details.html"><img src="assets/imgs/brands/brand-4.png" alt="jobBox" /></Link></div>
                  <div className="info-text mt-10">
                    <h5 className="font-bold"><Link to="company-details.html">Defendify </Link></h5>
                    <div className="mt-5"><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>64</span><span>)</span></span></div><span className="card-location">New York, US</span>
                    <div className="mt-30"><Link className="btn btn-grey-big" to="jobs-grid.html"><span>56</span><span> Jobs Open</span></Link></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                  <div className="image-box"><Link to="company-details.html"><img src="assets/imgs/brands/brand-5.png" alt="jobBox" /></Link></div>
                  <div className="info-text mt-10">
                    <h5 className="font-bold"><Link to="company-details.html">Twisters </Link></h5>
                    <div className="mt-5"><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>34</span><span>)</span></span></div><span className="card-location">New York, US</span>
                    <div className="mt-30"><Link className="btn btn-grey-big" to="jobs-grid.html"><span>66</span><span> Jobs Open</span></Link></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                  <div className="image-box"><Link to="company-details.html"><img src="assets/imgs/brands/brand-6.png" alt="jobBox" /></Link></div>
                  <div className="info-text mt-10">
                    <h5 className="font-bold"><Link to="company-details.html">Fireworks</Link></h5>
                    <div className="mt-5"><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>12</span><span>)</span></span></div><span className="card-location">New York, US</span>
                    <div className="mt-30"><Link className="btn btn-grey-big" to="jobs-grid.html"><span>12</span><span> Jobs Open</span></Link></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                  <div className="image-box"><Link to="company-details.html"><img src="assets/imgs/brands/brand-1.png" alt="jobBox" /></Link></div>
                  <div className="info-text mt-10">
                    <h5 className="font-bold"><Link to="company-details.html">Car Toys</Link></h5>
                    <div className="mt-5"><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>66</span><span>)</span></span></div><span className="card-location">New York, US</span>
                    <div className="mt-30"><Link className="btn btn-grey-big" to="jobs-grid.html"><span>12</span><span> Jobs Open</span></Link></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                  <div className="image-box"><Link to="company-details.html"><img src="assets/imgs/brands/brand-2.png" alt="jobBox" /></Link></div>
                  <div className="info-text mt-10">
                    <h5 className="font-bold"><Link to="company-details.html">Carols Daughter</Link></h5>
                    <div className="mt-5"><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>18</span><span>)</span></span></div><span className="card-location">London, UK</span>
                    <div className="mt-30"><Link className="btn btn-grey-big" to="jobs-grid.html"><span>25</span><span> Jobs Open</span></Link></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                  <div className="image-box"><Link to="company-details.html"><img src="assets/imgs/brands/brand-3.png" alt="jobBox" /></Link></div>
                  <div className="info-text mt-10">
                    <h5 className="font-bold"><Link to="company-details.html">Amazon</Link></h5>
                    <div className="mt-5"><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>52</span><span>)</span></span></div><span className="card-location">Tokyo,Japan</span>
                    <div className="mt-30"><Link className="btn btn-grey-big" to="jobs-grid.html"><span>54</span><span> Jobs Open</span></Link></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                  <div className="image-box"><Link to="company-details.html"><img src="assets/imgs/brands/brand-4.png" alt="jobBox" /></Link></div>
                  <div className="info-text mt-10">
                    <h5 className="font-bold"><Link to="company-details.html">Baseball Savings</Link></h5>
                    <div className="mt-5"><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>85</span><span>)</span></span></div><span className="card-location">Chicago, US</span>
                    <div className="mt-30"><Link className="btn btn-grey-big" to="jobs-grid.html"><span>6</span><span> Jobs Open</span></Link></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                  <div className="image-box"><Link to="company-details.html"><img src="assets/imgs/brands/brand-5.png" alt="jobBox" /></Link></div>
                  <div className="info-text mt-10">
                    <h5 className="font-bold"><Link to="company-details.html">Ashford</Link></h5>
                    <div className="mt-5"><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>25</span><span>)</span></span></div><span className="card-location">Toronto, Italia</span>
                    <div className="mt-30"><Link className="btn btn-grey-big" to="jobs-grid.html"><span>67</span><span> Jobs Open</span></Link></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
                  <div className="image-box"><Link to="company-details.html"><img src="assets/imgs/brands/brand-6.png" alt="jobBox" /></Link></div>
                  <div className="info-text mt-10">
                    <h5 className="font-bold"><Link to="company-details.html">Callaway Golf</Link></h5>
                    <div className="mt-5"><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><img alt="jobBox" src="assets/imgs/template/icons/star.svg" /><span className="font-xs color-text-mutted ml-10"><span>(</span><span>34</span><span>)</span></span></div><span className="card-location">San Francisco, US</span>
                    <div className="mt-30"><Link className="btn btn-grey-big" to="jobs-grid.html"><span>45</span><span> Jobs Open</span></Link></div>
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
        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="sidebar-shadow none-shadow mb-30">
            <div className="sidebar-filters">
              <div className="filter-block head-border mb-30">
                <h5>Advance Filter <Link className="link-reset" to="#">Reset</Link></h5>
              </div>
              <div className="filter-block mb-30">
                <div className="form-group select-style select-style-icon">
                  <select className="form-control form-icons select-active">
                    <option>New York, US</option>
                    <option>London</option>
                    <option>Paris</option>
                    <option>Berlin</option>
                  </select><i className="fi-rr-marker" />
                </div>
              </div>
              <div className="filter-block mb-20">
                <h5 className="medium-heading mb-15">Industry</h5>
                <div className="form-group">
                  <ul className="list-checkbox">
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" defaultChecked="checked" /><span className="text-small">All</span><span className="checkmark" />
                      </label><span className="number-item">180</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">Software</span><span className="checkmark" />
                      </label><span className="number-item">12</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">Finance</span><span className="checkmark" />
                      </label><span className="number-item">23</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">Recruting</span><span className="checkmark" />
                      </label><span className="number-item">43</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">Management</span><span className="checkmark" />
                      </label><span className="number-item">65</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">Advertising</span><span className="checkmark" />
                      </label><span className="number-item">76</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="filter-block mb-20">
                <h5 className="medium-heading mb-25">Salary Range</h5>
                <div className="list-checkbox pb-20">
                  <div className="row position-relative mt-10 mb-20">
                    <div className="col-sm-12 box-slider-range">
                      <div id="slider-range" />
                    </div>
                    <div className="box-input-money">
                      <input className="input-disabled form-control min-value-money" type="text" name="min-value-money" disabled="disabled" defaultValue />
                      <input className="form-control min-value" type="hidden" name="min-value" defaultValue />
                    </div>
                  </div>
                  <div className="box-number-money">
                    <div className="row mt-30">
                      <div className="col-sm-6 col-6"><span className="font-sm color-brand-1">$0</span></div>
                      <div className="col-sm-6 col-6 text-end"><span className="font-sm color-brand-1">$500</span></div>
                    </div>
                  </div>
                </div>
                <div className="form-group mb-20">
                  <ul className="list-checkbox">
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" defaultChecked="checked" /><span className="text-small">All</span><span className="checkmark" />
                      </label><span className="number-item">145</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">$0k - $20k</span><span className="checkmark" />
                      </label><span className="number-item">56</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">$20k - $40k</span><span className="checkmark" />
                      </label><span className="number-item">37</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">$40k - $60k</span><span className="checkmark" />
                      </label><span className="number-item">75</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">$60k - $80k</span><span className="checkmark" />
                      </label><span className="number-item">98</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">$80k - $100k</span><span className="checkmark" />
                      </label><span className="number-item">14</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">$100k - $200k</span><span className="checkmark" />
                      </label><span className="number-item">25</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="filter-block mb-30">
                <h5 className="medium-heading mb-10">Popular Keyword</h5>
                <div className="form-group">
                  <ul className="list-checkbox">
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" defaultChecked="checked" /><span className="text-small">Software</span><span className="checkmark" />
                      </label><span className="number-item">24</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">Developer</span><span className="checkmark" />
                      </label><span className="number-item">45</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">Web</span><span className="checkmark" />
                      </label><span className="number-item">57</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="filter-block mb-30">
                <h5 className="medium-heading mb-10">Position</h5>
                <div className="form-group">
                  <ul className="list-checkbox">
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">Senior</span><span className="checkmark" />
                      </label><span className="number-item">12</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" defaultChecked="checked" /><span className="text-small">Junior</span><span className="checkmark" />
                      </label><span className="number-item">35</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">Fresher</span><span className="checkmark" />
                      </label><span className="number-item">56</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="filter-block mb-30">
                <h5 className="medium-heading mb-10">Experience Level</h5>
                <div className="form-group">
                  <ul className="list-checkbox">
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">Internship</span><span className="checkmark" />
                      </label><span className="number-item">56</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">Entry Level</span><span className="checkmark" />
                      </label><span className="number-item">87</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" defaultChecked="checked" /><span className="text-small">Associate</span><span className="checkmark" />
                      </label><span className="number-item">24</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">Mid Level</span><span className="checkmark" />
                      </label><span className="number-item">45</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">Director</span><span className="checkmark" />
                      </label><span className="number-item">76</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">Executive</span><span className="checkmark" />
                      </label><span className="number-item">89</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="filter-block mb-30">
                <h5 className="medium-heading mb-10">Onsite/Remote</h5>
                <div className="form-group">
                  <ul className="list-checkbox">
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">On-site</span><span className="checkmark" />
                      </label><span className="number-item">12</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" defaultChecked="checked" /><span className="text-small">Remote</span><span className="checkmark" />
                      </label><span className="number-item">65</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">Hybrid</span><span className="checkmark" />
                      </label><span className="number-item">58</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="filter-block mb-30">
                <h5 className="medium-heading mb-10">Job Posted</h5>
                <div className="form-group">
                  <ul className="list-checkbox">
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" defaultChecked="checked" /><span className="text-small">All</span><span className="checkmark" />
                      </label><span className="number-item">78</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">1 day</span><span className="checkmark" />
                      </label><span className="number-item">65</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">7 days</span><span className="checkmark" />
                      </label><span className="number-item">24</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">30 days</span><span className="checkmark" />
                      </label><span className="number-item">56</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="filter-block mb-20">
                <h5 className="medium-heading mb-15">Job type</h5>
                <div className="form-group">
                  <ul className="list-checkbox">
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">Full Time</span><span className="checkmark" />
                      </label><span className="number-item">25</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" defaultChecked="checked" /><span className="text-small">Part Time</span><span className="checkmark" />
                      </label><span className="number-item">64</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">Remote Jobs</span><span className="checkmark" />
                      </label><span className="number-item">78</span>
                    </li>
                    <li>
                      <label className="cb-container">
                        <input type="checkbox" /><span className="text-small">Freelancer</span><span className="checkmark" />
                      </label><span className="number-item">97</span>
                    </li>
                  </ul>
                </div>
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
