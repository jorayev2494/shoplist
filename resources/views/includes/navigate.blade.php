<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul class="nav navbar-nav">

        <li><a href="{{ route('index') }}">@lang('langue.home')</a></li>
        {{-- {{ dd($menus) }} --}}
        @foreach ($menus as $menu)
            
            @if (count($menu->categories) > 0)
                
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">{{ $menu->title }} {{ count($menu->categories) }}<b class="caret"></b></a>

                    @if (count($menu->categories) > 0)

                        <ul class="dropdown-menu multi-column columns-2">
                            <div class="row">
                                <div class="col-sm-6">
                                    <ul class="multi-column-dropdown">
                                        
                                        @foreach ($menu->categories as $category)
                                            <li>
                                                <a href="{{ route('show.category', ['menu' => $menu->prefix, 'category' => $category->prefix]) }}">{{ $category->title }}</a>
                                            </li>
                                        @endforeach
                                        
                                    </ul>
                                </div>

                                {{-- <div class="col-sm-4">
                                    <ul class="multi-column-dropdown">
                                        <li><a href="product-m.html">Shirts</a></li>
                                        <li><a href="product-m.html">Shoes,Boots</a></li>
                                        <li><a href="product-m.html">Shorts</a></li>
                                        <li><a href="product-m.html">Watches</a></li>
                                        <li><a href="product-m.html">Sunglasses</a></li>
                                        <li><a href="product-m.html">Bands</a></li>
                                        <li><a href="product-m.html">Swimwear</a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-4">
                                    <ul class="multi-column-dropdown">
                                        <li><a href="product-m.html">Jewellery</a></li>
                                        <li><a href="product-m.html">Jack & Jones</a></li>
                                        <li><a href="product-m.html">Ray-Ban</a></li>
                                        <li><a href="product-m.html">Lipsticks</a></li>
                                        <li><a href="product-m.html">Longer wear</a></li>
                                        <li><a href="product-m.html">sarees</a></li>
                                        <li><a href="product-m.html">Nike</a></li>
                                    </ul>
                                </div> --}}
                            </div>
                        </ul>

                    @endif
                    
                </li>

            @endif
        @endforeach
        

        {{-- <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Men <b class="caret"></b></a>
            <ul class="dropdown-menu multi-column columns-3">
                <div class="row">
                    <div class="col-sm-4">
                        <ul class="multi-column-dropdown">
                            <li><a href="product-m.html">Accessories</a></li>
                            <li><a href="product-m.html">Bags</a></li>
                            <li><a href="product-m.html">Cap & Hats</a></li>
                            <li><a href="product-m.html">Tops</a></li>
                            <li><a href="product-m.html">Jackets & Coats</a></li>
                            <li><a href="product-m.html">wallets</a></li>
                            <li><a href="product-m.html">Jeans</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4">
                        <ul class="multi-column-dropdown">
                            <li><a href="product-m.html">Shirts</a></li>
                            <li><a href="product-m.html">Shoes,Boots</a></li>
                            <li><a href="product-m.html">Shorts</a></li>
                            <li><a href="product-m.html">Watches</a></li>
                            <li><a href="product-m.html">Sunglasses</a></li>
                            <li><a href="product-m.html">Bands</a></li>
                            <li><a href="product-m.html">Swimwear</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4">
                        <ul class="multi-column-dropdown">
                            <li><a href="product-m.html">Jewellery</a></li>
                            <li><a href="product-m.html">Jack & Jones</a></li>
                            <li><a href="product-m.html">Ray-Ban</a></li>
                            <li><a href="product-m.html">Lipsticks</a></li>
                            <li><a href="product-m.html">Longer wear</a></li>
                            <li><a href="product-m.html">sarees</a></li>
                            <li><a href="product-m.html">Nike</a></li>
                        </ul>
                    </div>
                </div>
            </ul>
        </li> --}}

        {{-- <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Women <b class="caret"></b></a>
            <ul class="dropdown-menu multi-column columns-3">
                <div class="row">
                    <div class="col-sm-4">
                        <ul class="multi-column-dropdown">
                            <li><a href="product.html">Accessories</a></li>
                            <li><a href="product.html">Bags</a></li>
                            <li><a href="product.html">Cap & Hats</a></li>
                            <li><a href="product.html">Tops</a></li>
                            <li><a href="product.html">Jackets & Coats</a></li>
                            <li><a href="product.html">wallets</a></li>
                            <li><a href="product.html">Jeans</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4">
                        <ul class="multi-column-dropdown">
                            <li><a href="product.html">Shirts</a></li>
                            <li><a href="product.html">Shoes,Boots</a></li>
                            <li><a href="product.html">Shorts</a></li>
                            <li><a href="product.html">Watches</a></li>
                            <li><a href="product.html">Sunglasses</a></li>
                            <li><a href="product.html">Bands</a></li>
                            <li><a href="product.html">Swimwear</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4">
                        <ul class="multi-column-dropdown">
                            <li><a href="product.html">Jewellery</a></li>
                            <li><a href="product.html">Jack & Jones</a></li>
                            <li><a href="product.html">Ray-Ban</a></li>
                            <li><a href="product.html">Lipsticks</a></li>
                            <li><a href="product.html">Longer wear</a></li>
                            <li><a href="product.html">sarees</a></li>
                            <li><a href="product.html">Nike</a></li>
                        </ul>
                    </div>
                </div>
            </ul>
        </li> --}}

        {{-- <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Kids<b class="caret"></b></a>
            <ul class="dropdown-menu multi-column columns-3">
                <div class="row">
                    <div class="col-sm-4">
                        <ul class="multi-column-dropdown">
                            <li><a href="product-k.html">Accessories</a></li>
                            <li><a href="product-k.html">Bags</a></li>
                            <li><a href="product-k.html">Cap & Hats</a></li>
                            <li><a href="product-k.html">Tops</a></li>
                            <li><a href="product-k.html">Jackets & Coats</a></li>
                            <li><a href="product-k.html">wallets</a></li>
                            <li><a href="product-k.html">Jeans</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4">
                        <ul class="multi-column-dropdown">
                            <li><a href="product-k.html">Shirts</a></li>
                            <li><a href="product-k.html">Shoes,Boots</a></li>
                            <li><a href="product-k.html">Shorts</a></li>
                            <li><a href="product-k.html">Watches</a></li>
                            <li><a href="product-k.html">Sunglasses</a></li>
                            <li><a href="product-k.html">Bands</a></li>
                            <li><a href="product-k.html">Swimwear</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4">
                        <ul class="multi-column-dropdown">
                            <li><a href="product-k.html">Jewellery</a></li>
                            <li><a href="product-k.html">Jack & Jones</a></li>
                            <li><a href="product-k.html">Ray-Ban</a></li>
                            <li><a href="product-k.html">Lipsticks</a></li>
                            <li><a href="product-k.html">Longer wear</a></li>
                            <li><a href="product-k.html">sarees</a></li>
                            <li><a href="product-k.html">Nike</a></li>
                        </ul>
                    </div>
                </div>
            </ul>
        </li> --}}

        {{-- <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Kids<b class="caret"></b></a>
            <ul class="dropdown-menu multi-column columns-3">
                <div class="row">
                    <div class="col-sm-4">
                        <ul class="multi-column-dropdown">
                            <li><a href="product-k.html">Accessories</a></li>
                            <li><a href="product-k.html">Bags</a></li>
                            <li><a href="product-k.html">Cap & Hats</a></li>
                            <li><a href="product-k.html">Tops</a></li>
                            <li><a href="product-k.html">Jackets & Coats</a></li>
                            <li><a href="product-k.html">wallets</a></li>
                            <li><a href="product-k.html">Jeans</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4">
                        <ul class="multi-column-dropdown">
                            <li><a href="product-k.html">Shirts</a></li>
                            <li><a href="product-k.html">Shoes,Boots</a></li>
                            <li><a href="product-k.html">Shorts</a></li>
                            <li><a href="product-k.html">Watches</a></li>
                            <li><a href="product-k.html">Sunglasses</a></li>
                            <li><a href="product-k.html">Bands</a></li>
                            <li><a href="product-k.html">Swimwear</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4">
                        <ul class="multi-column-dropdown">
                            <li><a href="product-k.html">Jewellery</a></li>
                            <li><a href="product-k.html">Jack & Jones</a></li>
                            <li><a href="product-k.html">Ray-Ban</a></li>
                            <li><a href="product-k.html">Lipsticks</a></li>
                            <li><a href="product-k.html">Longer wear</a></li>
                            <li><a href="product-k.html">sarees</a></li>
                            <li><a href="product-k.html">Nike</a></li>
                        </ul>
                    </div>
                </div>
            </ul>
        </li> --}}
        
        <li><a href="{{ route('contact') }}">@lang('langue.contact')</a></li>
    </ul>
</div>
<!--/.navbar-collapse-->
    