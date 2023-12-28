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
    public function contactlist(){
        // $contacts = Contact::all();
        $data['message']= Contact::all();
        return view('contactlist',$data);
    }
    public function delete($mid){
        $contact = Contact::find($mid);
        $contact->delete();
        return redirect('contactlist')->with('msg', 'Successfully Deleted'); 
    }
    public function edit($mid){
        $contact = Contact::find($mid);
        $data['single'] = $contact;
        return view('edit',$data);
    }
    public function update(Request $req,$mid){
        $contact = Contact::find($mid);
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
            $contact->update($data);
            return redirect('contactlist')->with('msg', 'Successfully Update'); 
        }
    }
}
