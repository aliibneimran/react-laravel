<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){
        $data['title'] = "Home Page" ;
        $data['welcome'] = "Welcome to Laravel" ;
        $data['product'] = ['Car','Bus','Truck'] ;
        return view('home',$data);
    }
    public function about(){
        $data['title'] = "About Page" ;
        return view('about',$data);
    }
    public function contact(){
        return view('contact');
    }
    public function store(Request $request){
        $data = [
            $request->name,
            $request->email,
            $request->subject,
            $request->message
        ];
        echo '<pre/>';
        print_r($data);
    }
}
