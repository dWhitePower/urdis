$(function() {

	$('.top-line .sf-menu').superfish({
		cssArrows: false,
		hoverClass: 'no-class',
		delay: 200
	});


	var owl = $(".slider");
	owl.owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		navText: ""
	});

	$(".next").click(function(){
		owl.trigger('next.owl.carousel');
	})
	$(".prev").click(function(){
		owl.trigger('prev.owl.carousel');
	});

	// Mobile menu

	$(".mobile-mnu").click(function() {
		var thiss = $(this).find(".toggle-mnu");	
	  	thiss.toggleClass("on");
	  	$(".main-mnu").slideToggle();
	 	 return false;
});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});


	$("a[href=\\#callback]").click(function(){
		$("#callback .formname").val($(this).data("form"));
	});


	$(window).scroll(function(){
		if($(this).scrollTop() > $(this).height()){
			$('.top').addClass('active');
		}else{
			$('.top').removeClass('active');
		}
	});


	

	$('.top').click(function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

	$('a[href*="#"]:not([href="#"])').click(function(){
	  if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
	    var target = $(this.hash);
	    target = target.length ? target : $('[name =' + this.hash.slice(1) + ']');
	    if(target.length){
	      $('html, body').animate({
	        scrollTop: target.offset().top
	      }, 1000);
	      return false;
	    }
	  }
});


	 // $("#my-menu").mmenu({
	 // 	extensions: ["theme-dark"]
	 // });





	 $('.service-item h4').equalHeights();

	 $('.new-item h4').equalHeights();

	 $('.new-item p').equalHeights();

	 $('.link-item').equalHeights();


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};




	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
