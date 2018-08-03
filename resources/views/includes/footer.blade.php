<div class="footer">
    <div class="container">
        <div class="footer-main">
            <div class="ftr-grids-block">
                <div class="col-md-3 footer-grid">
                    <ul>
                        <li><a href="product.html">Accessories</a></li>
                        <li><a href="product.html">Hand bags</a></li>
                        <li><a href="product.html">Clothing</a></li>
                        <li><a href="product.html">Brands</a></li>
                        <li><a href="product.html">Watches</a></li>
                    </ul>
                </div>
                <div class="col-md-3 footer-grid">
                    <ul>
                        <li><a href="login.html">Your Account</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="product.html">Store Locator</a></li>
                        <li><a href="pressroom.html">Press Room</a></li>
                    </ul>
                </div>

                <div class="col-md-3 footer-grid">
                    <ul>
                        <li><a href="terms.html">Website Terms</a></li>
                        <li>
                            <select class="country">
                                <option value="select your location">Select Country</option>
                                <option value="saab">Australia</option>
                                <option value="fiat">Singapore</option>
                                <option value="audi">London</option>
                            </select>
                        </li>
                        <li><a href="shortcodes.html">Short Codes</a></li>
                    </ul>
                </div>

                <div class="col-md-3 footer-grid-icon">
                    <ul>
                        <li><a href="#"><span class="u-tub"> </span></a></li>
                        <li><a href="#"><span class="instro"> </span></a></li>
                        <li><a href="#"><span class="twitter"> </span></a></li>
                        <li><a href="#"><span class="fb"> </span></a></li>
                        <li><a href="#"><span class="print"> </span></a></li>
                    </ul>
                    
                    {!! Form::open(['url' => route('subscribe'), 'method' => 'POST']) !!}
                    
                        {!! Form::text('email', "Newsletter", ["class" => "email-ftr"]) !!}
                    
                        {{-- <input class="email-ftr" type="text" value="Newsletter" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Newsletter';}"> --}}
                    
                        {!! Form::submit(trans('langue.submit')) !!}
                    
                    {!! Form::close() !!}
                    
                </div>
                <div class="clearfix"> </div>
            </div>
            <div class="copy-rights">
                <p>© 2016 ShopList. All Rights Reserved | Design by  <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
            </div>
        </div>
    </div>
</div>