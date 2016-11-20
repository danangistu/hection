@extends('layouts.admin')

@section('content')
    <div class="text-center">
        <img class="" src="{{ url($object->picture) }}" alt="Picture"  height="100"/>
    </div>
    <div class="text-justify">
      <p> {{ $object->name  }} </p>
      <p> {{ $object->link  }} </p>
    </div>
@endsection
