$(document).ready(function() {
    var toogle = document.querySelector(".nav__toggler");
    var menu = document.querySelector(".nav");
    
    toogle.addEventListener("click",function (e) {
        e.preventDefault();
        if (menu.classList.contains("nav--closed")) {
            menu.classList.remove("nav--closed");
            menu.classList.add("nav--opened");
        }
        else {
            menu.classList.remove("nav--opened");
            menu.classList.add("nav--closed");
        }
    })
        
    $(".headerLoginBtn").on('click', function(event) {
        event.preventDefault();
        var elementParent = $(this).parents(".login:first");
        if (elementParent.hasClass('hasSlideContent')) {
        	elementParent.find(".slideContent").css({
        		"padding-top": "5px",
			    "padding-bottom": "5px",
        	}).removeClass("slideContent", 500);
        	$(".slideContentHidden").removeClass('slideContentHidden');
        	$(".hasSlideContent").removeClass('hasSlideContent');
        	$(".headerLoginBtn").off("click");
        }
    });

    // Colorbox Forms
    $(".colorboxForm").colorbox({
        iframe: true,
        opacity: 0.7,
		scrolling: false,
		closeButton: true,
        fixed: true,
        width: '95%',
        height: '95%',
        maxWidth: "815px",
        maxHeight: "680px",
        close: "X",
    });
    // Отправить данные формы
    $('#send-message').click(function(event){
        // собираем данные с формы
        var first_name   = $('#first_name').val();
        var email   = $('#email').val();
        var phone   = $('#phone').val();
        var comment = $('#comment').val();

        // отправляем данные
        $.ajax({
            url: "action_send.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "first_name":    first_name,
                "email":   email,
                "phone":   phone,
                "comment": comment
            },
            // после получения ответа сервера
            success: function(data){
                $('.messages').html(data.result); // выводим ответ сервера
                //$('.data-form').hide();                          
            }
        });
    });
    // $(window).resize(function(){
    //     $.colorbox.resize({
    //         width: window.innerWidth > parseInt(cboxOptions.maxWidth) ? cboxOptions.maxWidth : cboxOptions.width,
    //         height: window.innerHeight > parseInt(cboxOptions.maxHeight) ? cboxOptions.maxHeight : cboxOptions.height
    //     });
    // });
});