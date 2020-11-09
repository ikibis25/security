/*
Copyright (c) 2017 
------------------------------------------------------------------
[Master Javascript]

Project:	SecuritySystem Responsive Template

-------------------------------------------------------------------*/

(function ($) {
	"use strict";
	var landingpage = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			/*-------------- SecuritySystem Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.Search();
			this.Slider();
			this.MailFunction();
			this.Counter();
			this.Gallery();
			
			
			
			},
		
		/*-------------- SecuritySystem Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		//search
		
		 // serach form
		    Search:function(){
			$(".ss_search i").on('click', function() {
				$(".search-form").toggle();
				return false;
			});
			},
		
		
	    //banner slider
		    Slider: function() {
            if ($('.ed_slider').length > 0) {
                $(".ed_slider").owlCarousel({
                    navigation: true,
                    loop: true,
                    items: 1,
                    autoplay: true,
                    slideSpeed: 1000,
                    singleItem: true


                });
            }
        },
		  		//contact mail
		MailFunction:function(){
			//help mail function	
			$('.submit_frm').on('click', function(){
				var u_name=$('#name').val();
				var u_email=$('#email').val();
				var u_phone=$('#number').val();
				var u_date=$('#date').val();
				var u_msg=$('#message').val();
				
				$.ajax({
					type: "POST",
					url: "contactmail.php",
					data: {
						'username':u_name,
						'useremail':u_email,
						'userphone':u_phone,
						'userdate':u_date,
						'user_msg':u_msg,
						},
					success: function(msg) {
						var full_msg=msg.split("#");
						if(full_msg[0]=='1'){
							$('#name').val("");
							$('#email').val("");
							$('#number').val("");
							$('#date').val("");
							$('#message').val("");
							$('#err_msg').html( full_msg[1] );
						}
						else{
							$('#name').val(u_name);
							$('#email').val(u_email);
							$('#number').val(u_phone);
							$('#date').val(u_phone);
							$('#message').val(u_msg);
							$('#err_msg').html( full_msg[1] );
						}
					}
				});
			});
		},
		// Counter
        Counter: function() {
            if ($('.ss_count_box').length > 0) {
                $('.ss_count_box').appear(function() {
                    $('.count-no').countTo();
                });
            }
        },
		
		// Gallery
		
		Gallery:function() {
		if($('.ss_gallery_container').length > 0)	{
		$("[data-fancybox]").fancybox({
			slideShow  : false,
			fullScreen : false,
			thumbs     : false,
			closeBtn   : true,
		  
		});
		}
		
        },
		
		   
		};
		

		
       $(document).ready(function(){   
		landingpage.init();
	   });



})(jQuery);