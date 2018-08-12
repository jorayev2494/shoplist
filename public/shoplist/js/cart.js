jQuery(document).ready(function($) {

    /*
    *  напишем скрипт обработки клика на кнопку, в котором
    *  мы получим id кнопки, который является кодом нашего
    *  товара и отправим его аякс запросом в файлик addtocart.php
    */

    /**
     * Функция для получение Корзины из Сессии
     */
    function getCart() {

        var token = $("[name='csrf-token']").attr("content");       // Получаем token из header

        $.ajax({                                                    // передаем ajax-запросом данные
            type: "GET",                                            // метод передачи данных
            url: '/get_cart',                                       // URL для обработки данных Контроллеру и его методу
            data: {                                                 // передаем наши данные
                _token:token,                                       // получаем _token из загаловка сайта
            }, 
            success: function(data) {                           // Получаем ответ от серьвера
                $('#cart_total').html(data[1]);                     // меняем общую сумму на кнопке корзины 
                $('#cart_count').html(data[0]);                     // меняем количество товаров на кнопке корзины 

                $('#cart_total_cart').html(data[1]);                // меняем общую сумму на странице корзины 
                $('#cart_count_cart').html(data[0]);                // меняем количество товаров на странице корзины 
            },
            error: function () {
                console.log("Erros");
            }
        });
        
    }
   
    // Анонимный вызов функции
    (function () {

        getCart()

    }());


    $('.btn-buy').click(function () {                               // клик на кнопку (.btn-buy) Купить
        var token = $("[name='csrf-token']").attr("content");       // Получаем token из header
        var id = $(this).attr('data-id');                           // получаем id этой кнопки
        var price = $("#price").attr('data-price')                  // получаем price - цену этой товара    
        var count = $("input[name='count']").val();                 // получаем количества этой товара

        if (count == undefined || count <= 0) {
            count = 1;                                              // проверка получаемый кол-во товара
            console.log("Один товар добавлен в Корзину!")
        } 

        if (id <= 0) {
            alert("Товар с таким именем не найдено!");              // проверка получаемый ID товара
        }

        $.ajax({                                                // передаем ajax-запрос
            type: "POST",                                           // метод передачи данных
            url: '/add_cart',                                       // URL для обработки данных Контроллеру и его методу
            data: {                                                 // передаем наши данные в Серьверь
                _token:token,
                id_tov:id,
                price_tov:price,
                count_tov:count,
            }, 
            success: function(data) {                               // Получаем ответ от серьвера
                        console.log("Count: " + data[0]);
                        console.log("Summ: " + data[1]);
                        $('#cart_total').html(data[1]);             // меняем общую сумму на кнопке корзины 
                        $('#cart_count').html(data[0]);             // меняем количество товаров на кнопке корзины 

                        $('#cart_total_cart').html(data[1]);        // меняем общую сумму на странице корзины 
                        $('#cart_count_cart').html(data[0]);        // меняем количество товаров на странице корзины 

                        $('#cart_tovar_summ').html("$ " + data[2]);
                        console.log(data[2]);
                }
            },
            // error: function () {
            //     console.log("Error!");
            // }
        );

            // Чтобы увидет полученные данные в консоле
            console.log( 'Токен: ' + token );
            console.log('Получен: ' + 'id = ' + id );
            console.log('Цену: ' + 'price = ' + price );
            console.log("Количества тов: " + count);
    });


    /**
     * Удаление товара
     */
    $('.btn-del').on('click', function(c) {                         // клик на кнопку (.btn-del) Удалить (X) из корзины 

        var token = $("[name='csrf-token']").attr("content");       // Получаем token из header
        var id = $(this).attr('data-id');                           // получаем id этой кнопки

        $('#del-tovar-' + id).fadeOut('slow', function(c){          // Скрыть или Удалить удаленного блока из корзины 

            $.ajax({                                                // передаем ajax-запрос
                type: "POST",                                       // метод передачи данных
                url: '/del_cart',                                   // URL для обработки данных Контроллеру и его методу
                data: {                                             // передаем наши данные в Серьверь
                    _token:token,
                    id_tov:id,
                }, 
                success: function(data) {                           // Получаем ответ от серьвера
                            getCart();                              // Вызываем функыю getCart() чтобы получить нащи данные из Сесси Корзины
                        }
                },
            );
        });

        // Чтобы увидет полученные данные в консоле
        console.log( 'Токен: ' + token );
        console.log('Получен: ' + 'id = ' + id );

    });	  


    // Очистит корзину
    $('#empty_cart').on('click', function(c) {                      // клик на кнопку (.empty_cart) Удалить (X) из корзины

        var token = $("[name='csrf-token']").attr("content");       // Получаем token из header

        $('.cart-header').fadeOut('slow', function(c) {         // Скрыть удаленного блока из корзины 
            $('.cart-header').remove();                         // Удалить удаленного блока из корзины 
        });

        $.ajax({                                                    // передаем ajax-запросом данные
            type: "POST",                                           // метод передачи данных
            url: '/clear_cart',                                     // URL для обработки данных Контроллеру и его методу
            data: {                                                 // передаем наши данные
                _token:token,
                empty_cart:true,
            }, 
            success: function(data) {                            // Получаем ответ от серьвера
                getCart();                                       // Вызываем функыю getCart() чтобы получить нащи данные из Сесси Корзины
                // Чтобы увидет полученные данные в консоле
                console.log(data);
            },
            error: function () {
                console.log("Error!");
            }
        });

        // Чтобы увидет полученные данные в консоле
        console.log( 'Токен: ' + token );
        console.log(' Корзина очищен! ');

    });	  

    

});
