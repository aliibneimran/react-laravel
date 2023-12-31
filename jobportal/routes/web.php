<?php

use App\Http\Controllers\backend\CandidateController as BackendCandidateController;
use App\Http\Controllers\backend\CompanyController as BackendCompanyController;
use App\Http\Controllers\backend\HomeController as BackendHomeController;
use App\Http\Controllers\backend\JobController as BackendJobController;
use App\Http\Controllers\backend\JobPostController as BackendJobPostController;
use App\Http\Controllers\backend\ProfileController as BackendProfileController;

use App\Http\Controllers\frontend\CompanyController;
use App\Http\Controllers\frontend\CompanyDetailsController;
use App\Http\Controllers\frontend\HomeController as FrontendHomeController;
use App\Http\Controllers\frontend\JobDetailsController as FrontendJobDetailsController;
use App\Http\Controllers\frontend\JobListController as FrontendJobListController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//frontend
Route::get('/',[FrontendHomeController::class,'index']);
Route::get('/jobs',[FrontendJobListController::class,'index']);
Route::get('/job-details',[FrontendJobDetailsController::class,'index']);
Route::get('/companies',[CompanyController::class,'index']);
Route::get('/company-details',[CompanyDetailsController::class,'index']);

//backend
Route::get('/admin',[BackendHomeController::class,'index']);
Route::get('/admin/candidates',[BackendCandidateController::class,'index']);
Route::get('/admin/companies',[BackendCompanyController::class,'index']);
Route::get('/admin/jobs',[BackendJobController::class,'index']);
Route::get('/admin/profile',[BackendProfileController::class,'index']);
Route::get('/admin/post-job',[BackendJobPostController::class,'index']);
