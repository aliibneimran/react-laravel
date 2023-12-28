@extends('layouts.app')

@section('title','Contact List')

@section('content')

<h2 class="text-center p-2">Message List</h2>
<!-- Success Message -->
@if (session('msg'))
<div class="alert alert-success alert-dismissible fade show" role="alert">
    {{ session('msg') }}
</div>
@endif
<table class="table table-striped table-dark">
    <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th>action</th>
        </tr>
    </thead>
    <tbody>
        @php $no = 1 @endphp
        @foreach($message as $item)
        <tr>
            <th>{{$no++}}</th>
            <td>{{$item->name}}</td>
            <td>{{$item->email}}</td>
            <td>{{$item->subject}}</td>
            <td>{{$item->message}}</td>
            <td>
                <a href="contactlist/edit/{{$item->id}}" class="btn btn-primary">Edit</a>
                <a href="contactlist/delete/{{$item->id}}" class="btn btn-danger">Delete</a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>


@endsection