@extends('layouts.admin')

@section('content')
    <img src="{{ url($object->picture)  }}" height="300" />
    {!! form($form) !!}
    @include('partials.admin.file', ['file'=> $object->picture])
    @include('partials.admin.tinymce')
@endsection
