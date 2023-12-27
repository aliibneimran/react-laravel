<?php

namespace App\Http\Controllers;

use App\Models\Contact;
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
    public function contactlist(){
        // $contacts = Contact::all();
        $data['message']= Contact::all();
        return view('home',$data);
    }
    public function store(Request $req){
        $contact = new Contact();
        $messages = [
            'name.required' => 'You have put your name',
            'email.required' => 'Please put your email',
            'email.email' => 'Please valid email',
        ];

        $validate = $req->validate([
            'name' => 'required|min:4',
            'email' => 'required|email'
        ], $messages);

        if($validate){
            $data = [
                'name' => $req->name,
                'email' => $req->email,
                'subject' => $req->subject,
                'message' => $req->message,
            ];
            $contact->insert($data);
            return redirect('contact')->with('msg', 'Message Successfully Sent'); 
        }
        
    }
}
