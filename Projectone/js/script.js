
$(document).ready(function() {







let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');


header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
}



$('#one').on('focus' , function(){
	$('#one__second ,  #two__second ,  #thre__second ,  #fore__second ' ).removeClass('dnone dflex');
	$('#one__second').toggleClass('dflex');
	$('#two__second ,  #fore__second ,  #thre__second ').toggleClass('dnone');
	$('#li__onei').addClass('dnone');
	$('#one , #two , #thre , #fore').removeClass('number el');
	$('#two , #thre , #fore').addClass('number ');
	$('#one').addClass('el');
}) ;


$('#two').on('focus' , function(){
	$('#one__second ,  #two__second ,  #thre__second ,  #fore__second ').removeClass('dnone dflex');
	$('#one__second ,  #thre__second ,  #fore__second ').toggleClass('dnone');
	$('#two__second').toggleClass('dflex');
	$('#li__onei').addClass('dnone');
	$('#one , #two , #thre , #fore').removeClass('number el');
	$('#one , #thre , #fore').addClass('number ');
	$('#two').addClass('el');
}) ;


$('#thre').on('focus' , function(){
	$('#one__second ,  #two__second ,  #thre__second ,  #fore__second ').removeClass('dnone dflex');
	$('#one__second ,  #fore__second ,  #two__second ').toggleClass('dnone');
	$('#thre__second').toggleClass('dflex');
	$('#li__onei').addClass('dnone');
	$('#one , #two , #thre , #fore').removeClass('number el');
	$('#two , #one , #fore').addClass('number ');
	$('#thre').addClass('el');
}) ;


$('#fore').on('focus' , function(){
	$('#one__second , #two__second ,  #thre__second ,  #fore__second ').removeClass('dnone dflex');
	$('#one__second , #thre__second , #two__second ').toggleClass('dnone');
	$('#fore__second').toggleClass('dflex');
	$('#li__onei').addClass('dnone');
	$('#one , #two , #thre , #fore').removeClass('number el');
	$('#two , #thre , #one').addClass('number ');
	$('#fore').addClass('el');
}) ;



$('#soc__info').on('click', function(){
	$('.soc').fadeToggle('');
	$('body').toggleClass('scroll');
	$('#repeats').toggleClass('repeat');
});

$('#repeats').on('click', function(){
	$('.soc').fadeOut('');
	$('body').removeClass('scroll');
	$('#repeats').removeClass('repeat');
});

$('#menu').on('click' , function(){
	$('body').removeClass('lock scroll');
	$('.soc').fadeOut('');
	$('.header__burger').removeClass('active');
	$('.header__menu').removeClass('active');

		$('html, body').animate({scrollTop: $('#menu__scroll').offset().top}, 1000);
		return false;
	
});

$('.header__burger').on('click', function(){
	$('.soc').fadeOut('');
	$('body').removeClass('scroll');
});
});

