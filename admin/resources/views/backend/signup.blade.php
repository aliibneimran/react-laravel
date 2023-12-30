<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="msapplication-TileColor" content="#0E0E0E">
    <meta name="template-color" content="#0E0E0E">
    <link rel="manifest" href="manifest.json" crossorigin>
    <meta name="msapplication-config" content="browserconfig.xml">
    <meta name="description" content="Index page">
    <meta name="keywords" content="index, page">
    <meta name="author" content="">
    <link rel="shortcut icon" type="image/x-icon" href="assets/imgs/template/favicon.svg">
    <link href="assets/css/style.css?version=4.1" rel="stylesheet">
    <title>Register - Job Portal HTML Template </title>
</head>

<body>
    <form action="login" method="most">
        @csrf
        <div class="col-lg-4 col-md-6 col-sm-12 mx-auto">
            <div class="form-login-cover">
                <div class="text-center">
                    <p class="font-sm text-brand-2">Register </p>
                    <h2 class="mt-10 mb-5 text-brand-1">Start for free Today</h2>
                    <p class="font-sm text-muted mb-30">Access to all features. No credit card required.</p>
                    <button class="btn social-login hover-up mb-20"><img src="assets/imgs/template/icons/icon-google.svg" alt="jobbox"><strong>Sign up with Google</strong></button>
                    <div class="divider-text-center"><span>Or continue with</span></div>
                </div>
                <form class="login-register text-start mt-20" action="#">
                    <div class="form-group">
                        <label class="form-label" for="input-1">Name *</label>
                        <input class="form-control" id="input-1" type="text" required="" name="name" placeholder="Steven Job">
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="input-2">Email *</label>
                        <input class="form-control" id="input-2" type="email" required="" name="email" placeholder="stevenjob@gmail.com">
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="input-4">Password *</label>
                        <input class="form-control" id="input-4" type="password" required="" name="password" placeholder="************">
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="input-5">Re-Password *</label>
                        <input class="form-control" id="input-5" type="password" required="" name="re-password" placeholder="************">
                    </div>
                    <div class="login_footer form-group d-flex justify-content-between">
                        <label class="cb-container">
                            <input type="checkbox"><span class="text-small">Agree our terms and policy</span><span class="checkmark"></span>
                        </label><a class="text-muted" href="#">Lean more</a>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-brand-1 hover-up w-100" type="submit" name="login">Submit &amp; Register</button>
                    </div>
                    <div class="text-muted text-center">Already have an account? <a href="login.html">Sign in</a></div>
                </form>
            </div>
        </div>
    </form>
    <script src="assets/js/vendor/modernizr-3.6.0.min.js"></script>
    <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
    <script src="assets/js/vendor/jquery-migrate-3.3.0.min.js"></script>
    <script src="assets/js/vendor/bootstrap.bundle.min.js"></script>
    <script src="assets/js/plugins/waypoints.js"></script>
    <script src="assets/js/plugins/magnific-popup.js"></script>
    <script src="assets/js/plugins/perfect-scrollbar.min.js"></script>
    <script src="assets/js/plugins/select2.min.js"></script>
    <script src="assets/js/plugins/swiper-bundle.min.js"></script>
    <script src="assets/js/plugins/jquery.circliful.js"></script>
    <script src="assets/js/main.js?v=4.1"></script>
</body>

</html>