<?php

use App\Http\Controllers\frontend\HomeController as FrontendHomeController;
use App\Http\Controllers\frontend\JobController as FrontendJobController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CandidateController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
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

//Frontend
Route::get('/',[FrontendHomeController::class,'index']);
Route::get('jobs',[FrontendJobController::class,'index']);

//For Login
Route::get('/login',[LoginController::class,'authenticate']);
Route::get('/dashboard',[HomeController::class,'index']);






Route::get('/',[HomeController::class,'index']);
Route::get('authentication',[AuthController::class,'index']);
Route::get('admin/candidates',[CandidateController::class,'index']);
Route::get('companies',[CompanyController::class,'index']);

