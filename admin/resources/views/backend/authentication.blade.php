@extends('layouts.app')

@section('title','Authentication')

@section('content')

<div class="box-heading">
    <div class="box-title">
        <h3 class="mb-35">Authentication</h3>
    </div>
    <div class="box-breadcrumb">
        <div class="breadcrumbs">
            <ul>
                <li> <a class="icon-home" href="index.html">Admin</a></li>
                <li><span>Authentication</span></li>
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
                        <div class="login-register">
                            <div class="row login-register-cover pb-250">
                                <div class="col-lg-4 col-md-6 col-sm-12 mx-auto">
                                    <div class="form-login-cover">
                                        <div class="text-center"><img src="assets/imgs/page/login-register/img-6.svg" alt="JobBox">
                                            <h2 class="mt-10 mb-5 text-brand-1">Protected Content</h2>
                                            <p class="font-sm text-muted mb-30">
                                                This content is password protected. <br>To view it please enter your password below</p>
                                        </div>
                                        <form class="login-register text-start mt-20" action="#">
                                            <div class="form-group">
                                                <label class="form-label" for="input-1">Your Password *</label>
                                                <input class="form-control" id="input-1" type="password" required="" name="password" placeholder="************">
                                            </div>
                                            <div class="form-group">
                                                <button class="btn btn-brand-1 hover-up w-100" type="submit" name="login">Submit</button>
                                            </div>
                                            <div class="text-muted text-center">Don't Have Passoword?<a href="contact">Contact Us</a></div>
                                        </form>
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