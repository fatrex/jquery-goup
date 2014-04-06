/*
 *
 * Copyright (c) 2014 Daniele Lenares (https://github.com/Ryuk87)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * 
 * Version 0.1.6
 *
 */
(function ( $ ) {
	
	$.goup = function(user_params) {
		
		/* Default Params */
		var params = $.extend({
				location : 'right',
				locationOffset : 20,
				bottomOffset : 10,
				containerRadius : 10,
				containerClass : 'goup-container',
				arrowClass : 'goup-arrow',
				trigger: 500,
				animationSpeed : 'slow',
				hideUnderWidth : 500
			}, user_params);
		/* */
		
		
		$('body').append('<div style="display:none" class="'+params.containerClass+'"></div>');
		var container = $('.'+params.containerClass);
		$(container).html('<div class="'+params.arrowClass+'"></div>');
		var arrow = $('.'+params.arrowClass);
		
		/* Parameters check */
		var location = params.location;
		if (location != 'right' && location != 'left') {
			location = 'right';
		}
		
		var locationOffset = params.locationOffset;
		if (locationOffset < 0) {
			locationOffset = 0;
		}
		
		var bottomOffset = params.bottomOffset;
		if (bottomOffset < 0) {
			bottomOffset = 0;
		}
		
		var containerRadius = params.containerRadius
		if (containerRadius < 0) {
			containerRadius = 0;
		}
		
		var trigger = params.trigger;
		if (trigger < 0) {
			trigger = 0;
		}
		
		var hideUnderWidth = params.hideUnderWidth;
		if (hideUnderWidth < 0) {
			hideUnderWidth = 0;
		}
		/* */
		
		/* Container Style */
		var containerStyle = {};
		containerStyle = {
			position : 'fixed',
			width : 40,
			height : 40,
			background : '#000',
			cursor: 'pointer'
		};
		containerStyle['bottom'] = bottomOffset;
		containerStyle[location] = locationOffset;
		containerStyle['border-radius'] = containerRadius;
		
		$(container).css(containerStyle);
		
		/* Arrow Style */		
		var arrowStyle = {};
		arrowStyle = {
			width : 0,
			height : 0,
			margin : '0 auto',
			'padding-top' : 13,
			'border-style' : 'solid',
			'border-width' : '0 10px 10px 10px',
			'border-color' : 'transparent transparent #fff transparent' 
		};
		$(arrow).css(arrowStyle);
		/* */
		
		
		
		/* Trigger Hide under a certain width */
		var isHidden = false;
		$(window).resize(function(){
			if ($(window).outerWidth() <= hideUnderWidth) {
				isHidden = true;
				$(container).fadeOut();
			} else {
				isHidden = false;
				$(window).trigger('scroll');
			}
		});
		/* If i load the page under a certain width, i don't have the event 'resize' */
		if ($(window).outerWidth() <= hideUnderWidth) {
			isHidden = true;
			$(container).hide();
		}
		
		
		/* Trigger show event */
		$(window).scroll(function(){
			if ($(window).scrollTop() >= trigger && !isHidden) {
				$(container).fadeIn();
			}
			
			if ($(window).scrollTop() < trigger && !isHidden) {
				$(container).fadeOut();
			}
		});
		

		
		/* Click event */
		$(container).on('click', function(){
			$('html,body').animate({ scrollTop: 0 }, params.animationSpeed);
			return false;
		});
	};
	
}( jQuery ));
