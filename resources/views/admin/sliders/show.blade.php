@extends('layouts.admin')

@section('content')
    <div class="text-center">
        <img class="" src="{{ !empty($object->picture) ? url($object->picture) : 'https://ssl.gstatic.com/accounts/ui/avatar_2x.png' }}" alt="Picture"  height="500"/>
    </div>
    <div class="text-justify">
      <p> {{ $object->layer1  }} </p>
      <p> {{ $object->layer2  }} </p>
    </div>
@endsection
