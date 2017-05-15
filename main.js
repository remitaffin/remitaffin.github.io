$(document).ready(function() {
	if (window.matchMedia("only screen and (max-width: 860px)").matches) {
		$(".cright").addClass("hidden");
		$(".cleft").addClass("hidden");
		$("#skills").css("background", "url(devops.png) center 40px no-repeat");
		$(".dev").removeClass("hidden");
		$(".ops").removeClass("hidden");
	} else {
		// Moving dev to the middle then showing dev specs
		$(".cleft").delay(500).animate({ "left": "+=270px" }, 1500);
		$(".dev").delay(2000).fadeIn(1000);
		// Moving ops to the middle then showing ops specs
		$(".cright").delay(3000).animate({ "right": "+=270px" }, 1500);
		$(".ops").delay(4500).fadeIn(1000);

		// Melting the circles by bringing the original image back
		setTimeout(function(){
			$("#skills").css("background-position", "center 40px");
			$(".cright").fadeOut(500);
			$(".cleft").fadeOut(500);
		}, 4500);
	}	

    $(".dial").knob({
    	'width': 140,
    	'height': 70,
    	'angleOffset': 270,
    	'angleArc' : 180,
		'readOnly': true,
		'fgColor': '#35c7a3',
		'inputColor': 'white'
    });

    function launch_gauge() {
	    if($('.dial1').val() == 0) {
	    	$({value: 0}).animate({value: $('.dial1').attr("data-final")}, {
			    duration: 1500,
			    easing:'swing',
			    step: function() 
			    {
			        $('.dial1').val(Math.ceil(this.value)).trigger('change');
			    }
			});
	    }
	    if($('.dial2').val() == 0) {
	    	$({value: 0}).animate({value: $('.dial2').attr("data-final")}, {
			    duration: 1500,
			    easing:'swing',
			    step: function() 
			    {
			        $('.dial2').val(Math.ceil(this.value)).trigger('change');
			    }
			});
	    }
	    if($('.dial3').val() == 0) {
	    	$({value: 0}).animate({value: $('.dial3').attr("data-final")}, {
			    duration: 1500,
			    easing:'swing',
			    step: function() 
			    {
			        $('.dial3').val(Math.ceil(this.value)).trigger('change');
			    }
			});
	    }
	    if($('.dial4').val() == 0) {
	    	$({value: 0}).animate({value: $('.dial4').attr("data-final")}, {
			    duration: 1000,
			    easing:'swing',
			    step: function() 
			    {
			        $('.dial4').val(Math.ceil(this.value)).trigger('change');
			    }
			});
	    }
	}

    function is_on_screen(elem){
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();

	    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
	 
	if($('.dial1').length > 0 && $('.dial1').val() == 0) {
		if( is_on_screen('.dial1') ) {
			launch_gauge();
		}
	}
	$(window).scroll(function(){ // bind window scroll event
		if($('.dial1').length > 0 && $('.dial1').val() == 0) {
			if( is_on_screen('.dial1') ) {
				launch_gauge();
			}
		}
	});
});