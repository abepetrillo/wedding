/* Contact Form validations start here  */
var API_HOST = 'https://api.abeandsusan.com'
var RsvpService = {
	loadRsvpForm: function loadRsvpForm() {
		$.ajax({
			url: API_HOST + "/invitations/me",
			beforeSend: function(xhr) {
				xhr.setRequestHeader('Authorization', window.sessionStorage.accessToken);
			}
		}).done(function(data){
			$('table.rsvp-response tr.guest-template').not('.hidden').remove()
			$('#frm').addClass('hidden')
		 	var rsvpForm = $('#rsvpDetails')
			rsvpForm.removeClass('hidden')
			var template = $('#rsvpDetails tr.guest-template')
			var container = rsvpForm.find('.guests-container')
			data.invitation.guests.map(function(guest){
				var domElement = template.clone()
				domElement.removeClass('hidden')
				domElement.find('input[name=rsvpStatus]').prop('checked', guest.rsvp_status == 'coming')
				domElement.find('input[name=name]').val(guest.name)
				domElement.find('input[name=id]').val(guest.id)
				container.append(domElement)
			});
		})
	},
	guestData: function guestData () {
		var guestRows = $('table.rsvp-response tr.guest-template').not('.hidden');
		return $.makeArray(guestRows.map(function(index){
			var status = $(this).find('input[name=rsvpStatus]').prop('checked') ? 'coming' : 'not_coming';
			var name = $(this).find('input[name=name]').val();
			var id = $(this).find('input[name=id]').val();
			return {
				id: id,
				name: name,
				rsvp_status: status
			}
		}));
	}
};

(function ($) {
	'use strict';

	//TODO: Change this to cookie storage if we have time https://stormpath.com/blog/where-to-store-your-jwts-cookies-vs-html5-web-storage#so-whats-the-difference
	function storeToken(token) {
	  window.sessionStorage.accessToken = token;
	}

	$('#rsvpDetails').submit(function(event){
		event.preventDefault();
		var data = {
			invitation: {
				guests: RsvpService.guestData(),
				note: $(this).find('textarea[name=note]').val()
			}
		}
		$.ajax({
			url: API_HOST + "/invitations/me",
			method: 'PUT',
			dataType: 'json',
			data: JSON.stringify(data),
			contentType : 'application/json',
			beforeSend: function(xhr) {
				xhr.setRequestHeader('Authorization', window.sessionStorage.accessToken);
			}
		}).success(function(data){
			$('#rsvpDetails').addClass('hidden')
			$('.response-thanks').removeClass('hidden')
		}).fail(function(data){
			$('#rsvpDetails').addClass('hidden')
			$('.response-fail').removeClass('hidden')
		})
		return false;
	})

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
			}).success(function( data ) {
					storeToken(data['auth_token'])
			    $( "#loding").hide();
			    $( "#Success").slideDown( "slow" );
					setTimeout(function() {
	            	$( "#Success").slideUp( "slow" );
	        	}, 3000);
					RsvpService.loadRsvpForm()
		});
	});
})(jQuery);
/* Contact Form validation ends here  */
