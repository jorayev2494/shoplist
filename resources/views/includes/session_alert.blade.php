@if ($errors->any())
    <div class="alert alert-danger alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <ul>
            @foreach ($errors->all() as $error)
                    {{ $error }}<br>
            @endforeach
        </ul>
    </div>
@endif


@if (session()->has("success"))
<br>
    <div class="alert alert-success alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <ul>
            <li>{{ session()->pull("success") }}</li>
        </ul>
    </div>
@endif 

@if (session()->has("success_sub"))
<br>

    <div class="alert alert-success alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <ul>
            {{ session()->pull("success_sub") }}
        </ul>
    </div>
@endif 


@if (session()->has("info"))
<br>
    <div class="alert alert-info alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <ul>
            {{ session()->pull("success") }}
        </ul>
    </div>
@endif 

@if (session()->has("success_store"))
<br>

    <div class="alert alert-success alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <ul>
            <li>{{ session()->pull("success_store") }}</li>
        </ul>
    </div>
@endif 

@if (session()->has("success_updated"))
<br>

    <div class="alert alert-success alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <ul>
            <li>{{ session()->pull("success_updated") }}</li>
        </ul>
    </div>
@endif

@if (session()->has("success_deleted"))
<br>

    <div class="alert alert-success alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <ul>
            <li>{{ session()->pull("success_deleted") }}</li>
        </ul>
    </div>
@endif

@if (session()->has("danger"))
<br>
    <div class="alert alert-danger alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        
        <ul>
            <li>{{ session()->pull("danger-admin") }}</li>
        </ul>
    </div>
@endif
