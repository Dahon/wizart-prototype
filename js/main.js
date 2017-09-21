$(window).on('load', function () {

  var $preloader = $('#page-preloader'),
      $spinner   = $preloader.find('.spinner');
      $preloader.fadeOut('slow', showAfterLogo);
    function afterPreload(){
      $('.logo').fadeOut(2000, showAfterLogo);
    }
    function startBasic(){
      hideAfterterLogo();
      $('.logo').fadeIn(2000, showAfterLogo);
          
    }
    function hideAfterterLogo(){
      /*$('.result').fadeOut('slow');*/
      $('.scroll-down-but').fadeOut('slow');
    }
    function showAfterLogo(){
      $('.result').fadeIn('slow');
      timerId = setInterval(function() {
        nfunct()
      }, 4000);
      /*$('.logo-main').fadeOut('fast');*/
      $('.logo-text').removeClass('pre-active').addClass('pre-passive').find('span').show();
      /*$('.result').css('display', 'flex').hide().fadeIn('fast');*/
      $('.scroll-down-but').fadeIn('slow', function(){
              
        $('#section-first').particleground({
            dotColor: '#494949',
            lineColor: '#494949',
            density: 6700
          });
      });

    }

    $(document).on('click', '.scroll-down-but', function(){
      $(".main").moveDown();
    });

      var i = 0;
      var ggg = $('.change-text li').length;
      console.log('ggg'+ggg);
      var stopTime = ggg * 2000;

        if($(window).width() >= 1025){
          function nfunct(){
            var wdLi = $('.change-text li:eq('+i+')').width();
            $('.log-icon').fadeOut('slow');
              $('.wiz>i').addClass('hidden');
              $('.result a').css('letter-spacing', '0px');
            $('.change-text li:eq('+i+')').addClass('active');
            $('.logo-text').removeClass('pre-passive').addClass('pre-active curs-point');
            var totalWd = 210 + wdLi;
            $('.result h1').css({width: totalWd+'px'});
            if( i >= 1){
              oldnumb = i-1;
              $('.change-text li:eq('+oldnumb+')').addClass('non-active');
            }
            if(i == ggg){
              $('.change-text li:eq('+oldnumb+')').removeClass('non-active');
              clearInterval(timerId);
              $('.logo-text').removeClass('curs-point');
              i = 0;
              $('.change-text').fadeOut('slow');
              $('.logo-text').removeClass('pre-active').addClass('pre-passive');
              $('.change-text li').removeClass('active non-active');
              $('.log-icon').fadeIn('slow');
                $('.wiz>i').removeClass('hidden');
              $('.result a').css('letter-spacing', '9px');
              $('.result h1').css({width: 293+'px'});
              $('#section-first .scroll-down-but').addClass('animated slideInDown infinite');
              return false;
            }
            i += 1;
          }
        }else if($(window).width() >= 768 && $(window).width() <= 1024){
          function nfunct(){
            var wdLi = $('.change-text li:eq('+i+')').width();
            $('.log-icon').fadeOut('slow');
              $('.wiz>i').addClass('hidden');
              $('.result a').css('letter-spacing', '0px');
            $('.change-text li:eq('+i+')').addClass('active');
            $('.logo-text').removeClass('pre-passive').addClass('pre-active curs-point');
            var totalWd = 105 + wdLi;
            $('.result h1').css({width: totalWd+'px'});
            if( i >= 1){
              oldnumb = i-1;
              $('.change-text li:eq('+oldnumb+')').addClass('non-active');
            }
            if(i == ggg){
              $('.change-text li:eq('+oldnumb+')').removeClass('non-active');
              clearInterval(timerId);
              $('.logo-text').removeClass('curs-point');
              i = 0;
              $('.change-text').fadeOut('slow');
              $('.logo-text').removeClass('pre-active').addClass('pre-passive');
              $('.change-text li').removeClass('active non-active');
              $('.log-icon').fadeIn('slow');
                $('.wiz>i').removeClass('hidden');
              $('.result a').css('letter-spacing', '9px');
              $('.result h1').css({width: 170+'px'});
              $('#section-first .scroll-down-but').addClass('animated slideInDown infinite');
              return false;
            }
            i += 1;
          }
        }else{
          function nfunct(){
            var wdLi = $('.change-text li:eq('+i+')').width();
            $('.log-icon').fadeOut('slow');
              $('.wiz>i').addClass('hidden');
              $('.art').addClass('arta');
              $('.result a').css('letter-spacing', '0px');
            $('.change-text li:eq('+i+')').addClass('active');
            $('.logo-text').removeClass('pre-passive').addClass('pre-active curs-point');
            var totalWd = 66 + wdLi;
            $('.result h1').css({width: totalWd+'px'});
            if( i >= 1){
              oldnumb = i-1;
              $('.change-text li:eq('+oldnumb+')').addClass('non-active');
            }
            if(i == 2){
              $('.change-text li:eq('+oldnumb+')').removeClass('non-active');
              clearInterval(timerId);
              $('.logo-text').removeClass('curs-point');
              i = 0;
              $('.change-text').fadeOut('slow');
              $('.logo-text').removeClass('pre-active').addClass('pre-passive');
              $('.change-text li').removeClass('active non-active');
              $('.log-icon').fadeIn('slow');
                $('.wiz>i').removeClass('hidden');
                $('.art').removeClass('arta');
              $('.result a').css('letter-spacing', '9px');
              $('.result h1').css({width: 130 +'px'});
              $('#section-first .scroll-down-but').addClass('animated slideInDown infinite');
              return false;
            }
            i += 1;
          }
        }



    	$(document).on('click', '.scroll-down-but', function(){
    		$(".main").moveDown();
    	});

    	$(document).on('click', '.logo-text.pre-passive', function(e){
    		e.preventDefault();
    		$('.result span').fadeOut('slow', function(){
    			$('.logo-text').removeClass('pre-passive').addClass('pre-active');
    		});
    	});
		$(document).on('click', '.logo-text.pre-active', function(e){
			e.preventDefault();
			$('.logo-text').removeClass('pre-active');
			$('.result span').fadeIn('slow', function(){
				$('.logo-text').addClass('pre-passive')
			});
			
		});

    	/*$(document).on('click', '.logo', function(e){
    		e.preventDefault();
    		$('.logo').fadeOut('slow', function(){
    			$('.result').css('display', 'flex').hide().fadeIn(1000);
    		});
    		
    	});*/
    	$(document).on('click', '.click-open', function(){
    		$('.menu-open').addClass('active');
    	});
    	$(document).on('click', '.burger-close', function(e){
    		e.preventDefault();
    		$('.menu-open').removeClass('active');
    	});
      	$(document).on('click', '.logo-icon a', function(e){
    		e.preventDefault();
      		$(".main").moveTo('#section-first');
    		$('#section-first').particleground('destroy');
    		startBasic();
      	});
      	
     
      	var bgWD = $('.fullscreen-bg').width();
      	$('.text-hidden').css('width', ''+bgWD+'');

      	$(document).on('click', '.overlay ul li a', function(e){
    		e.preventDefault();
           
    		var dataId = $(this).parent().data('id').slice('5');
    		var blockId = $('.block-'+dataId+'');
    		if(blockId.hasClass('active')){
    			return false;
    		}
            
            $('.show-bl.post-active').removeClass('post-active')
            $('.show-bl.active').addClass('post-active');

      		$('.show-bl').removeClass('active');
            blockId.addClass('active');

            $('.overlay ul li').removeClass('active');
            $(this).find('.text-hidden').addClass('active');
            $(this).parent().addClass('active');
            $(this).parent().find('.text-hidden').css('width', ''+bgWD+'');

            $('.show-bl .fullscreen-bg__video').each(function() {
                this.pause();
                this.currentTime = 0;
            })

            blockId.find('.fullscreen-bg__video')[0].play();

      	});
      	
      	$('.tab-link a').on('click', function(e){
      		e.preventDefault();
      		$('.tab-link').removeClass('active');
      		$(this).parent().parent().addClass('active');
      		var clName = $(this).parent().parent().data('id');
      		$('.content-inner').removeClass('active');
      		$('#'+clName+'').addClass('active');
      		initialize();
      		console.log(clName);
      	})

       if($("a.gallery-img").length){
        $("a.gallery-img").fancybox(
          {
            loop     : true,
            hideOnContentClick :false,
          }
        );
       }

      //Other-page scroll aniamted
       if($('.post').length){
       	$('.post').addClass("hidden").viewportChecker({
       	  classToAdd: 'visible animated fadeIn',
       	  offset: 100
       	});
       }

       //hover effect read-more
      $('.link-icon').hover(
        function() {
          console.log('uppp');
            $( this ).addClass('animated fadeIn');

          }, function() {
            $( this ).removeClass('animated fadeIn');
          }
      );

      //partners-carousel

    	$(".main").onepage_scroll({
    		sectionContainer: "section",
    		easing: "ease", 
    		animationTime: 1000, 
    		pagination: false, 
    		updateURL: false, 
    		keyboard: true, 
          afterMove: function(index){
              $('.section').not('.active').find('.fullscreen-bg__video').each(function(){
                  this.pause();
                  this.currentTime = 0;
              });

              /*console.log($('.section .active').find('.show-bl.active .fullscreen-bg__video'));*/
              $('.section.active').find('.show-bl.active .fullscreen-bg__video').each(function(){
                  this.play();
              })

              if(index == 3){
                  $('#section-third').particleground({
                      dotColor: '#494949',
                      lineColor: '#494949'
                  });
              }
              $('#section-third').onDestroy;
          },
    	});



	});