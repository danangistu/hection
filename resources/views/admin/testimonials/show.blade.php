@extends('layouts.admin')

@section('content')
    <h3> {{ $object->name  }} </h3>
    <h4> {{ $object->role  }} </h4>
    <div class="text-center">
        <img class="" src="{{ url($object->picture) }}" alt="Picture"  height="100"/>
    </div>
    <div class="text-justify">
      <p> {{ $object->testimonial  }} </p>
    </div>
@endsection
