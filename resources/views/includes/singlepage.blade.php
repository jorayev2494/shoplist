<div class="singlepage-product">

    @foreach ($tovars as $tovarOnce)
        <div class="col-md-3 home-grid">
            <div class="home-product-main">
                <div class="home-product-top" style="height: 250px;" >
                    <a href="{{ route('show.single', [$tovarOnce->category->prefix, $tovarOnce->id]) }}"><img src="{{ $tovarOnce->getImage() }}" alt="{{ $tovarOnce->getImage() }}" class="img-responsive zoom-img"></a>
                </div>
                <div class="home-product-bottom">
                    <h3><a href="{{ route('show.single', ['category' => $tovarOnce->category->prefix, 'id' => $tovarOnce->id]) }}">{{ $tovarOnce->name }}</a></h3>
                    <p>{{ $tovarOnce->model }}</p>						
                </div>
                <div class="srch">
                    <span>$ {{ $tovarOnce->price }}</span>
                </div>
            </div>
        </div>
    @endforeach

    <div class="clearfix"> </div>
</div>