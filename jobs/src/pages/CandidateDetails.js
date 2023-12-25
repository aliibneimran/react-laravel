import React from 'react'
import { Link } from 'react-router-dom'

export default function CandidateDetails() {
  return (
<main className="main">
  <section className="section-box-2">
    <div className="container">
      <div className="banner-hero banner-image-single"><img src="assets/imgs/page/candidates/img.png" alt="jobbox" /></div>
      <div className="box-company-profile">
        <div className="image-compay"><img src="assets/imgs/page/candidates/candidate-profile.png" alt="jobbox" /></div>
        <div className="row mt-10">
          <div className="col-lg-8 col-md-12">
            <h5 className="f-18">Steven Jobs <span className="card-location font-regular ml-20">New York, US</span></h5>
            <p className="mt-0 font-md color-text-paragraph-2 mb-15">UI/UX Designer. Front end Developer</p>
            <div className="mt-10 mb-15"><img src="assets/imgs/template/icons/star.svg" alt="jobbox" /><img src="assets/imgs/template/icons/star.svg" alt="jobbox" /><img src="assets/imgs/template/icons/star.svg" alt="jobbox" /><img src="assets/imgs/template/icons/star.svg" alt="jobbox" /><img src="assets/imgs/template/icons/star.svg" alt="jobbox" /><span className="font-xs color-text-mutted ml-10">(66)</span><img className="ml-30" src="assets/imgs/page/candidates/verified.png" alt="jobbox" /></div>
          </div>
          <div className="col-lg-4 col-md-12 text-lg-end"><Link className="btn btn-download-icon btn-apply btn-apply-big" to="page-contact">Download CV</Link></div>
        </div>
      </div>
      <div className="box-nav-tabs mt-40 mb-5">
        <ul className="nav" role="tablist">
          <li><Link className="btn btn-border aboutus-icon mr-15 mb-5 active" to="#tab-short-bio" data-bs-toggle="tab" role="tab" aria-controls="tab-short-bio" aria-selected="true">Short Bio</Link></li>
          <li><Link className="btn btn-border recruitment-icon mr-15 mb-5" to="#tab-skills" data-bs-toggle="tab" role="tab" aria-controls="tab-skills" aria-selected="false">Skills</Link></li>
          <li><Link className="btn btn-border people-icon mb-5" to="#tab-work-experience" data-bs-toggle="tab" role="tab" aria-controls="tab-work-experience" aria-selected="false">Working Experience</Link></li>
        </ul>
      </div>
      <div className="border-bottom pt-10 pb-10" />
    </div>
  </section>
  <section className="section-box mt-50">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
          <div className="content-single">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab-short-bio" role="tabpanel" aria-labelledby="tab-short-bio">
                <h4>About Me</h4>
                <p>Hello there! My name is Alan Walker. I am a graphic designer, and I’m very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!</p>
                <h4>Professional Skills</h4>
                <div className="row mb-40">
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
                    <h6 className="color-text-paragraph-2">Programming</h6>
                    <div className="box-progress-bar mt-20">
                      <p className="font-xs color-text-paragraph-2 mb-10">HTML &amp; CSS</p>
                      <div className="progress">
                        <div className="progress-bar bg-paragraph-2" role="progressbar" style={{width: '78%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><span>78%</span></div>
                      </div>
                      <p className="font-xs color-text-paragraph-2 mb-10 mt-30">Javascript</p>
                      <div className="progress">
                        <div className="progress-bar bg-brand-2" role="progressbar" style={{width: '88%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}><span>88%</span></div>
                      </div>
                      <p className="font-xs color-text-paragraph-2 mb-10 mt-30">Database</p>
                      <div className="progress">
                        <div className="progress-bar bg-paragraph-2" role="progressbar" style={{width: '62%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}><span>62%</span></div>
                      </div>
                      <p className="font-xs color-text-paragraph-2 mb-10 mt-30">React JS</p>
                      <div className="progress">
                        <div className="progress-bar bg-paragraph-2" role="progressbar" style={{width: '92%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}><span>92%</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
                    <h6 className="color-text-paragraph-2">Design</h6>
                    <div className="box-progress-bar mt-20">
                      <p className="font-xs color-text-paragraph-2 mb-10">Photoshop</p>
                      <div className="progress">
                        <div className="progress-bar bg-paragraph-2" role="progressbar" style={{width: '29%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><span>29%</span></div>
                      </div>
                      <p className="font-xs color-text-paragraph-2 mb-10 mt-30">Figma</p>
                      <div className="progress">
                        <div className="progress-bar bg-paragraph-2" role="progressbar" style={{width: '20%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}><span>20%</span></div>
                      </div>
                      <p className="font-xs color-text-paragraph-2 mb-10 mt-30">Illustrator</p>
                      <div className="progress">
                        <div className="progress-bar bg-paragraph-2" role="progressbar" style={{width: '65%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}><span>65%</span></div>
                      </div>
                      <p className="font-xs color-text-paragraph-2 mb-10 mt-30">Sketch</p>
                      <div className="progress">
                        <div className="progress-bar bg-paragraph-2" role="progressbar" style={{width: '82%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}><span>82%</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                <p />
                <h4>Work Experience</h4>
                <ul>
                  <li>A portfolio demonstrating well thought through and polished end to end customer journeys</li>
                  <li>5+ years of industry experience in interactive design and / or visual design</li>
                  <li>Excellent interpersonal skills</li>
                  <li>Aware of trends in mobile, communications, and collaboration</li>
                  <li>Ability to create highly polished design prototypes, mockups, and other communication artifacts</li>
                  <li>The ability to scope and estimate efforts accurately and prioritize tasks and goals independently</li>
                  <li>History of impacting shipping products with your work</li>
                  <li>A Bachelor’s Degree in Design (or related field) or equivalent professional experience</li>
                  <li>Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
                </ul>
                <h4>Education</h4>
                <ul>
                  <li>Necessitatibus quibusdam facilis</li>
                  <li>Velit unde aliquam et voluptas reiciendis non sapiente labore</li>
                  <li>Commodi quae ipsum quas est itaque</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>
                  <li>Deleniti asperiores blanditiis nihil quia officiis dolor</li>
                </ul>
              </div>
              <div className="tab-pane fade" id="tab-skills" role="tabpanel" aria-labelledby="tab-skills">
                <h4>Skills</h4>
                <p />Hello there! My name is Alan Walker. I am a graphic designer, and I’m very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.
                <p />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!
              </div>
              <div className="tab-pane fade" id="tab-work-experience" role="tabpanel" aria-labelledby="tab-work-experience">
                <h4>Work Experiences</h4>
                <p />Hello there! My name is Alan Walker. I am a graphic designer, and I’m very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.
                <p />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!
              </div>
            </div>
          </div>
          <div className="box-related-job content-page">
            <h3 className="mb-30">Work History</h3>
            <div className="box-list-jobs display-list">
              <div className="col-xl-12 col-12">
                <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn"><span className="flash" />
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
                    <h4><Link to="job-details">Senior System Engineer</Link></h4>
                    <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time"><span>5</span><span> days ago</span></span></div>
                    <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-lg-7 col-7"><span className="card-text-price">Status:<span className="text-success">Done</span></span></div>
                        <div className="col-lg-5 col-5 text-end"><Link className="btn btn-apply-now" to="job-details">View Details</Link></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-12">
                <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn"><span className="flash" />
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
                    <h4><Link to="job-details">Products Manager</Link></h4>
                    <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time"><span>6</span><span> days ago</span></span></div>
                    <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-lg-7 col-7"><span className="card-text-price">Status:<span className="text-success">Done</span></span></div>
                        <div className="col-lg-5 col-5 text-end"><Link className="btn btn-apply-now" to="job-details">View Details</Link></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-12">
                <div className="card-grid-2 hover-up wow animate__animated animate__fadeIn"><span className="flash" />
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
                    <h4><Link to="job-details">Lead Quality Control QA</Link></h4>
                    <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time"><span>6</span><span> days ago</span></span></div>
                    <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                    <div className="card-2-bottom mt-20">
                      <div className="row">
                        <div className="col-lg-7 col-7"><span className="card-text-price">Status:<span className="text-success">Done</span></span></div>
                        <div className="col-lg-5 col-5 text-end"><Link className="btn btn-apply-now" to="job-details">View Details</Link></div>
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
        <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
          <div className="sidebar-border">
            <h5 className="f-18">Overview</h5>
            <div className="sidebar-list-job">
              <ul>
                <li>
                  <div className="sidebar-icon-item"><i className="fi-rr-briefcase" /></div>
                  <div className="sidebar-text-info"><span className="text-description">Experience</span><strong className="small-heading">12 years</strong></div>
                </li>
                <li>
                  <div className="sidebar-icon-item"><i className="fi-rr-dollar" /></div>
                  <div className="sidebar-text-info"><span className="text-description">Expected Salary</span><strong className="small-heading">$26k - $30k</strong></div>
                </li>
                <li>
                  <div className="sidebar-icon-item"><i className="fi-rr-marker" /></div>
                  <div className="sidebar-text-info"><span className="text-description">Language</span><strong className="small-heading">English, German</strong></div>
                </li>
                <li>
                  <div className="sidebar-icon-item"><i className="fi-rr-time-fast" /></div>
                  <div className="sidebar-text-info"><span className="text-description">Education Level</span><strong className="small-heading">Master Degree</strong></div>
                </li>
              </ul>
            </div>
            <div className="sidebar-list-job">
              <ul className="ul-disc">
                <li>205 North Michigan Avenue, Suite 810 Chicago, 60601, USA</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: contact@Evara.com</li>
              </ul>
              <div className="mt-30"><Link className="btn btn-send-message" to="page-contact">Send Message</Link></div>
            </div>
          </div>
          <div className="sidebar-border-bg bg-right"><span className="text-grey">WE ARE</span><span className="text-hiring">HIRING</span>
            <p className="font-xxs color-text-paragraph mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto</p>
            <div className="mt-15"><Link className="btn btn-paragraph-2" to="#">Know More</Link></div>
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
