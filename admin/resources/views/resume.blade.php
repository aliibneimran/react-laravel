@extends('layouts.app')

@section('title','Resume')

@section('content')

<div class="box-heading">
    <div class="box-title">
        <h3 class="mb-35">My Resume</h3>
    </div>
    <div class="box-breadcrumb">
        <div class="breadcrumbs">
            <ul>
                <li> <a class="icon-home" href="index.html">Admin</a></li>
                <li><span>My Resume</span></li>
            </ul>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-12">
        <div class="section-box">
            <div class="container">
                <div class="panel-white mb-30">
                    <div class="box-padding">
                        <h5>Update your CV</h5>
                        <div class="row mt-30">
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group mb-30">
                                    <div class="box-upload">
                                        <div class="add-file-upload">
                                            <input class="fileupload" type="file" name="file">
                                        </div><a class="btn btn-default">Upload File</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group mb-30 d-flex align-items-center box-file-uploaded"><span>Job_required.pdf</span><a class="btn btn-delete">Delete</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel-white mb-30">
                    <div class="box-padding">
                        <h5 class="icon-edu">Education</h5>
                        <div class="row mt-30">
                            <div class="col-lg-9">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group mb-30">
                                            <label class="font-sm color-text-mutted mb-10">From</label>
                                            <input class="form-control" type="date" data-date-format="DD MMMM YYYY" data-date="17 September 2022" value="2022-09-20" placeholder="12 September 2008">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group mb-30">
                                            <label class="font-sm color-text-mutted mb-10">To</label>
                                            <input class="form-control" type="date" data-date-format="DD MMMM YYYY" data-date="17 September 2022" value="2022-09-20" placeholder="12 September 2008">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group mb-30">
                                            <label class="font-sm color-text-mutted mb-10">Description</label>
                                            <textarea class="form-control" name="message" rows="5"> Product Designer - Spotify Inc.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante
ipsum primis in faucibus.</textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group mt-10">
                                            <button class="btn btn-default btn-brand icon-tick">Add Timeline</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-timeline mt-50">
                                    <div class="item-timeline">
                                        <div class="timeline-year"> <span>2008 - 2012</span></div>
                                        <div class="timeline-info">
                                            <h5 class="color-brand-1 mb-20">National Design Academy</h5>
                                            <p class="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur dipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                        </div>
                                        <div class="timeline-actions"> <a class="btn btn-editor"></a><a class="btn btn-remove"></a></div>
                                    </div>
                                    <div class="item-timeline">
                                        <div class="timeline-year"> <span>2012 - 2014</span></div>
                                        <div class="timeline-info">
                                            <h5 class="color-brand-1 mb-20">University of Oxford</h5>
                                            <p class="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur dipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                        </div>
                                        <div class="timeline-actions"> <a class="btn btn-editor"></a><a class="btn btn-remove"></a></div>
                                    </div>
                                    <div class="item-timeline">
                                        <div class="timeline-year"> <span>2014 - 2016</span></div>
                                        <div class="timeline-info">
                                            <h5 class="color-brand-1 mb-20">California Institute of Technology</h5>
                                            <p class="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur dipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                        </div>
                                        <div class="timeline-actions"> <a class="btn btn-editor"></a><a class="btn btn-remove"></a></div>
                                    </div>
                                    <div class="item-timeline">
                                        <div class="timeline-year"> <span>2016 - Now</span></div>
                                        <div class="timeline-info">
                                            <h5 class="color-brand-1 mb-20">Stanford University</h5>
                                            <p class="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur dipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                        </div>
                                        <div class="timeline-actions"> <a class="btn btn-editor"></a><a class="btn btn-remove"></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel-white mb-30">
                    <div class="box-padding">
                        <h5 class="icon-edu">Work & Experience</h5>
                        <div class="row mt-30">
                            <div class="col-lg-9">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group mb-30">
                                            <label class="font-sm color-text-mutted mb-10">From</label>
                                            <input class="form-control" type="date" data-date-format="DD MMMM YYYY" data-date="17 September 2022" value="2022-09-20" placeholder="12 September 2008">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group mb-30">
                                            <label class="font-sm color-text-mutted mb-10">To</label>
                                            <input class="form-control" type="date" data-date-format="DD MMMM YYYY" data-date="17 September 2022" value="2022-09-20" placeholder="12 September 2008">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group mb-30">
                                            <label class="font-sm color-text-mutted mb-10">Description</label>
                                            <textarea class="form-control" name="message" rows="5"> Product Designer - Spotify Inc.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante
ipsum primis in faucibus.</textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group mt-10">
                                            <button class="btn btn-default btn-brand icon-tick">Add Timeline</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-timeline mt-50">
                                    <div class="item-timeline">
                                        <div class="timeline-year"> <span>2008 - 2012</span></div>
                                        <div class="timeline-info">
                                            <h5 class="color-brand-1 mb-20">Samoo Architects &amp; Engineers</h5>
                                            <p class="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur dipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                        </div>
                                        <div class="timeline-actions"> <a class="btn btn-editor"></a><a class="btn btn-remove"></a></div>
                                    </div>
                                    <div class="item-timeline">
                                        <div class="timeline-year"> <span>2012 - 2014</span></div>
                                        <div class="timeline-info">
                                            <h5 class="color-brand-1 mb-20">Foster &amp; Partners</h5>
                                            <p class="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur dipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                        </div>
                                        <div class="timeline-actions"> <a class="btn btn-editor"></a><a class="btn btn-remove"></a></div>
                                    </div>
                                    <div class="item-timeline">
                                        <div class="timeline-year"> <span>2014 - 2016</span></div>
                                        <div class="timeline-info">
                                            <h5 class="color-brand-1 mb-20">Skidmore Owings &amp; Merrill</h5>
                                            <p class="color-text-paragraph-2 mb-15">Lorem ipsum dolor sit amet, consectetur dipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                        </div>
                                        <div class="timeline-actions"> <a class="btn btn-editor"></a><a class="btn btn-remove"></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection