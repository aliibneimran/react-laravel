<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function index()
    {
        $data['jobs'] = Job::all();
        return view('jobs/index', $data);
    }
    public function create()
    {
        return view('jobs/create');
    }
    public function store(Request $req)
    {
        $jobs = new Job();
        $data = [
            'title' => $req->title,
            'description' => $req->description,
            'location' => $req->location,
            'salary' => $req->salary,
            'tag' => $req->tag,
        ];
        $jobs->insert($data);
        return redirect('job-post')->with('msg', 'Successfully Entry');

    }
}
