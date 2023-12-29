@extends('layouts.app')

@section('title','Profile')

@section('content')

<div class="box-heading">
    <div class="box-title">
        <h3 class="mb-35">My Profile</h3>
    </div>
    <div class="box-breadcrumb">
        <div class="breadcrumbs">
            <ul>
                <li> <a class="icon-home" href="index.html">Admin</a></li>
                <li><span>My Profile</span></li>
            </ul>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-xxl-9 col-xl-8 col-lg-8">
        <div class="section-box">
            <div class="container">
                <div class="panel-white mb-30">
                    <div class="box-padding">
                        <h6 class="color-text-paragraph-2">Update your profile</h6>
                        <div class="box-profile-image">
                            <div class="img-profile"> <img src="assets/imgs/page/profile/img-profile.png" alt="jobBox">
                            </div>
                            <div class="info-profile"> <a class="btn btn-default">Upload Avatar</a><a
                                    class="btn btn-link">Delete</a></div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group mb-30">
                                    <label class="font-sm color-text-mutted mb-10">Full Name *</label>
                                    <input class="form-control" type="text" placeholder="Steven Job">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group mb-30">
                                    <label class="font-sm color-text-mutted mb-10">Email *</label>
                                    <input class="form-control" type="text" placeholder="stevenjob@gmail.com">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group mb-30">
                                    <label class="font-sm color-text-mutted mb-10">Contact number</label>
                                    <input class="form-control" type="text" placeholder="01 - 234 567 89">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group mb-30">
                                    <label class="font-sm color-text-mutted mb-10">Personal website</label>
                                    <input class="form-control" type="text" placeholder="https://alithemes.com">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group mb-30">
                                    <label class="font-sm color-text-mutted mb-10">Bio</label>
                                    <textarea class="form-control" name="message"
                                        rows="5">We are AliThemes , a creative and dedicated group of individuals who love web development almost as much as we love our customers. We are passionate team with the mission for achieving the perfection in web design.</textarea>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group mb-30">
                                    <label class="font-sm color-text-mutted mb-10">Experience</label>
                                    <input class="form-control" type="text" placeholder="1 - 5 Years">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group mb-30">
                                    <label class="font-sm color-text-mutted mb-10">Education Levels</label>
                                    <input class="form-control" type="text" placeholder="Certificate">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group mb-30">
                                    <label class="font-sm color-text-mutted mb-10">Languages</label>
                                    <input class="form-control" type="text" placeholder="English, French">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group mb-30">
                                    <label class="font-sm color-text-mutted mb-10">Categories </label>
                                    <input class="form-control" type="text" placeholder="UI/UX designer">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group mb-30">
                                    <label class="font-sm color-text-mutted mb-10">Current Salary($)</label>
                                    <input class="form-control" type="text" placeholder="$2500">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group mb-30">
                                    <label class="font-sm color-text-mutted mb-10">Expected Salary($) </label>
                                    <input class="form-control" type="text" placeholder="$3500">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group mt-10">
                                    <button class="btn btn-default btn-brand icon-tick">Save Change</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel-white mb-30">
                    <div class="box-padding">
                        <h6 class="color-text-paragraph-2">Contact Information</h6>
                        <div class="row mt-30">
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group mb-30">
                                    <label class="font-sm color-text-mutted mb-10">Country</label>
                                    <input class="form-control" type="text" placeholder="United States of America">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group mb-30">
                                    <label class="font-sm color-text-mutted mb-10">City</label>
                                    <input class="form-control" type="text" placeholder="Chicago">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group mb-30">
                                    <label class="font-sm color-text-mutted mb-10">Complete Address</label>
                                    <input class="form-control" type="text"
                                        placeholder="205 North Michigan Avenue, Suite 810, Chicago, 60601, USA">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group mb-30">
                                    <label class="font-sm color-text-mutted mb-10">Find On Map</label>
                                    <input class="form-control" type="text"
                                        placeholder="205 North Michigan Avenue, Suite 810, Chicago, 60601, USA">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group mb-30">
                                    <label class="font-sm color-text-mutted mb-10">Latitude</label>
                                    <input class="form-control" type="text" placeholder="41.881832">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="form-group mb-30">
                                    <label class="font-sm color-text-mutted mb-10">Longitude</label>
                                    <input class="form-control" type="text" placeholder=" -87.623177">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group mb-30">
                                    <label class="font-sm color-text-mutted mb-10">Google Map</label>
                                    <div class="box-map">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.4860084541583!2d-87.62575418429162!3d41.88608087922149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca8b34afe61%3A0x6caeb5f721ca846!2s205%20N%20Michigan%20Ave%20Suit%20810%2C%20Chicago%2C%20IL%2060601%2C%20Hoa%20K%E1%BB%B3!5e1!3m2!1svi!2s!4v1663165156864!5m2!1svi!2s"
                                            width="100%" height="400" style="border:0;" allowfullscreen=""
                                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group mt-0">
                                    <button class="btn btn-default btn-brand icon-tick">Save Change</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xxl-3 col-xl-4 col-lg-4">
        <div class="section-box">
            <div class="container">
                <div class="panel-white">
                    <div class="panel-head">
                        <h5>Social Network</h5><a class="menudrop" id="dropdownMenu3" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"></a>
                        <ul class="dropdown-menu dropdown-menu-light dropdown-menu-end" aria-labelledby="dropdownMenu3">
                            <li><a class="dropdown-item active" href="#">Add new</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Actions</a></li>
                        </ul>
                    </div>
                    <div class="panel-body pt-20">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group mb-30">
                                    <label class="font-sm color-text-mutted mb-10">Facebook</label>
                                    <input class="form-control" type="text" placeholder="https://www.facebook.com">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group mb-30">
                                    <label class="font-sm color-text-mutted mb-10">Twitter</label>
                                    <input class="form-control" type="text" placeholder="https://twitter.com">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group mb-30">
                                    <label class="font-sm color-text-mutted mb-10">Instagram</label>
                                    <input class="form-control" type="text" placeholder="https://www.instagram.com">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group mt-0">
                                    <button class="btn btn-default btn-brand icon-tick">Save Change</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-box">
            <div class="container">
                <div class="panel-white">
                    <div class="panel-head">
                        <h5>My Skill</h5><a class="menudrop" id="dropdownMenu3" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false" data-bs-display="static"></a>
                        <ul class="dropdown-menu dropdown-menu-light dropdown-menu-end" aria-labelledby="dropdownMenu3">
                            <li><a class="dropdown-item active" href="#">Add new</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Actions</a></li>
                        </ul>
                    </div>
                    <div class="panel-body pt-20">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group mb-30">
                                    <input class="form-control icon-search-right" type="text"
                                        placeholder="E.g. Angular, Laravel...">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="mb-20"><a class="btn btn-tag tags-link">Figma<span></span></a><a
                                        class="btn btn-tag tags-link">Adobe XD<span></span></a><a
                                        class="btn btn-tag tags-link">NextJS<span></span></a><a
                                        class="btn btn-tag tags-link">React<span></span></a><a
                                        class="btn btn-tag tags-link">App<span></span></a><a
                                        class="btn btn-tag tags-link">Digital<span></span></a><a
                                        class="btn btn-tag tags-link">NodeJS<span></span></a></div>
                                <div class="mt-30 mb-40"> <span class="info-icon font-sm color-text-paragraph-2">You can
                                        add up to 15 skills</span></div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group mt-0">
                                    <button class="btn btn-default btn-brand icon-tick">Save Change</button>
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