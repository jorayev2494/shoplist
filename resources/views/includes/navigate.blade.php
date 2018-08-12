<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul class="nav navbar-nav">

        <li><a href="{{ route('index') }}">@lang('langue.home')</a></li>
        {{-- {{ dd($menus) }} --}}
        @foreach ($menus as $menu)
            
            @if (count($menu->categories) > 0)
                
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">{{ $menu->title }} <b class="caret"></b></a> 
                    {{-- {{ count($menu->categories) }} --}}

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

                            </div>
                        </ul>

                    @endif
                    
                </li>

            @endif
        @endforeach
        
        <li><a href="{{ route('contact') }}">@lang('langue.contact')</a></li>
    </ul>
</div>
<!--/.navbar-collapse-->
    