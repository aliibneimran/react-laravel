@extends('layouts.app')

@section('title','Dashboard')

@section('content')


<div class="box-heading">
    <div class="box-title">
        <h3 class="mb-35">Post a Job</h3>
    </div>
    <div class="box-breadcrumb">
        <div class="breadcrumbs">
            <ul>
                <li> <a class="icon-home" href="index.html">Admin</a></li>
                <li><span>Post New Job</span></li>
            </ul>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-12">
        <div class="section-box">
            <div class="container">
                <div class="panel-white mb-30">
                    <div class="box-padding bg-postjob">
                        <h5 class="icon-edu">Tell us about your role</h5>
                        <!-- Success Message -->
        @if (session('msg'))
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            {{ session('msg') }}
        </div>
        @endif
                        <form action="post-job" method="post">
                        <div class="row mt-30">
                            <div class="col-lg-9">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group mb-30">
                                            <label class="font-sm color-text-mutted mb-10">Job title *</label>
                                            <input class="form-control" type="text" placeholder="e.g. Senior Product Designer" name="title" value="{{old('title')}}">
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group mb-30">
                                            <label class="font-sm color-text-mutted mb-10">Add your job description *</label>
                                            <textarea class="form-control" name="description" rows="8">{{old('description')}}</textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group mb-30">
                                            <label class="font-sm color-text-mutted mb-10">Job location</label>
                                            <input class="form-control" type="text" placeholder="e.g. &quot;New York City&quot; or &quot;San Francisco”" name="location" value="{{old('location')}}">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group mb-30">
                                            <label class="font-sm color-text-mutted mb-10">Workplace type *</label>
                                            <select class="form-control">
                                                <option value="1">Remote</option>
                                                <option value="1">Office</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group mb-30">
                                            <label class="font-sm color-text-mutted mb-10">Salary</label>
                                            <input class="form-control" type="text" placeholder="$2200 - $2500" name="salary" value="{{old('salary')}}">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group mb-30">
                                            <label class="font-sm color-text-mutted mb-10">Tags (optional) </label>
                                            <input class="form-control" type="text" placeholder="Figma, UI/UX, Sketch..." name="tag" value="{{old('tag')}}">
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group mb-30">
                                            <div class="box-upload">
                                                <div class="add-file-upload">
                                                    <input class="fileupload" type="file" name="file">
                                                </div><a class="btn btn-default">Upload File</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group mb-30 box-file-uploaded d-flex align-items-center"><span>Job_required.pdf</span><a class="btn btn-delete">Delete</a></div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group mt-10">
                                            <button class="btn btn-default btn-brand icon-tick" type="submit">Post New Job</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection