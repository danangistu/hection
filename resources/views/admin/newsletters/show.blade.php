@extends('layouts.admin')

@section('content')
    <div class="text-justify">
      <p> {{ $object->email  }} </p>
    </div>
@endsection
