var headerLayout = function() {
	this.CHANGE_HEADER_LAYOUT_POINT = 140;
	this.initialize();
};
headerLayout.prototype = {
	initialize: function() {
		$('.container').css('margin-top', $('.jsc_header').height() + 30);
		this.bindEvent();
	},
	bindEvent: function() {
		var _self = this;
		$(window).scroll(function() {
			_self.changeHeaderLayout();
		});
	},
	changeHeaderLayout: function() {
		if (this.CHANGE_HEADER_LAYOUT_POINT <= $(window).scrollTop()) {
			$('.jsc_header').addClass('--slim');
			$('.container').css('margin-top', $('.jsc_header').height() + 30);
		} else {
			$('.jsc_header').removeClass('--slim');
			$('.container').css('margin-top', $('.jsc_header').height() + 30);
		}
	}
};

var loadingScreen = function() {
	this.LOADING_LONGEST_TIME = 3000;
	this.initialize();
};
loadingScreen.prototype = {
	initialize: function() {
		this.createLoadingContent();
		this.startLoadingAnimation();
		this.bindEvent();
	},
	bindEvent: function() {
		var _self = this;
		$(window).load(function() {
			_self.hideContent();
		});
	},
	startLoadingAnimation: function() {
		$('.jsc_loadingContent').css({ 'opacity': 1 });
		for (var i = 0; i <= $('.jsc_loadingContent').children().size(); i++) {
			$('.jsc_loadingContent').children('span:eq('+i+')').delay(50*i).animate({'opacity':1},50);
		}
	},
	createLoadingContent: function() {
		$('.jsc_loadingContent').children().andSelf().contents().each(function() {
		  if (this.nodeType == 3) {
		    $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
		  }
		});
	},
	hideContent: function() {
		$('.jsc_loader').delay(2000).fadeOut(2000);
	}
};

$(function() {
	$('.flexslider').flexslider({
		'selector': '.slider__items > li',
		'directionNav': true
	});
	$('.jsc_fadeinContainer').fadeIn(2000);
	new headerLayout();
	new loadingScreen();
});