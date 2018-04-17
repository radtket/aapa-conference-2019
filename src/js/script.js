$(window).load(() => {
  // Page loader

  $('body').imagesLoaded(() => {
    $('.page-loader div').fadeOut();
    $('.page-loader')
      .delay(200)
      .fadeOut('slow');
  });

  $(window).trigger('scroll');
  $(window).trigger('resize');
});

$(document).ready(() => {
  $(window).trigger('resize');
});

$(window).resize(() => {
  js_height_init();
});

function js_height_init() {
  (function($) {
    $('.js-height-full').height($(window).height());
    $('.js-height-parent').each(function() {
      $(this).height(
        $(this)
          .parent()
          .first()
          .height()
      );
    });
  })(jQuery);
}

function initMap() {
  const uluru = { lat: 39.743163, lng: -104.9971202 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map,
  });
}

function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
