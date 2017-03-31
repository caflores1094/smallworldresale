jQuery(document).ready(function($){

	/* ------------------ Email Form submission ------------------*/

	$('#email-form').submit(function (e) {
	 //action to perform here
	 // action="/send_email"
	 event.preventDefault();
	 var formValArr =  $( this ).serializeArray();

	 var dataObject = {
	 		name: formValArr[0].value,
	 		email: formValArr[1].value,
	 		message: formValArr[2].value
	 };

	 //send an email with these values
	 $.ajax({
	   type: "POST",
	   url: '/send_email',
	   data: dataObject,
	   success: function(data, textStatus, jqXHR){
	   	console.log('Successfully sent an email!')
	   },
	   error: function(jqXHR, textStatus, errorThrown){
	   	console.log('ERROR Sending Email', jqXHR, errorThrown);
	   }
	 });


	});
	

	/* ------------------ Back To Top ------------------- */

	jQuery('#footer-menu-back-to-top a').click(function(){
		jQuery('html, body').animate({scrollTop:0}, 300); 
		return false; 
	});


	/* --------------------- Tabs ------------------------ */	

		(function() {

			var $tabsNav    = $('.tabs-nav'),
				$tabsNavLis = $tabsNav.children('li'),
				$tabContent = $('.tab-content');

			$tabsNav.each(function() {
				var $this = $(this);

				$this.next().children('.tab-content').stop(true,true).hide()
													 .first().show();

				$this.children('li').first().addClass('active').stop(true,true).show();
			});

			$tabsNavLis.on('click', function(e) {
				var $this = $(this);

				$this.siblings().removeClass('active').end()
					 .addClass('active');

				$this.parent().next().children('.tab-content').stop(true,true).hide()
															  .siblings( $this.find('a').attr('href') ).fadeIn();

				e.preventDefault();
			});

		})();
		
			
});


/* ------------------- Parallax --------------------- */

jQuery(document).ready(function($){
	
	$('#da-slider').cslider({
		autoplay	: true,
		bgincrement	: 50
	});

});






