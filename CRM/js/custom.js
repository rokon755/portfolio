// back to top ==========================================================================>
        jQuery( document ).ready(function(){
            if (jQuery('#back-to-top').length) {
                var scrollTrigger = 500, // px
                    backToTop = function () {
                        var scrollTop = jQuery(window).scrollTop();
                        if (scrollTop > scrollTrigger) {
                            jQuery('#back-to-top').addClass('show');
                        } else {
                            jQuery('#back-to-top').removeClass('show');
                        }
                    };
                backToTop();
                jQuery(window).on('scroll', function () {
                    backToTop();
                });
                jQuery('#back-to-top').on('click', function (e) {
                    e.preventDefault();
                    jQuery('html,body').animate({
                        scrollTop: 0
                    }, 1000);
                });
            }
        
        
        function animationHover(element, animation){
        element = jQuery(element);
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
        element = jQuery(element);
        element.click(
            function() {
                element.addClass('animated ' + animation);        
                //wait for animation to finish before removing classes
                window.setTimeout( function(){
                    element.removeClass('animated ' + animation);
                }, 1000);         
      
            });
        }
        });




jQuery( document ).ready(function(){
     jQuery(window).load(function(){
      jQuery(".top--main--menu nav").sticky({ topSpacing: 0 });
    });


     jQuery('.owl-carousel.testimonial-carousel').owlCarousel({
    nav: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      750: {
        items: 2,
      }
    }
  });
});






// Search
jQuery(document).ready(function () {
  wikiSearch.init();
});

var $form = jQuery('form'),
    $searchBtn = jQuery('#search-btn'),
    $search = jQuery('input[type=search]'),
    $results = jQuery('.results-wrapper');

var wikiSearch = {
  wikiApi: '',
  
  init: function () {
    this.buildApiBaseString();
    this.handleSearchButton();
    this.handleSearch();
  },
  
  buildApiBaseString: function () {
    var url = 'https://en.wikipedia.org/w/api.php';
    url += '?action=query';
    url += '&generator=search';
    url += '&gsrnamespace=0';
    url += '&gsrlimit=10';
    url += '&prop=pageimages|extracts';
    url += '&pilimit=max';
    url += '&exintro';
    url += '&explaintext';
    url += '&exsentences=1';
    url += '&exlimit=max';
    url += '&format=json';
    
    wikiSearch.wikiApi = url;
  },
  
  handleSearchButton: function () {
    $searchBtn.on('click', function (e) {
      e.preventDefault();

      if (! $form.hasClass('opened')) {
        wikiSearch.showForm();
      } else {
        wikiSearch.hideForm();
      }
    });
  },
  
  showForm: function () {
    $searchBtn.html("<i class='fa fa-times'></i>");
    $form.addClass('opened');
    $search.focus();
  },
  
  hideForm: function () {
    $searchBtn.html("<i class='fa fa-search'></i>");
    $form.removeClass('opened');
    $search.val(null);
    $results.empty();
  },
  
  // handleSearch: function () {
  //   $form.on('submit', function (e) {
  //     e.preventDefault();
      
  //     var searchText = $search.val();
  //     wikiSearch.getJSON(searchText);
  //   });
  // },
  
  // getJSON: function (search) {
  //   var url = wikiSearch.wikiApi;
  //   url += '&gsrsearch=' + encodeURIComponent(search);
  //   // fix No 'Access-Control-Allow-Origin' header is present
  //   url += '&callback=?';
    
  //   jQuery.ajax({
  //     type: 'GET',
  //     url: url,
  //     contentType: "application/json; charset=utf-8",
  //     dataType: "json"
  //   }).done(function (json) {
  //     wikiSearch.displayContent(json.query.pages);
  //   });
  // },
  
  displayContent: function (json) {
    $results.empty();
    
    var html = '',
        panelClass = 'panel-default';
    
    for (var key in json) {
      var url = 'https://en.wikipedia.org/?curid=';
      url += json[key].pageid;
      
      html += '<a href="' + url + '" target="_blank">';
      html += '<div class="panel ' + panelClass + '">';
      html += '<header class="panel-heading">';
      html += '<h3 class="panel-title">'
      html += json[key].title;
      html += '</h3>'
      html += '</header>';
      html += '<div class="panel-body">';
      html += json[key].extract;
      html += '</div>';
      html += '</div>';
      html += '</a>';
      
      panelClass = (panelClass == 'panel-default')
        ? 'panel-info'
        : 'panel-default';
    }
    
    $results.html(html);
  }
};



