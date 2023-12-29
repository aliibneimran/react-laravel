<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function index(){
        return view('jobs');
    }
    public function store(Request $req){
        $jobs = new Job();
        $data = [
            'title' => $req->title,
            'description' => $req->description,
            'location' => $req->location,
            'type' => $req->type,
            'salary' => $req->salary,
            'tag' => $req->tag,
        ];
        $jobs->insert($data);
        return redirect('post-job')->with('msg', 'Successfully Entry');   
    }
}
