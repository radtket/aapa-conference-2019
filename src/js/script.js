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
