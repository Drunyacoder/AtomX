// Подсветка активных пунктов меню
$(function () {
    $('.fpsMainMenu li a').each(function () {
        var location = window.location.href;
        var link = this.href;
		var result = location.match(link);
		if(location == link) {
		  $(this).addClass('active');
		}
		if(result != null) {
		  $(this).addClass('current');
		}
    });
});

// Кнопка открытия мини-чата.
function ochat() {
 if($('#ochat').css('display') == 'none') {
   $('#ochat').show();
   AtomX.WStore.set('chat_auto_open', 0);
 }else{
   $('#ochat').hide();
   AtomX.WStore.set('chat_auto_open', new Date().getTime() + 1800000);
   console.log(AtomX.WStore.get('chat_auto_open'));
 }
}
function ochat_auto() {
	if(AtomX.WStore.get('chat_auto_open') < new Date().getTime()) {
		$('#ochat').slideDown(1000);
	}
}

// Запуск FancyBox
$(document).ready(function() {
	$("a.gallery").fancybox();
});

// Скрытие/раскрытие дополнительных полей при добавлении материала
function metaTags(element) {
	if (!$(element).is(':checked')) {
		$('#meta').slideUp("slow");
		$('#tags').slideUp("slow");
	} else {
		$('#meta').slideDown("slow");
		$('#tags').slideDown("slow");
	}
};

  
  
  
  
  
  
  