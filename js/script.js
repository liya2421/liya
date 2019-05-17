//event pada saat link di klik

$('.page-scroll').on('click', function(event){


//ambil isi href
var Tujuan=$(this).attr('href');

//tangkap elemen ybs
var elemenTujuan = $(Tujuan);


//pindahkan scroll
$('body').animate({
	scrollTop: $(this.hash).offset().top - 50
}, 1000, 'easeInOutExpo');

// 	scrollTop: elemenTujuan.offset().top - 50
// }, 1000);

    e.preventDefault();
});






//paralax
$(window).on('load', function() {

$('.pkiri').addClass('pmuncul');
$('.pkanan').addClass('pmuncul');
}):
	$(window).scroll(function(){
var windoeScroll = $(this).scrollTop();


$('.jumbotron img').css({
	'transform' : 'translate(0px, '+ wScroll/4+'%)'
});



$('.jumbotron h1').css({
	'transform' : 'translate(0px, '+ wScroll/2+'%)'
});

$('.jumbotron p').css({
	'transform' : 'translate(0px, '+ wScroll/1,2+'%)'
});

//portfolio
if (windoeScroll > $('.portfolio').offset().top - 100) {

	$('.portfolio .thumbnail').each(function(i){
		setTimeout(function(){
			$('.portfolio .thumbnail').eq(i).addClass('muncul');
		}, 300 * (i+1));
			});
}
});





















