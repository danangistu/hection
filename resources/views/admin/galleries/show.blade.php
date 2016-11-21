@extends('layouts.admin')

@section('content')
    <div class="text-center">
        <img class="" src="{{ url($object->picture) }}" alt="Picture"  height="500"/>
    </div>
    <div class="text-justify">
      <h2> {{ $object->title  }} </h2>
      <p> {{ $object->description  }} </p>
    </div>
@endsection
