@extends('layouts.admin')

@section('content')
    <div class="col-xs-12 no-padding">
        <div class="post-title pull-left">
            <h1> {{ $object->program }} </h1>
        </div>
    </div>
    <p>
        {!! $object->description !!}
    </p>
@endsection
