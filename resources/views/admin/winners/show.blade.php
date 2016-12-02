@extends('layouts.admin')

@section('content')
    <h4> {{ $object->school  }} </h4>
    <div class="text-center">
        <img class="" src="{{ url($object->picture) }}" alt="Picture"  height="250"/>
    </div>
    <div class="text-justify">
      <p> {{ $object->title  }} </p>
      <p> <?php echo $object->description ?> </p>
    </div>
@endsection
