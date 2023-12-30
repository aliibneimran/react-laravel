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
    <link rel="shortcut icon" type="image/x-icon" href="backend/assets/imgs/template/favicon.svg">
    <link href="backend/assets/css/style.css?version=4.1" rel="stylesheet">
    <title>@yield('title') </title>
  </head>
  <body>
    <div id="preloader-active">
      <div class="preloader d-flex align-items-center justify-content-center">
        <div class="preloader-inner position-relative">
          <div class="text-center"><img src="backend/assets/imgs/template/loading.gif" alt="jobBox"></div>
        </div>
      </div>
    </div>
    @include('backend.layouts.header')
    <main class="main">
    @include('backend.layouts.sidebar')
      <div class="box-content">
      @yield('content')
      @include('backend/layouts.footer')
      </div>
    </main>
    <script src="backend/assets/js/vendor/modernizr-3.6.0.min.js"></script>
    <script src="backend/assets/js/vendor/jquery-3.6.0.min.js"></script>
    <script src="backend/assets/js/vendor/jquery-migrate-3.3.0.min.js"></script>
    <script src="backend/assets/js/vendor/bootstrap.bundle.min.js"></script>
    <script src="backend/assets/js/plugins/waypoints.js"></script>
    <script src="backend/assets/js/plugins/magnific-popup.js"></script>
    <script src="backend/assets/js/plugins/perfect-scrollbar.min.js"></script>
    <script src="backend/assets/js/plugins/select2.min.js"></script>
    <script src="backend/assets/js/plugins/swiper-bundle.min.js"></script>
    <script src="backend/assets/js/plugins/jquery.circliful.js"></script>
    <script src="backend/assets/js/plugins/charts/index.js"></script>
    <script src="backend/assets/js/plugins/charts/xy.js"></script>
    <script src="backend/assets/js/plugins/charts/Animated.js"></script>
    <script src="backend/assets/js/plugins/armcharts5-script.js"></script>
    <script src="backend/assets/js/main.js?v=4.1"></script>
  </body>
</html>