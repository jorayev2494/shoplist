jQuery(document).ready(function($) {
    // $(".scroll").click(function(event){		
    //     event.preventDefault();
    //     $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    // });

    // Sarted Ajax  -----------------------------------------
    // $('#getRequest').click(function() {

    //     $("#getRequest").click(function() {
    //         $.get("getRequest", function(data) {
    //             console.log(data);
    //         });
    //     });
    // ------------------------------------------------------



        // console.log("wdadawd");

        // $.ajax({
        //     url: '/ajax',
        //     type: 'POST',
        //     data: "wdadwwadw2222",
        //     headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
        //     success: function() {
                
        //         $("#msg").html(data.msg);
        //         // alert("adwadadawdawdawd111");
        //     },
        //     error:  function() {
        //         console.log("00000");
        //     }
        // })

        // alert($(this).text());
    // }); -----------------------------------------------------------


    // $("#add_to_cart").click(function() {
    //     $.get("/add_cart", function(data) {
    //         $("H1").text();
    //         console.log(data);
    //     });
    // });

    // Наше событя вход 
    // $("#add_to_cart").click(function() {

    //     // Пролучить данные из Document DOM 
    //     var token = $("#token").attr("content");   
    //     var tId = $("#idTovar").text();
    //     var tName  = $("H1").text();
    //     var tModel = $("H3").text();
    //     var tPrice = $("#price").text();
    //     // console.log([token, tId, tName, tModel, tPrice]);

    //     // запрос к GET запросу /add_cart
    //     $.get("/add_cart", function(data) {
    //         console.log(data);
    //     });

    //     // запрос к POST запросу /getRequest
    //     $.post("/getRequest", {_token:token, tId:tId, tName:tName, tModel:tModel, tPrice:tPrice}, function(data) {
    //         console.log(data)
    //     });
    // });

//      // Наше событя вход  ---------------------------------------------------------------------
//      $("#add_to_cart").click(function() {

//         // Пролучить данные из Document DOM 
//         var tId = $(this).data('id');
//         var token = $("#token").attr("content");   
//         // var tId = $("#idTovar").text();
//         var tName  = $("H1").text();
//         var tModel = $("H3").text();
//         var tPrice = $("#price").text();
//         console.log([token, tId, tName, tModel, tPrice]);
//         console.log([token, tId]); ---------------------------------------------------------------------

//         // Показать Корзину ОДОБРЕНО
//         // $.get("/cart", function(data) {
//         //     console.log(data);
//         // });

//         // запрос к GET запросу /add_cart
//         // $.get("/add_cart", function(data) {
//         //     console.log(data);
//         // });

//         // запрос к POST запросу /getRequest ---------------------------------------------------------------------
//         $.post("/add_cart", {_token:token, tId:tId, tName:tName, tModel:tModel, tPrice:tPrice}, function(data) {
//             if (data[0] == false) {
//                 alert("ОШИБКА!");
//             }
//             console.log(data)
//         });
//     }); ---------------------------------------------------------------------

});

// Can also be used with $(document).ready()
$(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      controlNav: "thumbnails"
    });
});

  