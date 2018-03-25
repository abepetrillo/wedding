/* Contact Form validations start here  */
(function ($) {
	'use strict';
	var API_HOST = 'http://localhost:5000'

	//TODO: Change this to cookie storage if we have time https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage#so-whats-the-difference
	function storeToken(token) {
	  window.sessionStorage.accessToken = token;
	}

	$( "#frm" ).submit(function( event ) {
	  	event.preventDefault();

	    $("#loding").css("display","inline-block");
	    $.post( API_HOST + "/sessions", {
				invitation: {
					name: $('#frm input[name=Name]').val(),
					code: $('#frm input[name=RsvpCode]').val()
				}
			}).fail(function(data){
				$( "#loding").hide();
		 		$( "#Error").slideDown( "slow" );
				 setTimeout(function() {
							 $( "#Error").slideUp( "slow" );
					 }, 3000);
			}).done(function( data ) {
					storeToken(data['auth_token'])
			    $( "#loding").hide();
			    $( "#Success").slideDown( "slow" );

	    		setTimeout(function() {
	            	$( "#Success").slideUp( "slow" );
	        	}, 3000);
	        $("#frm")[0].reset();
		});
	});
})(jQuery);
/* Contact Form validation ends here  */
