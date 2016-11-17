@extends('layouts.admin')

@section('content')
    <div class="col-xs-12 no-padding">
        <div class="post-title pull-left">
            <h1> {{ $object->title }} <br><small>{{ $object->sub_title }}</small> </h1>
        </div>
    </div>
    <div class="text-center">
        <img class="" src="{{ url($object->picture) }}" alt="Picture"  height="500"/>
    </div>
    <div class="text-justify"><br>
      <p>{!! $object->content !!}</p>
    </div>
@endsection
