import React from 'react'
import { Link } from 'react-router-dom'

export default function CandidateProfile() {
  return (
<main className="main">
  <section className="section-box-2">
    <div className="container">
      <div className="banner-hero banner-image-single"><img src="assets/imgs/page/candidates/img.png" alt="jobbox" /><Link className="btn-editor" to="#" /></div>
      <div className="box-company-profile">
        <div className="image-compay"><img src="assets/imgs/page/candidates/candidate-profile.png" alt="jobbox" /></div>
        <div className="row mt-10">
          <div className="col-lg-8 col-md-12">
            <h5 className="f-18">Steven Jobs <span className="card-location font-regular ml-20">New York, US</span></h5>
            <p className="mt-0 font-md color-text-paragraph-2 mb-15">UI/UX Designer. Front end Developer</p>
          </div>
          <div className="col-lg-4 col-md-12 text-lg-end"><Link className="btn btn-preview-icon btn-apply btn-apply-big" to="page-contact.html">Preview</Link></div>
        </div>
      </div>
      <div className="border-bottom pt-10 pb-10" />
    </div>
  </section>
  <section className="section-box mt-50">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12">
          <div className="box-nav-tabs nav-tavs-profile mb-5">
            <ul className="nav" role="tablist">
              <li><Link className="btn btn-border aboutus-icon mb-20 active" to="#tab-my-profile" data-bs-toggle="tab" role="tab" aria-controls="tab-my-profile" aria-selected="true">My Profile</Link></li>
              <li><Link className="btn btn-border recruitment-icon mb-20" to="#tab-my-jobs" data-bs-toggle="tab" role="tab" aria-controls="tab-my-jobs" aria-selected="false">My Jobs</Link></li>
              <li><Link className="btn btn-border people-icon mb-20" to="#tab-saved-jobs" data-bs-toggle="tab" role="tab" aria-controls="tab-saved-jobs" aria-selected="false">Saved Jobs</Link></li>
            </ul>
            <div className="border-bottom pt-10 pb-10" />
            <div className="mt-20 mb-20"><Link className="link-red" to="#">Delete Account</Link></div>
          </div>
        </div>
        <div className="col-lg-9 col-md-8 col-sm-12 col-12 mb-50">
          <div className="content-single">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab-my-profile" role="tabpanel" aria-labelledby="tab-my-profile">
                <h3 className="mt-0 mb-15 color-brand-1">My Account</h3><Link className="font-md color-text-paragraph-2" to="#">Update your profile</Link>
                <div className="mt-35 mb-40 box-info-profie">
                  <div className="image-profile"><img src="assets/imgs/page/candidates/candidate-profile.png" alt="jobbox" /></div><Link className="btn btn-apply">Upload Avatar</Link><Link className="btn btn-link">Delete</Link>
                </div>
                <div className="row form-contact">
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="font-sm color-text-mutted mb-10">Full Name *</label>
                      <input className="form-control" type="text" defaultValue="Steven Job" />
                    </div>
                    <div className="form-group">
                      <label className="font-sm color-text-mutted mb-10">Email *</label>
                      <input className="form-control" type="text" defaultValue="stevenjob@gmail.com" />
                    </div>
                    <div className="form-group">
                      <label className="font-sm color-text-mutted mb-10">Contact number</label>
                      <input className="form-control" type="text" defaultValue="01 - 234 567 89" />
                    </div>
                    <div className="form-group">
                      <label className="font-sm color-text-mutted mb-10">Bio</label>
                      <textarea className="form-control" rows={4} defaultValue={"We are AliThemes , a creative and dedicated group of individuals who love web development almost as much as we love our customers. We are passionate team with the mission for achieving the perfection in web design."} />
                    </div>
                    <div className="form-group">
                      <label className="font-sm color-text-mutted mb-10">Personal website</label>
                      <input className="form-control" type="url" defaultValue="https://alithemes.com" />
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="font-sm color-text-mutted mb-10">Country</label>
                          <input className="form-control" type="text" defaultValue="United States" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="font-sm color-text-mutted mb-10">State</label>
                          <input className="form-control" type="text" defaultValue="New York" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="font-sm color-text-mutted mb-10">City</label>
                          <input className="form-control" type="text" defaultValue="Mcallen" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="font-sm color-text-mutted mb-10">Zip code</label>
                          <input className="form-control" type="text" defaultValue={82356} />
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom pt-10 pb-10 mb-30" />
                    <h6 className="color-orange mb-20">Change your password</h6>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="font-sm color-text-mutted mb-10">Password</label>
                          <input className="form-control" type="password" defaultValue={123456789} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="font-sm color-text-mutted mb-10">Re-Password *</label>
                          <input className="form-control" type="password" defaultValue={123456789} />
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom pt-10 pb-10" />
                    <div className="box-agree mt-30">
                      <label className="lbl-agree font-xs color-text-paragraph-2">
                        <input className="lbl-checkbox" type="checkbox" defaultValue={1} />Available for freelancers
                      </label>
                    </div>
                    <div className="box-button mt-15">
                      <button className="btn btn-apply-big font-md font-bold">Save All Changes</button>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="box-skills">
                      <h5 className="mt-0 color-brand-1">Skills</h5>
                      <div className="form-contact">
                        <div className="form-group">
                          <input className="form-control search-icon" type="text" defaultValue placeholder="E.g. Angular, Laravel..." />
                        </div>
                      </div>
                      <div className="box-tags mt-30"><Link className="btn btn-grey-small mr-10">Figma<span className="close-icon" /></Link><Link className="btn btn-grey-small mr-10">Adobe XD<span className="close-icon" /></Link><Link className="btn btn-grey-small mr-10">NextJS<span className="close-icon" /></Link><Link className="btn btn-grey-small mr-10">React<span className="close-icon" /></Link><Link className="btn btn-grey-small mr-10">App<span className="close-icon" /></Link><Link className="btn btn-grey-small mr-10">Digital<span className="close-icon" /></Link><Link className="btn btn-grey-small mr-10">NodeJS<span className="close-icon" /></Link></div>
                      <div className="mt-40"> <span className="card-info font-sm color-text-paragraph-2">You can add up to 15 skills</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-my-jobs" role="tabpanel" aria-labelledby="tab-my-jobs">
                <h3 className="mt-0 color-brand-1 mb-50">My Jobs</h3>
                <div className="row display-list">
                  <div className="col-xl-12 col-12">
                    <div className="card-grid-2 hover-up"><span className="flash" />
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="card-grid-2-image-left">
                            <div className="image-box"><img src="assets/imgs/brands/brand-5.png" alt="jobBox" /></div>
                            <div className="right-info"><Link className="name-job" to>Linkedin</Link><span className="location-small">New York, US</span></div>
                          </div>
                        </div>
                        <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                          <div className="pl-15 mb-15 mt-30"><Link className="btn btn-grey-small mr-5" to="#">Adobe XD</Link><Link className="btn btn-grey-small mr-5" to="#">Figma</Link></div>
                        </div>
                      </div>
                      <div className="card-block-info">
                        <h4><Link to="job-details.html">React Native Web Developer</Link></h4>
                        <div className="mt-5"><span className="card-briefcase">Fulltime</span><span className="card-time"><span>4</span><span> mins ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                        <div className="card-2-bottom mt-20">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$500</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-12">
                    <div className="card-grid-2 hover-up"><span className="flash" />
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="card-grid-2-image-left">
                            <div className="image-box"><img src="assets/imgs/brands/brand-6.png" alt="jobBox" /></div>
                            <div className="right-info"><Link className="name-job" to>Quora JSC</Link><span className="location-small">New York, US</span></div>
                          </div>
                        </div>
                        <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                          <div className="pl-15 mb-15 mt-30"><Link className="btn btn-grey-small mr-5" to="#">Adobe XD</Link><Link className="btn btn-grey-small mr-5" to="#">Figma</Link></div>
                        </div>
                      </div>
                      <div className="card-block-info">
                        <h4><Link to="job-details.html">Senior System Engineer</Link></h4>
                        <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time"><span>5</span><span> mins ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                        <div className="card-2-bottom mt-20">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$800</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-12">
                    <div className="card-grid-2 hover-up"><span className="flash" />
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="card-grid-2-image-left">
                            <div className="image-box"><img src="assets/imgs/brands/brand-7.png" alt="jobBox" /></div>
                            <div className="right-info"><Link className="name-job" to>Nintendo</Link><span className="location-small">New York, US</span></div>
                          </div>
                        </div>
                        <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                          <div className="pl-15 mb-15 mt-30"><Link className="btn btn-grey-small mr-5" to="#">Adobe XD</Link><Link className="btn btn-grey-small mr-5" to="#">Figma</Link></div>
                        </div>
                      </div>
                      <div className="card-block-info">
                        <h4><Link to="job-details.html">Products Manager</Link></h4>
                        <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time"><span>6</span><span> mins ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                        <div className="card-2-bottom mt-20">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$250</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-12">
                    <div className="card-grid-2 hover-up"><span className="flash" />
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="card-grid-2-image-left">
                            <div className="image-box"><img src="assets/imgs/brands/brand-8.png" alt="jobBox" /></div>
                            <div className="right-info"><Link className="name-job" to>Periscope</Link><span className="location-small">New York, US</span></div>
                          </div>
                        </div>
                        <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                          <div className="pl-15 mb-15 mt-30"><Link className="btn btn-grey-small mr-5" to="#">Adobe XD</Link><Link className="btn btn-grey-small mr-5" to="#">Figma</Link></div>
                        </div>
                      </div>
                      <div className="card-block-info">
                        <h4><Link to="job-details.html">Lead Quality Control QA</Link></h4>
                        <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time"><span>6</span><span> mins ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                        <div className="card-2-bottom mt-20">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$250</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
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
              <div className="tab-pane fade" id="tab-saved-jobs" role="tabpanel" aria-labelledby="tab-saved-jobs">
                <h3 className="mt-0 color-brand-1 mb-50">Saved Jobs</h3>
                <div className="row"> 
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card-grid-2 hover-up">
                      <div className="card-grid-2-image-left"><span className="flash" />
                        <div className="image-box"><img src="assets/imgs/brands/brand-1.png" alt="jobBox" /></div>
                        <div className="right-info"><Link className="name-job" to="company-details.html">LinkedIn</Link><span className="location-small">New York, US</span></div>
                      </div>
                      <div className="card-block-info">
                        <h6><Link to="job-details.html">UI / UX Designer fulltime</Link></h6>
                        <div className="mt-5"><span className="card-briefcase">Fulltime</span><span className="card-time">4<span> minutes ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                        <div className="mt-30"><Link className="btn btn-grey-small mr-5" to="jobs-grid.html">Adobe XD</Link><Link className="btn btn-grey-small mr-5" to="jobs-grid.html">Figma</Link><Link className="btn btn-grey-small mr-5" to="jobs-grid.html">Photoshop</Link>
                        </div>
                        <div className="card-2-bottom mt-30">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$500</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card-grid-2 hover-up">
                      <div className="card-grid-2-image-left"><span className="flash" />
                        <div className="image-box"><img src="assets/imgs/brands/brand-2.png" alt="jobBox" /></div>
                        <div className="right-info"><Link className="name-job" to="company-details.html">Adobe Ilustrator</Link><span className="location-small">New York, US</span></div>
                      </div>
                      <div className="card-block-info">
                        <h6><Link to="job-details.html">Full Stack Engineer</Link></h6>
                        <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time">5<span> minutes ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                        <div className="mt-30"><Link className="btn btn-grey-small mr-5" to="jobs-grid.html">React</Link><Link className="btn btn-grey-small mr-5" to="jobs-grid.html">NodeJS</Link>
                        </div>
                        <div className="card-2-bottom mt-30">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$800</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card-grid-2 hover-up">
                      <div className="card-grid-2-image-left"><span className="flash" />
                        <div className="image-box"><img src="assets/imgs/brands/brand-3.png" alt="jobBox" /></div>
                        <div className="right-info"><Link className="name-job" to="company-details.html">Bing Search</Link><span className="location-small">New York, US</span></div>
                      </div>
                      <div className="card-block-info">
                        <h6><Link to="job-details.html">Java Software Engineer</Link></h6>
                        <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                        <div className="mt-30"><Link className="btn btn-grey-small mr-5" to="jobs-grid.html">Python</Link><Link className="btn btn-grey-small mr-5" to="jobs-grid.html">AWS</Link><Link className="btn btn-grey-small mr-5" to="jobs-grid.html">Photoshop</Link>
                        </div>
                        <div className="card-2-bottom mt-30">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$250</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card-grid-2 hover-up">
                      <div className="card-grid-2-image-left"><span className="flash" />
                        <div className="image-box"><img src="assets/imgs/brands/brand-4.png" alt="jobBox" /></div>
                        <div className="right-info"><Link className="name-job" to="company-details.html">Dailymotion</Link><span className="location-small">New York, US</span></div>
                      </div>
                      <div className="card-block-info">
                        <h6><Link to="job-details.html">Frontend Developer</Link></h6>
                        <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                        <div className="mt-30"><Link className="btn btn-grey-small mr-5" to="jobs-grid.html">Typescript</Link><Link className="btn btn-grey-small mr-5" to="jobs-grid.html">Java</Link>
                        </div>
                        <div className="card-2-bottom mt-30">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$250</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card-grid-2 hover-up">
                      <div className="card-grid-2-image-left"><span className="flash" />
                        <div className="image-box"><img src="assets/imgs/brands/brand-5.png" alt="jobBox" /></div>
                        <div className="right-info"><Link className="name-job" to="company-details.html">Linkedin</Link><span className="location-small">New York, US</span></div>
                      </div>
                      <div className="card-block-info">
                        <h6><Link to="job-details.html">React Native Web Developer</Link></h6>
                        <div className="mt-5"><span className="card-briefcase">Fulltime</span><span className="card-time">4<span> minutes ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                        <div className="mt-30"><Link className="btn btn-grey-small mr-5" to="jobs-grid.html">Angular</Link>
                        </div>
                        <div className="card-2-bottom mt-30">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$500</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card-grid-2 hover-up">
                      <div className="card-grid-2-image-left"><span className="flash" />
                        <div className="image-box"><img src="assets/imgs/brands/brand-6.png" alt="jobBox" /></div>
                        <div className="right-info"><Link className="name-job" to="company-details.html">Quora JSC</Link><span className="location-small">New York, US</span></div>
                      </div>
                      <div className="card-block-info">
                        <h6><Link to="job-details.html">Senior System Engineer</Link></h6>
                        <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time">5<span> minutes ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                        <div className="mt-30"><Link className="btn btn-grey-small mr-5" to="job-details.html">PHP</Link><Link className="btn btn-grey-small mr-5" to="job-details.html">Android</Link>
                        </div>
                        <div className="card-2-bottom mt-30">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$800</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card-grid-2 hover-up">
                      <div className="card-grid-2-image-left"><span className="flash" />
                        <div className="image-box"><img src="assets/imgs/brands/brand-7.png" alt="jobBox" /></div>
                        <div className="right-info"><Link className="name-job" to="company-details.html">Nintendo</Link><span className="location-small">New York, US</span></div>
                      </div>
                      <div className="card-block-info">
                        <h6><Link to="job-details.html">Products Manager</Link></h6>
                        <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                        <div className="mt-30"><Link className="btn btn-grey-small mr-5" to="job-details.html">ASP .Net</Link><Link className="btn btn-grey-small mr-5" to="job-details.html">Figma</Link>
                        </div>
                        <div className="card-2-bottom mt-30">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$250</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card-grid-2 hover-up">
                      <div className="card-grid-2-image-left"><span className="flash" />
                        <div className="image-box"><img src="assets/imgs/brands/brand-8.png" alt="jobBox" /></div>
                        <div className="right-info"><Link className="name-job" to="company-details.html">Periscope</Link><span className="location-small">New York, US</span></div>
                      </div>
                      <div className="card-block-info">
                        <h6><Link to="job-details.html">Lead Quality Control QA</Link></h6>
                        <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                        <div className="mt-30"><Link className="btn btn-grey-small mr-5" to="job-details.html">iOS</Link><Link className="btn btn-grey-small mr-5" to="job-details.html">Laravel</Link><Link className="btn btn-grey-small mr-5" to="job-details.html">Golang</Link>
                        </div>
                        <div className="card-2-bottom mt-30">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$250</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                    <div className="card-grid-2 hover-up">
                      <div className="card-grid-2-image-left"><span className="flash" />
                        <div className="image-box"><img src="assets/imgs/brands/brand-8.png" alt="jobBox" /></div>
                        <div className="right-info"><Link className="name-job" to="company-details.html">Periscope</Link><span className="location-small">New York, US</span></div>
                      </div>
                      <div className="card-block-info">
                        <h6><Link to="job-details.html">Lead Quality Control QA</Link></h6>
                        <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                        <div className="mt-30"><Link className="btn btn-grey-small mr-5" to="job-details.html">iOS</Link><Link className="btn btn-grey-small mr-5" to="job-details.html">Laravel</Link><Link className="btn btn-grey-small mr-5" to="job-details.html">Golang</Link>
                        </div>
                        <div className="card-2-bottom mt-30">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">$250</span><span className="text-muted">/Hour</span></div>
                            <div className="col-lg-5 col-5 text-end">
                              <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
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
            </div>
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
