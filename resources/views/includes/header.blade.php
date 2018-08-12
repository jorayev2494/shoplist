<div class="header">
    <div class="container">
        <div class="header-main">
            <div class="top-nav">
                <div class="content white">
                    <nav class="navbar navbar-default" role="navigation">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <div class="navbar-brand logo">
                                <a href="{{ route('index') }}"><img src="{{ asset('shoplist') }}/images/logo1.png" alt="{{ asset('shoplist') }}/images/logo1.png"></a>
                            </div>
                        </div>
                        <!--/.navbar-header-->

                            {{-- Подключение Меню Навигцию --}}
                            @include("includes.navigate")

                    </nav>
                    <!--/.navbar-->
                </div>
                    
            </div>
            <div class="header-right">
                <div class="search">
                    <div class="search-text">
                        {{--  <input class="serch" type="text" value="@lang('langue.search')" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search';}"/>  --}}
                    </div>

                    {{--  <a class="btn btn-default btn-lg" href="cart.php">
                        ({{ count($cart) }})
                        Корзина 
                        <span class="badge basker_kol">0</span>
                    </a  --}}

                    <div class="cart box_1">
                        <a href="{{ route('cart.index') }}">
                            <h3>
                                <img src="{{ asset('shoplist') }}/images/cart.png" alt=""/>
                                <div class="total">
                                    <span id="cart_total">0</span> $ |  Count: <span id="cart_count">0</span>
                                    {{--  <span id="cart_total" class="simpleCart_total"></span>  --}}
                                </div>
                            </h3>
                        </a>
                        {{--  <p><a href="javascript:;" class="simpleCart_empty">@lang('langue.empty_cart')</a></p>  --}}
                        <p><a href="javascript:;" id="empty_cart" class="simpleCart_empty">@lang('langue.empty_cart')</a></p>
                    </div>   

                    <div class="head-signin">

                        @guest
                            <h5>
                                <a href="{{ route('login') }}"><i class="hd-dign"></i>@lang('langue.sign_in')</a>
                            </h5>
                        @else
                            <h5>
                                {{-- <a href="#"><i class="hd-dign"></i>{{ auth()->user()->name }}</a> --}}
                                <li class="dropdown" style="list-style: none;" >
                                    <a href="#" data-toggle="dropdown" aria-expanded="true"><i class="hd-dign"></i>{{ auth()->user()->name }} <b class="caret"></b></a>
                                    <ul class="dropdown-menu multi-column columns">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <ul class="multi-column-dropdown"> 
                                                    <li>
                                                        <a href="#" onclick="event.preventDefault();
                                                        document.getElementById('logout-form').submit();">@lang('langue.logout')</a>

                                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                                            @csrf
                                                        </form>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </ul>
                                </li>
                            </h5>
                        @endguest
                        
                    </div>  
                                
                    <div class="clearfix"> </div>					
                </div>
            </div>
            <div class="clearfix"> </div>
        </div>
    </div>
</div>