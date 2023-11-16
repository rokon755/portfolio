
// back to top.............................................................................
        if ($('#back-to-top').length) {
            var scrollTrigger = 450, // px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('#back-to-top').addClass('show');
                    } else {
                        $('#back-to-top').removeClass('show');
                    }
                };
            backToTop();
            $(window).on('scroll', function () {
                backToTop();
            });
            $('#back-to-top').on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 1000);
            });
        }
    
    
    
    
    function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 1000);         
        });
    }
    
    
    
    function animationClick(element, animation){
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);        
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 1000);         
  
        });
    }

//Add New Class with Scroll.........................................................
$(window).scroll(function (){
	var scroll=$(window).scrollTop();
	//console.log(scroll);
	if(scroll >=130){
	  $(".navigation_menu").removeClass("navigation_menu").addClass("darkHeader")
	}else{
	  $(".darkHeader").removeClass("darkHeader").addClass("navigation_menu")
	}
});



// Mega menu........................................................................
$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
});



//owl slider........................................................................
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})




//Testimonials Slider...............................................................
$(document).ready(function(){
    $('.single-item').slick({
        autoplay:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst:true,
        swipeToSlide:true,
        dots:true,
        fade:true
    });
});



// Select Box Change with Depand Another option..................................... 
function populate(o){
        d=document.getElementById('de');
        if(!d){return;}         
        var mitems=new Array();
        mitems['Select a Specialty']=['Select a Specialty'];
        mitems['Cardiology']=['Select a Doctor','Danielle','Dr.Danielle-1','Dr.Danielle-2','Dr.Danielle-3','Dr.Danielle-4','Dr.Danielle-5','Dr.Danielle-6'];
        mitems['Fertility Center']=['Select a Doctor','Rokon','Dr.Rokon-1','Dr.Rokon-2','Dr.Rokon-3','Dr.Rokon-4','Dr.Rokon-5','Dr.Rokon-6','Dr.Rokon-7','Dr.Rokon-8'];
        mitems['Internal Medicine']=['Select a Doctor','Kajol','Kajol','Kajol','Kajol','Kajol','Kajol','Kajol','Kajol','Kajol','Kajol','Kajol','Kajol'];
        mitems['Lab Medicine']=['Select a Doctor','Asif','Asif','Asif'];
        mitems['Neurology']=['Select a Doctor','Rishad','Rishad','Rishad','Rishad','Rishad','Rishad','Rishad'];
        mitems['Neurosurgery']=['Select a Doctor','Sohana','Sohana','Sohana'];
        mitems['Orthopaedics']=['Select a Doctor','AR Rahman','AR Rahman','AR Rahman'];
        mitems['Gynaecology']=['Select a Doctor','Karim','Karim','Karim','Karim','Karim','Karim','Karim','Karim','Karim'];
        mitems['Ophthalmology']=['Select a Doctor','Sabbir','Sabbir','Sabbir'];
        mitems['Respiratory']=['Select a Doctor','Tamanna','Tamanna','Tamanna','Tamanna','Tamanna','Tamanna','Tamanna','Tamanna'];
        mitems['Urology']=['Select a Doctor','Jannat Srity','Jannat Srity','Jannat Srity'];
        d.options.length=0;
        cur=mitems[o.options[o.selectedIndex].value];
        if(!cur){return;}
        d.options.length=cur.length;
        for(var i=0;i<cur.length;i++)
        {
            d.options[i].text=cur[i];
            d.options[i].value=cur[i];
        }
    }

    function populateagain(o){
        d=document.getElementById('des');
        if(!d){return;}         
        var mi=new Array();
        mi['Select a Time']=['Select a Time'];
        mi['Danielle']=['sat:6pm-10pm','sun:8pm-10pm','mon:9am-2pm','wes:10am-11am'];
        mi['Dr.Danielle-1']=['ths:6pm-10pm','fri:8pm-10pm'];
        mi['Dr.Danielle-2']=['ths:6pm-10pm','fri:8pm-10pm','mon:5pm-8pm'];
        mi['Rokon']=['Rokon','Rokon','Rokon','Rokon','Rokon','Rokon','Rokon','Rokon','Rokon','Rokon'];
        mi['Kajol']=['Kajol','Kajol','Kajol','Kajol','Kajol','Kajol','Kajol','Kajol','Kajol','Kajol','Kajol','Kajol','Kajol'];
        mi['Asif']=['Asif','Asif','Asif','Asif'];
        mi['Rishad']=['Rishad','Rishad','Rishad','Rishad','Rishad','Rishad','Rishad','Rishad'];
        mi['Sohana']=['Sohana','Sohana','Sohana','Sohana'];
        mi['AR Rahman']=['AR Rahman','AR Rahman','AR Rahman','AR Rahman'];
        mi['Karim']=['Karim','Karim','Karim','Karim','Karim','Karim','Karim','Karim','Karim','Karim'];
        mi['Sabbir']=['Sabbir','Sabbir','Sabbir','Sabbir'];
        mi['Tamanna']=['Tamanna','Tamanna','Tamanna','Tamanna','Tamanna','Tamanna','Tamanna','Tamanna','Tamanna'];
        mi['Jannat Srity']=['Jannat Srity','Jannat Srity','Jannat Srity','Jannat Srity'];
        d.options.length=0;
        cur=mi[o.options[o.selectedIndex].value];
        if(!cur){return;}
        d.options.length=cur.length;
        for(var i=0;i<cur.length;i++)
        {
            d.options[i].text=cur[i];
            d.options[i].value=cur[i];
        }
    }
  
