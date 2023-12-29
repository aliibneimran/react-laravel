<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CandidateController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ResumeController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\TaskController;
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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/',[HomeController::class,'index']);
Route::get('authentication',[AuthController::class,'index']);
Route::get('candidates',[CandidateController::class,'index']);
Route::get('companies',[CompanyController::class,'index']);

Route::get('jobs',[JobController::class,'index']);
Route::get('job-post',[JobController::class,'create']);
Route::post('sent',[JobController::class,'store']);

Route::get('tasks',[TaskController::class,'index']);
Route::get('profile',[ProfileController::class,'index']);
Route::get('resume',[ResumeController::class,'index']);
Route::get('settings',[SettingController::class,'index']);
