//owl carousel for transactions
$(document).ready(function() {

  $("#owl-transactions").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

  });
    
    $('div.ui-content').find('section').first().css('border-top', 'none');

});

