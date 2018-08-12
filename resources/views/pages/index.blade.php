@extends('layouts.master')

@section('content')
    <div class="home-block">
        <div class="container">
            <div class="home-block-main">
                
                @foreach ($tovars as $tovar)
                    {{-- {{ dd($tovar->toArray()) }} --}}
                    <div class="col-md-3 home-grid">
                        <div class="home-product-main">
                            <div class="home-product-top" style="height: 250px;">
                                <a href="{{ route('show.single', ['category' => $tovar->category->prefix, $tovar->id]) }}">
                                    <img src="{{ $tovar->getImage() }}" alt="{{ $tovar->getImage() }}" class="img-responsive zoom-img" width="250" height="250">
                                </a>
                            </div>
                            <div class="home-product-bottom">
                                <h3>
                                    <a href="{{ route('show.single', ['category' => $tovar->category->prefix, $tovar->id]) }}">{{ $tovar->name }}</a>
                                </h3>
                                <p>{{ $tovar->model }}</p>						
                            </div>
                            <div class="srch">
                                <span>$ {{ $tovar->price }}</span>
                            </div>
                        </div>
                    </div>
                @endforeach
                
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>
@endsection

